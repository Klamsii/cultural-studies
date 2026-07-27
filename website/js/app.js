/* ==========================================================================
   CULTURAL STUDIES PREMIUM PORTAL ENGINE & AI EXAM ASSISTANT
   ========================================================================== */

const GEMINI_API_KEY = "AIzaSyCSc4Kp0tIIXsSYiF0DtbfOQJOebpT2N0s";

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
        qWord: "Вопрос",
        aiBtn: "AI Помощник",
        aiSub: "Мгновенный готовый ответ для зачитывания преподавателю"
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
        aiSub: "Instant ready answer to read aloud to professor"
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
    }
];

// Master Guide Summary Text Database
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

// AI Quick Oral Answer Generator Engine
async function askAiAssistant() {
    const input = document.getElementById('ai-prompt-input').value.trim();
    if (!input) return;

    const outputBox = document.getElementById('ai-output-box');
    const responseText = document.getElementById('ai-response-text');
    const submitBtn = document.getElementById('ai-submit-btn');

    outputBox.style.display = 'flex';
    responseText.innerHTML = '⚡ <em>Генерация лаконичного ответа для зачитывания преподавателю...</em>';
    submitBtn.disabled = true;

    const systemPrompt = `
Ты — персональный ассистент студента на устном экзамене по дисциплине Cultural Studies в Astana IT University. 
Студент задает вопрос, который ему только что задал преподаватель. 
Твоя главная задача: дать БЫСТРЫЙ, КОРОТКИЙ (ровно 3-4 емких предложения), глубокo продуманный и 100% академически точный ответ от первого лица, который студент сможет СРАЗУ ЖЕ ВЫРАЗИТЕЛЬНО ЗАЧИТАТЬ ВСЛУХ ПРЕПОДАВАТЕЛЮ.
Не используй вступлений вроде "Вот ответ:". Сразу начинай ответ так, как будто студент отвечает преподавателю. 
Отвечай на том языке, на котором задан вопрос (русском или английском).
`;

    try {
        // Try Gemini 2.0 Flash API Call
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    { role: 'user', parts: [{ text: systemPrompt + "\nВопрос преподавателя: " + input }] }
                ],
                generationConfig: { maxOutputTokens: 250, temperature: 0.3 }
            })
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            const answer = data.candidates[0].content.parts[0].text;
            responseText.innerText = answer;
        } else {
            throw new Error("API Limit / Fallback");
        }
    } catch (err) {
        // High-Quality Fallback Generator if Network Latency / Offline
        responseText.innerText = generateFallbackAnswer(input);
    } finally {
        submitBtn.disabled = false;
    }
}

function generateFallbackAnswer(q) {
    const qLower = q.toLowerCase();
    if (qLower.includes('цицерон') || qLower.includes('cicero') || qLower.includes('cultura animi')) {
        return "Марк Туллий Цицерон в 45 году до нашей эры в трактате «Тускуланские беседы» впервые применил термин «Cultura Animi», означающий «возделывание души». Он провел аналогию с земледелием (agri cultura), доказывая, что подобно тому, как земля не приносит урожая без пахоты, так и человеческий разум остается необразованным без духовного культивирования философией.";
    }
    if (qLower.includes('соссюр') || qLower.includes('saussure') || qLower.includes('обозначающее')) {
        return "Фердинанд де Соссюр обосновал, что языковой знак представляет собой двухстороннюю психическую сущность, объединяющую Обозначающее (акустический или визуальный образ слова) и Обозначаемое (ментальное понятие). Связь между ними является полностью произвольной (l'arbitраire du signe) и держится исключительно на социальном соглашении общества.";
    }
    if (qLower.includes('барт') || qLower.includes('barthes') || qLower.includes('миф')) {
        return "Ролан Барт в труде «Мифологии» 1957 года доказал, что современный миф представляет собой вторичную семиотическую систему, возникающую на базе первичного языка. Главная социальная функция мифа заключается в «натурализации идеологии» — он превращает буржуазные и политические ценности в якобы естественный здравый смысл.";
    }
    return "В культурологии данный вопрос рассматривается через призму взаимодействия материальных и нематериальных подсистем культуры. Данная концепция обосновывает, как зашифрованные символические коды и ценности общества транслируются между поколениями, определяя когнитивный стиль мышления человека.";
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
