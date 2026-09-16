import logo from '../assets/logo.png'
import './Footer.css'

const COLUMNS = [
  {
    title: 'Produto',
    links: ['Conta digital', 'Cartão digital', 'Guardar Dinheiro', 'Pix'],
  },
  {
    title: 'Empresa',
    links: ['Sobre o S3 Bank', 'Carreiras', 'Imprensa', 'Blog'],
  },
  {
    title: 'Ajuda',
    links: ['Central de ajuda', 'Fale conosco', 'Segurança', 'Status do sistema'],
  },
  {
    title: 'Legal',
    links: ['Termos de uso', 'Privacidade', 'Ouvidoria', 'Tarifas'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={logo} alt="S3 Bank" />
          <p>
            S3 Bank Instituição de Pagamento S.A. — CNPJ 00.000.000/0001-00.
            Autorizada a funcionar pelo Banco Central do Brasil.
          </p>
        </div>

        <div className="footer__columns">
          {COLUMNS.map((c) => (
            <div key={c.title} className="footer__col">
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} S3 Bank. Todos os direitos reservados.</span>
        <span>Ouvidoria: 0800 000 0000</span>
      </div>
    </footer>
  )
}