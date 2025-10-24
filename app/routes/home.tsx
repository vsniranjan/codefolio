import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Codefolio" },
    { name: "description", content: "Portfolio for a coder" },
  ];
}

export default function Home() {
  return <> App</>;
}
