import type { Localized } from "@/config/locales";

// ─── WhatsApp CTA message templates ───
// These are the prefilled messages for each CTA context.
// They match the PROJECT_BRIEF § 6 WhatsApp CTA behaviour table.

export type WhatsAppContext = "hero" | "plans" | "footer" | "mobile_bar";

export const whatsappMessages: Record<WhatsAppContext, Localized> = {
  hero: {
    ar: "أهلًا كوتش عبدالعليم، حابب أحجز Free Consultation. هدفي هو: ...",
    en: "Hi Coach Abdelalim, I'd like to book a free consultation. My goal is: ...",
  },
  plans: {
    ar: "حابب أعرف أنسب خطة لهدفي.",
    en: "I'd like help choosing the right plan.",
  },
  footer: {
    ar: "حابب أبدأ معاك.",
    en: "I'd like to get started.",
  },
  mobile_bar: {
    ar: "أهلًا كوتش عبدالعليم، حابب أحجز Free Consultation. هدفي هو: ...",
    en: "Hi Coach Abdelalim, I'd like to book a free consultation. My goal is: ...",
  },
};

// ─── Section copy ───
// All customer-facing text lives here, keyed by locale.
// Draft copy from PROJECT_BRIEF — marked as draft until owner approves.

export type SiteContent = {
  meta: {
    title: Localized;
    description: Localized;
  };
  header: {
    ctaLabel: Localized;
  };
  hero: {
    overline: Localized;
    headline: Localized;
    subheadline: Localized;
    ctaPrimary: Localized;
    ctaSecondary: Localized;
    availability: Localized;
  };
  trustStrip: {
    items: Array<{ label: Localized }>;
  };
  about: {
    headline: Localized;
    body: Localized;
    education: Localized;
    specialty: Localized;
  };
  outcomes: {
    headline: Localized;
    cards: Array<{
      id: string;
      title: Localized;
      description: Localized;
    }>;
  };
  startSteps: {
    headline: Localized;
    steps: Array<{
      number: string;
      label: Localized;
    }>;
  };
  results: {
    headline: Localized;
    disclaimer: Localized;
  };
  plans: {
    headline: Localized;
    discoveryMessage: Localized;
    ctaLabel: Localized;
  };
  finalCta: {
    headline: Localized;
    body: Localized;
    ctaLabel: Localized;
  };
  footer: {
    locationLabel: Localized;
    onlineLabel: Localized;
    ctaLabel: Localized;
  };
};

export const siteContent: SiteContent = {
  meta: {
    title: {
      ar: "كوتش عبدالعليم | تدريب شخصي وOnline Coaching",
      en: "Coach Abdelalim | Personal Training & Online Coaching",
    },
    description: {
      ar: "مدرب شخصي متخصص في الـBodybuilding، يقدّم خطط تدريب ومتابعة شخصية تساعدك على بناء جسم أقوى وتحقيق هدفك بطريقة منظمة وقابلة للاستمرار.",
      en: "A bodybuilding-focused personal trainer offering structured, personalized coaching to help you build a stronger body and reach sustainable results.",
    },
  },

  header: {
    ctaLabel: {
      ar: "احجز استشارة مجانية",
      en: "Book a Free Consultation",
    },
  },

  hero: {
    overline: {
      ar: "ONLINE COACHING • PERSONAL TRAINING",
      en: "ONLINE COACHING • PERSONAL TRAINING",
    },
    headline: {
      ar: "خطتك. متابعتك. نتيجتك.",
      en: "Your plan. Your progress. Your result.",
    },
    subheadline: {
      ar: "تدريب شخصي مصمم لهدفك، مستواك، وطريقة حياتك—عشان تبني جسم أقوى بخطة تقدر تكمل عليها.",
      en: "Personalized coaching built around your goal, level, and lifestyle—so you can build a stronger body with a plan you can sustain.",
    },
    ctaPrimary: {
      ar: "احجز Free Consultation",
      en: "Book a Free Consultation",
    },
    ctaSecondary: {
      ar: "اكتشف الباقات",
      en: "Explore Plans",
    },
    availability: {
      ar: "متاح أونلاين داخل مصر وحول العالم",
      en: "Available online in Egypt and worldwide",
    },
  },

  trustStrip: {
    items: [
      { label: { ar: "3 سنوات خبرة", en: "3 Years of Experience" } },
      {
        label: { ar: "Bodybuilding Specialist", en: "Bodybuilding Specialist" },
      },
      { label: { ar: "Online Coaching", en: "Online Coaching" } },
      { label: { ar: "100% التزام بمتابعتك", en: "100% Client Dedication" } },
    ],
  },

  about: {
    headline: {
      ar: "اتمرّن بهدف. واتطوّر بخطة واضحة.",
      en: "Train with purpose. Grow with a clear plan.",
    },
    body: {
      ar: "أنا كوتش عبدالعليم، مدرب شخصي متخصص في الـBodybuilding. بخبرتي في التدريب الشخصي وشغلي داخل Heros GYM وNoamany Fitness Center، بساعدك تبني برنامج واقعي مناسب لهدفك ومستواك.\n\nكل عميل له ظروفه وطريقته في الالتزام؛ علشان كده المتابعة مش قالب واحد للجميع.",
      en: "I'm Coach Abdelalim, a personal trainer specializing in Bodybuilding. With my experience training at Heros GYM and Noamany Fitness Center, I help you build a realistic program suited to your goal and level.\n\nEvery client has their own circumstances and way of staying committed—that's why my coaching isn't one-size-fits-all.",
    },
    education: {
      ar: "Faculty of Physical Education, Elsadat University",
      en: "Faculty of Physical Education, Elsadat University",
    },
    specialty: {
      ar: "Bodybuilding & Personal Training",
      en: "Bodybuilding & Personal Training",
    },
  },

  outcomes: {
    headline: {
      ar: "إيه اللي تقدر تحققه",
      en: "What you can achieve",
    },
    cards: [
      {
        id: "build-muscle",
        title: { ar: "بناء عضلات", en: "Build Muscle" },
        description: {
          ar: "تدريب تدريجي مبني على مستواك الحالي وهدفك.",
          en: "Progressive training built around your current level and goal.",
        },
      },
      {
        id: "lose-fat",
        title: { ar: "خسارة دهون", en: "Lose Fat" },
        description: {
          ar: "تدريب منظم ومستدام بدون وعود حمية قاسية.",
          en: "Structured, sustainable training support without crash-diet promises.",
        },
      },
      {
        id: "train-structured",
        title: { ar: "تمرّن بخطة واضحة", en: "Train with Structure" },
        description: {
          ar: "للمبتدئين أو العائدين اللي محتاجين وضوح ومتابعة.",
          en: "For beginners or returning trainees who need clarity and accountability.",
        },
      },
    ],
  },

  startSteps: {
    headline: {
      ar: "إزاي تبدأ",
      en: "How coaching starts",
    },
    steps: [
      {
        number: "01",
        label: { ar: "ابعت رسالة على واتساب", en: "Start on WhatsApp" },
      },
      {
        number: "02",
        label: {
          ar: "نعرف هدفك ومستواك في Free Consultation",
          en: "Discuss your goal and level in a free consultation",
        },
      },
      {
        number: "03",
        label: {
          ar: "نختار الخطة الأنسب ونبدأ",
          en: "Choose the right plan and get started",
        },
      },
    ],
  },

  results: {
    headline: {
      ar: "نتائج حقيقية",
      en: "Real Results",
    },
    disclaimer: {
      ar: "النتائج تختلف حسب الالتزام، نقطة البداية، والظروف الفردية.",
      en: "Results vary based on commitment, starting point, and individual circumstances.",
    },
  },

  plans: {
    headline: {
      ar: "اختر خطة تناسب هدفك",
      en: "Choose the plan that fits your goal",
    },
    discoveryMessage: {
      ar: "حدد هدفك في Free Consultation واعرف أنسب خطة ليك",
      en: "Define your goal in a free consultation and find the plan that fits you best",
    },
    ctaLabel: {
      ar: "كلّمني على واتساب",
      en: "Chat on WhatsApp",
    },
  },

  finalCta: {
    headline: {
      ar: "جاهز تبدأ بشكل صح؟",
      en: "Ready to start with a real plan?",
    },
    body: {
      ar: "ابعت رسالة واحجز Free Consultation، وخلّينا نعرف أنسب خطوة لهدفك.",
      en: "Send a message to book a free consultation and find the right next step for your goal.",
    },
    ctaLabel: {
      ar: "كلّمني على واتساب",
      en: "Chat on WhatsApp",
    },
  },

  footer: {
    locationLabel: {
      ar: "مصر",
      en: "Egypt",
    },
    onlineLabel: {
      ar: "متاح أونلاين",
      en: "Available online",
    },
    ctaLabel: {
      ar: "كلّمني على واتساب",
      en: "Chat on WhatsApp",
    },
  },
};
