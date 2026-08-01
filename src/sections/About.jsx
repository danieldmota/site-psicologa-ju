import WhatsAppLink from "../components/WhatsAppLink";

export default function About() {
  return (
    <section aria-labelledby="about-title" className="about" id="sobre-mim">
      <div className="about-inner container">
        <div className="section-heading">
          <p className="eyebrow">Sobre mim</p>
          <h2 id="about-title">Seu bem-estar é a minha missão.</h2>
        </div>

        <div className="about-content">
          <div className="about-copy">
            <p className="lead-paragraph">
              Sou Jucilene Barbosa Dourado, psicóloga clínica, e atuo há 9 anos
              com desenvolvimento humano. Realizo atendimentos online para
              adultos e idosos.
            </p>
            <p>
              Sou graduada em Psicologia pela Unigran e trabalho com a abordagem
              Cognitivo-Comportamental (TCC). Tenho especialização em avaliação
              psicológica e capacitação em avaliação neuropsicológica para TDAH.
            </p>
            <p>
              Minha missão é oferecer um suporte qualificado e humanizado para
              pessoas que buscam atravessar dificuldades emocionais, sempre com
              ética e uma psicologia baseada em evidências científicas.
            </p>
            <WhatsAppLink
              className="text-link text-link-accent"
              iconTone="dark"
            >
              Conversar sobre o atendimento
            </WhatsAppLink>
          </div>

          <aside aria-label="Formação e atuação" className="credentials">
            <dl>
              <div>
                <dt>Abordagem</dt>
                <dd>Terapia Cognitivo-Comportamental</dd>
              </div>
              <div>
                <dt>Especialização</dt>
                <dd>Avaliação psicológica</dd>
              </div>
              <div>
                <dt>Capacitação</dt>
                <dd>Avaliação neuropsicológica para TDAH</dd>
              </div>
              <div>
                <dt>Público</dt>
                <dd>Adultos e idosos</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
