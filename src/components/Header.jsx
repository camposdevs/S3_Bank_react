import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import './Header.css'

const LINKS = [
  { label: 'Conta', href: '#beneficios' },
  { label: 'Cartões', href: '#cartoes' },
  { label: 'App', href: '#app' },
  { label: 'Segurança', href: '#seguranca' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__row">
        <a href="#" className="header__brand" aria-label="S3 Bank">
          <img src={logo} alt="S3 Bank" />
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#" className="header__login">Entrar</a>
          <a href="#abrir-conta" className="btn btn-primary header__cta">Abrir minha conta</a>
        </div>

        <button
          className={`header__burger ${open ? 'is-open' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`header__mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#" onClick={() => setOpen(false)}>Entrar</a>
        <a href="#abrir-conta" className="btn btn-primary" onClick={() => setOpen(false)}>
          Abrir minha conta
        </a>
      </div>
    </header>
  )
}