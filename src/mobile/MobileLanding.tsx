import { MOBILE_CONFIG } from "./mobile.config";

import { ArrowUpRight } from "lucide-react";
import { FaApple } from "react-icons/fa";

import "./MobileLanding.css";

export default function MobileLanding() {
  const { wallpaper, links } = MOBILE_CONFIG;

  return (
    <main
      className="mobile-landing"
      style={
        {
          "--mobile-wallpaper": `url("${wallpaper}")`,
        } as React.CSSProperties
      }
    >
      <div className="mobile-landing__overlay" />

      <div className="mobile-landing__content">
        {/* Header */}
        <header className="mobile-landing__header">
          <span
            className="mobile-landing__logo"
            aria-label="Visit personal website"
          >
            {MOBILE_CONFIG.initials}
            <span>.</span>
          </span>

          <span className="mobile-landing__label">PORTFOLIO</span>
        </header>

        {/* Main content */}
        <section className="mobile-landing__main">
          <div className="mobile-landing__icon">
            <FaApple size={32} strokeWidth={1.5} />
          </div>

          <p className="mobile-landing__eyebrow">
            {MOBILE_CONFIG.name}
            <span> / </span>
            {MOBILE_CONFIG.role}
          </p>

          <h1>{MOBILE_CONFIG.heading}</h1>

          <p className="mobile-landing__description">
            {MOBILE_CONFIG.description}
          </p>

          <div className="mobile-landing__contact">
            <div className="mobile-landing__contact-heading">
              <div>
                <h2>Let's connect.</h2>
                <p>{MOBILE_CONFIG.introduction}</p>
              </div>
            </div>

            <div className="mobile-landing__links">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className="mobile-landing__link"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    <span className="mobile-landing__link-icon">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>

                    <span className="mobile-landing__link-label">
                      {link.label}
                    </span>

                    <ArrowUpRight
                      className="mobile-landing__link-arrow"
                      size={15}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mobile-landing__footer">
          <span>
            © {new Date().getFullYear()} {MOBILE_CONFIG.name}
          </span>

          <span className="mobile-landing__footer-divider" />

          <span>Designed for desktop</span>
        </footer>
      </div>
    </main>
  );
}
