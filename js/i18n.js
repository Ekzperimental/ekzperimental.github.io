const STORAGE_KEY = "ekzperimental-language";
const DEFAULT_LANGUAGE = "en";
const LANGUAGE_PREFERENCE_DURATION = 30 * 24 * 60 * 60 * 1000;
const SUPPORTED_LANGUAGES = ["en", "bg"];

const translations = {
  en: {
    "site.title": "EKZPERIMENTAL — Independent Film & Video Production Studio",
    "site.description": "Independent film and video production studio based in Bulgaria. Documentary films, brand films, music videos, cultural projects and remote post-production worldwide.",
    "site.ogDescription": "Rooted in culture. Open to the world.",
    "site.twitterDescription": "Rooted in culture. Open to the world.",
    "site.ogLocale": "en_GB",
    "site.ogLocaleAlternate": "bg_BG",
    "site.imageAlt": "EKZPERIMENTAL logo with the headline Stories that matter on a dark cinematic background.",
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
    "hero.subtitle": "An independent studio for filmmaking, video production and post-production. Rooted in culture. Open to the world.",
    "hero.ctaWork": "View Work",
    "hero.ctaContact": "Start a Project",
    "hero.scrollAria": "Scroll to approach",
    "hero.scroll": "Scroll",
    "hero.pauseBackground": "Pause background video",
    "hero.playBackground": "Play background video",
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
    "services.title": "Different forms. One creative vision.",
    "services.text": "Films and video production for artists, brands, cultural organisations and production teams.",
    "services.documentary.title": "Documentary Films",
    "services.documentary.intro": "Real people. Stories worth telling.",
    "services.documentary.description": "We create documentary films and portraits that explore people, culture and the world around us. From initial research to the final edit, our approach is rooted in authenticity and a strong cinematic vision.",
    "services.documentary.text": "Authentic stories about people, culture and ideas.",
    "services.commercial.title": "Commercial Production",
    "services.commercial.intro": "Your brand. A story worth sharing.",
    "services.commercial.description": "We create commercial films and branded content that combine cinematic imagery with thoughtful storytelling. From concept to final delivery, we focus on the identity, message and audience of each project.",
    "services.commercial.text": "Creative films for brands, businesses and campaigns.",
    "services.streetArt.title": "Street Art",
    "services.streetArt.text": "Cinematic films about murals, graffiti and urban art.",
    "services.streetArt.intro": "From the first sketch to the finished wall.",
    "services.streetArt.description": "We create films that capture the creative process behind murals, graffiti and urban art. Through close observation and personal stories, we explore the artists, their work and the spaces they transform.",
    "services.music.title": "Music Videos",
    "services.music.intro": "Every track has its own visual world.",
    "services.music.description": "We work with artists, bands and producers to translate music into images. From concept and direction to filming and editing, each video is shaped by the rhythm, character and artistic identity of the music.",
    "services.music.text": "A visual identity for every sound.",
    "services.festival.title": "Festivals & Events",
    "services.festival.intro": "Beyond the final applause.",
    "services.festival.description": "From live performances and backstage moments to the energy of the crowd, we capture what makes each event unique. Dynamic recaps, aftermovies and promotional content that keep the experience alive and build anticipation for what's next.",
    "services.festival.text": "Dynamic recaps and aftermovies that capture the live experience.",
    "services.dance.title": "Dance & Theatre",
    "services.dance.intro": "When movement becomes a language.",
    "services.dance.description": "From the first rehearsal to the stage, we explore the relationship between the body, space and emotion. Working with dancers, choreographers and theatre artists, we bring the performing arts into dialogue with cinema.",
    "services.dance.text": "A dialogue between cinema and the performing arts.",
    "services.editing.title": "Video Editing & Post-Production",
    "services.editing.intro": "Where the story takes shape.",
    "services.editing.description": "Editing is where structure, rhythm and emotion come together. We collaborate remotely with filmmakers, production companies and agencies, providing creative editing, colour correction, sound finishing and final delivery across a range of formats.",
    "services.editing.close": "Close service details",
    "services.editing.placeholder": "Video example — coming soon",
    "services.editing.text": "Creative editing and remote collaboration worldwide.",
    "about.eyebrow": "About",
    "about.title": "A compact studio for films with memory.",
    "about.text1": "Founded by filmmaker Kostadin Ekzarov, EKZPERIMENTAL is an independent studio based in Bulgaria, working across documentary filmmaking, commercial production, music and the performing arts.",
    "about.text2": "With a background in directing, choreography, visual arts and advertising, Kostadin brings together filmmaking, editing and visual design. Alongside his film work, he is the founder of EKZPERIMENTAL Creative House and co-founder of JAM ON IT Festival and Flava House.",
    "about.photosAria": "Studio photography",
    "about.photo1": "Kostadin Ekzarov behind the scenes",
    "about.photo2": "Filmmaking moment by EKZPERIMENTAL",
    "about.photo3": "EKZPERIMENTAL production detail",
    "about.photo4": "Kostadin Ekzarov portrait",
    "testimonials.eyebrow": "What it’s like working together",
    "testimonials.title": "Words from the people we've worked with.",
    "testimonials.delyana.text1": "Working with Kostadin Ekzarov and EKZPERIMENTAL is far from an experiment — it is a privilege. From the very beginning, Kostadin brings creativity, professionalism, and an exceptional eye for visual storytelling to every project.",
    "testimonials.delyana.text2": "His attention to detail and commitment to excellence are evident in every frame. He has a remarkable ability to transform ideas into compelling visual narratives that not only capture attention but also take the viewer on an emotional journey.",
    "testimonials.delyana.text3": "What truly sets EKZPERIMENTAL apart is the dedication to achieving the highest quality while making the entire creative process smooth, collaborative, and enjoyable. He consistently exceeds expectations, delivering stunning results that elevate the final production and leave a lasting impression.",
    "testimonials.delyana.text4": "I can wholeheartedly recommend Kostadin Ekzarov and EKZPERIMENTAL to anyone looking for outstanding video production and cinematic storytelling. Having him as part of your team is not just an advantage — it is a genuine privilege.",
    "testimonials.delyana.role": "Visionary Foundation / Co-founder / Opportunity creator",
    "testimonials.tzvetina.text1": "Kostadin demonstrated a high level of professionalism throughout every stage of our collaboration, from pre-production and filming to the post-production process. He works in an organized and reliable manner, consistently meets deadlines, and maintains clear and timely communication throughout the entire project.",
    "testimonials.tzvetina.text2": "One of his greatest strengths is his ability to recognize the dramatic essence of an event and translate it into a compelling visual narrative. The films and trailers he creates go beyond simple documentation — they communicate a cohesive artistic vision that reflects the identity and objectives of each project.",
    "testimonials.tzvetina.text3": "Kostadin is proactive, contributes thoughtful creative ideas and solutions, and at the same time works seamlessly within project requirements while responding constructively to feedback. He demonstrates exceptional attention to detail, precision in editing, and a strong sense of pacing, rhythm, and emotional impact.",
    "testimonials.tzvetina.text4": "During our collaboration on filming stage performances, as well as creating trailers for Dancing Play and the 2Touch dance programme, Kostadin consistently delivered work of a high professional standard. His commitment to quality and dedication to achieving the best possible result were evident throughout the entire process.",
    "testimonials.tzvetina.text5": "I consider Kostadin to be a reliable, responsible, and highly creative professional. I would confidently recommend Kostadin Ekzarov as a videographer and video artist for projects that require a combination of technical expertise, artistic sensitivity, and a professional approach.",
    "testimonials.tzvetina.role": "\"Creators Association\" / Choreographer, Dancer, Playback Theatre Performer and Organizer",
    "testimonials.sonja.text1": "Working with Kostadin Ekzarov (Ekzarka) has been an absolute pleasure. We have collaborated on several projects, and every time he has exceeded my expectations.",
    "testimonials.sonja.text2": "Kostadin is far more than a professional videographer and editor — he is a visual storyteller. To me, his videos are genuine works of art. He has an exceptional eye for detail, movement, expressions, and emotion, and he captures the true atmosphere and energy of every event. By skillfully combining different cameras, lenses, and equipment, he creates cinematic visuals that feel both authentic and captivating.",
    "testimonials.sonja.text3": "What impresses me even more is his editing. He has a remarkable ability to make completely different shots flow together seamlessly, creating a natural rhythm that keeps the viewer engaged from beginning to end. Every transition feels intentional, and every frame serves the story.",
    "testimonials.sonja.text4": "Beyond his creative talent, Kostadin is incredibly professional. He is precise, reliable, and consistently delivers on time — often even ahead of schedule. Communication is always smooth, and you can count on him to approach every project with dedication and attention to detail.",
    "testimonials.sonja.text5": "I wholeheartedly recommend Kostadin to anyone looking for outstanding video production. Working with him is inspiring, effortless, and truly rewarding.",
    "testimonials.sonja.role": "Rhodopean Drama Theatre \"Nikolay Haitov\" / Marketing Manager",
    "testimonials.readMore": "Read more →",
    "testimonials.closeAria": "Close testimonial",
    "testimonials.modalTitle": "Testimonial",
    "partners.eyebrow": "Partners",
    "partners.title": "Collaborations with artists, festivals, foundations and cultural teams.",
    "partners.text": "Long-running work across street art, performance, cultural programmes and independent creative projects.",
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
    "contact.availability": "Available for film production, creative collaborations and remote post-production worldwide.",
    "contact.panel": "Every project starts<br>with a conversation.",
    "contact.cta": "Let's Talk",
    "contact.socialsAria": "Social links",
    "contact.portfolio": "Explore more work on Vimeo <span aria-hidden=\"true\">&rarr;</span>",
    "language.storageNotice": "Your language choice is remembered on this device for up to 30 days. See Privacy & Cookies for details.",
    "privacy.link": "Privacy & Cookies",
    "privacy.title": "Privacy & Cookies",
    "privacy.close": "Close privacy information",
    "privacy.draft": "Draft for local review · Version 0.1 · 23 November 2026. Effective date: to be confirmed before publication.",
    "privacy.controller.title": "Who we are",
    "privacy.controller.text": "EKZPERIMENTAL EOOD, Bulgaria. Website: <a href=\"https://ekzperimental.org/\" target=\"_blank\" rel=\"noopener noreferrer\">ekzperimental.org</a>. For privacy enquiries, contact <a href=\"mailto:k.ekzarov@swkz.org\">k.ekzarov@swkz.org</a>.",
    "privacy.hosting.title": "Hosting and technical data",
    "privacy.hosting.text": "The website is hosted through GitHub Pages. Delivering pages and protecting the service involves technical request data, including IP addresses and browser information. The animation libraries, images and background video are served with the website’s own files.",
    "privacy.email.title": "Email enquiries",
    "privacy.email.text": "If you email us, we receive the contact details, message and any attachments you choose to send so we can respond to your enquiry. Selecting an email link opens your email application; it does not send a message automatically.",
    "privacy.vimeo.title": "Vimeo videos",
    "privacy.vimeo.text": "The Vimeo player loads when you select Play, connecting your browser to Vimeo and sharing technical request information. We use dnt=1 to limit player session data and analytics. This does not prevent all processing or necessary security cookies, and your browser may send Vimeo cookies stored previously. Read <a href=\"https://vimeo.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Vimeo’s privacy information</a>.",
    "privacy.language.title": "Remembering your language",
    "privacy.language.text": "When you explicitly select Bulgarian or English, we save that choice in your browser’s local storage for up to 30 days. Loading the site does not renew this period. If the setting expires or is unavailable, English is used until you choose a language. You can remove the preference by clearing the website’s stored data. It is not a tracking identifier.",
    "privacy.links.title": "External links",
    "privacy.links.text": "Our social and partner links open other websites with their own privacy practices. These are ordinary links, rather than automatically loaded social media widgets.",
    "privacy.rights.title": "Your rights and contact",
    "privacy.rights.text": "Depending on applicable law and the circumstances, you may request information, access, correction, deletion, restriction or portability of your personal data, object to processing, and withdraw consent where processing relies on consent. Contact <a href=\"mailto:k.ekzarov@swkz.org\">k.ekzarov@swkz.org</a>. You may lodge a complaint with the <a href=\"https://cpdp.bg/\" target=\"_blank\" rel=\"noopener noreferrer\">Bulgarian Commission for Personal Data Protection</a>.",
    "privacy.review.title": "Before publication",
    "privacy.review.text": "This draft will be finalised after the required controller information, legal bases, retention criteria, international transfer arrangements and consent requirements have been confirmed. A 30-day language setting and Vimeo DNT do not by themselves establish an exemption from consent.",
    "footer.note": "Independent video production from Bulgaria.",
    "video.closeAria": "Close video",
    "video.title": "Video preview",
    "work.category.Street Art": "Street Art",
    "work.category.Documentary": "Documentary",
    "work.category.Dance & Theatre": "Dance & Theatre",
    "work.category.Music & Festivals": "Music & Festivals",
    "work.category.Events": "Events",
    "work.myRole": "My Role",
    "work.role.Camera": "Camera",
    "work.role.Director / Video Editor / Videographer": "Director / Video Editor / Videographer",
    "work.role.Director / Videographer / Video Editor": "Director / Videographer / Video Editor",
    "work.role.Videographer / Video Editor": "Videographer / Video Editor",
    "work.role.Video Editor": "Video Editor",
    "work.role.Director / Video Editor": "Director / Video Editor"
  },
  bg: {
    "site.title": "EKZPERIMENTAL — Независимо студио за кино и видеопродукция",
    "site.description": "Независимо студио за кино и видеопродукция в България. Документални и рекламни филми, музикални видеа, културни проекти и дистанционна постпродукция.",
    "site.ogDescription": "С корени в културата. Отворено към света.",
    "site.twitterDescription": "С корени в културата. Отворено към света.",
    "site.ogLocale": "bg_BG",
    "site.ogLocaleAlternate": "en_GB",
    "site.imageAlt": "Лого на EKZPERIMENTAL и надпис Stories that matter върху тъмен кинематографичен фон.",
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
    "hero.eyebrow": "Независима видеопродукция.",
    "hero.title": "Истории, които остават.",
    "hero.subtitle": "Независимо студио за кино, видеопродукция и постпродукция. С корени в културата. Отворено към света.",
    "hero.ctaWork": "Виж проекти",
    "hero.ctaContact": "Започни проект",
    "hero.scrollAria": "Към подхода",
    "hero.scroll": "Надолу",
    "hero.pauseBackground": "Пауза на фоновото видео",
    "hero.playBackground": "Възпроизвеждане на фоновото видео",
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
    "work.title": "Документални, музикални, сценични и културни видеопроекти.",
    "work.text": "Подбрани филми от документални, танцови и театрални проекти, музикални видеа, фестивали и културни инициативи.",
    "work.gridAria": "Избрани проекти на EKZPERIMENTAL",
    "services.eyebrow": "Услуги",
    "services.title": "Различни форми. Един творчески поглед.",
    "services.text": "Филми и видеопродукция за артисти, брандове, културни организации и продуцентски екипи.",
    "services.documentary.title": "Документални филми",
    "services.documentary.intro": "Истински хора. Истории, които си струва да бъдат разказани.",
    "services.documentary.description": "Създаваме документални филми и портрети, които изследват хората, културата и света около нас. От първоначалното проучване до финалния монтаж залагаме на автентичността и кинематографичния подход.",
    "services.documentary.text": "Истински истории за хора, култура и идеи.",
    "services.commercial.title": "Рекламни продукции",
    "services.commercial.intro": "Вашият бранд. История, която си струва да бъде споделена.",
    "services.commercial.description": "Създаваме рекламни филми и видеосъдържание, които съчетават кинематографична визия и въздействащ разказ. От концепцията до финалния монтаж се фокусираме върху идентичността, посланието и аудиторията на всеки проект.",
    "services.commercial.text": "Авторски видеопродукции за брандове, компании и кампании.",
    "services.streetArt.title": "Street Art",
    "services.streetArt.text": "Филми за стенописи, графити и изкуство в градска среда.",
    "services.streetArt.intro": "От първата скица до завършения стенопис.",
    "services.streetArt.description": "Създаваме филми, които проследяват творческия процес зад стенописите, графитите и изкуството в градска среда. Чрез наблюдение и лични истории представяме артистите, техните творби и пространствата, които преобразяват.",
    "services.music.title": "Музикални видеа",
    "services.music.intro": "Всяка композиция има свой визуален свят.",
    "services.music.description": "Работим с изпълнители, групи и музикални продуценти, за да превърнем музиката в образи. От концепцията и режисурата до заснемането и монтажа — всяко видео носи ритъма, характера и индивидуалността на артиста.",
    "services.music.text": "Визуална идентичност за всеки звук.",
    "services.festival.title": "Фестивали и събития",
    "services.festival.intro": "И след последните аплодисменти.",
    "services.festival.description": "От изпълненията на сцената и моментите зад кулисите до енергията на публиката — улавяме онова, което прави всяко събитие неповторимо. Динамични обзорни и промоционални видеа, които съхраняват преживяването и създават очакване за следващото издание.",
    "services.festival.text": "Динамични видеа, които пресъздават атмосферата на живо.",
    "services.dance.title": "Танц и театър",
    "services.dance.intro": "Когато движението се превръща в език.",
    "services.dance.description": "От първата репетиция до сцената изследваме връзката между тялото, пространството и емоцията. Работим с танцьори, хореографи и театрални артисти, създавайки филми на границата между киното и сценичното изкуство.",
    "services.dance.text": "Кино и сценично изкуство в диалог.",
    "services.editing.title": "Видеомонтаж и постпродукция",
    "services.editing.intro": "Там, където историята придобива форма.",
    "services.editing.description": "Монтажът е мястото, където структурата, ритъмът и емоцията се срещат. Работим дистанционно с режисьори, продуцентски компании и агенции, предлагайки творчески монтаж, цветови корекции, звукова обработка и подготовка на финални версии в различни формати.",
    "services.editing.close": "Затвори подробностите за услугата",
    "services.editing.placeholder": "Видеопример — предстои",
    "services.editing.text": "Творчески монтаж и дистанционна работа с екипи от цял свят.",
    "about.eyebrow": "За нас",
    "about.title": "Независимо студио за визуални истории.",
    "about.text1": "EKZPERIMENTAL е независимо студио, създадено от режисьора Костадин Екзаров, което работи в областта на документалното кино, рекламната видеопродукция, музиката и сценичните изкуства.",
    "about.text2": "С опит в режисурата, хореографията, визуалните изкуства и рекламата Костадин съчетава кино, монтаж и визуален дизайн. Наред с филмовата си работа той е основател на EKZPERIMENTAL Creative House и съосновател на JAM ON IT Festival и Flava House.",
    "about.photosAria": "Студийна фотография",
    "about.photo1": "Костадин Екзаров зад кадър",
    "about.photo2": "Момент от снимачен процес на EKZPERIMENTAL",
    "about.photo3": "Продукционен детайл от EKZPERIMENTAL",
    "about.photo4": "Портрет на Костадин Екзаров",
    "testimonials.eyebrow": "Какво е да работим заедно",
    "testimonials.title": "Думи от хората, с които сме работили.",
    "testimonials.delyana.text1": "Работата с Костадин Екзаров и EKZPERIMENTAL далеч не е експеримент — тя е привилегия. Още от самото начало Костадин внася креативност, професионализъм и изключителен усет към визуалния разказ във всеки проект.",
    "testimonials.delyana.text2": "Вниманието му към детайла и стремежът към високо качество личат във всеки кадър. Той има забележителна способност да превръща идеи във въздействащи визуални истории, които не само привличат вниманието, но и водят зрителя през емоционално преживяване.",
    "testimonials.delyana.text3": "Това, което наистина отличава EKZPERIMENTAL, е отдадеността към най-добрия възможен резултат, докато целият творчески процес остава плавен, съвместен и приятен. Костадин постоянно надхвърля очакванията и създава впечатляващи резултати, които издигат финалната продукция и оставят трайно впечатление.",
    "testimonials.delyana.text4": "С увереност препоръчвам Костадин Екзаров и EKZPERIMENTAL на всеки, който търси отлична видеопродукция и силен визуален разказ. Да го имаш в екипа си не е просто предимство — това е истинска привилегия.",
    "testimonials.delyana.role": "Visionary Foundation / Съосновател / Създател на възможности",
    "testimonials.tzvetina.text1": "Костадин показа високо ниво на професионализъм във всеки етап от нашата съвместна работа — от подготовката и снимките до постпродукцията. Той работи организирано и надеждно, спазва срокове и поддържа ясна и навременна комуникация през целия проект.",
    "testimonials.tzvetina.text2": "Една от най-силните му страни е способността да разпознава драматургията на едно събитие и да я превежда в убедителен визуален разказ. Филмите и трейлърите, които създава, надхвърлят обикновената документация — те изграждат цялостна артистична визия, която отразява идентичността и целите на всеки проект.",
    "testimonials.tzvetina.text3": "Костадин е проактивен, предлага внимателно обмислени творчески идеи и решения и в същото време работи спокойно в рамките на проектните изисквания, като приема обратна връзка конструктивно. Той показва изключително внимание към детайла, прецизност в монтажа и силно усещане за темпо, ритъм и емоционално въздействие.",
    "testimonials.tzvetina.text4": "По време на съвместната ни работа по заснемане на сценични представления, както и по създаване на трейлъри за Dancing Play и танцовата програма 2Touch, Костадин последователно предаваше материали на високо професионално ниво. Неговата отдаденост към качеството и към най-добрия възможен резултат беше видима през целия процес.",
    "testimonials.tzvetina.text5": "Смятам Костадин за надежден, отговорен и силно креативен професионалист. Бих препоръчала Костадин Екзаров като видеограф и видео автор за проекти, които изискват съчетание от техническа експертиза, артистична чувствителност и професионален подход.",
    "testimonials.tzvetina.role": "\"Creators Association\" / Хореограф, танцьор, изпълнител в плейбек театър и организатор",
    "testimonials.sonja.text1": "Работата с Костадин Екзаров (Екзарка) беше истинско удоволствие. Сътрудничили сме си по няколко проекта и всеки път той надминаваше очакванията ми.",
    "testimonials.sonja.text2": "Костадин е много повече от професионален видеограф и монтажист — той е визуален разказвач. За мен видеата му са истински произведения на изкуството. Има изключително око за детайла, движението, израженията и емоцията и успява да улови истинската атмосфера и енергия на всяко събитие.",
    "testimonials.sonja.text3": "Още по-впечатляващ е монтажът му. Той има забележителната способност да свързва напълно различни кадри в плавен разказ с естествен ритъм, който задържа вниманието от началото до края. Всеки преход изглежда осъзнат и всеки кадър служи на историята.",
    "testimonials.sonja.text4": "Освен творчески талант Костадин притежава и много силен професионализъм. Той е точен, надежден и винаги спазва срокове — често дори преди тях. Комуникацията е лека и можеш да разчиташ, че ще подходи към всеки проект с отдаденост и внимание към детайла.",
    "testimonials.sonja.text5": "Препоръчвам Костадин с цялото си сърце на всеки, който търси отлична видеопродукция. Работата с него е вдъхновяваща, лесна и истински удовлетворяваща.",
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
    "contact.availability": "За филмови продукции, творчески сътрудничества и дистанционна постпродукция по проекти от цял свят.",
    "contact.panel": "Всеки проект започва<br>с разговор.",
    "contact.cta": "Нека поговорим",
    "contact.socialsAria": "Социални мрежи",
    "contact.portfolio": "Още проекти във Vimeo <span aria-hidden=\"true\">&rarr;</span>",
    "language.storageNotice": "Езиковият избор се запомня на това устройство до 30 дни. Подробности — в „Поверителност и бисквитки“.",
    "privacy.link": "Поверителност и бисквитки",
    "privacy.title": "Поверителност и бисквитки",
    "privacy.close": "Затвори информацията за поверителност",
    "privacy.draft": "Проект за локален преглед · Версия 0.1 · 23 ноември 2026 г. Датата на влизане в сила ще се потвърди преди публикуване.",
    "privacy.controller.title": "Кои сме ние",
    "privacy.controller.text": "EKZPERIMENTAL EOOD, България. Уебсайт: <a href=\"https://ekzperimental.org/\" target=\"_blank\" rel=\"noopener noreferrer\">ekzperimental.org</a>. За въпроси относно личните данни: <a href=\"mailto:k.ekzarov@swkz.org\">k.ekzarov@swkz.org</a>.",
    "privacy.hosting.title": "Хостинг и технически данни",
    "privacy.hosting.text": "Сайтът се хоства чрез GitHub Pages. Зареждането на страниците и защитата на услугата включват обработване на технически данни за заявките, включително IP адреси и информация за браузъра. Библиотеките за анимация, изображенията и фоновото видео се зареждат от файловете на самия сайт.",
    "privacy.email.title": "Запитвания по имейл",
    "privacy.email.text": "Ако ни пишете, получаваме данните за контакт, съобщението и приложенията, които решите да изпратите, за да отговорим на запитването. Избирането на имейл линк отваря Вашето пощенско приложение; то не изпраща съобщение автоматично.",
    "privacy.vimeo.title": "Видеа във Vimeo",
    "privacy.vimeo.text": "Плеърът на Vimeo се зарежда, когато изберете Play, като свързва браузъра Ви с Vimeo и предава техническа информация за заявката. Използваме dnt=1 за ограничаване на данните за сесията и анализите на плеъра. Това не изключва всяко обработване или необходимите бисквитки за сигурност, а браузърът може да изпрати вече съхранени Vimeo бисквитки. Вижте <a href=\"https://vimeo.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">информацията за поверителност на Vimeo</a>.",
    "privacy.language.title": "Запомняне на езика",
    "privacy.language.text": "След изричен избор на български или английски запазваме настройката в локалното хранилище на браузъра до 30 дни. Зареждането на сайта не подновява срока. Ако настройката е изтекла или недостъпна, се използва английски до нов избор. Можете да я премахнете чрез изчистване на съхранените данни за сайта. Тя не е идентификатор за проследяване.",
    "privacy.links.title": "Външни връзки",
    "privacy.links.text": "Социалните и партньорските линкове отварят други сайтове със собствени правила за поверителност. Това са обикновени връзки, а не автоматично зареждани социални модули.",
    "privacy.rights.title": "Вашите права и контакт",
    "privacy.rights.text": "Според приложимото право и конкретните обстоятелства можете да поискате информация, достъп, корекция, изтриване, ограничаване или преносимост на личните си данни, да възразите срещу обработването и да оттеглите съгласие, когато обработването се основава на него. Контакт: <a href=\"mailto:k.ekzarov@swkz.org\">k.ekzarov@swkz.org</a>. Имате право да подадете жалба до <a href=\"https://cpdp.bg/\" target=\"_blank\" rel=\"noopener noreferrer\">Комисията за защита на личните данни</a>.",
    "privacy.review.title": "Преди публикуване",
    "privacy.review.text": "Проектът ще бъде финализиран след потвърждение на задължителната информация за администратора, правните основания, критериите за съхранение, международните трансфери и изискванията за съгласие. Срокът от 30 дни и Vimeo DNT сами по себе си не установяват освобождаване от съгласие.",
    "footer.note": "Независима видеопродукция от България.",
    "video.closeAria": "Затвори видеото",
    "video.title": "Преглед на видео",
    "work.category.Street Art": "Street Art",
    "work.category.Documentary": "Документално",
    "work.category.Dance & Theatre": "Танц и театър",
    "work.category.Music & Festivals": "Музика и фестивали",
    "work.category.Events": "Събития",
    "work.myRole": "Моята роля",
    "work.role.Camera": "Камера",
    "work.role.Director / Video Editor / Videographer": "Режисьор / Монтажист / Видеограф",
    "work.role.Director / Videographer / Video Editor": "Режисьор / Видеограф / Монтажист",
    "work.role.Videographer / Video Editor": "Видеограф / Монтажист",
    "work.role.Video Editor": "Монтажист",
    "work.role.Director / Video Editor": "Режисьор / Монтажист"
  }
};

function getStoredLanguage() {
  try {
    const stored = window.localStorage?.getItem(STORAGE_KEY);
    if (stored === null || stored === undefined) return DEFAULT_LANGUAGE;
    let preference;
    try { preference = JSON.parse(stored); } catch { /* Discard undated legacy values. */ }
    const now = Date.now();
    if (preference && SUPPORTED_LANGUAGES.includes(preference.language)
      && Number.isSafeInteger(preference.expiresAt)
      && preference.expiresAt > now
      && preference.expiresAt <= now + LANGUAGE_PREFERENCE_DURATION) {
      return preference.language;
    }
    window.localStorage?.removeItem(STORAGE_KEY);
  } catch {
    // The default language remains available when storage is blocked.
  }
  return DEFAULT_LANGUAGE;
}

function storeLanguage(language) {
  try {
    window.localStorage?.setItem(STORAGE_KEY, JSON.stringify({
      language,
      expiresAt: Date.now() + LANGUAGE_PREFERENCE_DURATION,
    }));
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
  setMeta('meta[property="og:locale"]', "content", language, "site.ogLocale");
  setMeta('meta[property="og:locale:alternate"]', "content", language, "site.ogLocaleAlternate");
  setMeta('meta[property="og:image:alt"]', "content", language, "site.imageAlt");
  setMeta('meta[name="twitter:image:alt"]', "content", language, "site.imageAlt");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getTranslation(language, element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = getTranslation(language, element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getTranslation(language, element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", getTranslation(language, element.dataset.i18nTitle));
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
    if (!SUPPORTED_LANGUAGES.includes(nextLanguage)) return;

    currentLanguage = nextLanguage;
    storeLanguage(currentLanguage);
    applyTranslations(currentLanguage);
  });
}
