// Index.tsx

import { useEffect, useState, useCallback } from "react";
import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/section/Header";
import Footer from "~/components/section/Footer";
import Contact from "~/components/section/Contact";
import DevelopmentType from "~/components/section/DevelopmentType";
import Steps from "~/components/section/Steps";
import Testimonials from "~/components/section/Testimonial";
import OffshoreService from "~/components/section/OffshoreService";

export const meta: MetaFunction = () => {
  return [
    { title: "ベトナムオフショア開発 | カオピーズの技術力で不安解消！" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll handler — shared
  const handleSmoothScroll = (id: string) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 96; // chiều cao header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  // Active section logic (optional)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const thresholdValue = window.innerWidth <= 1024 ? 0.1 : 0.5;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: thresholdValue }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);


  return (
    <div className="h-full">
      <Header
        activeSection={activeSection}
        onSmoothScroll={handleSmoothScroll}
      />
      <div className="pt-[96px]">
        <OffshoreService />
        <DevelopmentType />
        <Testimonials />
        <Steps />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
