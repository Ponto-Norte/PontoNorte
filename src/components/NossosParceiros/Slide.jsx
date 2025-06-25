import '../NossosParceiros/Slide.css';

const logos = [
  { src: '/public/todos/lume.parceiro.png', alt: 'Lume' },
  { src: '/public/todos/acaica.parceiro.png', alt: 'Acaica' },
  { src: '/public/todos/gatorion.parceiro.png', alt: 'Gatorion' },
  { src: '/public/todos/polibee.parceiro.png', alt: 'Polibee' },
  { src: '/public/todos/rivalix.parceiro.png', alt: 'Rivalix' },
  // duplicar para looping suave
  { src: '/public/todos/lume.parceiro.png', alt: 'Lume' },
  { src: '/public/todos/acaica.parceiro.png', alt: 'Acaica' },
  { src: '/public/todos/gatorion.parceiro.png', alt: 'Gatorion' },
  { src: '/public/todos/polibee.parceiro.png', alt: 'Polibee' },
  { src: '/public/todos/rivalix.parceiro.png', alt: 'Rivalix' },
];

export default function LogoCarousel() {
  return (
    <div className="carousel-container">
      <div className="pnLogoParceirosDados">
        <h2 className="pnTituloParceiros">Nossos Parceiros</h2>
        <p>Os melhores produtos para os melhores clientes</p>
      </div>

      <ul className="carousel-track">
        {logos.map((logo, index) => (
          <li className="carousel-item" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
