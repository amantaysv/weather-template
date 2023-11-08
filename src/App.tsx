import { useEffect, useState } from 'react'
import { CloudsIcon } from './components/icons/CloudsIcon'
import { IWeather } from './interfaces/Weather.interface'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [weatherData, setWeatherData] = useState<IWeather | null>(null)

  const [city, setCity] = useState('bishkek')

  const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  console.log('App ~ weatherData:', weatherData)

  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric`)
      .then((res) => {
        console.log('.then ~ res:', res)
        if (res.status !== 200) {
          throw new Error(res.statusText)
        }
        return res
      })
      .then((res) => res.json())
      .then((data) => {
        console.log('.then ~ data:', data)
        const weatherData = data as IWeather
        setWeatherData(weatherData)
      })
      .catch((error) => console.error(error))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getWeather()
  }

  useEffect(() => {
    getWeather()
  }, [])

  // const getBgImage = () => {
  //   if (weatherData?.weather[0].main === 'Clear') {
  //     return 'bg-clear'
  //   }
  //   if (weatherData?.weather[0].main === 'Clouds') {
  //     return 'bg-clouds'
  //   }
  //   if (weatherData?.weather[0].main === 'Mist') {
  //     return 'bg-mist'
  //   }

  //   return 'bg-clear'
  // }

  const bgImages = {
    Empty: '',
    Clear: 'bg-clear',
    Clouds: 'bg-clouds',
    Mist: 'bg-mist',
    Smoke: 'bg-smoke',
    Drizzle: 'bg-drizzle',
    Rain: 'bg-rain',
  }

  const icons = {
    Empty: '',
    Clear: 'bg-clear',
    Clouds: <CloudsIcon color='yellow' />,
    Mist: 'bg-mist',
    Smoke: 'bg-smoke',
    Drizzle: 'bg-drizzle',
    Rain: 'bg-rain',
  }

  return (
    <div
      className={`min-h-screen container mx-auto flex justify-center items-start pt-10 ${
        bgImages[weatherData?.weather[0].main || 'Empty']
      } bg-cover`}
    >
      <div className='max-w-[600px] w-full border-red-500 border-solid border p-4 rounded-2xl'>
        <form onSubmit={onSubmit} className='mb-4 flex gap-4'>
          <input
            type='text'
            onChange={cityHandler}
            className='h-10 flex-1 p-2 border border-blue-400 border-solid rounded-xl outline-none focus:border-blue-600'
            placeholder='Search city...'
          />
          <button
            type='submit'
            className='h-10 p-2 border border-blue-400 border-solid rounded-xl outline-none focus:border-blue-600'
          >
            Submit
          </button>
        </form>
        {weatherData ? (
          <div>
            <h1>City: {weatherData?.name}</h1>
            <p>Temp: {Math.round(weatherData?.main.temp)}°C</p>
            <p>time: {new Date(weatherData.dt * 1000).toLocaleString()}</p>
            {icons[weatherData?.weather[0].main || 'Empty']}
          </div>
        ) : (
          <div>no weather data...</div>
        )}
      </div>
    </div>
  )
}

export default App
