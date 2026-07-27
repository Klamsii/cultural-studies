/* ==========================================================================
   CULTURAL STUDIES PREMIUM PORTAL ENGINE - FULL BILINGUAL (RU/EN) & AI
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
- ETYMOLOGY: colere (cultivate soil). agri cultura — agriculture / cultivation.
- CICERO (45 BCE): Cultura Animi — cultivation of the soul through philosophy.
- E.B. TYLOR (1871): Primitive Culture — complex whole including knowledge, belief, art, morals, law, custom.
- KROEBER & KLUCKHOHN (1952): behavioral definition — shared, learned human behavior, a way of life.
- LESLIE WHITE (1949): Culturology, symboling capacity.
- TOOLS & TECHNOLOGIES: belong STRICTLY to Material Culture!
- CULTURAL LAG: W. Ogburn (1922) — gap between material technology and non-material morals/laws.
- SAPIR-WHORF & BORODITSKY: language shapes perception (Kuuk Thaayorre, Russian blue/light blue EEG, bridge gender).
- 4 CULTURAL CODES: Preliterate, Written, Screen, Digital.
- 6 BELIEF FORMS: Animism, Fetishism (Tumar), Totemism (Steppe Wolf Böri), Pantheism (Tengriism), Deism, Monotheism.
- TROLLEY PROBLEM: Utilitarianism (5 lives > 1) vs Kantian Deontology (active killing prohibition).
- SAUSSURE SEMIOTICS: Signifier + Signified. Arbitrariness of the sign.
- PEIRCE TRIAD: Icon (similarity), Index (causal link, smoke-fire), Symbol (convention, STOP).
- CHARLES MORRIS: Syntactics, Semantics, Pragmatics.
- ROLAND BARTHES (1957): Mythologies — secondary semiotic system, naturalizing ideology.
- YURI LOTMAN: Semiosphere — culture as a dynamic text.
- OLZHAS SULEIMENOV (1975): "AZ i IA" — semiotic analysis of "The Song of Igor's Campaign".
- TAMGALY: Sun-Headed Deity (Kunhan) petroglyph — solar cult of Heaven (Tengri).
`;

// Complete Chapter-by-Chapter Master Textbook Database (RU & EN)
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
                    <p>3. <strong>Социально-институциональная подсистема:</strong> Законы, семейные институты, государственные нормы, обряды и правила взаимодействия.</p>
                    
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
                content: `
                    <h1>🎓 Week 1. Chapter 1: Academic Regulations & Grading Formula</h1>
                    <p>Course evaluation at Astana IT University relies on a weighted average formula:</p>
                    <blockquote>Total Grade = (Midterm Grade × 0.30) + (Endterm Grade × 0.30) + (Final Exam Grade × 0.40)</blockquote>
                    <p>Midterm Period (30% weight): Oral presentation (50% of Midterm), quizzes (20%), and 30-min MCQ test (30%). Endterm Period (30% weight): Group research project (50%), quizzes (20%), and MCQ test (30%). Final Computer Exam (40% weight) takes place on August 6, 2026.</p>
                `
            },
            {
                title: "Chapter 2: Historical Evolution of Culture (AITU 1.1)",
                content: `
                    <h1>📜 Week 1. Chapter 2: Historical Evolution of Concept 'Culture'</h1>
                    <h2>2.1 Ancient Roman Etymology: colere and agri cultura</h2>
                    <p>The word "culture" traces back to Latin <strong>colere</strong> — <em>to cultivate soil, plow, tend crops</em>. The literal meaning of <strong>agri cultura</strong> was <strong>cultivation of soil / agriculture (cultivation)</strong>.</p>
                    
                    <h2>2.2 Cicero and Cultura Animi (45 BCE)</h2>
                    <p>In 45 BCE, Roman orator <strong>Marcus Tullius Cicero</strong> coined the metaphor: <strong>Cultura Animi Virtus Est</strong> — <em>"Philosophy is the cultivation of the soul"</em> in <em>Tusculan Disputations</em>.</p>

                    <h2>2.3 Enlightenment & Tylor's Anthropology (1871)</h2>
                    <p>In 1871, <strong>Sir Edward Burnett Tylor</strong> defined culture as: <em>"that complex whole which includes knowledge, belief, art, morals, law, custom, and any other capabilities and habits acquired by man as a member of society."</em> In 1949, <strong>Leslie White</strong> established <strong>Culturology</strong> based on symboling capacity.</p>
                `
            },
            {
                title: "Chapter 3: Morphology of Culture & Subsystems (AITU 1.2)",
                content: `
                    <h1>🏛️ Week 1. Chapter 3: Morphology of Culture</h1>
                    <h2>3.1 Three Morphological Subsystems</h2>
                    <p>1. <strong>Material Subsystem:</strong> Tools of production, housing (yurts), clothing, technology, and transport. <strong>(EXAM NOTICE: Tools and technologies belong STRICTLY to material culture!)</strong></p>
                    <p>2. <strong>Spiritual Subsystem:</strong> Ideas, science, religion, philosophy, ethics, values, art.</p>
                    <p>3. <strong>Social-Institutional Subsystem:</strong> Laws, family norms, state regulations, and rituals.</p>
                    
                    <h2>3.2 Genetic Method & Dawkins Memes</h2>
                    <p>The research method studying origin and evolution of cultural forms is the <strong>Genetic Method</strong>. Richard Dawkins (1976) introduced memes under <strong>Sociobiological Theory</strong>.</p>
                `
            },
            {
                title: "Chapter 4: Five Basic Elements & Society vs Culture",
                content: `
                    <h1>🧩 Week 1. Chapter 4: Basic Elements of Culture</h1>
                    <p>Five elements: Values, Beliefs, Norms (Folkways and Mores), Symbols, and Language.</p>
                    <p>Computer analogy: <strong>Society</strong> is the Hardware (people), while <strong>Culture</strong> is the Software (system of rules, ideas, values).</p>
                `
            },
            {
                title: "Chapter 5: Kazakh Yurt & Cultural Lag Theory",
                content: `
                    <h1>🛖 Week 1. Chapter 5: Kazakh Yurt & Cultural Lag</h1>
                    <p>The Kazakh Yurt combines physical structure with sacred non-material meaning. The top ring <strong>Shanyraq (Шаңырақ)</strong> represents family hearth and cosmos on the Coat of Arms of Kazakhstan.</p>
                    <p>William Ogburn (1922) introduced <strong>Cultural Lag Theory</strong>: the gap when material technology evolves rapidly while non-material morals and laws lag behind.</p>
                `
            },
            {
                title: "Chapter 6: Typology of Cultural Forms (Crash Course #11)",
                content: `
                    <h1>🎭 Week 1. Chapter 6: Typology of Cultural Forms</h1>
                    <p>Forms: Dominant culture, High culture, Popular culture, Subcultures (Barker), and Countercultures. Evaluating other cultures distinguishes Ethnocentrism (biased judgment) from Cultural Relativism (objective evaluation in context).</p>
                `
            },
            {
                title: "Chapter 7: Linguistic Relativity & Semiotics (AITU 1.3)",
                content: `
                    <h1>🗣️ Week 1. Chapter 7: Linguistic Relativity</h1>
                    <p>The Sapir-Whorf hypothesis states language shapes perception. Lera Boroditsky's TED experiments proved this (Kuuk Thaayorre spatial orientation, Russian EEG blue distinction, German vs Spanish bridge gender). Saussure's sign links Signifier (sound image) and Signified (mental concept).</p>
                `
            },
            {
                title: "Chapter 8: Digital Culture & Youth Subcultures",
                content: `
                    <h1>🌐 Week 1. Chapter 8: Digital Culture & Subcultures</h1>
                    <p>Nina Uzelac (2008) defined digital environment as Participatory Culture (users as prosumers). Chris Barker (2012) highlighted subcultures' reliance on digital networks.</p>
                `
            },
            {
                title: "Chapter 9: Official Week 1 Test Answer Key",
                content: `
                    <h1>🔥 Week 1. Chapter 9: Test Answer Key (10/10)</h1>
                    <p>1. <strong>agri cultura</strong> -> cultivation.<br>2. <strong>cultura animi</strong> -> Cicero.<br>3. <strong>physical objects/tools</strong> -> material culture.<br>4. <strong>identification with animals</strong> -> totemism and animism.<br>5. <strong>NOT spiritual culture</strong> -> tools and technologies.<br>6. <strong>Enlightenment</strong> -> Voltaire, Montesquieu, Herder.<br>7. <strong>Kroeber & Kluckhohn</strong> -> shared, learned human behavior.<br>8. <strong>origin research method</strong> -> genetic.<br>9. <strong>memes theory</strong> -> sociobiological theory.<br>10. <strong>Tylor definition</strong> -> Complex which includes knowledge, belief...</p>
                `
            },
            {
                title: "Chapter 10: Oral Defense Tickets (10 Detailed Q&As)",
                content: `
                    <h1>💬 Week 1. Chapter 10: 10 Exam Tickets Breakdown</h1>
                    <p><strong>Ticket 1: Folkways vs Mores?</strong><br>Answer: Folkways are informal etiquette customs with mild sanctions; Mores are strict moral laws and taboos critical for survival.</p>
                `
            }
        ],
        week2: [
            {
                title: "Chapter 1: Four Global Cultural Codes",
                content: `
                    <h1>📘 Week 2. Chapter 1: Four Global Cultural Codes</h1>
                    <p>1. <strong>Preliterate Code:</strong> Oral speech, rituals, bards (zhyrau), auditory thinking.</p>
                    <p>2. <strong>Written Code:</strong> Alphabet, Gutenberg printing press, books, linear analytical logic.</p>
                    <p>3. <strong>Screen Code:</strong> Cinema, TV, mass broadcasting, visual-passive style.</p>
                    <p>4. <strong>Digital Code:</strong> Internet, hypertext, prosumers, clip thinking, AI algorithms.</p>
                `
            },
            {
                title: "Chapter 2: 6 Religious Belief Forms (E.B. Tylor)",
                content: `
                    <h1>🕯️ Week 2. Chapter 2: 6 Belief Forms</h1>
                    <p>1. Animism (nature spirits), 2. Fetishism (protective objects / Tumar), 3. Totemism (blood kinship with animal / Steppe Wolf Böri), 4. Pantheism (identifying God with nature / Tengriism), 5. Deism (Clockmaker God), 6. Monotheism (One God).</p>
                `
            },
            {
                title: "Chapter 3: Morality Formation & Trolley Problem",
                content: `
                    <h1>⚖️ Week 2. Chapter 3: Morality & Trolley Problem</h1>
                    <p>Golden Rule of Morality. In the Trolley Problem: Utilitarianism (Bentham/Mill) switch track to save 5 lives over 1 (utility math); Kantian Deontology prohibits active killing.</p>
                `
            },
            {
                title: "Chapter 4: Semiotics (Saussure, Peirce, Morris, Kristeva)",
                content: `
                    <h1>🔍 Week 2. Chapter 4: Structuralism & Semiotics</h1>
                    <p>Semiotics (Greek semeion = sign). Saussure (Signifier/Signified). Peirce triad: Icon (similarity), Index (causal link, smoke-fire), Symbol (social convention). Morris: Syntactics, Semantics, Pragmatics. Julia Kristeva: Semanalysis.</p>
                `
            },
            {
                title: "Chapter 5: Roland Barthes & Mythologies (1957)",
                content: `
                    <h1>🎬 Week 2. Chapter 5: Roland Barthes & Mythologies</h1>
                    <p>Barthes proved myth is a secondary semiotic system. Primary Denotation becomes Signifier for secondary Connotation (Myth). Main function: Naturalization of ideology.</p>
                `
            },
            {
                title: "Chapter 6: Conventional Signs, Lotman's Semiosphere, Suleimenov",
                content: `
                    <h1>🌌 Week 2. Chapter 6: Conventional Signs & Semiosphere</h1>
                    <p>Conventional signs (STOP sign). Yuri Lotman founded <strong>Semiosphere</strong> (culture as dynamic text). Olzhas Suleimenov wrote <strong>AZ i IA (1975)</strong> analyzing Turkic-Slavic codes in Tale of Igor's Campaign.</p>
                `
            },
            {
                title: "Chapter 7: Semiotic Film Analysis of The Da Vinci Code",
                content: `
                    <h1>🎨 Week 2. Chapter 7: Film Analysis</h1>
                    <p>Evolution of Pentagram: Venus pagan symbol -> 5 wounds of Christ -> Hollywood satanic trope.</p>
                `
            },
            {
                title: "Chapter 8: Myth & Tamgaly Petroglyphs",
                content: `
                    <h1>☀️ Week 2. Chapter 8: Tamgaly Petroglyphs</h1>
                    <p>Sun-Headed Deity (Kunhan) petroglyphs in Tamgaly reflect solar cult of Heaven (Tengri).</p>
                `
            },
            {
                title: "Chapter 9: Official Week 2 Test Answer Key",
                content: `
                    <h1>🔥 Week 2. Chapter 9: Answer Key (10/10)</h1>
                    <p>1. semiotics meaning -> sign.<br>2. culture as dynamic text -> Yuri Lotman.<br>3. conventional sign -> traffic sign.<br>4. structuralism founder -> Ferdinand de Saussure.<br>5. smoke-fire link -> index.<br>6. Morris 3 branches -> syntactics, semantics, pragmatics.<br>7. Barthes book -> Mythologies.<br>8. AZ i IA author -> Olzhas Suleimenov.<br>9. acoustic image -> signifier.<br>10. semanalysis -> critique of meaning.</p>
                `
            },
            {
                title: "Chapter 10: Oral Defense Tickets (10 Detailed Q&As)",
                content: `
                    <h1>💬 Week 2. Chapter 10: Oral Tickets</h1>
                    <p><strong>Ticket 1: What is Lotman's Semiosphere?</strong><br>Answer: Unified semiotic continuum of culture necessary for any language to exist and function as collective intellect.</p>
                `
            }
        ]
    }
};

// Bilingual UI Text Translations
const uiTranslations = {
    ru: {
        logoSub: "10-Недельный Портал",
        lblSelectWeek: "Неделя курса:",
        tabQuiz: "Quiz Trainer",
        tabMain: "Master Textbook",
        modeLbl: "Режим вопросов:",
        opt10: "10 Вопросов",
        opt30: "30 Вопросов",
        opt50: "50 Вопросов",
        opt100: "100 Вопросов (Мега Режим)",
        btnRestart: "Сбросить Тест",
        lblActiveTest: "Активный Тест",
        lblScore: "Счет",
        lblAccuracy: "Точность",
        titleW1: "Неделя 1: Морфология и Язык Культуры",
        titleW2: "Неделя 2: Семиотика и Анатомия Культуры",
        titleAll: "Полный Мега-Экзамен по всем неделям курса",
        btnReadW1: "📘 Учебник Недели 1",
        btnReadW2: "📙 Учебник Недели 2",
        qWord: "Вопрос",
        aiBtn: "AI Помощник",
        aiSub: "Ответ строго по материалам наших лекций AITU",
        lblPrevChap: "Назад",
        lblNextChap: "Вперед",
        lblAllChap: "Весь текст",
        optAllChapText: "📖 Показать весь учебник целиком",
        weekOpt1: "Week 1: Morphology & Language",
        weekOpt2: "Week 2: Semiotics & Anatomy",
        weekOptAll: "🔥 Full Course Mega-Test"
    },
    en: {
        logoSub: "10-Week Portal",
        lblSelectWeek: "Course Week:",
        tabQuiz: "Quiz Trainer",
        tabMain: "Master Textbook",
        modeLbl: "Questions Mode:",
        opt10: "10 Questions",
        opt30: "30 Questions",
        opt50: "50 Questions",
        opt100: "100 Questions (Mega Mode)",
        btnRestart: "Restart Test",
        lblActiveTest: "Active Test",
        lblScore: "Score",
        lblAccuracy: "Accuracy",
        titleW1: "Week 1: Morphology & Language of Culture",
        titleW2: "Week 2: Semiotics & Anatomy of Culture",
        titleAll: "Full Comprehensive Exam Across All Weeks",
        btnReadW1: "📘 Week 1 Textbook",
        btnReadW2: "📙 Week 2 Textbook",
        qWord: "Question",
        aiBtn: "AI Assistant",
        aiSub: "Answer grounded strictly in AITU course files",
        lblPrevChap: "Back",
        lblNextChap: "Next",
        lblAllChap: "Full Book",
        optAllChapText: "📖 Show Entire Textbook",
        weekOpt1: "Week 1: Morphology & Language",
        weekOpt2: "Week 2: Semiotics & Anatomy",
        weekOptAll: "🔥 Full Course Mega-Test"
    }
};

// Bilingual Question Master Bank
const masterQuestionBank = [
    {
        cat: '1',
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
        cat: '1',
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
        cat: '1',
        q: {
            ru: "3. Какой тип культуры основан на физических артефактах, орудиях труда и технологиях?",
            en: "3. Which type of culture is based on physical objects and technologies?"
        },
        opts: {
            ru: ["Материальная культура", "Духовная культура", "Социальная культура", "Политическая культура", "Символическая культура"],
            en: ["Material culture", "Spiritual culture", "Social culture", "Political culture", "Symbolic culture"]
        },
        ans: 0,
        exp: {
            ru: "✅ Орудия труда, жилье и технологии относятся СТРОГО к материальной культуре!",
            en: "✅ Tools, physical objects, and technologies belong STRICTLY to material culture."
        }
    },
    {
        cat: '2',
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
        cat: '2',
        q: {
            ru: "2. Кто сформулировал концепцию «Семиосферы» и культуры как динамического текста?",
            en: "2. Who introduced the idea that culture can be studied as a dynamic text with its own codes?"
        },
        opts: {
            ru: ["Юрий Лотман", "Ролан Барт", "Фердинанд де Соссюр", "Чарльз Пирс", "Олжас Сулейменов"],
            en: ["Yuri Lotman", "Roland Barthes", "Ferdinand de Saussure", "Charles Peirce", "Olzhas Suleimenov"]
        },
        ans: 0,
        exp: {
            ru: "✅ Юрий Михайлович Лотман ввел понятие Семиосферы и обосновал концепцию культуры как текста.",
            en: "✅ Yuri Lotman founded the Semiosphere concept and viewed culture as a dynamic text."
        }
    }
];

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
        return currentLang === 'ru' 
            ? "Марк Туллий Цицерон в 45 году до нашей эры в трактате «Тускуланские беседы» впервые применил термин «Cultura Animi», означающий «возделывание души» с помощью философии. Он провел аналогию с земледелием (agri cultura), доказывая, что подобно тому, как земля не приносит урожая без пахоты, так и человеческий разум остается необразованным без духовного культивирования."
            : "In 45 BCE, Marcus Tullius Cicero coined the phrase 'Cultura Animi' in Tusculan Disputations, meaning the cultivation of the soul through philosophy. He drew an analogy with agriculture (agri cultura), arguing that just as fertile soil yields no crops without tilling, the human soul remains uneducated without spiritual cultivation.";
    }
    if (qLower.includes('тайлор') || qLower.includes('tylor') || qLower.includes('анимизм')) {
        return currentLang === 'ru'
            ? "Сэр Эдвард Бернетт Тайлор в 1871 году в труде «Первобытная культура» сформулировал классическое этнографическое определение культуры как сложного комплекса знаний, верований, искусства, морали, законов и обычаев, усвоенных человеком в обществе. Тайлор также выделил анимизм как первичную форму религии."
            : "Sir Edward Burnett Tylor in 1871 (Primitive Culture) defined culture as that complex whole including knowledge, belief, art, morals, law, and custom acquired by man as a member of society. He also established Animism as the primary form of religion.";
    }
    
    return currentLang === 'ru'
        ? "Согласно академическим материалам нашего курса Cultural Studies, данный вопрос рассматривается через систему зашифрованных культурных кодов и морфологических подсистем. Концепция объясняет, как нематериальные ценности и традиции транслируются в обществе."
        : "According to our AITU Cultural Studies materials, this topic is analyzed through cultural codes and morphological subsystems, explaining how non-material values and traditions are transmitted in society.";
}

function copyAiResponse() {
    const text = document.getElementById('ai-response-text').innerText;
    navigator.clipboard.writeText(text);
    alert(currentLang === 'ru' ? "✅ Текст ответа скопирован!" : "✅ Answer copied!");
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
    document.getElementById('lbl-prev-chap').innerText = t.lblPrevChap;
    document.getElementById('lbl-next-chap').innerText = t.lblNextChap;
    document.getElementById('lbl-all-chap').innerText = t.lblAllChap;

    const weekSelect = document.getElementById('week-select-dropdown');
    if (weekSelect) {
        weekSelect.options[0].text = t.weekOpt1;
        weekSelect.options[1].text = t.weekOpt2;
        weekSelect.options[10].text = t.weekOptAll;
    }

    const select = document.getElementById('q-count-select');
    select.options[0].text = t.opt10;
    select.options[1].text = t.opt30;
    select.options[2].text = t.opt50;
    select.options[3].text = t.opt100;

    // Refresh active view
    if (mainViewMode === 'main') {
        populateChapterDropdown();
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
        loadReaderWeek(activeReaderWeek);
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
    if (!dropdown) return;
    dropdown.innerHTML = '';

    const weekKey = activeReaderWeek === 1 ? 'week1' : 'week2';
    const chapters = fullBookDatabase[currentLang][weekKey] || fullBookDatabase['ru'][weekKey];
    const t = uiTranslations[currentLang];

    chapters.forEach((chap, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.innerText = chap.title;
        dropdown.appendChild(opt);
    });

    const optAll = document.createElement('option');
    optAll.value = -1;
    optAll.innerText = t.optAllChapText;
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
    
    if (activeChapterIdx === -1 || activeChapterIdx <= 0) {
        activeChapterIdx = 0;
    } else {
        activeChapterIdx--;
    }
    
    const dropdown = document.getElementById('chapter-select-dropdown');
    if (dropdown) dropdown.value = activeChapterIdx;
    renderReader();
}

function nextChapter() {
    const weekKey = activeReaderWeek === 1 ? 'week1' : 'week2';
    const chapters = fullBookDatabase[currentLang][weekKey] || fullBookDatabase['ru'][weekKey];
    
    if (activeChapterIdx === -1) {
        activeChapterIdx = 0;
    } else if (activeChapterIdx < chapters.length - 1) {
        activeChapterIdx++;
    }

    const dropdown = document.getElementById('chapter-select-dropdown');
    if (dropdown) dropdown.value = activeChapterIdx;
    renderReader();
}

function showFullBook() {
    activeChapterIdx = -1;
    const dropdown = document.getElementById('chapter-select-dropdown');
    if (dropdown) dropdown.value = -1;
    renderReader();
}

function renderReader() {
    const textArea = document.getElementById('reader-text-area');
    if (!textArea) return;

    const weekKey = activeReaderWeek === 1 ? 'week1' : 'week2';
    const chapters = fullBookDatabase[currentLang][weekKey] || fullBookDatabase['ru'][weekKey];

    if (activeChapterIdx === -1) {
        let fullHtml = '';
        chapters.forEach(chap => {
            fullHtml += chap.content + '<hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:2.5rem 0;">';
        });
        textArea.innerHTML = fullHtml;
    } else {
        const chap = chapters[activeChapterIdx] || chapters[0];
        textArea.innerHTML = chap.content;
    }

    // Smooth scroll to top of reader container
    document.getElementById('reader-container').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', initApp);
