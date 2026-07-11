import reactIcon from "../assets/tech/react.svg";
import typescriptIcon from "../assets/tech/typescript.svg";
import tailwindIcon from "../assets/tech/tailwindcss.svg";
import viteIcon from "../assets/tech/vite.svg";
import dotnetIcon from "../assets/tech/dotnet.svg";
import postgresqlIcon from "../assets/tech/postgresql.svg";

export const homeTechStack = [
  { name: "React", icon: reactIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Vite", icon: viteIcon },
  { name: ".NET", icon: dotnetIcon },
] as const;

export const heroTechStack = [
  { name: "React", icon: reactIcon },
  { name: ".NET", icon: dotnetIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
] as const;
