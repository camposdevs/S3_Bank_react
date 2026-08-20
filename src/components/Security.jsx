import './Security.css'

const ITEMS = [
  {
    title: 'Criptografia de ponta a ponta',
    text: 'Toda movimentação passa por camadas de criptografia equivalentes às usadas por bancos tradicionais.',
  },
  {
    title: 'Autenticação em duas etapas',
    text: 'Biometria e senha numérica protegem login, transferências e alterações de limite.',
  },
  {
    title: 'Bloqueio instantâneo',
    text: 'Perdeu o cartão? Bloqueie e gere outro virtual em segundos, direto do app.',
  },
  {
    title: 'Garantido pelo FGC',
    text: 'Seu dinheiro é protegido pelo Fundo Garantidor de Créditos, até o limite legal vigente.',
  },
]

export default function Security() {
  return (
    <section className="section security" id="seguranca">
      <div className="container security__row">
        <div className="section-head security__head">
          <span className="eyebrow">Segurança</span>
          <h2>Regulado, auditado e construído pra proteger o que é seu.</h2>
          <p>O S3Bank é uma instituição de pagamento autorizada a funcionar pelo Banco Central do Brasil.</p>
        </div>

        <div className="security__grid">
          {ITEMS.map((it) => (
            <div className="security__item" key={it.title}>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
