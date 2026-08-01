import { useEffect, useState } from "react";
import logoUrl from "../../assets/images/logo-horizontal.png";
import { navigationItems } from "../data/site";
import { CloseIcon, MenuIcon } from "./Icons";
import WhatsAppLink from "./WhatsAppLink";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <a
          aria-label="Psicóloga Jucilene Dourado — voltar ao início"
          className="brand"
          href="#inicio"
          onClick={closeMenu}
        >
          <img
            alt="Jucilene Dourado — Psicóloga"
            className="brand-logo"
            height="171"
            src={logoUrl}
            width="351"
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="primary-nav"
          data-open={menuOpen}
          id="primary-navigation"
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="primary-nav-mobile-cta">
              <WhatsAppLink
                className="button button-primary"
                iconTone="dark"
              >
                Agendar pelo WhatsApp
              </WhatsAppLink>
            </li>
          </ul>
        </nav>

        <WhatsAppLink
          className="header-cta button button-primary"
          iconTone="dark"
        >
          Agendar atendimento
        </WhatsAppLink>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {menuOpen ? (
            <CloseIcon className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </button>
      </div>
    </header>
  );
}
