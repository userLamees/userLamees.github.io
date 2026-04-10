export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      badge: "Available for internship — Riyadh, Saudi Arabia",
      stats: [
        { value: "260+", label: "Volunteer Hours" },
        { value: "4", label: "Certifications" },
        { value: "2", label: "Projects Shipped" },
        { value: "1st", label: "Hackathon Place" },
      ],
      tagline:
        "Bridging beautiful interfaces with intelligent technology. Building AI-powered mobile experiences, one pixel at a time.",
      scroll: "Scroll to explore",
    },
    about: {
      label: "About",
      heading1: "Driven by curiosity,",
      heading2: "grounded in detail.",
      p1: "As a Computer Information Systems student, I'm fascinated by the intersection of human psychology and technology. I don't just write code — I design experiences that feel intuitive, elegant, and purposeful.",
      p2: "My approach is rooted in precision. Whether crafting a complex SwiftUI interface or architecting a user flow in Figma, I believe the smallest details make the biggest impact. I'm eager to apply my technical skills to deliver results that matter.",
      location: "Location",
      languages: "Languages",
      specialization: "Specialization",
      status: "Status",
      locationValue: "Riyadh, Saudi Arabia",
      languagesValue: "Arabic · English",
      specializationValue: "iOS · UI/UX · AI",
      statusValue: "Open to opportunities",
    },
    projects: {
      label: "Selected Works",
      heading1: "What I've",
      heading2: "built.",
      subtext: "Projects that live at the intersection of design, technology, and human need.",
      comingSoon: "More works brewing...",
      items: [
        {
          title: "Jasmine",
          type: "Graduation Project",
          date: "Dec 2025",
          role: "iOS Developer · ML Engineer",
          description:
            "An AI-powered iOS application for skin condition assessment. Users photograph their skin and receive personalized care recommendations powered by image recognition — bridging healthcare and technology for everyday users.",
          highlight: "Only team from our batch selected to present at ICAN 2026.",
          technologies: ["SwiftUI", "Core ML", "Vision", "iOS"],
          photoLabels: ["Project Poster", "ICAN 2026", "Jasmine Demo"],
        },
        {
          title: "Naadek",
          type: "Hackathon — 1st Place",
          date: "Apr 2025",
          role: "Project Manager",
          description:
            "First place at the University Solutions Hackathon. A student engagement platform integrating club discovery and task management — built around UI/UX best practices to meaningfully enhance campus connectivity.",
          highlight: null,
          technologies: ["UI/UX Design", "Figma", "System Design", "Prototyping"],
          photoLabels: ["1st Place — University Solutions Hackathon"],
        },
        {
          title: "Haik | حيك",
          type: "Academic Project",
          date: "2025",
          role: "Project Manager",
          description:
            "An app designed to help users relocate by exploring neighborhoods individually, viewing available services and amenities, and comparing neighborhood ratings. Uses a recommendation system to suggest the most suitable neighborhoods based on work location, schools, and personal needs.",
          highlight: null,
          technologies: ["UI/UX Design", "Figma", "Recommendation Systems", "Project Management"],
          photoLabels: [],
        },
      ],
    },
    skills: {
      label: "Capabilities",
      heading1: "What I",
      heading2: "bring to the table.",
      technicalLabel: "Technical Skills",
      professionalLabel: "Professional Skills",
      toolsLabel: "Tools & Technologies",
      technical: [
        { name: "SwiftUI" },
        { name: "UI/UX Design" },
        { name: "Figma & Sketch" },
        { name: "Flutter" },
        { name: "Power BI" },
        { name: "System Analysis" },
        { name: "AI/ML Fundamentals" },
      ],
      soft: [
        { name: "Effective Communication" },
        { name: "Problem Solving" },
        { name: "Teamwork" },
        { name: "Multitasking" },
      ],
    },
    education: {
      label: "Education",
      heading1: "Where I've",
      heading2: "learned.",
      items: [
        {
          degree: "Bachelor of Computer Information Systems",
          institution: "Imam Mohammad Ibn Saud Islamic University",
          period: "2022 – 2026",
          badge: "In Progress",
          detail:
            "Graduation Project: Jasmine — AI-powered iOS app for skin condition assessment using image recognition and personalized care recommendations.",
        },
        {
          degree: "First Year Program",
          institution: "Apple Developer Academy",
          period: "Aug 2025 – Present",
          badge: "Current",
          detail:
            "Intensive, challenge-based curriculum covering iOS development, human interface design, Swift, and professional product development.",
        },
      ],
    },
    achievements: {
      label: "Achievements",
      heading1: "Recognized",
      heading2: "for impact.",
      items: [
        {
          title: "First Place — University Solutions Hackathon",
          date: "April 2025",
          description:
            "Designed and prototyped \"Naadek\" — a student engagement platform integrating club discovery and task management using UI/UX best practices to enhance student connectivity.",
        },
        {
          title: "Certificate of Appreciation — Student Participation",
          date: "2024",
          description:
            "Honored for enhancing the department's visual identity by designing the Annual Report and supporting student initiatives through high-quality graphic design work.",
        },
      ],
    },
    experience: {
      label: "Experience & Volunteering",
      heading1: "Showing up",
      heading2: "for others.",
      items: [
        {
          role: "Media Team Leader",
          organization: "Advisory Student Council — Information Systems Dept.",
          period: "Aug 2025 – Present",
          type: "Leadership",
          description:
            "Leading the media team to create engaging content and strengthen the department's digital presence, communication strategy, and visual identity.",
          badge: "Current",
        },
        {
          role: "Community Volunteer",
          organization: "National Volunteer Portal",
          period: "Ongoing",
          type: "Volunteering",
          description:
            "Contributed 260+ certified volunteer hours across university clubs and large-scale events, driving community engagement and social impact.",
          badge: "260+ Hours",
        },
      ],
    },
    certifications: {
      proLabel: "Certifications",
      proHeading1: "Always",
      proHeading2: "learning.",
      proSubtext: "Industry-recognised credentials from leading programmes. Click any card to view the certificate.",
      awardsLabel: "Awards & Recognition",
      awardsHeading1: "Making an",
      awardsHeading2: "impact.",
      awardsSubtext: "Recognition for meaningful contributions beyond the classroom. Click any card to view the certificate.",
      issuedBy: "Issued by",
      professional: [
        { name: "Preparing Data for Analysis with Microsoft Excel", issuer: "Coursera", date: "Apr 2026" },
        { name: "Flutter Application Developer Certification", issuer: "Tuwaiq Academy", date: "Aug 2025" },
        { name: "AI Foundation Program", issuer: "Thakaa, KSU", date: "Aug 2025" },
        { name: "AI Fundamentals with Capstone Project", issuer: "IBM SkillsBuild", date: "Jul 2025" },
      ],
      awards: [
        {
          name: "Certificate of Appreciation — Student Participation",
          issuer: "IMAMU, IS Department",
          date: "2025",
          detail: "Recognised for participation and interaction in designing the IS Student Council.",
        },
        {
          name: "Certificate of Appreciation — Student Achievement",
          issuer: "IMAMU, IS Department",
          date: "2025",
          detail: "1st place at the University Solutions Hackathon (Naadek project).",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading1: "Let's build something",
      heading2: "meaningful.",
      subtext:
        "Open to internship opportunities, collaborations, and conversations about design, technology, and everything in between.",
      cta: "Say Hello",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Location",
    },
    footer: {
      tagline: "Designed with precision.",
      location: "Riyadh, Saudi Arabia",
    },
  },

  ar: {
    nav: {
      about: "عنّي",
      projects: "المشاريع",
      skills: "المهارات",
      experience: "الخبرات",
      contact: "تواصل",
      cta: "تواصلي معي",
    },
    hero: {
      badge: "متاحة للتدريب — الرياض، المملكة العربية السعودية",
      stats: [
        { value: "٢٦٠+", label: "ساعة تطوعية" },
        { value: "٤", label: "شهادات" },
        { value: "٢", label: "مشاريع منجزة" },
        { value: "الأول", label: "هاكاثون" },
      ],
      tagline: "أجمع بين الواجهات الجميلة والتقنية الذكية. أبني تجارب جوال مدعومة بالذكاء الاصطناعي، بكسل واحد في كل مرة.",
      scroll: "مرّر للاستكشاف",
    },
    about: {
      label: "عنّي",
      heading1: "يحرّكني الفضول،",
      heading2: "وتُقيّدني الدقة.",
      p1: "طالبة نظم معلومات حاسوبية مفتونة بتقاطع علم النفس البشري والتقنية. لا أكتب الكود فحسب — بل أصمم تجارب تبدو بديهية وأنيقة وهادفة.",
      p2: "نهجي قائم على الدقة. سواء كنت أصمم واجهة SwiftUI معقدة أو أرسم مسار مستخدم في Figma، أؤمن بأن أصغر التفاصيل تصنع أكبر الأثر. أتطلع لتوظيف مهاراتي التقنية لتحقيق نتائج ذات معنى.",
      location: "الموقع",
      languages: "اللغات",
      specialization: "التخصص",
      status: "الحالة",
      locationValue: "الرياض، المملكة العربية السعودية",
      languagesValue: "العربية · الإنجليزية",
      specializationValue: "iOS · تصميم UX · ذكاء اصطناعي",
      statusValue: "متاحة للفرص",
    },
    projects: {
      label: "أعمال مختارة",
      heading1: "ما",
      heading2: "بنيته.",
      subtext: "مشاريع تعيش عند تقاطع التصميم والتقنية واحتياجات الإنسان.",
      comingSoon: "المزيد قادم...",
      items: [
        {
          title: "ياسمين",
          type: "مشروع التخرج",
          date: "ديسمبر ٢٠٢٥",
          role: "مطورة iOS · مهندسة تعلم آلي",
          description:
            "تطبيق iOS مدعوم بالذكاء الاصطناعي لتقييم حالات البشرة. يلتقط المستخدمون صور بشرتهم ويحصلون على توصيات عناية مخصصة بالتعرف على الصور — يجمع بين الرعاية الصحية والتقنية لجميع المستخدمين.",
          highlight: "الفريق الوحيد من دفعتنا المختار للعرض في مؤتمر ICAN 2026.",
          technologies: ["SwiftUI", "Core ML", "Vision", "iOS"],
          photoLabels: ["ملصق المشروع", "مؤتمر ICAN 2026", "عرض ياسمين"],
        },
        {
          title: "ناديك",
          type: "هاكاثون — المركز الأول",
          date: "أبريل ٢٠٢٥",
          role: "مديرة مشروع",
          description:
            "المركز الأول في هاكاثون الحلول الجامعية. منصة تفاعل طلابية تدمج اكتشاف الأندية وإدارة المهام — مبنية وفق أفضل ممارسات تجربة المستخدم لتعزيز التواصل الجامعي.",
          highlight: null,
          technologies: ["تصميم UI/UX", "Figma", "تصميم النظام", "النمذجة الأولية"],
          photoLabels: ["المركز الأول — هاكاثون الحلول الجامعية"],
        },
        {
          title: "حيك",
          type: "مشروع أكاديمي",
          date: "٢٠٢٥",
          role: "مديرة مشروع",
          description:
            "تطبيق يساعد المستخدمين على الانتقال للسكن باستكشاف الأحياء بشكل فردي وعرض الخدمات والمرافق المتاحة ومقارنة التقييمات. يستخدم نظام توصيات لاقتراح الأحياء الأنسب بناءً على موقع العمل والمدارس والاحتياجات الشخصية.",
          highlight: null,
          technologies: ["تصميم UI/UX", "Figma", "أنظمة التوصيات", "إدارة المشاريع"],
          photoLabels: [],
        },
      ],
    },
    skills: {
      label: "القدرات",
      heading1: "ما",
      heading2: "أقدّمه.",
      technicalLabel: "المهارات التقنية",
      professionalLabel: "المهارات المهنية",
      toolsLabel: "الأدوات والتقنيات",
      technical: [
        { name: "SwiftUI" },
        { name: "تصميم واجهات المستخدم" },
        { name: "Figma & Sketch" },
        { name: "Flutter" },
        { name: "Power BI" },
        { name: "تحليل الأنظمة" },
        { name: "أساسيات الذكاء الاصطناعي" },
      ],
      soft: [
        { name: "التواصل الفعّال" },
        { name: "حل المشكلات" },
        { name: "العمل الجماعي" },
        { name: "تعدد المهام" },
      ],
    },
    education: {
      label: "التعليم",
      heading1: "أين",
      heading2: "تعلّمت.",
      items: [
        {
          degree: "بكالوريوس نظم المعلومات الحاسوبية",
          institution: "جامعة الإمام محمد بن سعود الإسلامية",
          period: "٢٠٢٢ – ٢٠٢٦",
          badge: "جارٍ",
          detail:
            "مشروع التخرج: ياسمين — تطبيق iOS مدعوم بالذكاء الاصطناعي لتقييم حالات البشرة باستخدام التعرف على الصور وتوصيات العناية المخصصة.",
        },
        {
          degree: "برنامج السنة الأولى",
          institution: "أكاديمية مطوري Apple",
          period: "أغسطس ٢٠٢٥ – الآن",
          badge: "حالياً",
          detail:
            "مناهج مكثفة قائمة على التحديات تغطي تطوير iOS وتصميم الواجهات البشرية وSwift وتطوير المنتجات المهنية.",
        },
      ],
    },
    achievements: {
      label: "الإنجازات",
      heading1: "معترف بها",
      heading2: "على أثرها.",
      items: [
        {
          title: "المركز الأول — هاكاثون الحلول الجامعية",
          date: "أبريل ٢٠٢٥",
          description:
            "صممت ونمذجت «ناديك» — منصة تفاعل طلابية تدمج اكتشاف الأندية وإدارة المهام وفق أفضل ممارسات UX لتعزيز التواصل الطلابي.",
        },
        {
          title: "شهادة شكر وتقدير — المشاركة الطلابية",
          date: "٢٠٢٤",
          description:
            "تقديراً للإسهام في تعزيز الهوية البصرية للقسم من خلال تصميم التقرير السنوي ودعم المبادرات الطلابية بأعمال تصميم جرافيك عالية الجودة.",
        },
      ],
    },
    experience: {
      label: "الخبرات والتطوع",
      heading1: "الحضور",
      heading2: "من أجل الآخرين.",
      items: [
        {
          role: "رئيسة فريق الإعلام",
          organization: "مجلس الطلاب الاستشاري — قسم نظم المعلومات",
          period: "أغسطس ٢٠٢٥ – الآن",
          type: "قيادة",
          description:
            "قيادة فريق الإعلام لإنشاء محتوى جذاب وتعزيز الحضور الرقمي للقسم واستراتيجية التواصل والهوية البصرية.",
          badge: "حالياً",
        },
        {
          role: "متطوعة مجتمعية",
          organization: "منصة التطوع الوطنية",
          period: "مستمر",
          type: "تطوع",
          description:
            "أكثر من ٢٦٠ ساعة تطوعية معتمدة عبر الأندية الجامعية والفعاليات الكبرى، بهدف تعزيز المشاركة المجتمعية والأثر الاجتماعي.",
          badge: "٢٦٠+ ساعة",
        },
      ],
    },
    certifications: {
      proLabel: "الشهادات",
      proHeading1: "دائماً",
      proHeading2: "في تعلم.",
      proSubtext: "اعتمادات معترف بها من برامج رائدة. انقر على أي بطاقة لعرض الشهادة.",
      awardsLabel: "الجوائز والتقدير",
      awardsHeading1: "صنع",
      awardsHeading2: "أثر.",
      awardsSubtext: "تقدير للمساهمات الهادفة خارج قاعات الدراسة. انقر على أي بطاقة لعرض الشهادة.",
      issuedBy: "صادرة من",
      professional: [
        { name: "إعداد البيانات للتحليل باستخدام Microsoft Excel", issuer: "Coursera", date: "أبريل ٢٠٢٦" },
        { name: "شهادة مطور تطبيقات Flutter", issuer: "أكاديمية طويق", date: "أغسطس ٢٠٢٥" },
        { name: "برنامج أساسيات الذكاء الاصطناعي", issuer: "ثقاء، جامعة الملك سعود", date: "أغسطس ٢٠٢٥" },
        { name: "أساسيات الذكاء الاصطناعي مع مشروع تكاملي", issuer: "IBM SkillsBuild", date: "يوليو ٢٠٢٥" },
      ],
      awards: [
        {
          name: "شهادة شكر وتقدير — المشاركة الطلابية",
          issuer: "جامعة الإمام — قسم نظم المعلومات",
          date: "٢٠٢٥",
          detail: "تقديراً للمشاركة والتفاعل في تصميم مجلس الطلاب لنظم المعلومات.",
        },
        {
          name: "شهادة شكر وتقدير — إنجازات الطلاب",
          issuer: "جامعة الإمام — قسم نظم المعلومات",
          date: "٢٠٢٥",
          detail: "المركز الأول في هاكاثون الحلول الجامعية (مشروع ناديك).",
        },
      ],
    },
    contact: {
      label: "تواصل",
      heading1: "لنبني شيئاً",
      heading2: "ذا معنى.",
      subtext: "متاحة لفرص التدريب والتعاون، والحوارات حول التصميم والتقنية وكل ما بينهما.",
      cta: "قولي مرحباً",
      emailLabel: "البريد الإلكتروني",
      linkedinLabel: "لينكدإن",
      githubLabel: "جيت هاب",
      locationLabel: "الموقع",
    },
    footer: {
      tagline: "مصمم بدقة.",
      location: "الرياض، المملكة العربية السعودية",
    },
  },
};

export type Translations = typeof translations.en;
