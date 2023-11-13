import translates from '@assets/translates/translates.json'
import { SpinIcon } from '@icons'

import { Language } from '@interfaces/Language'
import { IWeather } from '@interfaces/Weather.interface'

interface WeatherInfoProps {
  weatherData: IWeather | null
  lang: Language
  loading: boolean
  errorState: null | string
}

export const WeatherInfo = ({ weatherData, lang, loading, errorState }: WeatherInfoProps) => {
  if (loading)
    return (
      <div>
        <SpinIcon />
      </div>
    )

  if (errorState) return <div className='text-red-500'>{errorState}</div>

  if (!weatherData) return <div>no weather data</div>

  return (
    <div>
      <ul>
        <li className='flex justify-between items-center'>
          <p>{translates[lang].city}: </p>
          <p>{weatherData.name}</p>
        </li>
        <li className='flex justify-between items-center'>
          <p>{translates[lang].temp}: </p>
          <p>{Math.round(weatherData.main.temp)}°C</p>
        </li>
        <li className='flex justify-between items-center'>
          <p>{translates[lang].windSpeed}: </p>
          <p>
            {Math.round(weatherData.wind.speed)}
            {translates[lang].ms}
          </p>
        </li>
      </ul>
    </div>
  )
}
