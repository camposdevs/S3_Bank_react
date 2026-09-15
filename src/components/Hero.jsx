import { useRef, useState } from 'react'
import cardBronze from '../assets/card-bronze.jpg'
import cardPrata from '../assets/card-prata.jpg'
import cardOuro from '../assets/card-ouro.jpg'
import cardDiamante from '../assets/card-diamante.jpg'
import './Hero.css'

const TIERS = [
  { id: 'bronze', label: 'Bronze', img: cardBronze, glow: '#CD7F32', rate: '100% do CDI' },
  { id: 'prata', label: 'Prata', img: cardPrata, glow: '#C0C0C8', rate: '115% do CDI' },
  { id: 'ouro', label: 'Ouro', img: cardOuro, glow: '#D4AF37', rate: '130% do CDI' },
  { id: 'diamante', label: 'Diamante', img: cardDiamante, glow: '#7B61FF', rate: '140% do CDI' },
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
          <span className="eyebrow">Conta digital gamificada · Rende até 140% do CDI</span>
          <h1>
            Seu dinheiro sobe
            <br />
            <span className="hero__gradient">de nível com você!</span>
          </h1>
          <p className="hero__lead">
            Comece no Bronze rendendo 100% do CDI e evolua até o Diamante, com
            até 140% do CDI, guardando dinheiro com constância. Seu cartão de
            débito muda de cor a cada nível — sem tarifa de manutenção, sem
            anuidade, sem letras miúdas.
          </p>

          <div className="hero__actions">
            <a href="#abrir-conta" className="btn btn-primary">Abrir minha conta</a>
            <a href="#cartoes" className="btn btn-ghost">Ver os níveis</a>
          </div>

          <div className="hero__stats">
            <div>
              <strong>0</strong>
              <span>tarifa de manutenção</span>
            </div>
            <div>
              <strong>140%</strong>
              <span>do CDI no nível Diamante</span>
            </div>
            <div>
              <strong>4</strong>
              <span>níveis pra evoluir seu rendimento</span>
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
              <img src={tier.img} alt={`Cartão S3 Bank ${tier.label}`} />
            </div>
          </div>

          <p className="hero__stage-rate">{tier.rate}</p>

          <div className="hero__tiers" role="tablist" aria-label="Escolha o nível">
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