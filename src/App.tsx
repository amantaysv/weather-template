import { Language } from '@interfaces/Language'
import { IWeather } from '@interfaces/Weather.interface'
import { useEffect, useState } from 'react'

import { LanguageToggle, SearchForm, WeatherInfo } from '@components'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [weatherData, setWeatherData] = useState<IWeather | null>(null)

  const [lang, setLang] = useState<Language>('en')
  const [loading, setLoading] = useState(false)
  const [errorState, setErrorState] = useState(null)

  const getWeather = (city: string) => {
    setErrorState(null)
    setLoading(true)

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric&lang=${lang}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText)
        }
        return res
      })
      .then((res) => res.json())
      .then((data) => {
        const weatherData = data as IWeather
        setWeatherData(weatherData)
      })
      .catch((error) => setErrorState(error.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getWeather('london')
  }, [lang])

  const bgImages = {
    Empty: '',
    Clear: 'bg-clear',
    Clouds: 'bg-clouds',
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
      <div className='max-w-[600px] w-full border-red-500 border-solid border p-4 rounded-2xl backdrop-blur-sm bg-black bg-opacity-10'>
        <SearchForm lang={lang} getWeather={getWeather} errorState={errorState} />
        <LanguageToggle lang={lang} setLang={setLang} />
        <WeatherInfo
          weatherData={weatherData}
          lang={lang}
          loading={loading}
          errorState={errorState}
        />
      </div>
    </div>
  )
}

export default App
