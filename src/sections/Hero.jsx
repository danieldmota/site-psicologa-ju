import portraitUrl from "../../assets/images/foto-profissional.png";
import { ArrowIcon } from "../components/Icons";
import WhatsAppLink from "../components/WhatsAppLink";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero" id="inicio">
      <div className="hero-inner container">
        <div className="hero-copy">
          <p className="eyebrow">Psicóloga Jucilene B. Dourado</p>
          <h1 id="hero-title">
            A terapia é um espaço seguro para explorar seus sentimentos.
          </h1>
          <p className="hero-lead">
            CRP 14/07211-8 • Atendimento online para adultos e idosos, com
            consultório em Campo Grande/MS.
          </p>

          <div className="hero-actions">
            <WhatsAppLink className="button button-primary button-large">
              Agendar atendimento
            </WhatsAppLink>
            <a className="text-link" href="#sobre-mim">
              Conhecer meu trabalho
              <ArrowIcon className="button-arrow" />
            </a>
          </div>

          <ul aria-label="Informações de atendimento" className="hero-meta">
            <li>Escuta qualificada e humanizada</li>
            <li>Psicologia baseada em evidências</li>
          </ul>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            <img
              alt="Jucilene Dourado sentada em uma poltrona, segurando um livro sobre Terapia Cognitivo-Comportamental"
              className="portrait-image"
              decoding="async"
              fetchPriority="high"
              height="1184"
              src={portraitUrl}
              width="864"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
