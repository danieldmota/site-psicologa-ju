import { siteLinks } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div>
          <strong>Jucilene B. Dourado</strong>
          <span>Psicóloga Clínica • CRP 14/07211-8</span>
        </div>
        <p>
          © {new Date().getFullYear()} Jucilene B. Dourado. Todos os direitos
          reservados.
        </p>
        <a href={siteLinks.developer} rel="noreferrer" target="_blank">
          Desenvolvido por Daniel D. Mota
        </a>
      </div>
    </footer>
  );
}
