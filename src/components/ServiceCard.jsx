import { useId, useState } from "react";
import { ChevronIcon } from "./Icons";

export default function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();

  return (
    <article className="service-card" data-expanded={expanded}>
      <div aria-hidden="true" className="service-visual">
        <img
          alt=""
          decoding="async"
          height={service.imageHeight}
          loading="lazy"
          src={service.image}
          width={service.imageWidth}
        />
      </div>
      <div className="service-content">
        <span aria-hidden="true" className="service-number">
          {service.number}
        </span>
        <h4>{service.title}</h4>
        <p className="service-summary">{service.summary}</p>
        <div
          aria-hidden={!expanded}
          className="service-details"
          id={detailsId}
        >
          <div>
            <p>{service.details}</p>
          </div>
        </div>
        <button
          aria-controls={detailsId}
          aria-expanded={expanded}
          aria-label={`${expanded ? "Ocultar" : "Ver"} detalhes de ${service.title}`}
          className="service-toggle"
          onClick={() => setExpanded((isExpanded) => !isExpanded)}
          type="button"
        >
          <span>{expanded ? "Ocultar detalhes" : "Ver detalhes"}</span>
          <ChevronIcon className="chevron-icon" />
        </button>
      </div>
    </article>
  );
}
