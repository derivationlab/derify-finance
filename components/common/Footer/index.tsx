import { FC, useState, useEffect } from 'react'
import Router, { useRouter, withRouter } from 'next/router'
import Link from 'next/link'
const Footer: FC = () => {
  const router = useRouter()
  const { locale, locales } = router
  const languages: Record<string, string> = {
    'en-US': 'English',
    'zh-CN': '简体中文'
  }
  const [currLang, setCurrLang] = useState<string>(languages[locale] ?? 'English')

  useEffect(() => {
    setCurrLang(languages[locale] ?? 'English')
  }, [locale])
  return (
    <footer className="web-footer">
      <main>
        <div className="web-footer-copy">&copy; 2022 Derivation Lab</div>
        <div className="web-footer-lang">
          <span>{currLang}</span>
          <ul>
            {locales.map((code, index) => (
              <li key={index}>
                <Link href="/" locale={code}>
                  {languages[code]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </footer>
  )
}

export default Footer
