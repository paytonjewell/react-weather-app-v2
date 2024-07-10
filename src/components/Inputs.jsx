import { BiSearch, BiCurrentLocation } from "react-icons/bi"
import { useEffect, useState } from "react";

const Inputs = ({ setQuery, setUnits, query }) => {
    const [city, setCity] = useState("");

    useEffect(() => {
        setCity("");
    }, [query])

    const handleSearchClick = () => {
        if (city.length) setQuery({ q: city });
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords
                setQuery({ lat: latitude, lon: longitude })
                setCity("");
            })
        }
    }

    return (
        <div className="flex flex-wrap flex-row justify-center items-center my-6 space-y-4 md:space-y-0">
            <div className="flex md:w-3/4 items-center justify-center space-x-4">
                <input className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none rounded-md placeholder:lowercase" type="text" name="city" id="city" placeholder="Search by city..." value={city} onChange={e => setCity(e.target.value)} />
                <BiSearch size={30} className="cursor-pointer transition ease-out hover:scale-125" onClick={handleSearchClick} />
                <BiCurrentLocation size={30} className="cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick} />
            </div>
            <div className="flex md:w-1/4 items-center justify-center">
                <button onClick={() => setUnits('metric')} className="text-2xl font-medium transition ease-out hover:scale-125">°C</button>
                <p className="text-2xl font-medium mx-1">|</p>
                <button onClick={() => setUnits('imperial')} className="text-2xl font-medium transition ease-out hover:scale-125">°F</button>
            </div>
        </div>
    )
}

export default Inputs