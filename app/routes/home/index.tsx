import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Codefolio | Welcome" },
    { name: "description", content: "Portfolio for a coder" },
  ];
}

export default function Home() {
  return <>Homepage</>;
}
