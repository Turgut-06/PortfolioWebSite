import dotnetIcon from "../assets/tech/dotnet.svg";
import postgresqlIcon from "../assets/tech/postgresql.svg";
import pythonIcon from "../assets/tech/python.svg";
import windowsIcon from "../assets/tech/windows.svg";
import redisIcon from "../assets/tech/redis.svg";
import bootstrapIcon from "../assets/tech/bootstrap.svg";
import kotlinIcon from "../assets/tech/kotlin.svg";
import TechLogo from "../components/TechLogo";

interface Project {
  title: string;
  description: string;
  stack: string;
  icon: string;
  iconAlt: string;
}

const enterpriseProjectList: Project[] = [
  {
    title: "Ölçeklenebilir Back-End Servisleri & RESTful API Geliştirme",
    description:
      "Modern web mimarilerine uygun, yüksek performanslı ve ölçeklenebilir back-end servisleri geliştirdim. .NET Web API kullanarak, istemci uygulamaların güvenli ve hızlı bir şekilde haberleşmesini sağlayan, standartlara uygun RESTful API'lar tasarladım ve devreye aldım.",
    stack: ".NET Web API, C#, RESTful API, Back-End Development",
    icon: dotnetIcon,
    iconAlt: ".NET",
  },
  {
    title: "Veri Erişimi & Veri Tabanı Yönetimi",
    description:
      "Uygulamaların veri ihtiyaçlarını optimize etmek amacıyla, ilişkisel veri tabanı yönetim ve tasarım süreçlerini üstlendim. Entity Framework Core ORM aracını kullanarak PostgreSQL üzerinde veri erişim katmanlarını kurguladım, performanslı sorgular ve veri tutarlılığı sağlayan yapılar tasarladım.",
    stack: "PostgreSQL, Entity Framework Core, LINQ",
    icon: postgresqlIcon,
    iconAlt: "PostgreSQL",
  },
  {
    title: "Arka Plan İşlemleri & Otomasyon Servisleri",
    description:
      "Sistem kaynaklarını verimli kullanmak adına, zamanlanmış ve uzun süre kesintisiz çalışan arka plan mekanizmaları inşa ettim. Worker Service ve Background Service yapılarını kullanarak asenkron iş süreçlerini yönettim; bu süreçlerin bir parçası olarak SMTP protokolü entegrasyonu ile back-end uygulamalarında otomatik e-posta gönderim servisleri tasarladım.",
    stack: ".NET Worker Service, Background Service, SMTP Protocol, Asynchronous Programming",
    icon: dotnetIcon,
    iconAlt: ".NET Worker Service",
  },
  {
    title: "Kurumsal Masaüstü Uygulamaları",
    description:
      "İş ihtiyaçlarına yönelik, kararlı ve kullanıcı dostu masaüstü yazılımları geliştirdim. Windows Forms mimarisi üzerinde, kullanıcı etkileşimlerini ve iş kurallarını başarıyla işleten, veri tabanı ve back-end servisleriyle entegre çalışan stabil masaüstü çözümleri ürettim.",
    stack: "Windows Forms (WinForms), C#, .NET, Desktop Application Development",
    icon: windowsIcon,
    iconAlt: "Windows Forms",
  },
  {
    title: "Görüntü İşleme Çözümleri",
    description:
      "Projelerin ihtiyaç duyduğu veri analizi ve görsel manipülasyon süreçleri için Python ekosistemini kullandım. Temel görüntü işleme algoritmalarını hayata geçirerek, görseller üzerinde filtreleme, analiz ve anlamlandırma yapan fonksiyonel çözümler geliştirdim.",
    stack: "Python, Image Processing, OpenCV)",
    icon: pythonIcon,
    iconAlt: "Python",
  },
];

const internshipProjectList: Project[] = [
  {
    title: "Veri Erişimi & API Mimarisi",
    description:
      "E-ticaret platformlarının ürün bilgilerine güvenli ve performanslı erişimini sağlamak amacıyla, Onion Architecture prensipleri doğrultusunda katmanlı bir .NET Web API geliştirdim. CQRS ve MediatR kullanarak okuma-yazma operasyonlarını ayrıştırdım, JWT ve ASP.NET Identity ile kimlik doğrulama ve yetkilendirme süreçlerini yönettim. Redis Cache entegrasyonu sayesinde sık kullanılan verilerin erişim performansını artırarak sistem verimliliğini optimize ettim.",
    stack: ".NET Web API, Onion Architecture, CQRS, MediatR, JWT, ASP.NET Identity, Redis Cache",
    icon: redisIcon,
    iconAlt: "Redis Cache",
  },
  {
    title: "Blog Yönetimi & Web Uygulaması",
    description:
      "ASP.NET Core 6, EF Core ve MSSQL kullanarak ölçeklenebilir ve katmanlı yapıda bir .NET MVC Blog Web Sitesi geliştirdim. ASP.NET Identity ile kullanıcı kimlik doğrulama ve yetkilendirme süreçlerini yönettim, FluentValidation ile veri doğrulama mekanizmalarını uyguladım. AutoMapper kullanarak nesne dönüşümlerini sadeleştirdim, Unit of Work deseni ile veri erişim süreçlerini merkezi ve sürdürülebilir bir yapıda yönettim. Bootstrap ile responsive ve kullanıcı dostu bir arayüz tasarlayarak farklı cihazlarda uyumlu bir deneyim sağladım..",
    stack: "ASP.NET Core 6, .NET MVC, EF Core, MSSQL, ASP.NET Identity, FluentValidation, AutoMapper, Unit of Work, Bootstrap",
    icon: bootstrapIcon,
    iconAlt: "Bootstrap",
  },
  {
    title: "Ülkeler Uygulaması & Mobil Geliştirme",
    description:
      "Kotlin ve MVVM mimarisi kullanarak geliştirilen mobil uygulamada, REST API üzerinden Retrofit ile ülke verilerini güvenli ve verimli şekilde çektim. Jetpack bileşenlerinden ViewBinding ve Room kullanarak modern bir uygulama mimarisi oluşturdum; alınan verileri SQLite tabanlı yerel veritabanında saklayarak çevrimdışı erişim ve performans optimizasyonu sağladım..",
    stack: "Kotlin, MVVM, Retrofit, Jetpack (ViewBinding, Room), SQLite, REST API",
    icon: kotlinIcon,
    iconAlt: "Kotlin",
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className="card project-card">
    <div className="project-card-header">
      <TechLogo src={project.icon} alt={project.iconAlt} size="lg" />
      <h3>{project.title}</h3>
    </div>
    <p>{project.description}</p>
    <small>{project.stack}</small>
  </article>
);

const Projects = () => {
  return (
    <section className="stack">
      <div className="card">
        <h1 className="eyebrow">İş hayatında yapılan projeler</h1>
      </div>

      <div className="grid three-col">
        {enterpriseProjectList.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="card">
        <h1 className="eyebrow">Stajda yapılan projeler</h1>
      </div>

      <div className="grid three-col">
        {internshipProjectList.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
