import React, { useState } from 'react'

export default function Weather() {
  const [cityName,setCityName]=useState('Jaipur')
  const [weather, setWeather]=useState({})

  const handleChange = (e)=>{
    setCityName(e.target.value)
  }

  const handleSearch =()=>{
    const apiKey ="8b436f1ac8fdb7846d53c3ba526324f0"
     
  if(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then((response)=>{
      return response.json()
    })
    .then ((data)=>{
      setWeather(data)
      console.log(data)
      console.log(weather)
    }) 
    .catch((error)=>{
    console.log("error occured",error)
    })
  }
  }


  return (
    
    <>
    <div className='bg-image bg-cover bg-no-repeat h-screen flex justify-center items-center'>
    <div className='w-3/5 h-4/5 bg-indigo-200 rounded-lg flex bg-opacity-40 relative'>
      {/* Left side */}
    <div className='bg-left bg-cover w-1/2 h-full'>
      <p className='flex justify-end font-bold text-4xl mr-2 mt-2 '>
        {weather.name && weather.name},{weather.sys && weather.sys.country}
      </p>
      <div className='flex justify-between items-end w-1/2 absolute bottom-0 mb-2 '>
        <div className='ms-2'>
          <p className='text-white font-bold text-3xl '>{weather.coord && weather.coord.lat}</p>
          <p className='text-white font-bold text-3xl'>{weather.coord && weather.coord.lon}</p>
        </div>
        <p className='text-white font-bold text-3xl'>{weather.main && weather.main.temp}</p>
      </div>
    </div>
    {/* Right side */}
    <div className='w-1/2 mt-20 ' >
      <div className='mt-11'>
        <p>
          <input type='text' placeholder='Search Weather' className="w-3/4 bg-transparent p-4 text-2xl"
          value = {cityName} 
          onChange={handleChange} />
          <button className='font-semibold text-xl cursor-pointer w-1/4'onClick={handleSearch}><i class="bi bi-search"></i></button>
        </p>
        
      </div>
      <div className='text-white font-bold'>
        <p className='text-center'>
        {weather.name && weather.name},{weather.sys && weather.sys.country}
        </p>
        <p className='text-center'>{weather.Weather && weather.weather.main}</p>
        <div className='mt-6'>
          <div className='flex text-white justify-between items-end mt-8 px-10'>
          <p>Temp</p>
          <p>{weather.main && weather.main.temp}</p>
          </div>
          <hr className='mt-3 mx-5'/>
          <div className='flex text-white justify-between items-end mt-8 px-10'>
          <p>Visibility</p>
          <p>{weather.visibility && weather.visibility/1000}km</p>
          </div>
          <hr className='mt-3 mx-5'/>
          <div className='flex text-white justify-between items-end mt-8 px-10'>
          <p>Wind Speed</p>
          <p>{weather.wind && weather.wind.speed}</p>
          </div>
          <hr className='mt-3 mx-5'/>
        </div>
      </div>
    </div>
    </div>
  
    </div>
    
    </>

  )
}
