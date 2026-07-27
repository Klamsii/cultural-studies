/* ==========================================================================
   CULTURAL STUDIES PREMIUM PORTAL ENGINE (10-WEEK SCALABLE & BILINGUAL)
   ========================================================================== */

let currentLang = 'ru'; // 'ru' or 'en'
let selectedWeek = '1'; // '1', '2', ..., '10', 'all'
let mainViewMode = 'quiz'; // 'quiz' or 'main'
let questionLimit = 10;
let userAnswers = {};
let activeReaderWeek = 1;

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
        qWord: "Вопрос"
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
        qWord: "Question"
    }
};

// Bilingual Question Master Bank
const masterQuestionBank = [
    // Week 1
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

    // Week 2
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
    }
];

// Master Guide Summary Text Database for Reader
const masterTextDatabase = {
    ru: {
        week1: `
            <h1>📘 Учебник Недели 1: Морфология и Язык Культуры</h1>
            <h2>1. Историческая эволюция понятия «Культура»</h2>
            <p>Слово «культура» восходит к латинскому глаголу <strong>colere</strong> — <em>возделывать почву, пахать землю, ухаживать за посевами</em>. Первоначальным значением латинского выражения <strong>agri cultura</strong> являлось <strong>возделывание земли / земледелие (cultivation)</strong>.</p>
            <p>В 45 году до нашей эры римский оратор и философ <strong>Марк Туллий Цицерон</strong> в трактате «Тускуланские беседы» впервые применил это слово в метафорическом контексте: <strong>Cultura Animi</strong> — <em>«возделывание души»</em> с помощью философии.</p>
        `,
        week2: `
            <h1>📙 Учебник Недели 2: Семиотика и Анатомия Культуры</h1>
            <h2>1. Четыре Глобальных Культурных Кода</h2>
            <p><strong>Культурный код</strong> — зашифрованная система знаков и смысловых матриц общества. Выделяются 4 глобальных кода: Дописьменный, Письменный, Экранный и Цифровой.</p>
            <h2>2. Семиотика и Знаковые Системы</h2>
            <p><strong>Фердинанд де Соссюр</strong> доказал, что знак состоит из Обозначающего и Обозначаемого. <strong>Чарльз Пирс</strong> выделил Икону, Индекс (дым-огонь) и Символ.</p>
        `
    },
    en: {
        week1: `
            <h1>📘 Week 1 Textbook: Morphology & Language of Culture</h1>
            <h2>1. Historical Evolution of Culture</h2>
            <p>The word "culture" originates from the Latin verb <strong>colere</strong>. The original literal meaning of <strong>agri cultura</strong> was <strong>cultivation of the soil / agriculture (cultivation)</strong>.</p>
            <p>In 45 BCE, Roman thinker <strong>Marcus Tullius Cicero</strong> coined the metaphor <strong>Cultura Animi</strong> — <em>"cultivation of the soul"</em>.</p>
        `,
        week2: `
            <h1>📙 Week 2 Textbook: Semiotics & Anatomy of Culture</h1>
            <h2>1. Four Global Cultural Codes</h2>
            <p>The 4 global codes are: Preliterate, Written, Screen, and Digital.</p>
            <h2>2. Semiotics & Sign Systems</h2>
            <p><strong>Ferdinand de Saussure</strong> established Signifier and Signified. <strong>Charles Sanders Peirce</strong> classified signs into Icon, Index, and Symbol.</p>
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
    document.getElementById('txt-tab-quiz').innerText = t.tabQuiz;
    document.getElementById('txt-tab-main').innerText = t.tabMain;
    document.getElementById('lbl-q-mode').innerText = t.modeLbl;
    document.getElementById('btn-restart').innerHTML = `<span class="btn-icon">🔄</span> ${t.btnRestart}`;
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

    // Expand pool up to questionLimit dynamically
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
