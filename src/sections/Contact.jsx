import { ArrowIcon, InstagramIcon, MapPinIcon, PhoneIcon } from "../components/Icons";
import WhatsAppLink from "../components/WhatsAppLink";
import { siteLinks } from "../data/site";

export default function Contact() {
  return (
    <section aria-labelledby="contact-title" className="contact" id="contato">
      <div className="contact-inner container">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light">Contato</p>
          <h2 id="contact-title">Quando fizer sentido, vamos conversar.</h2>
          <p className="contact-lead">
            Para agendar ou tirar dúvidas sobre os atendimentos, fale comigo
            pelo WhatsApp.
          </p>

          <WhatsAppLink
            className="button button-light button-large"
            iconTone="dark"
          >
            Iniciar conversa
          </WhatsAppLink>

          <address className="contact-list">
            <a href={siteLinks.map} rel="noreferrer" target="_blank">
              <MapPinIcon className="contact-icon" />
              <span>
                <small>Consultório</small>
                R. Pacavira, 7 — Vila Moreninha II
                <br />
                Campo Grande/MS — 79065-082
              </span>
            </a>
            <a href={siteLinks.phone}>
              <PhoneIcon className="contact-icon" />
              <span>
                <small>Telefone</small>
                (67) 99228-3200
              </span>
            </a>
            <a href={siteLinks.instagram} rel="noreferrer" target="_blank">
              <InstagramIcon className="contact-icon" />
              <span>
                <small>Instagram</small>
                @psico.jucilene
              </span>
            </a>
          </address>
        </div>

        <div className="map-frame">
          <iframe
            allowFullScreen
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={siteLinks.mapEmbed}
            title="Localização do consultório da psicóloga Jucilene Dourado"
            width="600"
          />
          <a href={siteLinks.map} rel="noreferrer" target="_blank">
            Abrir rota no Google Maps
            <ArrowIcon className="button-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
