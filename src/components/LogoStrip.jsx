import './LogoStrip.css'

const ITEMS = [
  'Regulado pelo Banco Central',
  'FGC até R$ 250 mil',
  'Mastercard World',
  'PIX ilimitado',
  'Open Finance',
]

export default function LogoStrip() {
  return (
    <div className="logostrip">
      <div className="container logostrip__row">
        {ITEMS.map((item) => (
          <span key={item} className="logostrip__item">
            <span className="logostrip__dot" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}