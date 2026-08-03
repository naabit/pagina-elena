import { FamilyIcon, FileTextIcon, FolderIcon, UserCheckIcon } from './Icons.jsx'

const services = [
  { Icon: FileTextIcon, title: 'Contratos y documentos', text: 'Redacción y revisión de contratos, acuerdos y documentos adaptados a tu situación.' },
  { Icon: FamilyIcon, title: 'Materia de alimentos', text: 'Orientación y preparación de antecedentes para comprender y ordenar los pasos previos.' },
  { Icon: FolderIcon, title: 'Trámites extrajudiciales', text: 'Gestión y acompañamiento en procedimientos administrativos y ante instituciones.' },
  { Icon: UserCheckIcon, title: 'Derivación a especialistas', text: 'Cuando un caso requiere litigio, te conecto con un abogado especialista de confianza.' },
]

export default function Services() {
  return (
    <section id="servicios" className="section section--tinted">
      <div className="container">
        <div data-reveal>
          <p className="eyebrow eyebrow--center">Servicios</p>
          <h2 className="section-title">¿Cómo puedo ayudarte?</h2>
        </div>
        <div className="service-grid">
          {services.map(({ Icon, title, text }, index) => (
            <article className="service-card" key={title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
              <span className="service-card__icon"><Icon /></span>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
