interface TechLogoProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

const sizeClass = {
  sm: "tech-logo-sm",
  md: "tech-logo-md",
  lg: "tech-logo-lg",
} as const;

const TechLogo = ({ src, alt, size = "md" }: TechLogoProps) => {
  return <img src={src} alt={alt} className={`tech-logo ${sizeClass[size]}`} loading="lazy" />;
};

export default TechLogo;
