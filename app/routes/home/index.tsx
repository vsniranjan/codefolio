import type { Route } from "./+types/index";
import Hero from "../../components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Codefolio | Welcome" },
    { name: "description", content: "Portfolio for a coder" },
  ];
}

export default function Home() {
  return (
    <section>
      <Hero />
    </section>
  );
}
