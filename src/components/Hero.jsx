import { useRef, useState } from 'react'
import cardBronze from '../assets/card-bronze.jpg'
import cardPrata from '../assets/card-prata.jpg'
import cardOuro from '../assets/card-ouro.jpg'
import cardDiamante from '../assets/card-diamante.jpg'
import './Hero.css'

const TIERS = [
  { id: 'bronze', label: 'Bronze', img: cardBronze, glow: '#d61f7a' },
  { id: 'prata', label: 'Prata', img: cardPrata, glow: '#c0c0c0' },
  { id: 'ouro', label: 'Ouro', img: cardOuro, glow: '#cba15c' },
  { id: 'diamante', label: 'Diamante', img: cardDiamante, glow: '#6f8bff' },
]

export default function Hero() {
  const [active, setActive] = useState('diamante')
  const stageRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const tier = TIERS.find((t) => t.id === active)

  function handleMove(e) {
    const el = stageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -14, y: px * 18 })
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section className="hero">
      <div className="container hero__row">
        <div className="hero__copy">
          <span className="eyebrow">Conta digital · Cartão de metal</span>
          <h1>
            O banco que se
            <br />
            <span className="hero__gradient">forja no seu ritmo.</span>
          </h1>
          <p className="hero__lead">
            Abra sua conta em minutos, escolha o cartão de metal que combina com
            você e acompanhe cada centavo em tempo real. Sem tarifa de manutenção,
            sem anuidade, sem letras miúdas.
          </p>

          <div className="hero__actions">
            <a href="#abrir-conta" className="btn btn-primary">Abrir minha conta</a>
            <a href="#cartoes" className="btn btn-ghost">Ver os cartões</a>
          </div>

          <div className="hero__stats">
            <div>
              <strong>0</strong>
              <span>tarifa de manutenção</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>digital, do cadastro ao cartão</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>suporte no app</span>
            </div>
          </div>
        </div>

        <div className="hero__stage-wrap">
          <div
            className="hero__stage"
            ref={stageRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ '--glow': tier.glow }}
          >
            <div className="hero__stage-glow" />
            <div
              className="hero__card"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <img src={tier.img} alt={`Cartão S3Bank ${tier.label}`} />
            </div>
          </div>

          <div className="hero__tiers" role="tablist" aria-label="Escolha o cartão">
            {TIERS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                className={`hero__tier ${active === t.id ? 'is-active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                <span className="hero__tier-dot" style={{ background: t.glow }} />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
