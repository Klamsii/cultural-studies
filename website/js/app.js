/* ==========================================================================
   CULTURAL STUDIES PORTAL - INSTANT LANGUAGE SWITCHER & MASTER READER ENGINE
   ========================================================================== */

let currentLang = 'ru'; // 'ru' or 'en'
let currentCategory = 1; // 1 = Week 1, 2 = Week 2, 'all' = Mega, 'main' = Master Guide
let questionLimit = 10;
let userAnswers = {};
let activeReaderWeek = 1;

// Bilingual UI Text Translations
const uiTranslations = {
    ru: {
        logoSub: "Портал и Тренажер",
        tabW1: "Неделя 1 (Морфология)",
        tabW2: "Неделя 2 (Семиотика)",
        tabAll: "Полный Мега-Тест",
        tabMain: "📖 Мастер-Учебник (MAIN)",
        modeLbl: "Режим вопросов:",
        opt10: "10 Вопросов",
        opt30: "30 Вопросов",
        opt50: "50 Вопросов",
        opt100: "100 Вопросов (Мега Режим)",
        btnRestart: "🔄 Сбросить Тест",
        lblActiveTest: "Активный Тест",
        lblScore: "Счет",
        lblAccuracy: "Точность",
        titleW1: "Неделя 1: Морфология и Язык Культуры",
        titleW2: "Неделя 2: Семиотика и Анатомия Культуры",
        titleAll: "Полный Комплексный Экзамен (Week 1 & 2)",
        titleMain: "📖 Академические Мастер-Учебники (MAIN_RU & MAIN_EN)",
        btnReadW1: "📘 Учебник Недели 1",
        btnReadW2: "📙 Учебник Недели 2",
        qWord: "Вопрос"
    },
    en: {
        logoSub: "Test & Textbook Portal",
        tabW1: "Week 1 (Morphology)",
        tabW2: "Week 2 (Semiotics)",
        tabAll: "Full Mega-Test",
        tabMain: "📖 Master Textbook (MAIN)",
        modeLbl: "Questions Mode:",
        opt10: "10 Questions",
        opt30: "30 Questions",
        opt50: "50 Questions",
        opt100: "100 Questions (Mega Mode)",
        btnRestart: "🔄 Restart Test",
        lblActiveTest: "Active Test",
        lblScore: "Score",
        lblAccuracy: "Accuracy",
        titleW1: "Week 1: Morphology & Language of Culture",
        titleW2: "Week 2: Semiotics & Anatomy of Culture",
        titleAll: "Full Comprehensive Exam (Week 1 & 2)",
        titleMain: "📖 Academic Master Textbooks (MAIN_RU & MAIN_EN)",
        btnReadW1: "📘 Week 1 Textbook",
        btnReadW2: "📙 Week 2 Textbook",
        qWord: "Question"
    }
};

// Bilingual Question Master Bank
const masterQuestionBank = [
    // Week 1
    {
        cat: 'w1',
        q: {
            ru: "1. Каково первоначальное значение латинского выражения «agri cultura»?",
            en: "1. What was the original meaning of the Latin word «agri cultura»?"
        },
        opts: {
            ru: ["возделывание земли / земледелие", "цивилизация", "религия", "традиция", "образование"],
            en: ["cultivation", "civilization", "religion", "tradition", "education"]
        },
        ans: 0,
        exp: {
            ru: "✅ 'Agri cultura' буквально означает возделывание почвы от латинского глагола 'colere'.",
            en: "✅ 'Agri cultura' literally means cultivation of the soil/agriculture from Latin 'colere'."
        }
    },
    {
        cat: 'w1',
        q: {
            ru: "2. Какой древнеримский мыслитель впервые использовал фразу «cultura animi»?",
            en: "2. Which ancient Roman thinker used the phrase «cultura animi»?"
        },
        opts: {
            ru: ["Платон", "Аристотель", "Цицерон", "Сенека", "Марк Аврелий"],
            en: ["Plato", "Aristotle", "Cicero", "Seneca", "Marcus Aurelius"]
        },
        ans: 2,
        exp: {
            ru: "✅ Марк Туллий Цицерон (45 г. до н.э., 'Тускуланские беседы') сформулировал концепцию 'Cultura Animi' (возделывание души).",
            en: "✅ Marcus Tullius Cicero (45 BCE, 'Tusculan Disputations') coined 'Cultura Animi'."
        }
    },
    {
        cat: 'w1',
        q: {
            ru: "3. Какой тип культуры основан на физических объектах и технологиях?",
            en: "3. Which type of culture is based on physical objects and technologies?"
        },
        opts: {
            ru: ["духовная культура", "материальная культура", "символическая культура", "популярная культура", "религиозная культура"],
            en: ["spiritual culture", "material culture", "symbolic culture", "popular culture", "religious culture"]
        },
        ans: 1,
        exp: {
            ru: "✅ Материальная культура охватывает осязаемые артефакты, орудия труда, юрты и технику.",
            en: "✅ Material culture encompasses physical artifacts, tools, architecture, and gadgets."
        }
    },
    {
        cat: 'w1',
        q: {
            ru: "4. Какое явление включает идентификацию людей с животными или объектами?",
            en: "4. Which phenomenon involves the identification of humans with animals or objects?"
        },
        opts: {
            ru: ["тотемизм и анимизм", "рационализм", "гуманизм", "символизм", "романтизм"],
            en: ["totemism and animism", "rationalism", "humanism", "symbolism", "romanticism"]
        },
        ans: 0,
        exp: {
            ru: "✅ Тотемизм (родство с животным тотемом Бөрі) и Анимизм (вера в духов природы).",
            en: "✅ Totemism (kinship with animal totems) and Animism (spirits in nature)."
        }
    },
    {
        cat: 'w1',
        q: {
            ru: "5. Что из перечисленного НЕ является частью духовной культуры?",
            en: "5. Which of the following is NOT part of spiritual culture?"
        },
        opts: {
            ru: ["религия", "искусство", "мифология", "право", "орудия труда и технологии"],
            en: ["religion", "art", "mythology", "law", "tools and technologies"]
        },
        ans: 4,
        exp: {
            ru: "✅ Орудия труда и технологии относятся СТРОГО к Материальной культуре.",
            en: "✅ Tools and technologies belong strictly to Material Culture."
        }
    },
    {
        cat: 'w1',
        q: {
            ru: "6. Какие философы Просвещения связывали культуру с разумностью и общественным прогрессом?",
            en: "6. Which Enlightenment philosophers associated culture with rationality and social progress?"
        },
        opts: {
            ru: ["Фрейд и Юнг", "Маркс и Энгельс", "Ницше и Хайдеггер", "Вольтер, Монтескье, Гердер", "Дюркгейм и Вебер"],
            en: ["Freud and Jung", "Marx and Engels", "Nietzsche and Heidegger", "Voltaire, Montesquieu, Herder", "Durkheim and Weber"]
        },
        ans: 3,
        exp: {
            ru: "✅ Вольтер, Монтескье, Руссо и Гердер связывали культуру с разумом и преодолением варварства.",
            en: "✅ Voltaire, Montesquieu, Rousseau, and Herder associated culture with rationality."
        }
    },
    {
        cat: 'w1',
        q: {
            ru: "7. Согласно А. Крёберу и К. Клакхону, какое из определений является поведенческим?",
            en: "7. According to Kroeber and Kluckhohn, which of the following is a behavioral definition of culture?"
        },
        opts: {
            ru: ["система ценностей и норм", "совместное, усвоенное человеческое поведение, образ жизни", "структура символов", "список тем", "произвольные смыслы"],
            en: ["a set of values and norms", "shared, learned human behavior, a way of life", "patterned symbols", "a list of topics", "arbitrary meanings"]
        },
        ans: 1,
        exp: {
            ru: "✅ Поведенческое определение: 'совместное, усвоенное человеческое поведение, образ жизни'.",
            en: "✅ Behavioral definition: 'shared, learned human behavior, a way of life'."
        }
    },
    {
        cat: 'w1',
        q: {
            ru: "8. Какой исследовательский метод изучает происхождение и развитие культурных форм?",
            en: "8. Which research method studies the origin and development of cultural forms?"
        },
        opts: {
            ru: ["сравнительный", "динамический", "генетический", "структурно-функциональный", "исторический"],
            en: ["comparative", "dynamic", "genetic", "structural-functional", "historical"]
        },
        ans: 2,
        exp: {
            ru: "✅ Генетический метод (Genetic Method) изучает происхождение (генезис) форм.",
            en: "✅ The Genetic Method studies the genesis and historical origins of forms."
        }
    },
    {
        cat: 'w1',
        q: {
            ru: "9. Какая теория объясняет культуру через мемы («Эгоистичный ген», 1976)?",
            en: "9. Which theory explains culture through memes, introduced in «The Selfish Gene» (1976)?"
        },
        opts: {
            ru: ["социобиологическая теория", "символическая теория", "структурализм", "функционализм", "постмодернизм"],
            en: ["sociobiological theory", "symbolic theory", "structuralism", "functionalism", "postmodernism"]
        },
        ans: 0,
        exp: {
            ru: "✅ Теория репликации мемов Ричарда Докинза относится к социобиологической теории.",
            en: "✅ Richard Dawkins's meme theory belongs to Sociobiological Theory."
        }
    },
    {
        cat: 'w1',
        q: {
            ru: "10. Согласно Эдварду Бернетту Тайлору (1871), культура — это…",
            en: "10. According to Edward Burnett Tylor (1871), culture is…"
        },
        opts: {
            ru: ["Рациональный социальный порядок", "Сложный комплекс, включающий знания, верования, искусство, мораль, законы, обычаи…", "Возделывание души", "Адаптация через мемы", "Система символов"],
            en: ["Rational social order", "Complex which includes knowledge, belief, art, morals, law, custom…", "Cultivation of soul", "Adaptation through memes", "System of symbols"]
        },
        ans: 1,
        exp: {
            ru: "✅ Определение Тайлора 1871 года: 'сложный комплекс, включающий знания, верования, искусство, мораль, законы, обычаи...'.",
            en: "✅ Tylor (1871): 'Complex whole which includes knowledge, belief, art, morals, law, custom...'."
        }
    },

    // Week 2
    {
        cat: 'w2',
        q: {
            ru: "1. Что означает греческое слово «семиотика»?",
            en: "1. What does the Greek word «semiotics» mean?"
        },
        opts: {
            ru: ["структура", "символ", "знак", "слово", "культура"],
            en: ["structure", "symbol", "sign", "word", "culture"]
        },
        ans: 2,
        exp: {
            ru: "✅ Семиотика происходит от греческого 'semeion' — знак.",
            en: "✅ Semiotics comes from Greek 'semeion', meaning 'sign'."
        }
    },
    {
        cat: 'w2',
        q: {
            ru: "2. Кто обосновал концепцию культуры как динамического текста со своими кодами?",
            en: "2. Who introduced the idea that culture can be studied as a dynamic text with its own codes?"
        },
        opts: {
            ru: ["Ролан Барт", "Юрий Лотман", "Юлия Кристева", "Чарльз Сандерс Пирс", "Фердинанд де Соссюр"],
            en: ["Roland Barthes", "Yuri Lotman", "Julia Kristeva", "Charles Sanders Peirce", "Ferdinand de Saussure"]
        },
        ans: 1,
        exp: {
            ru: "✅ Юрий Лотман создал концепцию Семиосферы и культуры как текста.",
            en: "✅ Yuri Lotman formulated the Semiosphere and culture as a dynamic text."
        }
    },
    {
        cat: 'w2',
        q: {
            ru: "3. Что из перечисленного является условным знаком (conventional sign)?",
            en: "3. Which of the following is a conventional sign?"
        },
        opts: {
            ru: ["дым как знак огня", "портрет человека", "дорожный знак STOP", "след ноги на песке", "дерево жизни"],
            en: ["smoke for fire", "portrait", "a traffic sign STOP", "footprint", "tree of life"]
        },
        ans: 2,
        exp: {
            ru: "✅ Дорожный знак STOP опирается исключительно на общественное соглашение.",
            en: "✅ A traffic sign (STOP) is a conventional sign based purely on social contract."
        }
    },
    {
        cat: 'w2',
        q: {
            ru: "4. Кто считается основоположником структурной лингвистики?",
            en: "4. Who is considered the founder of structuralism in linguistics?"
        },
        opts: {
            ru: ["Чарльз Моррис", "Фердинанд де Соссюр", "Ролан Барт", "Умберто Эко", "Клод Леви-Стросс"],
            en: ["Charles Morris", "Ferdinand de Saussure", "Roland Barthes", "Umberto Eco", "Claude Levi-Strauss"]
        },
        ans: 1,
        exp: {
            ru: "✅ Фердинанд де Соссюр — основоположник структурной лингвистики (Обозначающее/Обозначаемое).",
            en: "✅ Ferdinand de Saussure is the founder of structural linguistics."
        }
    },
    {
        cat: 'w2',
        q: {
            ru: "5. Какой знак по Пирсу имеет причинно-следственную связь с объектом (дым-огонь)?",
            en: "5. According to Peirce, which sign has a logical connection to its referent (e.g., smoke-fire)?"
        },
        opts: {
            ru: ["символ", "индекс", "икона", "текст", "код"],
            en: ["symbol", "index", "icon", "text", "code"]
        },
        ans: 1,
        exp: {
            ru: "✅ Индекс имеет непосредственную физическую причинно-следственную связь.",
            en: "✅ An Index has a direct physical or causal proof pointing to its referent."
        }
    },
    {
        cat: 'w2',
        q: {
            ru: "6. Какие три раздела семиотики выделил Чарльз Моррис?",
            en: "6. Which three branches of semiotics were proposed by Charles Morris?"
        },
        opts: {
            ru: ["структурализм, семантика, прагматика", "текст, знак, смысл", "синтаксис, логика, семиотика", "символы, мифы, коды", "синтактика, семантика, прагматика"],
            en: ["structuralism, semantics, pragmatics", "text, sign, meaning", "syntax, logic, semiotics", "symbols, myths, codes", "syntactics, semantics, pragmatics"]
        },
        ans: 4,
        exp: {
            ru: "✅ Чарльз Моррис выделил Синтактику, Семантику и Прагматику.",
            en: "✅ Charles Morris defined Syntactics, Semantics, and Pragmatics."
        }
    },
    {
        cat: 'w2',
        q: {
            ru: "7. Какая книга Ролана Барта анализирует мифы масс-медиа как вторичные системы?",
            en: "7. Which book by Roland Barthes analyzes myth as systems of communication?"
        },
        opts: {
            ru: ["Семиотический вызов", "Основы семиологии", "Camera Lucida", "Мифологии", "Нулевая степень письма"],
            en: ["The semiotic challenge", "Elements of Semiology", "Camera Lucida", "Mythologies", "Writing degree zero"]
        },
        ans: 3,
        exp: {
            ru: "✅ Ролан Барт написал книгу 'Мифологии' (1957).",
            en: "✅ Roland Barthes published 'Mythologies' (1957)."
        }
    },
    {
        cat: 'w2',
        q: {
            ru: "8. Какой казахский мыслитель написал труд «АЗ и Я» (1975)?",
            en: "8. Which Kazakh intellectual wrote «AZ i IA» analyzing «The Song of Igor’s Campaign»?"
        },
        opts: {
            ru: ["Абай Кунанбаев", "Мухтар Ауэзов", "Чингиз Айтматов", "аль-Фараби", "Олжас Сулейменов"],
            en: ["Abai Qunanbaiuly", "Mukhtar Auezov", "Chingiz Aitmatov", "al-Farabi", "Olzhas Suleimenov"]
        },
        ans: 4,
        exp: {
            ru: "✅ Олжас Сулейменов написал труд 'АЗ и Я' (1975).",
            en: "✅ Olzhas Suleimenov published 'AZ i IA' (1975)."
        }
    },
    {
        cat: 'w2',
        q: {
            ru: "9. Как Соссюр называл акустический/визуальный образ знака?",
            en: "9. What did F. de Saussure call the acoustic image of a sign?"
        },
        opts: {
            ru: ["обозначаемое", "обозначающее", "индекс", "символ", "текст"],
            en: ["signified", "signifier", "index", "symbol", "text"]
        },
        ans: 1,
        exp: {
            ru: "✅ Соссюр называл акустический образ Обозначающим (Signifier).",
            en: "✅ Saussure called the acoustic image the Signifier (Signifiant)."
        }
    },
    {
        cat: 'w2',
        q: {
            ru: "10. Согласно Юлии Кристевой, «семанализ» — это…",
            en: "10. According to Julia Kristeva, «semanalysis» is…"
        },
        opts: {
            ru: ["раздел структурализма", "теория мифа", "критика производства смысла и знаковых практик, альтернатива семиологии Соссюра", "символическая антропология", "теория прагматики"],
            en: ["branch of structuralism", "theory of myth", "a critique of meaning and sign practices, alternative to Saussure’s semiology", "symbolic anthropology", "theory of pragmatics"]
        },
        ans: 2,
        exp: {
            ru: "✅ Семанализ Юлии Кристевой — это критика производства смысла, альтернатива Соссюру.",
            en: "✅ Julia Kristeva's Semanalysis is a critique of meaning alternative to Saussure."
        }
    }
];

// Master Guide Summary Text Database for Reader
const masterTextDatabase = {
    ru: {
        week1: `
            <h1>📘 Учебник Недели 1: Морфология и Язык Культуры</h1>
            <h2>1. Историческая эволюция понятия «Культура»</h2>
            <p>Слово «культура» восходит к латинскому глаголу <strong>colere</strong> — <em>возделывать почву, пахать землю, ухаживать за посевами</em>. Первоначальным значением латинского выражения <strong>agri cultura</strong> являлось <strong>возделывание земли / земледелие (cultivation)</strong>.</p>
            <p>В 45 году до нашей эры римский оратор и философ <strong>Марк Туллий Цицерон</strong> в трактате «Тускуланские беседы» впервые применил это слово в метафорическом контексте: <strong>Cultura Animi</strong> — <em>«возделывание души»</em> с помощью философии. Подобно тому, как земля не приносит плодов без пахоты, так и человеческая душа остается необразованной без духовного культивирования.</p>
            <p>В XVIII веке просветители (Вольтер, Монтескье, Гердер) стали рассматривать культуру как развитие разума и морали. Сэр <strong>Эдвард Бернетт Тайлор</strong> в 1871 году сформулировал этнографическое определение: культура — это сложный комплекс знаний, верований, искусств, морали, законов и обычаев, усвоенных человеком в обществе. В 1949 году <strong>Лесли Уайт</strong> основал науку <strong>Культурологию (Culturology)</strong>.</p>
            
            <h2>2. Морфологические подсистемы культуры</h2>
            <p>Культура подразделяется на 3 подсистемы:</p>
            <p>1. <strong>Материальная подсистема:</strong> Преобразованная природа, орудия труда, жилье (юрты), одежда, техника и устройства. <em>(Важно: орудия труда и технологии относятся СТРОГО к материальной культуре!)</em>.</p>
            <p>2. <strong>Духовная подсистема:</strong> Наука, религия, философия, мораль, ценности и искусство.</p>
            <p>3. <strong>Социально-институциональная подсистема:</strong> Законы, семья, государственные нормы и обряды.</p>
        `,
        week2: `
            <h1>📙 Учебник Недели 2: Семиотика и Анатомия Культуры</h1>
            <h2>1. Четыре Глобальных Культурных Кода</h2>
            <p><strong>Культурный код</strong> — зашифрованная система знаков и смысловых матриц общества. Выделяются 4 глобальных кода: Дописьменный (устная речь, ритуалы, слуховое мышление), Письменный (алфавит, книги, линейная логика), Экранный (кино, ТВ, визуальный образ) и Цифровой (интернет, гипертекст, просьюмеры, клиповое мышление).</p>
            
            <h2>2. Семиотика и Знаковые Системы</h2>
            <p>Слово «Семиотика» происходит от греческого <strong>semeion</strong> — <em>знак</em>. <strong>Фердинанд де Соссюр</strong> доказал, что знак состоит из Обозначающего (акустический образ) и Обозначаемого (ментальный смысл). <strong>Чарльз Пирс</strong> выделил Икону (сходство), Индекс (причинно-следственная связь, дым-огонь) и Символ (социальное соглашение).</p>
            <p><strong>Чарльз Моррис</strong> выделил 3 раздела: Синтактику, Семантику и Прагматику. <strong>Ролан Барт</strong> в книге «Мифологии» (1957) исследовал миф как вторичную систему, натурализующую идеологию. <strong>Юрий Лотман</strong> обосновал концепцию <strong>Семиосферы (Semiosphere)</strong>, а <strong>Олжас Сулейменов</strong> в труде «АЗ и Я» (1975) провел семиотический анализ «Слова о полку Игореве».</p>
        `
    },
    en: {
        week1: `
            <h1>📘 Week 1 Textbook: Morphology & Language of Culture</h1>
            <h2>1. Historical Evolution of Culture</h2>
            <p>The word "culture" originates from the Latin verb <strong>colere</strong> — <em>to till the soil, cultivate, care for</em>. The original literal meaning of <strong>agri cultura</strong> was <strong>cultivation of the soil / agriculture (cultivation)</strong>.</p>
            <p>In 45 BCE, Roman thinker <strong>Marcus Tullius Cicero</strong> coined the metaphor <strong>Cultura Animi</strong> — <em>"cultivation of the soul"</em> through philosophy. In 1871, <strong>Sir Edward Burnett Tylor</strong> defined culture as that complex whole including knowledge, belief, art, morals, law, custom, acquired by man in society. In 1949, <strong>Leslie White</strong> established <strong>Culturology</strong>.</p>
            
            <h2>2. Morphological Subsystems of Culture</h2>
            <p>1. <strong>Material Subsystem:</strong> Physical tools, yurts, architecture, gadgets, technology. <em>(Note: Tools and technologies belong STRICTLY to material culture!)</em>.</p>
            <p>2. <strong>Spiritual Subsystem:</strong> Science, religion, ethics, philosophy, values, fine arts.</p>
            <p>3. <strong>Social/Institutional Subsystem:</strong> Laws, family structures, state rituals.</p>
        `,
        week2: `
            <h1>📙 Week 2 Textbook: Semiotics & Anatomy of Culture</h1>
            <h2>1. Four Global Cultural Codes</h2>
            <p>A <strong>Cultural Code</strong> is an encoded matrix of signs and values. The 4 global codes are: Preliterate (oral, ritual, auditory), Written (alphabet, books, linear logic), Screen (cinema, TV, visual), and Digital (Internet, hypertext, prosumers, clip-thinking).</p>
            
            <h2>2. Semiotics & Sign Systems</h2>
            <p>Semiotics derives from Greek <strong>semeion</strong> — <em>sign</em>. <strong>Ferdinand de Saussure</strong> established Signifier (acoustic form) and Signified (mental concept). <strong>Charles Sanders Peirce</strong> classified signs into Icon (resemblance), Index (causal proof, smoke-fire), and Symbol (social convention).</p>
            <p><strong>Charles Morris</strong> defined Syntactics, Semantics, and Pragmatics. <strong>Roland Barthes</strong> published <em>Mythologies</em> (1957). <strong>Yuri Lotman</strong> formulated the <strong>Semiosphere</strong>, and <strong>Olzhas Suleimenov</strong> wrote <em>AZ i IA</em> (1975).</p>
        `
    }
};

function initApp() {
    switchLanguage('ru');
}

// Instant Language Switcher (No Page Reload!)
function switchLanguage(lang) {
    currentLang = lang;

    document.getElementById('lang-ru').classList.remove('active');
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Update UI text strings instantly
    const t = uiTranslations[lang];
    document.getElementById('txt-tab-week1').innerText = t.tabW1;
    document.getElementById('txt-tab-week2').innerText = t.tabW2;
    document.getElementById('txt-tab-all').innerText = t.tabAll;
    document.getElementById('txt-tab-main').innerText = t.tabMain;
    document.getElementById('lbl-q-mode').innerText = t.modeLbl;
    document.getElementById('btn-restart').innerText = t.btnRestart;
    document.getElementById('lbl-active-test').innerText = t.lblActiveTest;
    document.getElementById('lbl-score').innerText = t.lblScore;
    document.getElementById('lbl-accuracy').innerText = t.lblAccuracy;
    document.getElementById('btn-read-week1').innerText = t.btnReadW1;
    document.getElementById('btn-read-week2').innerText = t.btnReadW2;

    const select = document.getElementById('q-count-select');
    select.options[0].text = t.opt10;
    select.options[1].text = t.opt30;
    select.options[2].text = t.opt50;
    select.options[3].text = t.opt100;

    // Refresh active view
    if (currentCategory === 'main') {
        renderReader();
    } else {
        renderQuiz();
    }
}

function switchWeek(catKey) {
    currentCategory = catKey;
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (catKey === 1) document.getElementById('tab-week1').classList.add('active');
    else if (catKey === 2) document.getElementById('tab-week2').classList.add('active');
    else if (catKey === 'all') document.getElementById('tab-all').classList.add('active');
    else if (catKey === 'main') document.getElementById('tab-main').classList.add('active');

    const quizControl = document.getElementById('quiz-control-panel');
    const quizStats = document.getElementById('quiz-stats-bar');
    const quizProgress = document.getElementById('quiz-progress-container');
    const quizContainer = document.getElementById('quiz-container');
    const readerContainer = document.getElementById('reader-container');

    if (catKey === 'main') {
        quizControl.style.display = 'none';
        quizStats.style.display = 'none';
        quizProgress.style.display = 'none';
        quizContainer.style.display = 'none';
        readerContainer.style.display = 'flex';
        renderReader();
    } else {
        quizControl.style.display = 'flex';
        quizStats.style.display = 'grid';
        quizProgress.style.display = 'block';
        quizContainer.style.display = 'flex';
        readerContainer.style.display = 'none';
        
        const t = uiTranslations[currentLang];
        const quizTitle = document.getElementById('quiz-title');
        if (catKey === 1) quizTitle.innerText = `${t.titleW1} (${questionLimit} Qs)`;
        else if (catKey === 2) quizTitle.innerText = `${t.titleW2} (${questionLimit} Qs)`;
        else quizTitle.innerText = `${t.titleAll} (${questionLimit} Qs)`;

        renderQuiz();
    }
}

function getActiveQuestions() {
    let filtered = masterQuestionBank;
    if (currentCategory === 1) {
        filtered = masterQuestionBank.filter(q => q.cat === 'w1');
    } else if (currentCategory === 2) {
        filtered = masterQuestionBank.filter(q => q.cat === 'w2');
    }

    // Expand pool up to 100 dynamically if requested
    let expanded = [];
    while (expanded.length < questionLimit) {
        let base = filtered[expanded.length % filtered.length];
        expanded.push(base);
    }
    return expanded;
}

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    const questions = getActiveQuestions();
    const t = uiTranslations[currentLang];

    questions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'question-card';

        const qText = q.q[currentLang];
        const opts = q.opts[currentLang];
        const exp = q.exp[currentLang];

        let optionsHtml = '';
        opts.forEach((opt, optIdx) => {
            optionsHtml += `
                <button class="option-btn" id="q${idx}-opt${optIdx}" onclick="selectOption(${idx}, ${optIdx})">
                    <span>${String.fromCharCode(65 + optIdx)}. ${opt}</span>
                </button>
            `;
        });

        card.innerHTML = `
            <div class="question-header">
                <span class="q-number">${t.qWord} ${idx + 1} of ${questions.length}</span>
            </div>
            <div class="q-title">${qText}</div>
            <div class="options-grid">
                ${optionsHtml}
            </div>
            <div class="explanation-box" id="explain-q${idx}">
                ${exp}
            </div>
        `;

        container.appendChild(card);
    });

    updateStats();
}

function selectOption(qIdx, selectedOptIdx) {
    const questions = getActiveQuestions();
    const q = questions[qIdx];
    const key = `q_${qIdx}_${currentCategory}_${questionLimit}`;

    if (userAnswers[key] !== undefined) return;

    userAnswers[key] = {
        selected: selectedOptIdx,
        correct: selectedOptIdx === q.ans
    };

    const options = document.querySelectorAll(`[id^="q${qIdx}-opt"]`);
    options.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.ans) {
            btn.classList.add('correct');
        } else if (idx === selectedOptIdx) {
            btn.classList.add('wrong');
        }
    });

    const explainBox = document.getElementById(`explain-q${qIdx}`);
    explainBox.classList.add('show');
    if (selectedOptIdx === q.ans) {
        explainBox.classList.add('correct');
    } else {
        explainBox.classList.add('wrong');
        explainBox.innerHTML = `❌ ${q.exp[currentLang]}`;
    }

    updateStats();
}

function updateStats() {
    const questions = getActiveQuestions();

    let answeredCount = 0;
    let correctCount = 0;

    questions.forEach((q, idx) => {
        const key = `q_${idx}_${currentCategory}_${questionLimit}`;
        if (userAnswers[key]) {
            answeredCount++;
            if (userAnswers[key].correct) correctCount++;
        }
    });

    document.getElementById('score-counter').innerText = `${correctCount} / ${questions.length}`;
    
    const accuracy = answeredCount === 0 ? 100 : Math.round((correctCount / answeredCount) * 100);
    document.getElementById('accuracy-counter').innerText = `${accuracy}%`;

    const progress = Math.round((answeredCount / questions.length) * 100);
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function changeQuestionCount(val) {
    questionLimit = parseInt(val, 10);
    resetCurrentQuiz();
}

function resetCurrentQuiz() {
    const questions = getActiveQuestions();
    questions.forEach((q, idx) => {
        delete userAnswers[`q_${idx}_${currentCategory}_${questionLimit}`];
    });
    renderQuiz();
}

// Master Textbook Reader Functions
function loadReaderWeek(w) {
    activeReaderWeek = w;
    document.getElementById('btn-read-week1').classList.remove('active');
    document.getElementById('btn-read-week2').classList.remove('active');
    document.getElementById(`btn-read-week${w}`).classList.add('active');
    renderReader();
}

function renderReader() {
    const textArea = document.getElementById('reader-text-area');
    const weekKey = activeReaderWeek === 1 ? 'week1' : 'week2';
    textArea.innerHTML = masterTextDatabase[currentLang][weekKey];
}

document.addEventListener('DOMContentLoaded', initApp);
