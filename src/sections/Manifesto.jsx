export default function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="manifesto">
      <div className="manifesto-inner container">
        <p className="eyebrow eyebrow-light">Minha forma de trabalhar</p>
        <p className="manifesto-statement" id="manifesto-title">
          Um cuidado qualificado e humanizado, com ética e evidências
          científicas.
        </p>
        <svg
          aria-hidden="true"
          className="manifesto-line"
          fill="none"
          focusable="false"
          viewBox="0 0 520 150"
        >
          <path d="M4 112C71 24 135 18 192 74c42 41 61 73 122 44 72-35 102-122 202-87" />
          <path d="M48 138c91-41 121-25 174-2 64 27 112 4 154-39 42-44 82-57 137-42" />
        </svg>
      </div>
    </section>
  );
}
