import React from 'react'

const Forecast = ({ title, data }) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className="font-medium uppercase">{title}</p>
            </div>
            <hr className="my-1" />

            <div className="flex gap-8 md:gap-0 pb-4 md:pb-0 items-center justify-between overflow-auto">
                {data.map((d, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <p className='font-light text-sm'>{d.title}</p>
                        <img src={d.icon} alt="weather icon" className="w-12 my-1" />
                        <p className="font-medium">{d.temp}°</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Forecast