import WhatsAppLink from "../components/WhatsAppLink";
import ServiceCard from "../components/ServiceCard";
import { serviceGroups } from "../data/services";

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="services" id="servicos">
      <div className="container">
        <div className="services-intro">
          <div className="section-heading">
            <p className="eyebrow">Atendimentos</p>
            <h2 id="services-title">Serviços e avaliações psicológicas.</h2>
          </div>
          <p>
            Cada demanda pede uma forma de cuidado. Conheça os atendimentos e
            avaliações disponíveis para encontrar o caminho mais adequado ao
            que você precisa agora.
          </p>
        </div>

        <div className="service-groups">
          {serviceGroups.map((group) => (
            <section
              aria-labelledby={`${group.id}-title`}
              className="service-group"
              key={group.id}
            >
              <header className="service-group-header">
                <p className="eyebrow">{group.eyebrow}</p>
                <h3 id={`${group.id}-title`}>{group.title}</h3>
                <p>{group.description}</p>
              </header>
              <div
                className={`service-list service-list-${group.services.length}`}
              >
                {group.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="services-cta">
          <p>Não sabe qual atendimento faz mais sentido para você?</p>
          <WhatsAppLink className="button button-secondary" iconTone="dark">
            Tirar uma dúvida pelo WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
