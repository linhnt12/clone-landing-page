import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Handle scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-500 h-[96px]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-[96px]">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-10" />
          </Link>

          <nav className="hidden lg:flex space-x-8 font-semibold">
            {[
              { id: "problem-container", label: "カオピーズのオフショア開発" },
              { id: "development-type", label: "開発体制は自由自在" },
              { id: "customer-voice", label: "お客様の声" },
              { id: "steps-of-implementation", label: "ご導入までの流れ" },
            ].map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleSmoothScroll(e, id)}
                className={`transition ${activeSection === id ? "text-blue-500" : "text-black-800"
                  }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex justify-end gap-4 items-center">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md 
              border border-blue-500 hover:bg-white hover:text-blue-500 transition"
            >
              お問い合わせ
            </a>

            <button
              className="lg:hidden text-white bg-blue-500 w-8 h-8 flex items-center justify-center text-[20px] cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* Mobile Slide Menu */}
          <div
            className={`
              fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg 
              transform transition-transform duration-300 ease-in-out z-[2007]
              ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="p-6">
              <Link to="/" className="flex items-center">
                <img src="/images/logo.png" alt="Logo" className="h-10" />
              </Link>
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-black-800"
                onClick={() => setMenuOpen(false)}
              >
                <i className="fa-solid fa-times text-xl"></i>
              </button>

              {/* Mobile Navigation Items */}
              <nav className="flex flex-col gap-6 pt-10">
                {[
                  { id: "problem-container", label: "カオピーズのオフショア開発" },
                  { id: "development-type", label: "開発体制は自由自在" },
                  { id: "customer-voice", label: "お客様の声" },
                  { id: "steps-of-implementation", label: "ご導入までの流れ" },
                ].map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                      handleSmoothScroll(e, id);
                      setMenuOpen(false);
                    }}
                    className={`text-black-800 font-bold ${activeSection === id ? "text-blue-500" : ""
                      }`}
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={(e) => {
                    handleSmoothScroll(e, 'contact');
                    setMenuOpen(false);
                  }}
                  className="px-6 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md 
                    border border-blue-500 hover:bg-white hover:text-blue-500 transition text-center w-fit"
                >
                  お問い合わせ
                </a>
              </nav>
            </div>
          </div>

          {/* Darkened Backdrop */}
          <div
            className={`
              fixed inset-0 bg-[#00000080] transition-opacity duration-300 z-[55]
              ${menuOpen ? 'visible' : 'invisible'}
            `}
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </header>
    </>
  );
}
