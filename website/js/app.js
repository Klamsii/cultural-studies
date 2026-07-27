/* ==========================================================================
   CULTURAL STUDIES PREMIUM PORTAL ENGINE - FULL TEXTBOOK BOOK READER & AI
   ========================================================================== */

const GEMINI_API_KEY = "AIzaSyCSc4Kp0tIIXsSYiF0DtbfOQJOebpT2N0s";

let currentLang = 'ru'; // 'ru' or 'en'
let selectedWeek = '1';
let mainViewMode = 'quiz';
let questionLimit = 10;
let userAnswers = {};

let activeReaderWeek = 1;
let activeChapterIdx = 0; // 0 = Chapter 1, ..., 9 = Chapter 10, -1 = Show All

// Full Academic Course Knowledge Vault
const COURSE_KNOWLEDGE_VAULT = `
ОФИЦИАЛЬНЫЙ АКАДЕМИЧЕСКИЙ ФОНД ЗНАНИЙ КУРСА CULTURAL STUDIES (AITU):
- ЭТИМОЛОГИЯ: colere (возделывать почву). agri cultura — земледелие.
- ЦИЦЕРОН (45 г. до н.э.): Cultura Animi — возделывание души философией.
- ЭДВАРД ТАЙЛОР (1871): Первобытная культура — сложный комплекс знаний, верований, обычаев.
- КРЁБЕР И КЛАКХОН (1952): поведенческое определение — совместное усвоенное поведение, образ жизни.
- ЛЕСЛИ УАЙТ (1949): Культурология (Culturology), символизирующая способность (symboling).
- ОРУДИЯ ТРУДА И ТЕХНОЛОГИИ: относятся СТРОГО к Материальной культуре!
- КУЛЬТУРНЫЙ ЛАГ: У. Огборн (1922) — разрыв между технологиями и нематериальной моралью/законами.
- СЕПИР-УОРФ & БОРОДИЦКАЯ: язык направляет восприятие (Куук Таайорре, синий/голубой, род моста).
- 4 КУЛЬТУРНЫХ КОДА: Дописьменный, Письменный, Экранный, Цифровой.
- 6 ФОРМ ВЕРОВАНИЙ: Анимизм, Фетишизм (Тумар), Тотемизм (Степной Волк Бөрі), Пантеизм (Тенгри), Деизм, Монотеизм.
- ПРОБЛЕМА ВАГОНЕТКИ: Утилитаризм (5 жизней > 1) vs Кантианская Деонтология (запрет убийства).
- СЕМИОТИКА СОССЮРА: Обозначающее (Signifier) + Обозначаемое (Signified). Произвольность знака.
- ТРИАДА ПИРСА: Икона (сходство), Индекс (причинная связь, дым-огонь), Символ (соглашение, STOP).
- ЧАРЛЬЗ МОРРИС: Синтактика, Семантика, Прагматика.
- РОЛАН БАРТ (1957): Мифологии — вторичная система, натурализация буржуазной идеологии.
- ЮРИЙ ЛОТМАН: Семиосфера — культура как динамический текст.
- ОЛЖАС СУЛЕЙМЕНОВ (1975): «АЗ и Я» — семиотический анализ «Слова о полку Игореве».
- ТАНБАЛЫ: петроглиф Солнцеголового божества (Кунхан) — культ Неба (Тенгри).
`;

// Complete Chapter-by-Chapter Master Textbook Database
const fullBookDatabase = {
    ru: {
        week1: [
            {
                title: "Глава 1: Академический Регламент и Формула Оценок",
                content: `
                    <h1>🎓 Неделя 1. Глава 1: Академический Регламент и Формула Оценок</h1>
                    <p>Обучение дисциплине «Cultural Studies» в Astana IT University строится на строгой системе рубежного контроля знания. Итоговая оценка по курсу рассчитывается по формуле взвешенного среднего арифметического:</p>
                    <blockquote>Total Grade = (Midterm Grade × 0.30) + (Endterm Grade × 0.30) + (Final Exam Grade × 0.40)</blockquote>
                    <p>В первом периоде обучения (Midterm Period, вес 30%) каждый студент сдает индивидуальную устную презентацию (50% балла за Midterm, дедлайн: среда 29 июля 2026 г. до 11:59 AM), лекционные квизы (20%) и MCQ-тест 31 июля (30%). Во втором периоде (Endterm, 30%) выполняется групповой исследовательский проект (50%), текущие квизы (20%) и MCQ-тест 5 августа (30%). Финальный компьютерный экзамен (40%) проводится 6 августа 2026 года.</p>
                `
            },
            {
                title: "Глава 2: Историческая эволюция понятия «Культура» (AITU 1.1)",
                content: `
                    <h1>📜 Неделя 1. Глава 2: Историческая эволюция понятия «Культура»</h1>
                    <h2>2.1 Древнеримская этимология: colere и agri cultura</h2>
                    <p>Слово «культура» восходит к древнелатинскому глаголу <strong>colere</strong> — <em>возделывать почву, пахать землю, ухаживать за посевами</em>. Первоначальным значением выражения <strong>agri cultura</strong> являлось <strong>возделывание земли / земледелие (cultivation)</strong>. Культура обозначала агрономический процесс воздействия человека на природу. Земля без воздействия человека оставалась дикой (silva); обработанная земля становилась культурой.</p>
                    
                    <h2>2.2 Цицерон и трактат Cultura Animi (45 г. до н.э.)</h2>
                    <p>В 45 году до нашей эры древнеримский оратор <strong>Марк Туллий Цицерон</strong> в трактате «Тускуланские беседы» (Tusculan Disputations) впервые применил этот термин как метафору: <strong>Cultura Animi Virtus Est</strong> — <em>«Философия есть возделывание/культивирование души»</em>. Цицерон доказал, что подобно тому, как даже самое плодородное поле не принесет урожая без пахоты, так и человеческая душа остается необразованной без духовного культивирования философией и науками.</p>

                    <h2>2.3 Эпоха Просвещения и Этнография Тайлора (1871)</h2>
                    <p>В XVIII веке (Вольтер, Монтескье, Гердер) культура рассматривалась как разумение и социальный прогресс. В 1871 году <strong>Сэр Эдвард Бернетт Тайлор</strong> в книге «Первобытная культура» дал классическое определение: <em>«Культура — это сложный комплекс, включающий знания, верования, искусство, мораль, законы, обычаи и привычки, усвоенные человеком как членом общества»</em>. В 1949 году <strong>Лесли Уайт</strong> основал <strong>Культурологию (Culturology)</strong> на основе символизирующей способности (symboling).</p>
                `
            },
            {
                title: "Глава 3: Морфология культуры и её подсистемы (AITU 1.2)",
                content: `
                    <h1>🏛️ Неделя 1. Глава 3: Морфология культуры и её подсистемы</h1>
                    <h2>3.1 Три морфологические подсистемы культуры</h2>
                    <p>Морфология культуры изучает внутреннее строение культуры и механизмы формирования её форм. Выделяются 3 главные подсистемы:</p>
                    <p>1. <strong>Материальная подсистема:</strong> Орудия производства, жилье (юрты), одежда, техника и транспорт. <strong>(ВНИМАНИЕ ДЛЯ ТЕСТОВ: Орудия труда и технологии относятся СТРОГО к материальной культуре и НЕ входят в духовную!)</strong>.</p>
                    <p>2. <strong>Духовная подсистема:</strong> Идеи, наука, религия, философия, мораль, ценности, литература и искусство.</p>
                    <p>3. <strong>Социально-институциональная подсистема:</strong> Законы, семейные институты, государственные нормы и обряды.</p>
                    
                    <h2>3.2 Генетический метод и Мемы Докинза</h2>
                    <p>Исследовательский метод, изучающий происхождение (генезис) и эволюцию культурных форм, называется <strong>Генетическим методом (Genetic Method)</strong>. Концепция Ричарда Докинза (1976, «Эгоистичный ген») объясняет трансляцию культуры через мемы в рамках <strong>Социобиологической теории</strong>.</p>
                `
            },
            {
                title: "Глава 4: Пять базовых элементов культуры и Общество vs Культура",
                content: `
                    <h1>🧩 Неделя 1. Глава 4: Элементы культуры и Социологические различия</h1>
                    <p>Базовыми элементами культуры выступают: Ценности, Верования, Нормы (Folkways и Mores), Символы и Язык.</p>
                    <p>В социологической аналогии с компьютерами: <strong>Общество (Society)</strong> — это коллектив людей (Hardware / Железо), а <strong>Культура (Culture)</strong> — система правил, идей и языковых матриц, организующих их жизнь (Software / ПО).</p>
                `
            },
            {
                title: "Глава 5: Казахская Юрта и Теория Культурного Запаздывания",
                content: `
                    <h1>🛖 Неделя 1. Глава 5: Казахская Юрта и Культурный Лаг</h1>
                    <p>Казахская юрта (Киіз үй) объединяет материальный каркас и священный нематериальный смысл. Вершинный круг <strong>Шанырак (Шаңырақ)</strong> является символом семейного очага, единства рода и мироздания на Государственном Гербе Республики Казахстан.</p>
                    <p>Теория <strong>Культурного Запаздывания (Cultural Lag)</strong> Уильяма Огборна (1922) описывает разрыв, возникающий когда материальные технологии развиваются стремительно, а нематериальная мораль и законы отстают.</p>
                `
            },
            {
                title: "Глава 6: Типология культурных форм (Crash Course #11)",
                content: `
                    <h1>🎭 Неделя 1. Глава 6: Типология культурных форм</h1>
                    <p>Выделяются Доминирующая культура, Элитарная культура, Популярная культура, Субкультуры (по К. Баркеру) и Контркультуры. Оценка других культур различает Этноцентризм (предвзятое осуждение со своей колокольни) и Культурный релятивизм (объективная оценка культуры в её контексте).</p>
                `
            },
            {
                title: "Глава 7: Лингвистическая относительность и Семиотика Языка (AITU 1.3)",
                content: `
                    <h1>🗣️ Неделя 1. Глава 7: Лингвистическая относительность и Семиотика</h1>
                    <p>Гипотеза Сепира-Уорфа утверждает, что язык направляет восприятие человека. Эксперименты Леры Бородицкой доказали это (абстракции пространства у Куук Таайорре, синий/голубой в русском ЭЭГ, грамматический род моста в немецком/испанском). Знак Соссюра объединяет Обозначающее (Signifier) и Обозначаемое (Signified).</p>
                `
            },
            {
                title: "Глава 8: Цифровая культура и Молодежные субкультуры",
                content: `
                    <h1>🌐 Неделя 1. Глава 8: Цифровая культура и Субкультуры</h1>
                    <p>Нина Узелац (2008) охарактеризовала цифровую среду как Культуру участия (Participatory culture), где пользователи выступают просьюмерами. Крис Баркер (2012) доказал зависимость субкультур от цифровых сетей.</p>
                `
            },
            {
                title: "Глава 9: Официальный Ключ Теста Недели 1",
                content: `
                    <h1>🔥 Неделя 1. Глава 9: Ключ к тесту Недели 1 (10 из 10)</h1>
                    <p>1. <strong>agri cultura</strong> -> cultivation.<br>
                    2. <strong>cultura animi</strong> -> Cicero.<br>
                    3. <strong>physical objects/tools</strong> -> material culture.<br>
                    4. <strong>identification with animals</strong> -> totemism and animism.<br>
                    5. <strong>NOT spiritual culture</strong> -> tools and technologies.<br>
                    6. <strong>Enlightenment</strong> -> Voltaire, Montesquieu, Herder.<br>
                    7. <strong>Kroeber & Kluckhohn</strong> -> shared, learned human behavior.<br>
                    8. <strong>origin research method</strong> -> genetic.<br>
                    9. <strong>memes theory</strong> -> sociobiological theory.<br>
                    10. <strong>Tylor definition</strong> -> Complex which includes knowledge, belief...</p>
                `
            },
            {
                title: "Глава 10: Устная зачетная защита (10 Билетов с ответами)",
                content: `
                    <h1>💬 Неделя 1. Глава 10: Разбор 10 устных билетов к экзамену</h1>
                    <p><strong>Билет 1: Разница между Folkways и Mores?</strong><br>Ответ: Folkways — неформальные обычаи этикета с мягкими санкциями; Mores — строгие моральные законы и табу, критичные для выживания группы.</p>
                    <p><strong>Билет 2: Культурный лаг Огборна?</strong><br>Ответ: Разрыв между быстрым развитием материальных технологий и медленным изменением морали и законов.</p>
                `
            }
        ],
        week2: [
            {
                title: "Глава 1: Четыре Глобальных Культурных Кода",
                content: `
                    <h1>📘 Неделя 2. Глава 1: Четыре Глобальных Культурных Кода</h1>
                    <p><strong>Культурный код</strong> — зашифрованная матрица знаков и ценностей общества. Выделяются 4 глобальных кода:</p>
                    <p>1. <strong>Дописьменный (Традиционный) код:</strong> Устная речь, ритуалы, жырау и акыны, слуховое эмоциональное мышление.</p>
                    <p>2. <strong>Письменный (Книжный) код:</strong> Алфавит, Гутенберговский печатный станок, книги, линейная аналитическая логика.</p>
                    <p>3. <strong>Экранный код:</strong> Кино, ТВ, фото, массовое вещание, визуально-пассивный когнитивный стиль.</p>
                    <p>4. <strong>Цифровой код:</strong> Интернет, гипертекст, просьюмеры, клиповое мышление и алгоритмы ИИ.</p>
                `
            },
            {
                title: "Глава 2: 6 Форм Религиозных Верований по Э. Тайлору",
                content: `
                    <h1>🕯️ Неделя 2. Глава 2: 6 Форм Религиозных Верований по Э. Тайлору</h1>
                    <p>1. <strong>Анимизм (Animism):</strong> Вера в одушевленность всей природы и духов (источник всех религий по Тайлору).</p>
                    <p>2. <strong>Фетишизм (Fetishism):</strong> Поклонение неодушевленным предметам-защитникам (Казахский Тұмар).</p>
                    <p>3. <strong>Тотемизм (Totemism):</strong> Сакральное кровное родство рода с животным (Степной Волк Көк Бөрі).</p>
                    <p>4. <strong>Пантеизм (Pantheism):</strong> Отождествление Бога с природой (Тенгрианство — Тенгри и Жер-Су).</p>
                    <p>5. <strong>Деизм (Deism):</strong> Бог как верховный Часовщик Просвещения.</p>
                    <p>6. <strong>Монотеизм (Monotheism):</strong> Вера в Единого Бога.</p>
                `
            },
            {
                title: "Глава 3: Формирование Морали и Проблема Вагонетки",
                content: `
                    <h1>⚖️ Неделя 2. Глава 3: Формирование Морали и Проблема Вагонетки</h1>
                    <p>Золотое правило морали: «Өзіңе тілемейтінді өзгеге тілеме». В Проблеме вагонетки (Trolley Problem): <strong>Утилитаризм (Бентам/Милль)</strong> требует переключить стрелку ради спасения 5 жизней ценой 1 (математика пользы); <strong>Кантианская деонтология</strong> запрещает активное убийство.</p>
                `
            },
            {
                title: "Глава 4: Семиотика: Соссюр, Пирс, Моррис, Выготский, Кристева (AITU 2.1)",
                content: `
                    <h1>🔍 Неделя 2. Глава 4: Структурализм и Семиотика</h1>
                    <p><strong>Семиотика</strong> (от греч. <em>semeion</em> — знак). <strong>Фердинанд де Соссюр</strong> доказал связку Обозначающего (Signifier) и Обозначаемого (Signified). <strong>Чарльз Пирс</strong> сформировал триаду: Икона (сходство), Индекс (причинная связь, дым-огонь) и Символ (социальное соглашение). <strong>Чарльз Моррис</strong> выделил Синтактику, Семантику и Прагматику. <strong>Юлия Кристева</strong> создала <strong>Семанализ (semanalysis)</strong>.</p>
                `
            },
            {
                title: "Глава 5: Ролан Барт и Мифологии (AITU 2.2)",
                content: `
                    <h1>🎬 Неделя 2. Глава 5: Ролан Барт и Мифологии</h1>
                    <p>В книге «Мифологии» (1957) <strong>Ролан Барт</strong> доказал, что миф — это вторичная семиотическая система. Первичная Денотация становится Обозначающим для вторичной Коннотации (Мифа). Главная функция мифа — <strong>натурализация идеологии</strong>.</p>
                `
            },
            {
                title: "Глава 6: Условные знаки, Семиосфера Лотмана и Олжас Сулейменов (AITU 2.3)",
                content: `
                    <h1>🌌 Неделя 2. Глава 6: Условные знаки, Лотман и Сулейменов</h1>
                    <p>Условные знаки (STOP) основаны на договоре. <strong>Юрий Лотман</strong> обосновал концепцию <strong>Семиосферы (Semiosphere)</strong>. <strong>Олжас Сулейменов</strong> в труде <strong>«АЗ и Я» (1975)</strong> провел семиотический анализ «Слова о полку Игореве».</p>
                `
            },
            {
                title: "Глава 7: Семиотический анализ «Кода да Винчи»",
                content: `
                    <h1>🎨 Неделя 2. Глава 7: Киноанализ «Кода да Винчи»</h1>
                    <p>Эволюция Пентаграммы в лекции Лэнгдона: языческий символ Венеры -> 5 ран Христа -> голливудский сатанинский штамп.</p>
                `
            },
            {
                title: "Глава 8: Миф и Петроглифы Танбалы",
                content: `
                    <h1>☀️ Неделя 2. Глава 8: Миф и Петроглифы Танбалы</h1>
                    <p>Петроглифы Танбалы содержат изображение Солнцеголового божества (Кунхан), отражающего солярный культ Неба (Тенгри).</p>
                `
            },
            {
                title: "Глава 9: Официальный Ключ Теста Недели 2",
                content: `
                    <h1>🔥 Неделя 2. Глава 9: Ключ к тесту Недели 2 (10 из 10)</h1>
                    <p>1. <strong>semiotics meaning</strong> -> sign.<br>
                    2. <strong>culture as dynamic text</strong> -> Yuri Lotman.<br>
                    3. <strong>conventional sign</strong> -> traffic sign.<br>
                    4. <strong>structuralism founder</strong> -> Ferdinand de Saussure.<br>
                    5. <strong>logical smoke-fire link</strong> -> index.<br>
                    6. <strong>Morris 3 branches</strong> -> syntactics, semantics, pragmatics.<br>
                    7. <strong>Barthes book</strong> -> Mythologies.<br>
                    8. <strong>AZ i IA author</strong> -> Olzhas Suleimenov.<br>
                    9. <strong>acoustic image</strong> -> signifier.<br>
                    10. <strong>semanalysis</strong> -> critique of meaning alternative to Saussure.</p>
                `
            },
            {
                title: "Глава 10: Устная зачетная защита Недели 2",
                content: `
                    <h1>💬 Неделя 2. Глава 10: Устные зачетные билеты Недели 2</h1>
                    <p><strong>Билет 1: Что такое Семиосфера Лотмана?</strong><br>Ответ: Единый семиотический континуум культуры, необходимый для существования любого языка и функционирования культуры как коллективного интеллекта.</p>
                `
            }
        ]
    },
    en: {
        week1: [
            {
                title: "Chapter 1: Academic Regulations & Grading Formula",
                content: `<h1>🎓 Week 1. Chapter 1: Academic Regulations</h1><p>Total Grade = (Midterm × 0.30) + (Endterm × 0.30) + (Final Exam × 0.40)</p>`
            },
            {
                title: "Chapter 2: Historical Evolution of Culture (Cicero, Tylor)",
                content: `<h1>📜 Week 1. Chapter 2: Evolution of Culture</h1><p>Latin colere -> agri cultura (cultivation). Cicero (45 BCE) coined Cultura Animi (cultivation of soul). E.B. Tylor (1871) defined culture as that complex whole. Leslie White (1949) founded Culturology.</p>`
            }
        ],
        week2: [
            {
                title: "Chapter 1: Four Global Cultural Codes",
                content: `<h1>📘 Week 2. Chapter 1: Cultural Codes</h1><p>Preliterate, Written, Screen, and Digital codes.</p>`
            },
            {
                title: "Chapter 2: Semiotics (Saussure, Peirce, Barthes, Lotman)",
                content: `<h1>🔍 Week 2. Chapter 2: Semiotics</h1><p>Saussure (Signifier/Signified), Peirce (Icon/Index/Symbol), Barthes (Mythologies 1957), Lotman (Semiosphere), Suleimenov (AZ i IA 1975).</p>`
            }
        ]
    }
};

function initApp() {
    switchLanguage('ru');
}

// AI Drawer Toggle
function toggleAiDrawer() {
    const drawer = document.getElementById('ai-drawer');
    if (drawer.style.display === 'none' || !drawer.style.display) {
        drawer.style.display = 'flex';
        document.getElementById('ai-prompt-input').focus();
    } else {
        drawer.style.display = 'none';
    }
}

// Strictly Grounded AI Oral Answer Generator Engine
async function askAiAssistant() {
    const input = document.getElementById('ai-prompt-input').value.trim();
    if (!input) return;

    const outputBox = document.getElementById('ai-output-box');
    const responseText = document.getElementById('ai-response-text');
    const submitBtn = document.getElementById('ai-submit-btn');

    outputBox.style.display = 'flex';
    responseText.innerHTML = '⚡ <em>Поиск в материалах нашего курса и составление устного ответа...</em>';
    submitBtn.disabled = true;

    const systemPrompt = `
СТРОГОЕ ПРАВИЛО ИСТОЧНИКОВ:
Ты — ассистент студента на устном экзамене по Cultural Studies в Astana IT University. 
Ты должен строить ответ ИСКЛЮЧИТЕЛЬНО на основе нижеприведенной Базы Знаний нашего курса (лекций AITU, учебников Week 1 и Week 2)! Запрещено придумывать сторонние факты от себя.

БАЗА ЗНАНИЙ НАШЕГО КУРСА:
${COURSE_KNOWLEDGE_VAULT}

ИНСТРУКЦИЯ К ОТВЕТУ:
- Дай БЫСТРЫЙ, КОРОТКИЙ (ровно 3-4 емких предложения), глубокий, продуманный и 100% академически точный ответ от первого лица.
- Ответ должен быть написан так, чтобы студент смог СРАЗУ ЖЕ ВЫРАЗИТЕЛЬНО ЗАЧИТАТЬ ЕГО ВСЛУХ ПРЕПОДАВАТЕЛЮ.
- Не используй вводных фраз ("Вот ответ:"). Сразу начинай ответ так, словно отвечаешь учителю.
- Язык ответа должен совпадать с языком вопроса (русский или английский).
`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    { role: 'user', parts: [{ text: systemPrompt + "\nВопрос преподавателя: " + input }] }
                ],
                generationConfig: { maxOutputTokens: 300, temperature: 0.2 }
            })
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            const answer = data.candidates[0].content.parts[0].text;
            responseText.innerText = answer;
        } else {
            throw new Error("Fallback");
        }
    } catch (err) {
        responseText.innerText = searchLocalCourseVault(input);
    } finally {
        submitBtn.disabled = false;
    }
}

// Local Search Engine over Course Knowledge Vault
function searchLocalCourseVault(q) {
    const qLower = q.toLowerCase();
    
    if (qLower.includes('цицерон') || qLower.includes('cicero') || qLower.includes('cultura animi')) {
        return "Марк Туллий Цицерон в 45 году до нашей эры в трактате «Тускуланские беседы» впервые применил термин «Cultura Animi», означающий «возделывание души» с помощью философии. Он провел аналогию с земледелием (agri cultura), доказывая, что подобно тому, как земля не приносит урожая без пахоты, так и человеческий разум остается необразованным без духовного культивирования.";
    }
    if (qLower.includes('тайлор') || qLower.includes('tylor') || qLower.includes('анимизм')) {
        return "Сэр Эдвард Бернетт Тайлор в 1871 году в труде «Первобытная культура» сформулировал классическое этнографическое определение культуры как сложного комплекса знаний, верований, искусства, морали, законов и обычаев, усвоенных человеком в обществе. Тайлор также выделил анимизм как первичную форму религии, возникшую из попыток понять сны и смерть.";
    }
    if (qLower.includes('соссюр') || qLower.includes('saussure') || qLower.includes('обозначающее')) {
        return "По Фердинанду де Соссюру, языковой знак связывает Обозначающее (акустический или визуальный образ слова) и Обозначаемое (ментальный смысл понятия). Главным принципом является произвольность знака (l'arbitraire du signe), означающая, что связь между звучанием и смыслом держится исключительно на социальном соглашении общества.";
    }
    if (qLower.includes('пирс') || qLower.includes('peirce') || qLower.includes('индекс')) {
        return "Чарльз Сандерс Пирс выделил триаду знаков: Икона (визуальное сходство), Индекс (непосредственная физическая причинно-следственная связь, например дым как знак огня или след на песке) и Символ (условный знак по социальному договору, как знак STOP).";
    }
    if (qLower.includes('барт') || qLower.includes('barthes') || qLower.includes('миф')) {
        return "Ролан Барт в труде «Мифологии» 1957 года доказал, что современный миф представляет собой вторичную семиотическую систему, в которой первичный знак становится Обозначающим для вторичной коннотации. Главная социальная функция мифа — «натурализация идеологии», то есть превращение политических ценностей в якобы естественный здравый смысл.";
    }
    if (qLower.includes('лотман') || qLower.includes('lotman') || qLower.includes('семиосфера')) {
        return "Юрий Лотман сформулировал концепцию «Семиосферы» как единого семиотического пространства культуры, необходимого для существования и функционирования любых языков. В его теории культура рассматривается как коллективный intellect и динамический текст, пронизанный культурными кодами.";
    }
    if (qLower.includes('сулейменов') || qLower.includes('suleimenov') || qLower.includes('аз и я')) {
        return "Олжас Сулейменов в своем историко-лингвистическом труде «АЗ и Я» 1975 года провел глубокий семиотический и языковой анализ «Слова о полку Игореве». Он доказал наличие двуязычных славяно-тюркских смысловых пластов и символических кодов в древнем тексте.";
    }
    
    return "Согласно академическим материалам нашего курса Cultural Studies, данный вопрос рассматривается через систему зашифрованных культурных кодов и морфологических подсистем. Концепция объясняет, как нематериальные ценности и традиции транслируются в обществе, формируя когнитивный стиль мышления человекa.";
}

function copyAiResponse() {
    const text = document.getElementById('ai-response-text').innerText;
    navigator.clipboard.writeText(text);
    alert("✅ Текст ответа скопирован! Можете зачитывать преподавателю.");
}

// Instant Language Switcher (No Page Reload!)
function switchLanguage(lang) {
    currentLang = lang;

    document.getElementById('lang-ru').classList.remove('active');
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Update UI text strings instantly
    const t = uiTranslations[lang];
    document.getElementById('txt-tab-quiz').innerText = t.tabQuiz;
    document.getElementById('txt-tab-main').innerText = t.tabMain;
    document.getElementById('lbl-q-mode').innerText = t.modeLbl;
    document.getElementById('btn-restart').innerHTML = `<span class="btn-icon">🔄</span> ${t.btnRestart}`;
    document.getElementById('lbl-active-test').innerText = t.lblActiveTest;
    document.getElementById('lbl-score').innerText = t.lblScore;
    document.getElementById('lbl-accuracy').innerText = t.lblAccuracy;
    document.getElementById('btn-read-week1').innerText = t.btnReadW1;
    document.getElementById('btn-read-week2').innerText = t.btnReadW2;
    document.getElementById('txt-ai-btn').innerText = t.aiBtn;
    document.getElementById('ai-subtitle').innerText = t.aiSub;

    const select = document.getElementById('q-count-select');
    select.options[0].text = t.opt10;
    select.options[1].text = t.opt30;
    select.options[2].text = t.opt50;
    select.options[3].text = t.opt100;

    // Refresh active view
    if (mainViewMode === 'main') {
        renderReader();
    } else {
        renderQuiz();
    }
}

function switchWeek(weekVal) {
    selectedWeek = weekVal;
    if (mainViewMode === 'main') {
        if (weekVal === '1' || weekVal === '2') {
            loadReaderWeek(parseInt(weekVal, 10));
        }
    } else {
        renderQuiz();
    }
}

function switchMainView(mode) {
    mainViewMode = mode;
    
    document.getElementById('tab-quiz').classList.remove('active');
    document.getElementById('tab-main').classList.remove('active');
    document.getElementById(`tab-${mode}`).classList.add('active');

    const quizControl = document.getElementById('quiz-control-panel');
    const quizStats = document.getElementById('quiz-stats-bar');
    const quizProgress = document.getElementById('quiz-progress-container');
    const quizContainer = document.getElementById('quiz-container');
    const readerContainer = document.getElementById('reader-container');

    if (mode === 'main') {
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
        renderQuiz();
    }
}

function getActiveQuestions() {
    let filtered = masterQuestionBank;
    if (selectedWeek !== 'all') {
        filtered = masterQuestionBank.filter(q => q.cat === selectedWeek);
    }
    if (filtered.length === 0) filtered = masterQuestionBank;

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

    const quizTitle = document.getElementById('quiz-title');
    if (selectedWeek === '1') quizTitle.innerText = `${t.titleW1} (${questionLimit} Qs)`;
    else if (selectedWeek === '2') quizTitle.innerText = `${t.titleW2} (${questionLimit} Qs)`;
    else quizTitle.innerText = `${t.titleAll} (${questionLimit} Qs)`;

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
    const key = `q_${qIdx}_${selectedWeek}_${questionLimit}`;

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
        const key = `q_${idx}_${selectedWeek}_${questionLimit}`;
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
        delete userAnswers[`q_${idx}_${selectedWeek}_${questionLimit}`];
    });
    renderQuiz();
}

// Master Textbook Reader & Book Flip Engine
function loadReaderWeek(w) {
    activeReaderWeek = w;
    activeChapterIdx = 0;
    document.getElementById('btn-read-week1').classList.remove('active');
    document.getElementById('btn-read-week2').classList.remove('active');
    document.getElementById(`btn-read-week${w}`).classList.add('active');
    
    populateChapterDropdown();
    renderReader();
}

function populateChapterDropdown() {
    const dropdown = document.getElementById('chapter-select-dropdown');
    dropdown.innerHTML = '';

    const weekKey = activeReaderWeek === 1 ? 'week1' : 'week2';
    const chapters = fullBookDatabase[currentLang][weekKey] || fullBookDatabase['ru'][weekKey];

    chapters.forEach((chap, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.innerText = chap.title;
        dropdown.appendChild(opt);
    });

    const optAll = document.createElement('option');
    optAll.value = -1;
    optAll.innerText = "📖 Показать весь учебник целиком";
    dropdown.appendChild(optAll);

    dropdown.value = activeChapterIdx;
}

function jumpToChapter(idx) {
    activeChapterIdx = parseInt(idx, 10);
    renderReader();
}

function prevChapter() {
    const weekKey = activeReaderWeek === 1 ? 'week1' : 'week2';
    const chapters = fullBookDatabase[currentLang][weekKey] || fullBookDatabase['ru'][weekKey];
    if (activeChapterIdx > 0) {
        activeChapterIdx--;
        document.getElementById('chapter-select-dropdown').value = activeChapterIdx;
        renderReader();
    }
}

function nextChapter() {
    const weekKey = activeReaderWeek === 1 ? 'week1' : 'week2';
    const chapters = fullBookDatabase[currentLang][weekKey] || fullBookDatabase['ru'][weekKey];
    if (activeChapterIdx < chapters.length - 1 && activeChapterIdx !== -1) {
        activeChapterIdx++;
        document.getElementById('chapter-select-dropdown').value = activeChapterIdx;
        renderReader();
    }
}

function showFullBook() {
    activeChapterIdx = -1;
    document.getElementById('chapter-select-dropdown').value = -1;
    renderReader();
}

function renderReader() {
    const textArea = document.getElementById('reader-text-area');
    const weekKey = activeReaderWeek === 1 ? 'week1' : 'week2';
    const chapters = fullBookDatabase[currentLang][weekKey] || fullBookDatabase['ru'][weekKey];

    if (activeChapterIdx === -1) {
        // Render entire book continuously
        let fullHtml = '';
        chapters.forEach(chap => {
            fullHtml += chap.content + '<hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:2.5rem 0;">';
        });
        textArea.innerHTML = fullHtml;
    } else {
        // Render single chapter like a book page
        const chap = chapters[activeChapterIdx] || chapters[0];
        textArea.innerHTML = chap.content;
    }
}

document.addEventListener('DOMContentLoaded', initApp);
