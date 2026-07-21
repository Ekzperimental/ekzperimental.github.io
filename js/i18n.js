const STORAGE_KEY = "ekzperimental-language";
const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["en", "bg"];

const translations = {
  en: {
    "site.title": "Ekzperimental — Independent Video Production",
    "site.description": "EKZPERIMENTAL is an independent video production studio in Bulgaria creating documentaries, commercial films, music videos, dance, theatre, festival and cultural video projects.",
    "site.ogDescription": "Documentaries, commercials, music videos, dance and theatre films, festival coverage and experimental film work.",
    "site.twitterDescription": "Independent video production for documentaries, music videos, cultural projects, festivals, dance, theatre and commercial work.",
    "skip.link": "Skip to content",
    "nav.aria": "Primary navigation",
    "nav.home": "EKZPERIMENTAL home",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "language.bg": "Switch to Bulgarian",
    "language.en": "Switch to English",
    "language.group": "Language",
    "hero.eyebrow": "Independent video production.",
    "hero.title": "Stories that matter.",
    "hero.subtitle": "Independent video production for documentaries, music videos, cultural projects, festivals, dance, theatre and commercial work — crafted in Bulgaria, working worldwide.",
    "hero.ctaWork": "View Work",
    "hero.ctaContact": "Start a Project",
    "hero.scrollAria": "Scroll to approach",
    "hero.scroll": "Scroll",
    "showreel.aria": "Play EKZPERIMENTAL showreel",
    "showreel.alt": "EKZPERIMENTAL showreel preview",
    "showreel.eyebrow": "Showreel",
    "showreel.title": "Recent work in one cut.",
    "showreel.text": "A short glimpse into documentaries, stages, music, festivals and people.",
    "approach.eyebrow": "Approach",
    "approach.title": "From idea to final cut.",
    "approach.text": "A lean process for video work that stays close to the subject.",
    "approach.statsAria": "Studio numbers",
    "approach.years": "Years",
    "approach.projects": "Projects",
    "approach.services": "Services",
    "approach.processAria": "Production process",
    "approach.processEyebrow": "How we work",
    "approach.concept": "Concept",
    "approach.preproduction": "Pre-production",
    "approach.filming": "Filming",
    "approach.editing": "Editing",
    "approach.delivery": "Delivery",
    "work.eyebrow": "Selected Work",
    "work.title": "Documentary, music, stage and cultural video work.",
    "work.text": "Selected films from documentaries, dance and theatre, music videos, festivals and cultural projects.",
    "work.gridAria": "Selected EKZPERIMENTAL projects",
    "services.eyebrow": "Services",
    "services.title": "Production support from first idea to final cut.",
    "services.text": "Video work for artists, organizations, musicians, performers and independent teams.",
    "services.documentary.title": "Documentary Films",
    "services.documentary.text": "Human stories for artists, NGOs and cultural organizations.",
    "services.commercial.title": "Commercial Production",
    "services.commercial.text": "Focused video pieces for brands, campaigns and organizations.",
    "services.music.title": "Music Videos",
    "services.music.text": "Visual pieces for musicians, releases and independent creative projects.",
    "services.festival.title": "Festival Coverage",
    "services.festival.text": "Recaps and aftermovies that preserve the energy of live events.",
    "services.dance.title": "Dance & Theatre",
    "services.dance.text": "Video work for stage, movement, performance and rehearsal processes.",
    "services.editing.title": "Video Editing",
    "services.editing.text": "Shaping raw material into rhythm, structure and story.",
    "about.eyebrow": "About",
    "about.title": "A compact studio for films with memory.",
    "about.text1": "Founded by filmmaker Kostadin Ekzarov, EKZPERIMENTAL is an independent creative studio based in Bulgaria, producing documentary films, branded content, music videos and cultural projects for artists, organizations, festivals and independent teams in Bulgaria and worldwide.",
    "about.text2": "With a background in Directing, Choreography, Visual Arts and Advertising, Kostadin combines storytelling, editing and visual design to create thoughtful films that connect with people. Alongside client work, he is the Founder of EKZPERIMENTAL Creative House and Co-Founder of JAM ON IT Festival and Flava House.",
    "about.photosAria": "Studio photography",
    "about.photo1": "Kostadin Ekzarov behind the scenes",
    "about.photo2": "Filmmaking moment by EKZPERIMENTAL",
    "about.photo3": "EKZPERIMENTAL production detail",
    "about.photo4": "Kostadin Ekzarov portrait",
    "testimonials.eyebrow": "What it’s like working together",
    "testimonials.title": "Words from the people we've worked with.",
    "testimonials.delyana.text1": "Working with Kostadin Ekzarov and EKZPERIMENTAL is far from an experiment - it is a privilege. From the very beginning, Kostadin brings creativity, professionalism, and an exceptional eye for visual storytelling to every project.",
    "testimonials.delyana.text2": "His attention to detail and commitment to excellence are evident in every frame. He has a remarkable ability to transform ideas into compelling visual narratives that not only capture attention but also take the viewer on an emotional journey.",
    "testimonials.delyana.text3": "What truly sets EKZPERIMENTAL apart is the dedication to achieving the highest quality while making the entire creative process smooth, collaborative, and enjoyable. He consistently exceeds expectations, delivering stunning results that elevate the final production and leave a lasting impression.",
    "testimonials.delyana.text4": "I can wholeheartedly recommend Kostadin Ekzarov and EKZPERIMENTAL to anyone looking for outstanding video production and cinematic storytelling. Having him as part of your team is not just an advantage - it is a genuine privilege.",
    "testimonials.delyana.role": "Visionary Foundation / Co-founder / Opportunity creator",
    "testimonials.tzvetina.text1": "Kostadin demonstrated a high level of professionalism throughout every stage of our collaboration, from pre-production and filming to the post-production process. He works in an organized and reliable manner, consistently meets deadlines, and maintains clear and timely communication throughout the entire project.",
    "testimonials.tzvetina.text2": "One of his greatest strengths is his ability to recognize the dramatic essence of an event and translate it into a compelling visual narrative. The films and trailers he creates go beyond simple documentation-they communicate a cohesive artistic vision that reflects the identity and objectives of each project.",
    "testimonials.tzvetina.text3": "Kostadin is proactive, contributes thoughtful creative ideas and solutions, and at the same time works seamlessly within project requirements while responding constructively to feedback. He demonstrates exceptional attention to detail, precision in editing, and a strong sense of pacing, rhythm, and emotional impact.",
    "testimonials.tzvetina.text4": "During our collaboration on filming stage performances, as well as creating trailers for Dancing Play and the 2Touch dance programme, Kostadin consistently delivered work of a high professional standard. His commitment to quality and dedication to achieving the best possible result were evident throughout the entire process.",
    "testimonials.tzvetina.text5": "I consider Kostadin to be a reliable, responsible, and highly creative professional. I would confidently recommend Kostadin Ekzarov as a videographer and video artist for projects that require a combination of technical expertise, artistic sensitivity, and a professional approach.",
    "testimonials.tzvetina.role": "\"Creators Association\" / Choreographer, Dancer, Playback Theatre Performer and Organizer",
    "testimonials.sonja.text1": "Working with Kostadin Ekzarov (Ekzarka) has been an absolute pleasure. We have collaborated on several projects, and every time he has exceeded my expectations.",
    "testimonials.sonja.text2": "Kostadin is far more than a professional videographer and editor - he is a visual storyteller. To me, his videos are genuine works of art. He has an exceptional eye for detail, movement, expressions, and emotion, and he captures the true atmosphere and energy of every event. By skillfully combining different cameras, lenses, and equipment, he creates cinematic visuals that feel both authentic and captivating.",
    "testimonials.sonja.text3": "What impresses me even more is his editing. He has a remarkable ability to make completely different shots flow together seamlessly, creating a natural rhythm that keeps the viewer engaged from beginning to end. Every transition feels intentional, and every frame serves the story.",
    "testimonials.sonja.text4": "Beyond his creative talent, Kostadin is incredibly professional. He is precise, reliable, and consistently delivers on time - often even ahead of schedule. Communication is always smooth, and you can count on him to approach every project with dedication and attention to detail.",
    "testimonials.sonja.text5": "I wholeheartedly recommend Kostadin to anyone looking for outstanding video production. Working with him is inspiring, effortless, and truly rewarding.",
    "testimonials.sonja.role": "Rhodopean Drama Theatre \"Nikolay Haitov\" / Marketing Manager",
    "testimonials.readMore": "Read more →",
    "testimonials.closeAria": "Close testimonial",
    "testimonials.modalTitle": "Testimonial",
    "partners.eyebrow": "Partners",
    "partners.title": "Collaborations with artists, festivals, foundations and cultural teams.",
    "partners.text": "Long-running work across street art, performance, cultural programs and independent creative projects.",
    "partners.visionaryAria": "Visit Visionary Foundation website",
    "partners.ycsAria": "Visit Youth Center Smolyan website",
    "partners.dancingAria": "Visit Dancing Play Instagram",
    "partners.jermainAria": "Visit Jermain Instagram",
    "partners.soulAria": "Visit Soul Dynamite Bandcamp",
    "partners.xpomeAria": "Visit XPOME Instagram",
    "partners.waxAria": "Visit WAX.BG website",
    "contact.eyebrow": "Contact",
    "contact.title": "Have a story<br>to tell?",
    "contact.line": "Let's make it together.",
    "contact.availability": "Available for documentaries, commercial productions, music videos, festivals, dance, theatre and cultural collaborations.",
    "contact.panel": "Every project starts<br>with a conversation.",
    "contact.cta": "Let's Talk",
    "contact.socialsAria": "Social links",
    "contact.portfolio": "Explore more work on Vimeo <span aria-hidden=\"true\">&rarr;</span>",
    "footer.note": "Independent video production from Bulgaria.",
    "video.closeAria": "Close video",
    "video.title": "Video preview",
    "work.category.Street Art": "Street Art",
    "work.category.Documentary": "Documentary",
    "work.category.Dance & Theatre": "Dance & Theatre",
    "work.category.Music & Festivals": "Music & Festivals",
    "work.role.Director / Videographer / Video Editor": "Director / Videographer / Video Editor",
    "work.role.Videographer / Video Editor": "Videographer / Video Editor",
    "work.role.Video Editor": "Video Editor",
    "work.role.Director / Video Editor": "Director / Video Editor"
  },
  bg: {
    "site.title": "Ekzperimental — Независима видео продукция",
    "site.description": "EKZPERIMENTAL е независимо студио за видео продукция в България, което създава документални филми, комерсиални видеа, музикални видеа, танцови, театрални, фестивални и културни проекти.",
    "site.ogDescription": "Документални филми, комерсиални видеа, музикални видеа, танц и театър, фестивални проекти и експериментална видео работа.",
    "site.twitterDescription": "Независима видео продукция за документални филми, музикални видеа, културни проекти, фестивали, танц, театър и комерсиални продукции.",
    "skip.link": "Към съдържанието",
    "nav.aria": "Основна навигация",
    "nav.home": "Начало на EKZPERIMENTAL",
    "nav.open": "Отвори менюто",
    "nav.close": "Затвори менюто",
    "nav.work": "Проекти",
    "nav.services": "Услуги",
    "nav.about": "За нас",
    "nav.contact": "Контакт",
    "language.bg": "Превключи на български",
    "language.en": "Превключи на английски",
    "language.group": "Език",
    "hero.eyebrow": "Независима видео продукция.",
    "hero.title": "Истории, които остават.",
    "hero.subtitle": "Независима видео продукция за документални филми, музикални видеа, културни проекти, фестивали, танц, театър и комерсиални продукции. Създадена в България. Работеща навсякъде по света.",
    "hero.ctaWork": "Виж проекти",
    "hero.ctaContact": "Започни проект",
    "hero.scrollAria": "Към подхода",
    "hero.scroll": "Надолу",
    "showreel.aria": "Пусни showreel на EKZPERIMENTAL",
    "showreel.alt": "Превю на showreel на EKZPERIMENTAL",
    "showreel.eyebrow": "Showreel",
    "showreel.title": "Избрани моменти от последните проекти.",
    "showreel.text": "Кратък поглед към документални истории, сцени, музика, фестивали и хора.",
    "approach.eyebrow": "Подход",
    "approach.title": "От идея до финален монтаж.",
    "approach.text": "Ясен процес, който държи историята в центъра.",
    "approach.statsAria": "Студио в числа",
    "approach.years": "Години",
    "approach.projects": "Проекти",
    "approach.services": "Услуги",
    "approach.processAria": "Процес на продукция",
    "approach.processEyebrow": "Как работим",
    "approach.concept": "Концепция",
    "approach.preproduction": "Подготовка",
    "approach.filming": "Снимки",
    "approach.editing": "Монтаж",
    "approach.delivery": "Предаване",
    "work.eyebrow": "Избрани проекти",
    "work.title": "Документални, музикални, сценични и културни видео проекти.",
    "work.text": "Подбрани филми от документални, танцови и театрални проекти, музикални видеа, фестивали и културни инициативи.",
    "work.gridAria": "Избрани проекти на EKZPERIMENTAL",
    "services.eyebrow": "Услуги",
    "services.title": "Видео продукция от първата идея до финалния монтаж.",
    "services.text": "Филми и видеа за артисти, организации, музиканти, изпълнители и независими екипи.",
    "services.documentary.title": "Документални филми",
    "services.documentary.text": "Човешки истории за артисти, НПО и културни организации.",
    "services.commercial.title": "Комерсиална продукция",
    "services.commercial.text": "Видео продукции за брандове, кампании и организации.",
    "services.music.title": "Музикални видеа",
    "services.music.text": "Визуални проекти за музиканти, издания и независими творчески идеи.",
    "services.festival.title": "Фестивално отразяване",
    "services.festival.text": "Фестивални видеа и aftermovie продукции, които съхраняват атмосферата на събитието.",
    "services.dance.title": "Танц и театър",
    "services.dance.text": "Филми и видеа за сцена, движение, пърформанс и репетиционни процеси.",
    "services.editing.title": "Видео монтаж",
    "services.editing.text": "Превръщане на суровия материал в ритъм, структура и история.",
    "about.eyebrow": "За нас",
    "about.title": "Независимо студио за визуални истории.",
    "about.text1": "EKZPERIMENTAL е независимо студио, създадено от Костадин Екзаров. Студиото работи в областта на документалното, комерсиалното, музикалното и културното видео и си сътрудничи с артисти, организации, фестивали и независими екипи в България и извън нея.",
    "about.text2": "С опит в режисурата, хореографията, визуалните изкуства и рекламата, Костадин съчетава разказ, монтаж и визуален дизайн, за да създава внимателно изградени филми, които достигат до хората. Наред с клиентските проекти, той е основател на EKZPERIMENTAL Creative House и съосновател на JAM ON IT Festival и Flava House.",
    "about.photosAria": "Студийна фотография",
    "about.photo1": "Костадин Екзаров зад кадър",
    "about.photo2": "Момент от снимачен процес на EKZPERIMENTAL",
    "about.photo3": "Продукционен детайл от EKZPERIMENTAL",
    "about.photo4": "Портрет на Костадин Екзаров",
    "testimonials.eyebrow": "Какво е да работим заедно",
    "testimonials.title": "Думи от хората, с които сме работили.",
    "testimonials.delyana.text1": "Работата с Костадин Екзаров и EKZPERIMENTAL далеч не е експеримент - тя е привилегия. Още от самото начало Костадин внася креативност, професионализъм и изключителен усет към визуалния разказ във всеки проект.",
    "testimonials.delyana.text2": "Вниманието му към детайла и стремежът към високо качество личат във всеки кадър. Той има забележителна способност да превръща идеи във въздействащи визуални истории, които не само привличат вниманието, но и водят зрителя през емоционално преживяване.",
    "testimonials.delyana.text3": "Това, което наистина отличава EKZPERIMENTAL, е отдадеността към най-добрия възможен резултат, докато целият творчески процес остава плавен, съвместен и приятен. Костадин постоянно надхвърля очакванията и създава впечатляващи резултати, които издигат финалната продукция и оставят трайно впечатление.",
    "testimonials.delyana.text4": "С увереност препоръчвам Костадин Екзаров и EKZPERIMENTAL на всеки, който търси отлична видео продукция и силен визуален разказ. Да го имаш в екипа си не е просто предимство - това е истинска привилегия.",
    "testimonials.delyana.role": "Visionary Foundation / Съосновател / Създател на възможности",
    "testimonials.tzvetina.text1": "Костадин показа високо ниво на професионализъм във всеки етап от нашата съвместна работа - от подготовката и снимките до постпродукцията. Той работи организирано и надеждно, спазва срокове и поддържа ясна и навременна комуникация през целия проект.",
    "testimonials.tzvetina.text2": "Една от най-силните му страни е способността да разпознава драматургията на едно събитие и да я превежда в убедителен визуален разказ. Филмите и трейлърите, които създава, надхвърлят обикновената документация - те изграждат цялостна артистична визия, която отразява идентичността и целите на всеки проект.",
    "testimonials.tzvetina.text3": "Костадин е проактивен, предлага внимателно обмислени творчески идеи и решения, и в същото време работи спокойно в рамките на проектните изисквания, като приема обратна връзка конструктивно. Той показва изключително внимание към детайла, прецизност в монтажа и силно усещане за темпо, ритъм и емоционално въздействие.",
    "testimonials.tzvetina.text4": "По време на съвместната ни работа по заснемане на сценични представления, както и по създаване на трейлъри за Dancing Play и танцовата програма 2Touch, Костадин последователно предаваше материали на високо професионално ниво. Неговата отдаденост към качеството и към най-добрия възможен резултат беше видима през целия процес.",
    "testimonials.tzvetina.text5": "Смятам Костадин за надежден, отговорен и силно креативен професионалист. Бих препоръчала Костадин Екзаров като видеограф и видео автор за проекти, които изискват съчетание от техническа експертиза, артистична чувствителност и професионален подход.",
    "testimonials.tzvetina.role": "\"Creators Association\" / Хореограф, танцьор, изпълнител в плейбек театър и организатор",
    "testimonials.sonja.text1": "Работата с Костадин Екзаров (Екзарка) беше истинско удоволствие. Сътрудничили сме си по няколко проекта и всеки път той надминаваше очакванията ми.",
    "testimonials.sonja.text2": "Костадин е много повече от професионален видеограф и монтажист - той е визуален разказвач. За мен видеата му са истински произведения на изкуството. Има изключително око за детайла, движението, израженията и емоцията и успява да улови истинската атмосфера и енергия на всяко събитие.",
    "testimonials.sonja.text3": "Още по-впечатляващ е монтажът му. Той има забележителната способност да свързва напълно различни кадри в плавен разказ с естествен ритъм, който задържа вниманието от началото до края. Всеки преход изглежда осъзнат и всеки кадър служи на историята.",
    "testimonials.sonja.text4": "Освен творчески талант, Костадин притежава и много силен професионализъм. Той е точен, надежден и винаги спазва срокове - често дори преди тях. Комуникацията е лека и можеш да разчиташ, че ще подходи към всеки проект с отдаденост и внимание към детайла.",
    "testimonials.sonja.text5": "Препоръчвам Костадин с цялото си сърце на всеки, който търси отлична видео продукция. Работата с него е вдъхновяваща, лесна и истински удовлетворяваща.",
    "testimonials.sonja.role": "Родопски драматичен театър \"Николай Хайтов\" / Маркетинг мениджър",
    "testimonials.readMore": "Прочети още →",
    "testimonials.closeAria": "Затвори препоръката",
    "testimonials.modalTitle": "Препоръка",
    "partners.eyebrow": "Партньори",
    "partners.title": "Съвместни проекти с артисти, фестивали, фондации и културни екипи.",
    "partners.text": "Сътрудничества в сферата на street art, пърформанс, културни програми и независими творчески проекти.",
    "partners.visionaryAria": "Посети сайта на Visionary Foundation",
    "partners.ycsAria": "Посети сайта на Youth Center Smolyan",
    "partners.dancingAria": "Посети Instagram на Dancing Play",
    "partners.jermainAria": "Посети Instagram на Jermain",
    "partners.soulAria": "Посети Bandcamp на Soul Dynamite",
    "partners.xpomeAria": "Посети Instagram на XPOME",
    "partners.waxAria": "Посети сайта на WAX.BG",
    "contact.eyebrow": "Контакт",
    "contact.title": "Имаш история<br>за филм?",
    "contact.line": "Нека я създадем заедно.",
    "contact.availability": "За документални филми, комерсиални продукции, музикални видеа, фестивали, танц, театър и културни колаборации.",
    "contact.panel": "Всеки проект започва<br>с разговор.",
    "contact.cta": "Нека поговорим",
    "contact.socialsAria": "Социални линкове",
    "contact.portfolio": "Още проекти във Vimeo <span aria-hidden=\"true\">&rarr;</span>",
    "footer.note": "Независима видео продукция от България.",
    "video.closeAria": "Затвори видеото",
    "video.title": "Видео преглед",
    "work.category.Street Art": "Street Art",
    "work.category.Documentary": "Документално",
    "work.category.Dance & Theatre": "Танц и театър",
    "work.category.Music & Festivals": "Музика и фестивали",
    "work.role.Director / Videographer / Video Editor": "Режисьор / Видеограф / Монтажист",
    "work.role.Videographer / Video Editor": "Видеограф / Монтажист",
    "work.role.Video Editor": "Монтажист",
    "work.role.Director / Video Editor": "Режисьор / Монтажист"
  }
};

function getStoredLanguage() {
  try {
    const storedLanguage = window.localStorage?.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function storeLanguage(language) {
  try {
    window.localStorage?.setItem(STORAGE_KEY, language);
  } catch {
    // The site continues in memory-only mode when localStorage is unavailable.
  }
}

function getTranslation(language, key) {
  const value = translations[language]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key];
  if (value === undefined) {
    console.warn(`[i18n] Missing translation key: ${key}`);
    return "";
  }
  return value;
}

function setMeta(selector, attribute, language, key) {
  const element = document.querySelector(selector);
  if (!element) return;
  element.setAttribute(attribute, getTranslation(language, key));
}

function syncOpenTestimonialModal() {
  const modal = document.querySelector("[data-testimonial-modal][open]");
  const sourceIndex = modal?.dataset.testimonialIndex;
  if (!modal || sourceIndex === undefined) return;

  const source = document.querySelector(`.testimonial[data-testimonial-index="${sourceIndex}"]`);
  const modalName = modal.querySelector("[data-testimonial-modal-name]");
  const modalMeta = modal.querySelector("[data-testimonial-modal-meta]");
  const modalQuote = modal.querySelector("[data-testimonial-modal-quote]");
  const sourceName = source?.querySelector("figcaption strong");
  const sourceMeta = source?.querySelector("figcaption span");
  const sourceQuote = source?.querySelector("blockquote");
  if (!source || !modalName || !modalMeta || !modalQuote || !sourceName || !sourceMeta || !sourceQuote) return;

  modalName.textContent = sourceName.textContent.trim();
  modalMeta.textContent = sourceMeta.textContent.trim();
  modalQuote.innerHTML = sourceQuote.innerHTML;
}

function applyTranslations(language) {
  document.documentElement.lang = language;
  document.title = getTranslation(language, "site.title");

  setMeta('meta[name="description"]', "content", language, "site.description");
  setMeta('meta[property="og:title"]', "content", language, "site.title");
  setMeta('meta[property="og:description"]', "content", language, "site.ogDescription");
  setMeta('meta[name="twitter:title"]', "content", language, "site.title");
  setMeta('meta[name="twitter:description"]', "content", language, "site.twitterDescription");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getTranslation(language, element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = getTranslation(language, element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getTranslation(language, element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", getTranslation(language, element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-i18n-work-category]").forEach((element) => {
    const category = getTranslation(language, `work.category.${element.dataset.i18nWorkCategory}`);
    element.textContent = `${category} / ${element.dataset.workYear}`;
  });

  document.querySelectorAll("[data-i18n-work-role]").forEach((element) => {
    element.textContent = getTranslation(language, `work.role.${element.dataset.i18nWorkRole}`);
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  if (navToggle) {
    navToggle.dataset.labelOpen = getTranslation(language, "nav.open");
    navToggle.dataset.labelClose = getTranslation(language, "nav.close");
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", isOpen ? navToggle.dataset.labelClose : navToggle.dataset.labelOpen);
  }

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    const isActive = button.dataset.languageButton === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  syncOpenTestimonialModal();
  document.documentElement.dataset.language = language;
}

export function initI18n() {
  const switcher = document.querySelector("[data-language-switcher]");
  let currentLanguage = getStoredLanguage();

  applyTranslations(currentLanguage);

  switcher?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language-button]");
    if (!button) return;

    const nextLanguage = button.dataset.languageButton;
    if (!SUPPORTED_LANGUAGES.includes(nextLanguage) || nextLanguage === currentLanguage) return;

    currentLanguage = nextLanguage;
    storeLanguage(currentLanguage);
    applyTranslations(currentLanguage);
  });
}
