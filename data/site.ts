export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export type ServiceMedia = {
  src: string;
  altBg: string;
  altEn: string;
};

export type GalleryItem = {
  src: string;
  altBg: string;
  altEn: string;
  tagBg: string;
  tagEn: string;
};

export type HomeCopy = {
  locale: "bg" | "en";
  seo: {
    title: string;
    description: string;
    path: string;
  };
  nav: {
    services: string;
    gallery: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { label: string; value: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Service[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    callLabel: string;
    messageLabel: string;
    formTitle: string;
    formHint: string;
    fields: {
      name: string;
      phone: string;
      service: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    rights: string;
  };
};

export const business = {
  name: "Tatko Repair",
  owner: "Татко Ремонт",
  city: "Варна",
  phoneDisplay: "+359 887 260 217",
  phoneHref: "tel:+359887260217",
  whatsappHref: "https://wa.me/359887260217",
  viberHref: "viber://chat?number=%2B359887260217",
  formAction: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/drywall-before-after.svg",
    altBg: "Преди и след ремонт с гипсокартон",
    altEn: "Before and after drywall renovation",
    tagBg: "Гипсокартон",
    tagEn: "Drywall",
  },
  {
    src: "/gallery/laminate-before-after.svg",
    altBg: "Преди и след монтаж на ламинат",
    altEn: "Before and after laminate flooring installation",
    tagBg: "Ламинат",
    tagEn: "Laminate",
  },
  {
    src: "/gallery/ceiling-before-after.svg",
    altBg: "Преди и след окачен таван",
    altEn: "Before and after suspended ceiling work",
    tagBg: "Окачени тавани",
    tagEn: "Ceilings",
  },
  {
    src: "/gallery/tiles-before-after.svg",
    altBg: "Преди и след плочки и гранитогрес",
    altEn: "Before and after tile installation",
    tagBg: "Плочки",
    tagEn: "Tiles",
  },
  {
    src: "/gallery/electrical-before-after.svg",
    altBg: "Преди и след електрически ремонт",
    altEn: "Before and after electrical repair",
    tagBg: "Ел. ремонти",
    tagEn: "Electrical",
  },
  {
    src: "/gallery/furniture-before-after.svg",
    altBg: "Преди и след сглобяване на мебели",
    altEn: "Before and after furniture assembly",
    tagBg: "Мебели",
    tagEn: "Furniture",
  },
];

export const serviceMedia: Record<string, ServiceMedia> = {
  drywall: {
    src: "/services/drywall.jpg",
    altBg: "Работа по гипсокартон в жилищен интериор",
    altEn: "Drywall work in a residential interior",
  },
  laminate: {
    src: "/services/laminate.jpg",
    altBg: "Стая с дървесен под за услуга по монтаж на ламинат",
    altEn: "Room with wood flooring for laminate installation service",
  },
  ceiling: {
    src: "/services/ceiling.jpg",
    altBg: "Интериорен таван и довършителни работи",
    altEn: "Interior ceiling and finishing work",
  },
  paneling: {
    src: "/services/paneling.jpg",
    altBg: "Интериор с ламперия и дървесни панели",
    altEn: "Interior with wall paneling and wood panels",
  },
  tiles: {
    src: "/services/tiles.jpg",
    altBg: "Баня с плочки и завършени повърхности",
    altEn: "Bathroom with tile surfaces and completed finish",
  },
  electrical: {
    src: "/services/electrical.jpg",
    altBg: "Електрически ремонт и работа по инсталация",
    altEn: "Electrical repair and installation work",
  },
  plumbing: {
    src: "/services/plumbing.jpg",
    altBg: "ВиК ремонт под мивка",
    altEn: "Plumbing repair under a sink",
  },
  furniture: {
    src: "/services/furniture.jpg",
    altBg: "Сглобяване на мебели и монтаж на елементи",
    altEn: "Furniture assembly and fitting work",
  },
  repairs: {
    src: "/services/repairs.jpg",
    altBg: "Инструменти за дребни домашни ремонти",
    altEn: "Tools for small home repairs",
  },
};

export const bgContent: HomeCopy = {
  locale: "bg",
  seo: {
    title: "Качествени ремонти за вашия дом | Татко Ремонт Варна",
    description:
      "Малки и средни ремонти за апартаменти във Варна: гипсокартон, ламинат, окачени тавани, плочки, ел. и ВиК ремонти.",
    path: "/",
  },
  nav: {
    services: "Услуги",
    gallery: "Галерия",
    about: "За мен",
    contact: "Контакт",
  },
  hero: {
    eyebrow: "Малки ремонти за апартаменти и домове",
    title: "Качествени ремонти за вашия дом",
    subtitle: "Бързо, чисто и коректно изпълнение",
    primaryCta: "Обади се",
    secondaryCta: "Виж услугите",
    stats: [
      { value: "1 човек", label: "личен подход към всеки обект" },
      { value: "Бърза реакция", label: "за малки и спешни ремонти" },
      { value: "Чиста работа", label: "в апартаменти и обитаеми жилища" },
    ],
  },
  services: {
    eyebrow: "Какво правя",
    title: "Услуги за довършителни и дребни ремонти",
    description:
      "Фокусът е върху практични решения за жилища, без тежка организация и без големи строителни обекти.",
    items: [
      {
        id: "drywall",
        title: "Гипсокартон",
        description: "Преградни стени, обшивки, куфари и поправки по съществуващи конструкции.",
        bullets: ["Монтаж", "Шпакловка", "Корекции"],
      },
      {
        id: "laminate",
        title: "Ламинат",
        description: "Редене на ламинат и подложка с прецизно завършване около стени и каси.",
        bullets: ["Подготовка", "Монтаж", "Первази"],
      },
      {
        id: "ceiling",
        title: "Окачени тавани",
        description: "Изчистени таванни решения за освежаване и скриване на инсталации.",
        bullets: ["Конструкция", "Нива", "LED отвори"],
      },
      {
        id: "paneling",
        title: "Ламперия",
        description: "Практични стенни и таванни облицовки за коридори, тераси и помощни помещения.",
        bullets: ["PVC", "Дървесен декор", "Чист монтаж"],
      },
      {
        id: "tiles",
        title: "Плочки и гранитогрес",
        description: "Полагане на плочки за кухни, коридори, тераси и малки санитарни помещения.",
        bullets: ["Лепене", "Фугиране", "Подравняване"],
      },
      {
        id: "electrical",
        title: "Ел. ремонти",
        description: "Смяна на ключове, контакти, осветителни тела и дребни електрически корекции.",
        bullets: ["Контакти", "Осветление", "Проверки"],
      },
      {
        id: "plumbing",
        title: "ВиК ремонти",
        description: "Смяна на сифони, батерии, връзки и отстраняване на дребни течове.",
        bullets: ["Смяна", "Поправки", "Монтаж"],
      },
      {
        id: "furniture",
        title: "Сглобяване на мебели",
        description: "Сглобяване и монтаж на мебели за дома с внимание към нивелация и детайл.",
        bullets: ["Гардероби", "Шкафове", "Антре"],
      },
      {
        id: "repairs",
        title: "Дребни ремонти",
        description: "Всичко онова, което остава отложено: поправки, монтажи и довършителни задачи.",
        bullets: ["Монтажи", "Корекции", "Поддръжка"],
      },
    ],
  },
  gallery: {
    eyebrow: "Резултати",
    title: "Примери за работа тип преди / след",
    description:
      "Галерията е с примерни изображения и е подготвена да се подмени с реални снимки от обекти.",
  },
  about: {
    eyebrow: "Личен подход",
    title: "Работя самостоятелно и поемам малки и средни ремонти",
    paragraphs: [
      "Поемам малки и средни ремонти в апартаменти, къщи и офиси с лично отношение към всеки обект.",
      "Държа на прецизността, чистата работа и ясната уговорка още от първия разговор.",
      "Обичам работата да се свърши както трябва - качествено, чисто и в уговорения срок.",
    ],
    highlights: [
      "Подходящо за жилища в ремонт или обитаеми домове",
      "Фокус върху срок, чистота и коректно отношение",
      "Лесна комуникация директно с изпълнителя",
    ],
  },
  contact: {
    eyebrow: "Връзка",
    title: "Обадете се за оглед или въпрос",
    description:
      "За малки ремонти най-бързо става по телефон, Viber или WhatsApp.",
    callLabel: "Обади се сега",
    messageLabel: "Пиши във Viber / WhatsApp",
    formTitle: "Изпрати запитване",
    formHint: "Изпратете кратко описание на ремонта и телефон за обратна връзка.",
    fields: {
      name: "Име",
      phone: "Телефон",
      service: "Услуга",
      message: "Съобщение",
      submit: "Изпрати",
    },
  },
  footer: {
    rights: "Всички права запазени.",
  },
};

export const enContent: HomeCopy = {
  locale: "en",
  seo: {
    title: "Reliable Home Repairs in Varna | Tatko Repair",
    description:
      "Fast, clean and personal repair services in Varna for apartments and homes: drywall, laminate, ceilings, tiles, electrical and plumbing fixes.",
    path: "/en",
  },
  nav: {
    services: "Services",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Small apartment and home renovation jobs",
    title: "Reliable repairs for your home",
    subtitle: "Fast, clean and straightforward workmanship",
    primaryCta: "Call now",
    secondaryCta: "View services",
    stats: [
      { value: "Direct contact", label: "you speak with the person doing the work" },
      { value: "Quick jobs", label: "ideal for apartments and urgent fixes" },
      { value: "Clean finish", label: "suited for lived-in homes" },
    ],
  },
  services: {
    eyebrow: "What I do",
    title: "Practical services for small and medium repairs",
    description:
      "This is built for home projects that need speed, trust and a single reliable contractor, not a large construction crew.",
    items: [
      {
        id: "drywall",
        title: "Drywall",
        description: "Partition walls, boxing, cladding and fixes to existing drywall areas.",
        bullets: ["Installation", "Finishing", "Repairs"],
      },
      {
        id: "laminate",
        title: "Laminate flooring",
        description: "Laminate installation with underlay and clean finishing around walls and door frames.",
        bullets: ["Prep", "Installation", "Skirting"],
      },
      {
        id: "ceiling",
        title: "Suspended ceilings",
        description: "Clean ceiling solutions for refresh projects and hidden installations.",
        bullets: ["Framework", "Levels", "Light cutouts"],
      },
      {
        id: "paneling",
        title: "Wall paneling",
        description: "Practical wall and ceiling paneling for hallways, balconies and utility spaces.",
        bullets: ["PVC", "Wood look", "Tidy finish"],
      },
      {
        id: "tiles",
        title: "Tiles and granite",
        description: "Tile installation for kitchens, hallways, balconies and small bathrooms.",
        bullets: ["Laying", "Grouting", "Levelling"],
      },
      {
        id: "electrical",
        title: "Electrical repairs",
        description: "Switches, sockets, light fixtures and small electrical corrections.",
        bullets: ["Sockets", "Lighting", "Checks"],
      },
      {
        id: "plumbing",
        title: "Plumbing repairs",
        description: "Replacing traps, faucets, pipe connections and fixing small leaks.",
        bullets: ["Replacement", "Fixes", "Mounting"],
      },
      {
        id: "furniture",
        title: "Furniture assembly",
        description: "Home furniture assembly with attention to alignment and final detail.",
        bullets: ["Wardrobes", "Cabinets", "Entry units"],
      },
      {
        id: "repairs",
        title: "Small home repairs",
        description: "The jobs that always get postponed: adjustments, installations and touch-ups.",
        bullets: ["Installations", "Adjustments", "Maintenance"],
      },
    ],
  },
  gallery: {
    eyebrow: "Results",
    title: "Before / after presentation",
    description: "The gallery uses placeholder visuals and is ready to be swapped with real project photos.",
  },
  about: {
    eyebrow: "Personal service",
    title: "I work independently and take on small to medium repair jobs",
    paragraphs: [
      "I work independently and focus on apartment, home and small office repairs.",
      "No large construction sites, no unnecessary overhead, just clear communication and dependable execution.",
    ],
    highlights: [
      "Good fit for apartments and occupied homes",
      "Focused on speed, cleanliness and reliability",
      "You communicate directly with the contractor",
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Call for a quote or quick question",
    description:
      "For small repairs, the fastest route is phone, Viber or WhatsApp. The form is also ready for Formspree.",
    callLabel: "Call now",
    messageLabel: "Message on Viber / WhatsApp",
    formTitle: "Send an inquiry",
    formHint: "Send a short description of the job and your phone number for a callback.",
    fields: {
      name: "Name",
      phone: "Phone",
      service: "Service",
      message: "Tell me about the job",
      submit: "Send",
    },
  },
  footer: {
    rights: "All rights reserved.",
  },
};
