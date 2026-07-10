import reactIcon from "../assets/tech/react.svg";
import typescriptIcon from "../assets/tech/typescript.svg";
import tailwindIcon from "../assets/tech/tailwindcss.svg";
import viteIcon from "../assets/tech/vite.svg";
import dotnetIcon from "../assets/tech/dotnet.svg";
import postgresqlIcon from "../assets/tech/postgresql.svg";
import pythonIcon from "../assets/tech/python.svg";
import kotlinIcon from "../assets/tech/kotlin.svg";
import redisIcon from "../assets/tech/redis.svg";
import bootstrapIcon from "../assets/tech/bootstrap.svg";
import csharpIcon from "../assets/tech/csharp.svg";
import windowsIcon from "../assets/tech/windows.svg";

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
