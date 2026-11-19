"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "/#top", section: "top" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "Projects", href: "/#work", section: "work" },
];

type Theme = "light" | "dark";

function getSavedTheme(): Theme | null {
  try {
    const savedTheme = window.localStorage.getItem("saiteja-theme");
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : null;
  } catch (error) {
    console.error("Could not read the saved theme preference.", error);
    return null;
  }
}

function saveTheme(theme: Theme) {
  try {
    window.localStorage.setItem("saiteja-theme", theme);
  } catch (error) {
    console.error("Could not save the theme preference.", error);
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = getSavedTheme();

    const applyTheme = (nextTheme: Theme) => {
      root.dataset.theme = nextTheme;
      setTheme(nextTheme);
    };

    applyTheme(storedTheme ?? "light");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    saveTheme(nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3.7" />
          <path d="M12 2.5v2M12 19.5v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2.5 12h2m15 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.2 15.3A8.6 8.6 0 0 1 8.7 3.8 8.7 8.7 0 1 0 20.2 15.3Z" />
        </svg>
      )}
    </button>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    let frame = 0;
    const updateActiveSection = () => {
      const activationLine =
        (headerRef.current?.offsetHeight ?? 0) +
        Math.min(window.innerHeight * 0.25, 220);
      const sections = [...navigation.map(({ section }) => section), "contact"]
        .map((sectionId) => document.getElementById(sectionId))
        .filter((section): section is HTMLElement => section !== null);
      const currentSections = sections.filter(
        (section) => section.getBoundingClientRect().top <= activationLine,
      );
      const currentSection = currentSections[currentSections.length - 1];

      setActiveSection(currentSection?.id ?? "top");
    };
    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    firstLinkRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    if (menuOpen) {
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header
      className="site-header"
      ref={headerRef}
      data-menu-open={menuOpen}
    >
      <div className="header-inner">
        <Link
          className="header-brand"
          href="/"
          aria-label="Sai Teja Sagari home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/brand-kit/svg/logo-horizontal-white.svg"
            alt="Sai Teja Sagari"
            width={206}
            height={61}
          />
        </Link>

        <div className="header-controls" id="primary-navigation">
          <nav
            className="site-nav"
            aria-label="Main navigation"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.section}
                href={pathname === "/" ? `#${item.section}` : item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                aria-current={
                  pathname === "/" && activeSection === item.section
                    ? "location"
                    : undefined
                }
                onClick={() => {
                  setActiveSection(item.section);
                  closeMenu();
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <Link
              className="contact-cta"
              href={pathname === "/" ? "#contact" : "/#contact"}
              onClick={closeMenu}
            >
              Get in Touch
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4 12 12 4M5 4h7v7" />
              </svg>
            </Link>
          </div>
        </div>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
