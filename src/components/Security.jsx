import './Security.css'

const ITEMS = [
  {
    title: 'Criptografia de ponta a ponta',
    text: 'Toda movimentação passa por camadas de criptografia equivalentes às usadas por bancos tradicionais.',
    icon: '🔒',
  },
  {
    title: 'Autenticação em duas etapas',
    text: 'Biometria e senha numérica protegem login, transferências e alterações de limite.',
    icon: '🛡️',
  },
  {
    title: 'Bloqueio instantâneo do cartão',
    text: 'Perdeu o cartão ou suspeita de uso indevido? Bloqueie e desbloqueie na hora, direto pelo app.',
    icon: '⚡',
  },
  {
    title: 'Garantido pelo FGC',
    text: 'Seu dinheiro é protegido pelo Fundo Garantidor de Créditos, até o limite legal vigente.',
    icon: '✓',
  },
]

export default function Security() {
  return (
    <section className="section security" id="seguranca">
      <div className="container security__row">
        <div className="section-head security__head">
          <span className="eyebrow">Segurança</span>
          <h2>Regulado, auditado e construído pra proteger o que é seu.</h2>
          <p>O S3 Bank é uma instituição de pagamento autorizada a funcionar pelo Banco Central do Brasil.</p>
        </div>

        <div className="security__grid">
          {ITEMS.map((it) => (
            <div className="security__item" key={it.title}>
              <div className="security__icon" aria-hidden="true">
                <span>{it.icon}</span>
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>

        <div className="security__badge">
          <span className="security__badge-dot" />
          Instituição de pagamento autorizada pelo Banco Central — S3 Bank
        </div>
      </div>
    </section>
  )
}