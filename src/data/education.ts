export interface AcademicProject {
  title: string;
  description: string;
  stack: string;
}

export interface Education {
  university: string;
  degree: string;
  department: string;
  graduationYear: string;
  gpa: string;
  semesterProject: AcademicProject;
  graduationProject: AcademicProject;
}

export const education: Education = {
  university: "Konya Teknik Üniversitesi",
  degree: "Lisans",
  department: "Bilgisayar Mühendisliği",
  graduationYear: "2023",
  gpa: "3.2 / 4.0",
  semesterProject: {
    title: "Android Mobil Uygulama",
    description:
      "Java programlama dili ile Android mobil uygulaması geliştirdim. Firebase entegrasyonu sayesinde uygulamanın veri depolama ve yönetim süreçlerini bulut tabanlı olarak gerçekleştirdim; kullanıcı verilerinin güvenli ve senkronize bir şekilde yönetilmesini sağlayarak uygulamanın işlevselliğini artırdım..",
    stack: "Java, Android, Firebase",
  },
  graduationProject: {
    title: "Derin Öğrenme",
    description:
      "Google Colab ortamında Python, TensorFlow ve Keras kullanarak sentetik veri üretimi üzerine derin öğrenme tabanlı bir proje geliştirdim. Yapay sinir ağı modelleri ile veri üretim süreçlerini gerçekleştirerek model eğitimi, deneysel analiz yaptım..",
    stack: "Python, TensorFlow, Keras, Google Colab, Deep Learning, Synthetic Data Generation",
  },
};
