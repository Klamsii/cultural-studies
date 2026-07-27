/* ==========================================================================
   CULTURAL STUDIES PREMIUM PORTAL ENGINE - 100% FULL UNABRIDGED TEXTBOOK & AI
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
OFFICIAL AITU CULTURAL STUDIES COURSE KNOWLEDGE VAULT:
- ETYMOLOGY: Latin colere (cultivate soil). Agri cultura — agriculture / cultivation of land.
- CICERO (45 BCE): Cultura Animi — cultivation of the soul through philosophy (Tusculan Disputations).
- SIR EDWARD BURNETT TYLOR (1871): Primitive Culture — "that complex whole which includes knowledge, belief, art, morals, law, custom, and any other capabilities acquired by man as a member of society."
- ALFRED KROEBER & CLYDE KLUCKHOHN (1952): Behavioral definition — "shared, learned human behavior, a way of life."
- LESLIE ALVIN WHITE (1949): Founded Culturology based on human symboling capacity.
- TOOLS & TECHNOLOGIES: Belong STRICTLY to Material Culture! Never spiritual.
- CULTURAL LAG: William F. Ogburn (1922) — gap when material technology evolves rapidly while non-material laws/morals lag behind.
- SAPIR-WHORF & LERA BORODITSKY: Language shapes perception (Kuuk Thaayorre spatial orientation, Russian blue/light blue EEG, German vs Spanish bridge gender).
- 4 CULTURAL CODES: Preliterate (oral/ritual), Written (alphabet/print/linear logic), Screen (cinema/TV/visual), Digital (internet/hypertext/prosumers).
- 6 BELIEF FORMS (Tylor): Animism (nature spirits), Fetishism (protective objects / Tumar), Totemism (kinship with animals / Steppe Wolf Böri), Pantheism (God identified with nature / Tengriism), Deism (Clockmaker God), Monotheism (One God).
- TROLLEY PROBLEM: Utilitarianism (Bentham/Mill — save 5 lives over 1) vs Kantian Deontology (prohibits active killing).
- SAUSSURE SEMIOTICS: Signifier (sound image) + Signified (concept). Arbitrariness of the sign.
- PEIRCE TRIAD: Icon (similarity), Index (causal link / smoke-fire), Symbol (social convention / STOP sign).
- CHARLES MORRIS: Syntactics (sign-sign), Semantics (sign-object), Pragmatics (sign-user).
- ROLAND BARTHES (1957): Mythologies — secondary semiotic system, naturalizing bourgeois ideology.
- YURI LOTMAN: Semiosphere — culture as a dynamic unified text and collective intellect.
- OLZHAS SULEIMENOV (1975): "AZ i IA" — semiotic analysis of "The Song of Igor's Campaign" uncovering Turkic-Slavic codes.
- TAMGALY: Sun-Headed Deity (Kunhan) petroglyph — solar cult of Heaven (Tengri).
`;

// Complete 100% Unabridged Chapter-by-Chapter Master Textbook Database (RU & EN)
const fullBookDatabase = {
    ru: {
        week1: [
            {
                title: "Глава 1: Академический Регламент, Силлабус и Расчет Оценок",
                content: `
                    <h1>🎓 Неделя 1. Глава 1: Академический Регламент, Силлабус и Расчет Оценок</h1>
                    <p>Обучение дисциплине «Cultural Studies» в Astana IT University строится на строгой системе рубежного контроля знания. Итоговая оценка по курсу рассчитывается по формуле взвешенного среднего арифметического:</p>
                    <blockquote>Total Grade = (Midterm Grade × 0.30) + (Endterm Grade × 0.30) + (Final Exam Grade × 0.40)</blockquote>
                    <p><strong>Midterm Period (30% итоговой оценки):</strong> Индивидуальная устная презентация и ее защита — 50% балла за Midterm (дедлайн: среда 29 июля 2026 г. до 11:59 AM). Лекционные квизы — 20%. Письменное тестирующее MCQ-обследование длительностью 30 минут — 30% (пятница 31 июля 2026 г.).</p>
                    <p><strong>Endterm Period (30% итоговой оценки):</strong> Групповой исследовательский проект — 50% балла за Endterm (дедлайн: 3 августа до 11:59 AM). Текущие квизы — 20%. MCQ-тест — 30% (среда 5 августа 2026 г.).</p>
                    <p><strong>Final Exam (40% итоговой оценки):</strong> Финальный комплексный компьютерный экзамен проводится в четверг 6 августа 2026 года.</p>
                `
            },
            {
                title: "Глава 2: Историческая эволюция концепта «Культура» (Лекция AITU 1.1)",
                content: `
                    <h1>📜 Неделя 1. Глава 2: Историческая эволюция концепта «Культура»</h1>
                    <h2>2.1 Древнеримская этимология: Латинский корень Colere и выражение Agri Cultura</h2>
                    <p>Слово «культура» восходит к древнелатинскому глаголу <strong>colere</strong>, имевшему в древнеримском аграрном обществе первичные практические значения: <em>«возделывать почву», «пахать землю», «ухаживать за посевами», «почитать», «жительствовать»</em>. Первоначальным буквальным значением латинского словосочетания <strong>agri cultura</strong> являлось <strong>«возделывание земли» / «земледелие» (cultivation)</strong>. В древности культура обозначала не сферу изящных искусств, а исключительно практический агрономический процесс воздействия человека на природу для выращивания урожая. Земля, оставленная без воздействия человека, оставалась дикой (silva); обработанная земля становилась культурой.</p>
                    
                    <h2>2.2 Античный философский перелом: Марк Туллий Цицерон и трактат Cultura Animi (45 г. до н.э.)</h2>
                    <p>Переход термина из агрономии в сферу человеческого духа произошел в I веке до нашей эры благодаря римскому оратору и философу <strong>Марку Туллию Цицерону (Cicero, 106–43 гг. до н.э.)</strong>. В трактате <strong>«Тускуланские беседы» (Tusculan Disputations, 45 г. до н.э.)</strong> Цицерон впервые применил этот термин как метафору: <strong>Cultura Animi Virtus Est</strong> — <em>«Философия есть возделывание/культивирование души»</em>. Цицерон провел аналогию между невозделанным полем и невоспитанным разумом: подобно тому, как даже самое плодородное поле не принесет урожая без пахоты, так и человеческая душа остается дикой без культивирования философией и науками.</p>

                    <h2>2.3 Эпоха Просвещения (Вольтер, Монтескье, Руссо, Гердер)</h2>
                    <p>В XVIII веке просветители Вольтер, Монтескье и Руссо стали использовать понятие «культура» как показатель разумности, морали и общественного прогресса, преодолевающего варварство. Иоганн Готфрид Гердер в трактате <em>«Идеи к философии истории человечества» (1784–1791)</em> впервые заговорил о «культурах» во множественном числе, доказывая утилитарную уникальность каждой национальной культуры.</p>

                    <h2>2.4 Этнографическая антропология: Сэр Эдвард Бернетт Тайлор (1871)</h2>
                    <p>Британский этнограф <strong>Сэр Эдвард Бернетт Тайлор (1832–1917)</strong> в книге <strong>«Первобытная культура» (Primitive Culture, 1871)</strong> сформулировал первое академическое определение: <em>«Культура — это сложный комплекс, включающий знания, верования, искусство, мораль, законы, обычаи и привычки, усвоенные человеком как членом общества»</em>. Тайлор доказал, что культура не передается генетически, а усваивается в процессе социализации (инкультурации).</p>

                    <h2>2.5 Поведенческая концепция А. Крёбера и К. Клакхона (1952)</h2>
                    <p>Альфред Крёбер и Клайд Клакхон проанализировали более 160 определений и сформулировали <strong>поведенческое определение (behavioral definition)</strong>: культура — это <em>«совместное, усвоенное человеческое поведение, образ жизни» (shared, learned human behavior, a way of life)</em>.</p>

                    <h2>2.6 Декларация ЮНЕСКО (Мехико, 1982)</h2>
                    <p>Культура определена как совокупность ярких духовных, материальных, интеллектуальных и эмоциональных черт общества, охватывающая образ жизни, основные права человека, ценности и традиции.</p>

                    <h2>2.7 Выделение Культурологии: Лесли Элвин Уайт (1949)</h2>
                    <p>Американский антрополог <strong>Лесли Элвин Уайт (1900–1975)</strong> в книге <em>«Наука о культуре» (1949)</em> ввел термин <strong>Культурология (Culturology)</strong>, доказав, что культура развиваются по собственным внесоматическим законам благодаря уникальной символизирующей способности человека (symboling).</p>
                `
            },
            {
                title: "Глава 3: Морфология культуры: Структура, Методология, Социобиология и Функции (AITU 1.2)",
                content: `
                    <h1>🏛️ Неделя 1. Глава 3: Морфология культуры и её подсистемы</h1>
                    <h2>3.1 Научное определение Морфологии культуры</h2>
                    <p>Морфология культуры — раздел культурологии, изучающий внутреннее строение культуры как целостного социального феномена, закономерности соединения её частей и механизмы формирования культурных форм.</p>

                    <h2>3.2 Три главные морфологические подсистемы культуры</h2>
                    <p>1. <strong>Материальная подсистема:</strong> Физические артефакты, орудия производства, жилье (юрты), одежда, техника и транспорт. <strong>(ВНИМАНИЕ ДЛЯ ТЕСТОВ: Орудия труда и технологии относятся СТРОГО к материальной культуре и никогда не входят в духовную!)</strong>.</p>
                    <p>2. <strong>Духовная подсистема:</strong> Идеи, наука, религия, философия, мораль, ценности, литература и искусство.</p>
                    <p>3. <strong>Социально-институциональная подсистема:</strong> Законы, семейные институты, государственные нормы, обряды и правила взаимодействия.</p>

                    <h2>3.3 Генетический метод культурологии (Genetic Method)</h2>
                    <p>Научный метод, сосредоточенный на исследовании происхождения (генезиса), первоначальных корней и исторического развития культурных форм, называется <strong>генетическим методом (Genetic Method)</strong>.</p>

                    <h2>3.4 Социобиологическая теория мемов Ричарда Докинза (1976)</h2>
                    <p>Концепция трансляции культуры через «мемы» — базовые единицы культурной информации (Докинз, «Эгоистичный ген», 1976), относится к <strong>социобиологической теории культуры (Sociobiological Theory)</strong>.</p>

                    <h2>3.5 Пять ключевых общественных функций культуры</h2>
                    <p>1. Гуманистическая (развитие личности), 2. Коммуникативная (передача информации), 3. Регулятивная (поддержание порядка через нормы Folkways и Mores), 4. Гносеологическая (познание мира), 5. Идентификационная (социализация в обществе).</p>
                `
            },
            {
                title: "Глава 4: Пять Базовых элементов культуры и Общество vs Культура",
                content: `
                    <h1>🧩 Неделя 1. Глава 4: Элементы культуры и Социологические различия</h1>
                    <h2>4.1 Пять базовых элементов культуры</h2>
                    <p>Базовыми элементами культуры выступают: Ценности (идеалы добра), Верования (принятые представления о мире), Нормы (Folkways — обычаи и Mores — моральные табу), Символы (знаки с общепринятым смыслом) и Язык (главный инструмент кумулятивной трансляции).</p>

                    <h2>4.2 Разграничение: Общество vs Культура</h2>
                    <p>В социологии <strong>Общество (Society)</strong> обозначает сам коллектив людей (аналог <strong>Hardware / Железо</strong>), а <strong>Культура (Culture)</strong> представляет собой систему правил, идей и ценностей, организующих их жизнь (аналог <strong>Software / ПО</strong>).</p>
                `
            },
            {
                title: "Глава 5: Материальная vs Нематериальная культура и Теория Культурного запаздывания",
                content: `
                    <h1>🛖 Неделя 1. Глава 5: Казахская Юрта и Культурный Лаг</h1>
                    <h2>5.1 Материальная vs Нематериальная культура</h2>
                    <p>Материальная культура охватывает осязаемые физические артефакты. Нематериальная культура состоит из духовных смыслов, идей, традиций и правовых норм.</p>

                    <h2>5.2 Символизм Казахской Юрты (Киіз үй)</h2>
                    <p>Казахская юрта сочетает материальный каркас (кереге, уық, киіз) и священный нематериальный смысл: вершинный круг <strong>Шанырак (Шаңырақ)</strong> является символом семейного очага, единства рода и мироздания на Государственном Гербе Республики Казахстан.</p>

                    <h2>5.3 Теория Культурного Запаздывания (Cultural Lag)</h2>
                    <p>Сформулированная Уильямом Огборном в 1922 году теория Культурного Запаздывания описывает разрыв, возникающий когда материальные технологии (техника, ИИ) развиваются стремительно, а нематериальная культура (моральные нормы, законы) отстает.</p>
                `
            },
            {
                title: "Глава 6: Типология культурных форм (Crash Course Sociology #11)",
                content: `
                    <h1>🎭 Неделя 1. Глава 6: Типология культурных форм</h1>
                    <p>Типология включает Доминирующую культуру, Элитарную культуру (высокое искусство), Популярную культуру (массовая поп-культура), Субкультуры (специфический стиль групп внутри общества, по К. Баркеру) и Контркультуры (отвергающие мейнстрим).</p>
                    <p>Оценка других культур различает <strong>Этноцентризм</strong> (осуждение со своей колокольни) и <strong>Культурный релятивизм</strong> (объективная оценка культуры в её контексте).</p>
                `
            },
            {
                title: "Глава 7: Лингвистическая относительность и Семиотика Языка (AITU 1.3)",
                content: `
                    <h1>🗣️ Неделя 1. Глава 7: Лингвистическая относительность</h1>
                    <h2>7.1 Гипотеза Сепира-Уорфа и Эксперименты Бородицкой</h2>
                    <p>Гипотеза Сепира-Уорфа утверждает, что структура языка направляет мышление и восприятие. Эксперименты Леры Бородицкой доказали это: ориентация по сторонам света у Куук Таайорре; быстрый отклик на синий и голубой цвет на русском ЭЭГ; грамматический род моста (немецкий die Brücke — женский род/элегантный, испанский el puente — мужской род/прочный).</p>

                    <h2>7.2 Семиотика Соссюра</h2>
                    <p>По Фердинанду де Соссюру, языковой знак связывает Обозначающее (Signifier — акустический образ) и Обозначаемое (Signified — ментальный смысл). Главный принцип — произвольность знака.</p>
                `
            },
            {
                title: "Глава 8: Цифровая культура и Молодежные субкультуры",
                content: `
                    <h1>🌐 Неделя 1. Глава 8: Цифровая культура и Субкультуры</h1>
                    <p>Нина Узелац (2008) охарактеризовала цифровую среду как <strong>Культуру участия (Participatory culture)</strong>, где пользователи выступают просьюмерами. Крис Баркер (2012) доказал зависимость молодежных субкультур от цифровых сетей.</p>
                `
            },
            {
                title: "Глава 9: Официальный Тестовый Блок Недели 1 (10 Вопросов с ответами)",
                content: `
                    <h1>🔥 Неделя 1. Глава 9: Разбор 10 официальных тестовых вопросов</h1>
                    <p>1. <strong>agri cultura original meaning:</strong> cultivation (возделывание земли).<br>
                    2. <strong>cultura animi thinker:</strong> Cicero (Цицерон, 45 г. до н.э.).<br>
                    3. <strong>physical objects and tools:</strong> material culture (материальная культура).<br>
                    4. <strong>identification with animals:</strong> totemism and animism.<br>
                    5. <strong>NOT part of spiritual culture:</strong> tools and technologies (С Т Р О Г О материальная культура!).<br>
                    6. <strong>Enlightenment philosophers:</strong> Voltaire, Montesquieu, Herder.<br>
                    7. <strong>Kroeber & Kluckhohn behavioral definition:</strong> shared, learned human behavior, a way of life.<br>
                    8. <strong>origin research method:</strong> genetic method.<br>
                    9. <strong>memes theory:</strong> sociobiological theory (Richard Dawkins, 1976).<br>
                    10. <strong>Tylor definition (1871):</strong> Complex which includes knowledge, belief, art, morals, law, custom...</p>
                `
            },
            {
                title: "Глава 10: Устная Защита Перед Преподавателем (10 Экзаменационных Билетов)",
                content: `
                    <h1>💬 Неделя 1. Глава 10: 10 Развернутых Устных Билетов с ответами</h1>
                    <p><strong>Билет 1: Этимология термина «Культура» и роль Цицерона?</strong><br>
                    Ответ: Слово восходит к латинскому colere (обработка земли). Agri cultura означало земледелие. Цицерон в 45 г. до н.э. в «Тускуланских беседах» впервые применил метафору Cultura Animi («возделывание души философией»).</p>
                    
                    <p><strong>Билет 2: Заслуга Лесли Уайта?</strong><br>
                    Ответ: В 1949 году основал Культурологию (Culturology) как самостоятельную науку, доказав, что культура развивается по своим внесоматическим законам на основе символизирующей способности человека (symboling).</p>

                    <p><strong>Билет 3: 3 морфологические подсистемы?</strong><br>
                    Ответ: 1. Материальная (орудия, юрты, техника), 2. Духовная (наука, религия, этика, ценности), 3. Социально-институциональная (законы, семья, нормы).</p>

                    <p><strong>Билет 4: 5 функций культуры?</strong><br>
                    Ответ: Гуманистическая, Коммуникативная, Регулятивная, Гносеологическая, Идентификационная.</p>

                    <p><strong>Билет 5: Folkways vs Mores?</strong><br>
                    Ответ: Folkways — неформальные обычаи повседневного этикета; Mores — строгие моральные законы и табу.</p>

                    <p><strong>Билет 6: Общество vs Культура?</strong><br>
                    Ответ: Общество — коллектив людей (Hardware); Культура — система правил, идей и ценностей (Software).</p>

                    <p><strong>Билет 7: Культурный лаг Огборна?</strong><br>
                    Ответ: Разрыв между быстрым темпом развития материальных технологий и медленным изменением нематериальных законов и морали.</p>

                    <p><strong>Билет 8: Гипотеза Сепира-Уорфа?</strong><br>
                    Ответ: Структура языка направляет внимание и восприятие человека (эксперименты Леры Бородицкой).</p>

                    <p><strong>Билет 9: Знак по Соссюру?</strong><br>
                    Ответ: Двусторонняя сущность: Обозначающее (Signifier — акустический образ) и Обозначаемое (Signified — ментальный смысл).</p>

                    <p><strong>Билет 10: Культура участия по Узелац?</strong><br>
                    Ответ: Цифровая среда, где рушится грань между автором и зрителем, превращая пользователей в просьюмеров.</p>
                `
            }
        ],
        week2: [
            {
                title: "Глава 1: Четыре Глобальных Культурных Кода (AITU 2.1)",
                content: `
                    <h1>📘 Неделя 2. Глава 1: Четыре Глобальных Культурных Кода</h1>
                    <h2>1.1 Понятие Культурного Кода (Cultural Code)</h2>
                    <p>Культурный код — зашифрованная система знаков, символов, ценностных ориентиров и ментальных стереотипов, посредством которых общество сохраняет исторический опыт и передает его поколениям. Он определяет национальный менталитет и форму картины мира.</p>

                    <h2>1.2 Дописьменный (Традиционный) код</h2>
                    <p>Передача знаний без письменности. Медиумы: устная речь, мифоэпос, ритуалы, жырау и акыны. Когнитивный стиль: аудиальный (слуховой), эмоционально-образный и коллективный.</p>

                    <h2>1.3 Письменный (Книжный) код</h2>
                    <p>Возник с алфавитом и Гутенберговским печатным станком XV века. Медиумы: книги, рукописи, архивы, законы. Когнитивный стиль: «Галактика Гутенберга» — строго линейный, аналитический, логический и индивидуально-рефлексивный.</p>

                    <h2>1.4 Экранный код (Кино и ТВ)</h2>
                    <p>Сформировался в XX веке с кинематографом и ТВ. Трансляция через массовое вещание (mass broadcasting). Когнитивный стиль: зрительно-чувственный, динамический и пассивный.</p>

                    <h2>1.5 Цифровой код (Сетевой код)</h2>
                    <p>Современный этап: Интернет, соцсети, гипертекст, алгоритмы ИИ. Пользователи становятся просьюмерами (prosumer — автор и потребитель одновременно). Когнитивный стиль: клиповый, нелинейный, мозаичный и многозадачный.</p>
                `
            },
            {
                title: "Глава 2: 6 Форм Религиозных Верований по Э. Тайлору",
                content: `
                    <h1>🕯️ Неделя 2. Глава 2: 6 Форм Религиозных Верований по Э. Тайлору</h1>
                    <h2>2.1 Эволюционный подход Сэра Эдварда Б. Тайлора (1871)</h2>
                    <p>Тайлор доказывал развитие религии от простых дуалистических представлений к сложным монотеистическим системам.</p>
                    <p>1. <strong>Анимизм (Animism):</strong> Вера в одушевленность всей природы и духов (источник всех религий по Тайлору).</p>
                    <p>2. <strong>Фетишизм (Fetishism):</strong> Религиозное поклонение неодушевленным материальным предметам (Казахский Тұмар).</p>
                    <p>3. <strong>Тотемизм (Totemism):</strong> Вера в сакральное кровное родство рода с животным (Степной Волк Көк Бөрі).</p>
                    <p>4. <strong>Пантеизм (Pantheism):</strong> Полное отождествление Бога и Природы (Тенгрианство — Тенгри и Жер-Су).</p>
                    <p>5. <strong>Деизм (Deism):</strong> Бог как Великий Часовщик Просвещения, не вмешивающийся в мир после сотворения.</p>
                    <p>6. <strong>Монотеизм (Monotheism):</strong> Вера в Единого Творца (Ислам, Христианство, Иудаизм).</p>
                `
            },
            {
                title: "Глава 3: Формирование морали и Парадоксы моральной культуры",
                content: `
                    <h1>⚖️ Неделя 2. Глава 3: Формирование Морали и Проблема Вагонетки</h1>
                    <h2>3.1 Золотое правило нравственности</h2>
                    <p>«Поступай по отношению к другим так, как ты хотел бы, чтобы они поступали по отношению к тебе». На казахском: <em>«Өзіңе тілемейтінді өзгеге тілеме»</em>.</p>

                    <h2>3.2 Парадоксы моральной культуры</h2>
                    <p>Парадокс 1: Абсолютность норм vs Контекстуальный релятивизм (убийство на войне).<br>
                    Парадокс 2: Автономия совести vs Внешний социальный стыд (Ұят).<br>
                    Парадокс 3: Проблема вагонетки (Trolley Problem): <strong>Утилитаризм (Бентам/Милль)</strong> спасает 5 жизней ценой 1; <strong>Деонтология Канта</strong> строго запрещает активное убийство.</p>
                `
            },
            {
                title: "Глава 4: Семиотика: Соссюр, Пирс, Моррис, Выготский, Кристева (AITU 2.1)",
                content: `
                    <h1>🔍 Неделя 2. Глава 4: Структурализм и Семиотика</h1>
                    <h2>4.1 Происхождение Семиотики</h2>
                    <p>От греческого <em>semeion</em> — знак. Наука о знаках и знаковых системах.</p>

                    <h2>4.2 Двусторонний Знак Фердинанда де Соссюра</h2>
                    <p>Знак связывает Обозначающее (Signifier — физический образ) и Обозначаемое (Signified — ментальный смысл). Принцип: произвольность знака.</p>

                    <h2>4.3 Триада и Классификация Знаков Чарльза Пирса</h2>
                    <p>1. <strong>Икона (Icon):</strong> Визуальное сходство (портрет, орнамент Қошқар мүйіз).<br>
                    2. <strong>Индекс (Index):</strong> Физическая причинно-следственная связь (дым — индекс огня).<br>
                    3. <strong>Символ (Symbol):</strong> Условная связь по социальному договору (флаг, знак STOP).</p>

                    <h2>4.4 Три измерения Чарльза Морриса (1938)</h2>
                    <p>Синтактика (знак-знак), Семантика (знак-объект), Прагматика (знак-человек).</p>

                    <h2>4.5 Выготский и Семанализ Кристевой</h2>
                    <p>Выготский: Знаковое опосредование психики. Кристева: <strong>Семанализ (semanalysis)</strong> — соединение семиотики и психоанализа.</p>
                `
            },
            {
                title: "Глава 5: Ролан Барт: Мифологии и Вторичные знаковые системы (AITU 2.2)",
                content: `
                    <h1>🎬 Неделя 2. Глава 5: Ролан Барт и Мифологии</h1>
                    <h2>5.1 Концепция Мифа (1957)</h2>
                    <p>Миф — это вторичная семиотическая система. Первичная Денотация становится Обозначающим для вторичной Коннотации (Идеологии).</p>
                    <h2>5.2 Главная функция мифа</h2>
                    <p><strong>Натурализация идеологии:</strong> превращение буржуазных ценностей в якобы естественные законы природы.</p>
                `
            },
            {
                title: "Глава 6: Условные знаки, Семиосфера Лотмана и Олжас Сулейменов (AITU 2.3)",
                content: `
                    <h1>🌌 Неделя 2. Глава 6: Условные знаки, Лотман и Сулейменов</h1>
                    <h2>6.1 Условные знаки (Conventional Signs)</h2>
                    <p>Знаки на основе соглашения (знак STOP, флаг).</p>
                    <h2>6.2 Юрий Лотман и Семиосфера</h2>
                    <p>Семиосфера — единый семиотический континуум культуры. Культура как коллективный интеллект и текст.</p>
                    <h2>6.3 Олжас Сулейменов «АЗ и Я» (1975)</h2>
                    <p>Семиотический анализ «Слова о полку Игореве», раскрывший славяно-тюркские коды.</p>
                `
            },
            {
                title: "Глава 7: Семиотический Киноанализ «Кода да Винчи»",
                content: `
                    <h1>🎨 Неделя 2. Глава 7: Киноанализ «Кода да Винчи»</h1>
                    <p>Эволюция Пентаграммы в лекции Лэнгдона: языческий символ Венеры -> 5 ран Христа -> сатанинский штамп Голливуда.</p>
                `
            },
            {
                title: "Глава 8: Миф и Петроглифы Танбалы",
                content: `
                    <h1>☀️ Неделя 2. Глава 8: Петроглифы Танбалы</h1>
                    <p>Солнцеголовое божество (Кунхан) в Танбалы как солярный культ Неба (Тенгри).</p>
                `
            },
            {
                title: "Глава 9: Официальный Тестовый Блок Недели 2 (10 Вопросов с ответами)",
                content: `
                    <h1>🔥 Неделя 2. Глава 9: Ключ и разбор 10 тестовых вопросов</h1>
                    <p>1. <strong>semiotics meaning:</strong> sign (знак).<br>
                    2. <strong>culture as dynamic text:</strong> Yuri Lotman.<br>
                    3. <strong>conventional sign:</strong> traffic sign.<br>
                    4. <strong>structuralism founder:</strong> Ferdinand de Saussure.<br>
                    5. <strong>smoke-fire link:</strong> index.<br>
                    6. <strong>Morris 3 branches:</strong> syntactics, semantics, pragmatics.<br>
                    7. <strong>Barthes book:</strong> Mythologies (1957).<br>
                    8. <strong>AZ i IA author:</strong> Olzhas Suleimenov.<br>
                    9. <strong>acoustic image:</strong> signifier.<br>
                    10. <strong>semanalysis:</strong> Julia Kristeva.</p>
                `
            },
            {
                title: "Глава 10: Устная Защита Перед Преподавателем (10 Экзаменационных Билетов)",
                content: `
                    <h1>💬 Неделя 2. Глава 10: 10 Развернутых Устных Билетов с ответами</h1>
                    <p><strong>Билет 1: Денотация vs Коннотация Барта?</strong><br>
                    Ответ: Денотация — прямой смысл знака; Коннотация — вторичный мифологический идеологический смысл.</p>
                    
                    <p><strong>Билет 2: Семиосфера Лотмана?</strong><br>
                    Ответ: Единый семиотический континуум, вне которого знаки не функционируют.</p>

                    <p><strong>Билет 3: Триада Пирса?</strong><br>
                    Ответ: Икона (сходство), Индекс (причинная связь), Символ (условный договор).</p>

                    <p><strong>Билет 4: 4 Культурных Кода?</strong><br>
                    Ответ: Дописьменный, Письменный, Экранный, Цифровой.</p>

                    <p><strong>Билет 5: 6 Религиозных Верований Тайлора?</strong><br>
                    Ответ: Анимизм, Фетишизм, Тотемизм, Пантеизм, Деизм, Монотеизм.</p>

                    <p><strong>Билет 6: Проблема вагонетки?</strong><br>
                    Ответ: Утилитаризм (математика пользы) vs Кантианская деонтология (абсолют завета).</p>

                    <p><strong>Билет 7: 3 измерения Морриса?</strong><br>
                    Ответ: Синтактика, Семантика, Прагматика.</p>

                    <p><strong>Билет 8: Вклад Олжаса Сулейменова?</strong><br>
                    Ответ: Труд «АЗ и Я» (1975), раскрывший тюркско-славянский семиотический синтез.</p>

                    <p><strong>Билет 9: Натурализация идеологии?</strong><br>
                    Ответ: Превращение политических норм в якобы естественные законы природы через миф.</p>

                    <p><strong>Билет 10: Петроглифы Танбалы?</strong><br>
                    Ответ: Изображение Солнцеголового божества (Кунхан), солярный культ Неба (Тенгри).</p>
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
        aiSub: "Прямой устный ответ на английском",
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
        aiSub: "Direct English oral exam answer",
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

// ALWAYS 100% ENGLISH DIRECT AI ORAL ANSWER GENERATOR
async function askAiAssistant() {
    const input = document.getElementById('ai-prompt-input').value.trim();
    if (!input) return;

    const outputBox = document.getElementById('ai-output-box');
    const responseText = document.getElementById('ai-response-text');
    const submitBtn = document.getElementById('ai-submit-btn');

    outputBox.style.display = 'flex';
    responseText.innerHTML = '⚡ <em>Formulating direct English answer from AITU course materials...</em>';
    submitBtn.disabled = true;

    // Strict system prompt: NEVER preamble, ALWAYS direct 3-4 sentence ENGLISH response!
    const systemPrompt = `
CRITICAL INSTRUCTIONS FOR AI ASSISTANT:
1. YOU MUST ALWAYS RESPOND 100% IN CLEAR, ELEGANT, HIGHLY ARTICULATE ACADEMIC ENGLISH, regardless of what language the question was asked in!
2. NEVER INCLUDE ANY PREAMBLES, INTRODUCTORY FILLER, OR META-REFERENCES (DO NOT say "According to...", "Based on our course...", "As stated in...").
3. START IMMEDIATELY WITH THE DIRECT, DEFINITIVE ANSWER TO THE PROFESSOR'S QUESTION.
4. Keep the answer to EXACTLY 3-4 concise, powerful sentences suitable for the student to read aloud directly to the teacher.
5. Base the answer STRICTLY on the official course knowledge vault provided below:

OFFICIAL COURSE KNOWLEDGE VAULT:
${COURSE_KNOWLEDGE_VAULT}
`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    { role: 'user', parts: [{ text: systemPrompt + "\nProfessor's Question: " + input }] }
                ],
                generationConfig: { maxOutputTokens: 300, temperature: 0.2 }
            })
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            let answer = data.candidates[0].content.parts[0].text.trim();
            // Strip any accidental preambles
            answer = answer.replace(/^According to [^,.]*[,.]\s*/i, '');
            answer = answer.replace(/^Based on [^,.]*[,.]\s*/i, '');
            responseText.innerText = answer;
        } else {
            throw new Error("Fallback");
        }
    } catch (err) {
        responseText.innerText = searchLocalCourseVaultDirectEnglish(input);
    } finally {
        submitBtn.disabled = false;
    }
}

// Local Fallback Search Engine (Direct English Answers, No Preambles!)
function searchLocalCourseVaultDirectEnglish(q) {
    const qLower = q.toLowerCase();
    
    if (qLower.includes('цицерон') || qLower.includes('cicero') || qLower.includes('cultura animi')) {
        return "In 45 BCE, Marcus Tullius Cicero introduced the metaphor 'Cultura Animi' in his Tusculan Disputations, defining philosophy as the cultivation of the human soul. He drew a direct parallel with agriculture (agri cultura), arguing that just as fertile land remains unproductive without tilling, the human mind remains wild without intellectual and moral cultivation.";
    }
    if (qLower.includes('тайлор') || qLower.includes('tylor') || qLower.includes('анимизм')) {
        return "Sir Edward Burnett Tylor in 1871 formulated the foundational anthropological definition of culture as that complex whole comprising knowledge, beliefs, art, morals, laws, and customs acquired by humans as members of society. He also established Animism—the belief in spirits animating all natural phenomena—as the primary origin of human religion.";
    }
    if (qLower.includes('соссюр') || qLower.includes('saussure') || qLower.includes('обозначающее')) {
        return "Ferdinand de Saussure established structural linguistics by demonstrating that a sign is a two-sided psychological entity uniting a Signifier (acoustic or visual sound image) and a Signified (mental concept). He proved the principle of sign arbitrariness, meaning the link between sound and concept is grounded entirely in social convention.";
    }
    if (qLower.includes('пирс') || qLower.includes('peirce') || qLower.includes('индекс')) {
        return "Charles Sanders Peirce categorized sign systems into Icons, Indexes, and Symbols based on their relation to reality. Icons possess visual resemblance, Indexes establish a direct physical or causal connection such as smoke signaling fire, and Symbols rely strictly on arbitrary societal agreement.";
    }
    if (qLower.includes('барт') || qLower.includes('barthes') || qLower.includes('миф')) {
        return "Roland Barthes demonstrated in Mythologies (1957) that modern myth operates as a secondary semiotic system where a primary sign becomes the signifier for secondary ideological connotation. The central social function of myth is the naturalization of ideology, presenting bourgeois political interests as self-evident laws of nature.";
    }
    if (qLower.includes('лотман') || qLower.includes('lotman') || qLower.includes('семиосфера')) {
        return "Yuri Lotman defined the Semiosphere as the unified, continuous semiotic space outside of which no individual sign or language can function or generate meaning. In his theory, culture operates as a collective intellect and a dynamic, self-organizing text embedded with structural codes.";
    }
    if (qLower.includes('сулейменов') || qLower.includes('suleimenov') || qLower.includes('аз и я')) {
        return "Olzhas Suleimenov conducted a ground-breaking semiotic and linguistic analysis of The Song of Igor's Campaign in his 1975 masterpiece AZ i IA. He uncovered bilingual Turkic-Slavic cultural codes, proving the deep historical synthesis of nomadic and settled Eurasian civilizations.";
    }
    
    return "Culture is defined as a complex morphological system of shared values, non-material beliefs, and symbolic codes transmitted across generations. It structures human cognition, governs social behavior through normative rules, and provides the software through which society interprets reality.";
}

function copyAiResponse() {
    const text = document.getElementById('ai-response-text').innerText;
    navigator.clipboard.writeText(text);
    alert("✅ English oral answer copied! Read it aloud to the teacher.");
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
