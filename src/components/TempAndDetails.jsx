import { FaThermometerEmpty } from "react-icons/fa"
import { BiSolidDropletHalf } from "react-icons/bi"
import { FiWind } from "react-icons/fi"
import { GiSunrise, GiSunset } from "react-icons/gi"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"

const TempAndDetails = ({weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like
}, units}) => {

    const verticalDetails = [
        {
            Icon: FaThermometerEmpty,
            title: "Real feel",
            value: `${feels_like.toFixed()}`
        },
        {
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`
        },
        {
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()} ${units == 'imperial' ? 'mph' : 'km/h'}`
        },
    ]

    const horizontalDetails = [
        {
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise
        },
        {
            Icon: GiSunset,
            title: "Sunset",
            value: sunset
        },
        {
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max.toFixed()}°`
        },
        {
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min.toFixed()}°`
        },
    ]

    return (
        <div>
            <div className="flex items-center justify-center md:py-6 text-xl text-cyan-300">
                <p>{details}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between md:py-6">
                <img src={icon} alt="weather icon" className="w-40 md:w-20" />
                <p className="md:text-5xl text-3xl mb-10 md:mb-0">{temp.toFixed()}°</p>
                <div className="flex flex-col space-y-3 items-start mb-10 md:mb-0">
                    {verticalDetails.map(({ Icon, title, value }, index) => (
                        <div key={index} className="flex font-light text-sm items-center justify-center">
                            <Icon size={18} className="mr-1" />
                            {title}:<span className="font-medium ml-1">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center flex-wrap md:gap-8 gap-2 text-sm pb-6 justify-center">
                {horizontalDetails.map(({ Icon, title, value }, index) => (
                    <div key={index} className="flex items-center">
                        <Icon size={30} />
                        <p className="font-light ml-1">{title}:<span className="font-medium ml-1">{value}</span></p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TempAndDetails