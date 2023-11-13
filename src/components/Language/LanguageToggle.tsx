import { Language } from '../../interfaces/Language'

interface LanguageToggleProps {
  lang: Language
  setLang: (lang: Language) => void
}

export const LanguageToggle = ({ lang, setLang }: LanguageToggleProps) => {
  return (
    <div>
      <button
        className={`${lang === 'en' ? '' : 'opacity-50'} uppercase`}
        onClick={() => setLang('en')}
      >
        en
      </button>{' '}
      |{' '}
      <button
        className={`${lang === 'ru' ? '' : 'opacity-50'} uppercase`}
        onClick={() => setLang('ru')}
      >
        ru
      </button>
    </div>
  )
}
