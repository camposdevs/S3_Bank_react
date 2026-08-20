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
    price: 'Grátis',
    accent: '#d61f7a',
    cashback: '0,5%',
    highlight: 'Pra começar sem custo nenhum',
    features: ['Cartão físico em metal', 'PIX ilimitado', 'Rendimento 100% CDI', 'Cashback em compras selecionadas'],
  },
  {
    id: 'prata',
    name: 'Prata',
    img: cardPrata,
    price: 'Grátis',
    accent: '#c0c0c0',
    cashback: '1%',
    highlight: 'Mais cashback, mesma anuidade zero',
    features: ['Tudo do plano Bronze', 'Cashback em todas as compras', 'Saques grátis 2x ao mês', 'Prioridade no atendimento'],
  },
  {
    id: 'ouro',
    name: 'Ouro',
    img: cardOuro,
    price: 'R$ 24,90/mês',
    accent: '#cba15c',
    cashback: '2%',
    highlight: 'Para quem usa o cartão como principal',
    features: ['Tudo do plano Prata', 'Sala VIP em aeroportos', 'Seguro viagem incluso', 'Gerente dedicado no app'],
    featured: true,
  },
  {
    id: 'diamante',
    name: 'Diamante',
    img: cardDiamante,
    price: 'R$ 49,90/mês',
    accent: '#6f8bff',
    cashback: '3%',
    highlight: 'O topo da linha S3Bank',
    features: ['Tudo do plano Ouro', 'Concierge 24h', 'Acesso antecipado a produtos', 'Convites para eventos S3'],
  },
]

export default function CardTiers() {
  return (
    <section className="section tiers" id="cartoes">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Cartões</span>
          <h2>Quatro ligas de metal. Um só compromisso: sem anuidade escondida.</h2>
          <p>Todos os cartões são físicos, em metal escovado, com chip, aproximação e função crédito e débito na mesma conta.</p>
        </div>

        <div className="tiers__grid">
          {TIERS.map((t) => (
            <article
              key={t.id}
              className={`tiers__card ${t.featured ? 'is-featured' : ''}`}
              style={{ '--accent': t.accent }}
            >
              {t.featured && <span className="tiers__badge">Mais escolhido</span>}

              <div className="tiers__img">
                <img src={t.img} alt={`Cartão S3Bank ${t.name}`} loading="lazy" />
              </div>

              <h3>{t.name}</h3>
              <p className="tiers__highlight">{t.highlight}</p>

              <div className="tiers__price">
                <span>{t.price}</span>
                <small>cashback de {t.cashback}</small>
              </div>

              <ul className="tiers__list">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <a href="#abrir-conta" className={`btn ${t.featured ? 'btn-primary' : 'btn-ghost'} tiers__cta`}>
                Quero o {t.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
