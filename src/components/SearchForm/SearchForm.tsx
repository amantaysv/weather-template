import { useState } from 'react'
import translates from '../../assets/translates/translates.json'
import { Language } from '../../interfaces/Language'

interface SearchFormProps {
  getWeather: (city: string) => void
  lang: Language
  errorState: null | string
}

export const SearchForm = ({ getWeather, lang, errorState }: SearchFormProps) => {
  const [city, setCity] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getWeather(city)
    setCity('')
  }

  const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  return (
    <form onSubmit={onSubmit} className='mb-4 flex gap-4'>
      <input
        type='text'
        onChange={cityHandler}
        value={city}
        className={`h-10 flex-1 p-2 border ${
          errorState
            ? 'border-red-500 focus:border-red-700'
            : 'border-blue-400 focus:border-blue-600'
        }  border-solid rounded-xl outline-none`}
        placeholder={translates[lang].placeholder}
      />
      <button
        type='submit'
        className={`h-10 p-2 border  border-solid rounded-xl outline-none  ${
          errorState
            ? 'animate-error border-red-500 focus:border-red-700 text-red-900'
            : 'border-blue-400 focus:border-blue-600'
        }`}
      >
        {translates[lang].submitBtn}
      </button>
    </form>
  )
}
