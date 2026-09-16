import './Benefits.css'

const BENEFITS = [
  {
    n: '01',
    title: 'Rendimento que evolui com você',
    text: 'Comece rendendo 100% do CDI e suba até 140% guardando dinheiro com constância — sem mover um centavo pra outro lugar.',
  },
  {
    n: '02',
    title: 'PIX sem limite e sem custo',
    text: 'Transferências ilimitadas, 24 horas por dia, com confirmação instantânea direto no app.',
  },
  {
    n: '03',
    title: 'Guardar Dinheiro',
    text: 'Crie caixinhas com metas próprias e acompanhe o progresso — cada aporte também te aproxima do próximo nível.',
  },
  {
    n: '04',
    title: 'Cartão digital que muda com seu nível',
    text: 'Seu cartão de débito troca de cor automaticamente conforme você evolui do Bronze ao Diamante.',
  },
]

export default function Benefits() {
  return (
    <section className="section benefits" id="beneficios">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Por que o S3 Bank</span>
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