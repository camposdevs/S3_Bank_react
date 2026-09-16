import cardBronze from '../assets/card-bronze.jpg'
import cardPrata from '../assets/card-prata.jpg'
import cardOuro from '../assets/card-ouro.jpg'
import cardDiamante from '../assets/card-diamante.jpg'
import './CardTiers.css'

const TIERS = [
  {
    id: 'bronze',
    name: 'Bronze',
    img: cardBronze,
    rate: '100% do CDI',
    accent: '#CD7F32',
    highlight: 'Seu ponto de partida — já rendendo o CDI inteiro',
    features: ['Cartão de débito digital', 'PIX ilimitado', 'Rendimento 100% do CDI', 'Sem anuidade, sem mensalidade'],
  },
  {
    id: 'prata',
    name: 'Prata',
    img: cardPrata,
    rate: '115% do CDI',
    accent: '#C0C0C8',
    highlight: 'Guarde com constância e destrave mais rendimento',
    features: ['Tudo do nível Bronze', 'Rendimento 115% do CDI', 'Cartão troca de cor pra prata', 'Continua sem nenhuma taxa'],
  },
  {
    id: 'ouro',
    name: 'Ouro',
    img: cardOuro,
    rate: '130% do CDI',
    accent: '#D4AF37',
    highlight: 'Pra quem já fez do hábito de guardar uma rotina',
    features: ['Tudo do nível Prata', 'Rendimento 130% do CDI', 'Cartão em acabamento dourado', 'Sem anuidade, sem letras miúdas'],
    featured: true,
  },
  {
    id: 'diamante',
    name: 'Diamante',
    img: cardDiamante,
    rate: '140% do CDI',
    accent: '#7B61FF',
    highlight: 'O maior rendimento da linha S3 Bank',
    features: ['Tudo do nível Ouro', 'Rendimento 140% do CDI', 'Cartão em acabamento Diamante', 'Sem anuidade, sem mensalidade'],
  },
]

export default function CardTiers() {
  return (
    <section className="section tiers" id="cartoes">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Níveis</span>
          <h2>Quatro níveis de rendimento. Nenhuma mensalidade em nenhum deles.</h2>
          <p>
            Você não escolhe nem paga por um nível — você evolui guardando
            dinheiro com constância. Cada nível sobe seu rendimento sobre o
            CDI e muda a cor do seu cartão de débito digital.
          </p>
        </div>

        <div className="tiers__grid">
          {TIERS.map((t) => (
            <article
              key={t.id}
              className={`tiers__card ${t.featured ? 'is-featured' : ''}`}
              style={{ '--accent': t.accent }}
            >
              {t.featured && <span className="tiers__badge">Nível mais alcançado</span>}

              <div className="tiers__img">
                <img src={t.img} alt={`Cartão S3 Bank ${t.name}`} loading="lazy" />
              </div>

              <h3>{t.name}</h3>
              <p className="tiers__highlight">{t.highlight}</p>

              <div className="tiers__price">
                <span>{t.rate}</span>
                <small>sem mensalidade</small>
              </div>

              <ul className="tiers__list">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <a href="#abrir-conta" className={`btn ${t.featured ? 'btn-primary' : 'btn-ghost'} tiers__cta`}>
                Abrir minha conta
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}