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
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-full">
      <Header />
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
