import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}


const App = () => {
  const [query, setQuery] = useState({q: "Weyauwega"});
  const [units, setUnits] = useState('imperial');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : 'current location'
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);
    await getFormattedWeatherData({...query, units}).then(data => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`)
      setWeather(data)
    });
  }

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-500 to-blue-700'
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-500 to-blue-700'
    return 'from-yellow-600 to-orange-700'
  }

  return (
    <div className={`mx-auto md:my-10 md:rounded-lg md:w-10/12 pt-5 pb-12 px-14 lg:px-56 shadow-2xl bg-gradient-to-br relative ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} query={query} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forecast title='3 hour step forecast' data={weather.hourly} />
          <Forecast title='daily forecast' data={weather.daily} />
        </>
      )}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" position={"bottom-center"} />
      <p className="absolute bottom-0 right-0 left-0 font-light text-white/70 text-center pb-2">Made with &hearts; by Payton Pierce &copy; 2024</p>
    </div>
  )
}

export default App