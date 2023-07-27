import { FC, useState, useEffect } from 'react'
import Router, { useRouter, withRouter } from 'next/router'
import classNames from 'classnames'
import Link from 'next/link'
const Footer: FC = () => {
  const router = useRouter()
  const { locale, locales = [] } = router
  const [show, setShow] = useState<boolean>(false)
  const [currLang, setCurrLang] = useState<string>('English')

  const languages: Record<string, string> = {
    'en': 'English',
    'zh-CN': '简体中文'
  }
  useEffect(() => {
    // @ts-ignore
    setCurrLang(languages[locale] ?? 'English')
  }, [locale])
  return (
    <footer className="web-footer">
      <main>
        <div className="web-footer-copy">&copy; 2022 Derivation Lab</div>
        {/*<div className={classNames('web-footer-lang', { show })}>*/}
        {/*  <span onClick={() => setShow(!show)}>{currLang}</span>*/}
        {/*  <ul>*/}
        {/*    {locales.map((code, index) => (*/}
        {/*      <li key={index} onClick={() => setShow(false)}>*/}
        {/*        <Link href={`/${code}`} locale={code}>*/}
        {/*          {languages[code]}*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </main>
    </footer>
  )
}

export default Footer
