import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Contact from "~/components/Contact";
import DevelopmentType from "~/components/Development";
import Steps from "~/components/Steps";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-full scroll-smooth">
      <Header />
      <div className="pt-[96px]">
        <DevelopmentType />
        <Steps />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
