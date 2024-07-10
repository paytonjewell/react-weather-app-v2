import { useEffect, useState } from "react";

const TopButtons = ({setQuery}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 768;
    const cities = isMobile ? ["London", "Sydney", "Tokyo"] : ["London", "Sydney", "Tokyo", "Paris", "Toronto"];

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    return (
        <div className="flex items-center justify-around overflow-auto">
            {cities.map((city, index) => (
                <button key={index} className="text-md-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in" onClick={() => setQuery({q: city})}>{city}</button>
            ))}

        </div>
    )
}

export default TopButtons