import './Benefits.css'

const BENEFITS = [
  {
    n: '01',
    title: 'Rendimento automático',
    text: 'Todo o saldo da sua conta rende 100% do CDI, todos os dias, sem precisar mover um centavo.',
  },
  {
    n: '02',
    title: 'PIX sem limite e sem custo',
    text: 'Transferências ilimitadas, 24 horas por dia, com confirmação instantânea direto no app.',
  },
  {
    n: '03',
    title: 'Cartão físico em metal',
    text: 'Escolha entre Bronze, Prata, Ouro ou Diamante. Peso, acabamento e função por conta e ordem.',
  },
  {
    n: '04',
    title: 'Cashback em compras',
    text: 'Parte do que você gasta com o cartão volta pra sua conta automaticamente, sem cadastro extra.',
  },
]

export default function Benefits() {
  return (
    <section className="section benefits" id="beneficios">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Por que o S3Bank</span>
          <h2>Feito pra quem quer ver o dinheiro trabalhar, não sumir em tarifa.</h2>
        </div>

        <div className="benefits__grid">
          {BENEFITS.map((b) => (
            <article className="benefits__card" key={b.n}>
              <span className="benefits__n">{b.n}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
