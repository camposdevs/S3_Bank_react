import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="section cta" id="abrir-conta">
      <div className="container cta__box">
        <h2>Sua conta S3Bank fica pronta antes do seu café esfriar.</h2>
        <p>Cadastro 100% pelo celular, aprovação em minutos.</p>
        <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
          <input type="tel" placeholder="Seu número de celular" aria-label="Número de celular" required />
          <button type="submit" className="btn btn-primary">Quero abrir minha conta</button>
        </form>
      </div>
    </section>
  )
}
