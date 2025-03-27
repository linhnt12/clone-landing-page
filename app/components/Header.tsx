import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import SquareButton from "./SquareButton";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-[96px]">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-[96px]">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
        </Link>

        <nav className="hidden md:flex space-x-8 font-semibold">
          {[
            { id: "services", label: "カオピースのオプシア開発" },
            { id: "development-type", label: "開発体制は自由自在" },
            { id: "testimonials", label: "お客様の声" },
            { id: "steps-of-implementation", label: "ご導入までの流れ" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition ${activeSection === id ? "text-blue-500" : "text-gray-800"
                }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <SquareButton href="#contact" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500 transition">
          お問い合わせ
        </SquareButton>
      </div>
    </header>
  );
}
