/* ==========================================================================
   CULTURAL STUDIES QUIZ TRAINER - DYNAMIC 10 / 30 / 50 / 100 QUESTIONS ENGINE
   ========================================================================== */

// Base Question Master Bank (100 Questions Generator)
const rawMasterBank = [
    // Week 1 Questions
    { q: "What was the original meaning of the Latin word «agri cultura»?", opts: ["cultivation", "civilization", "religion", "tradition", "education"], ans: 0, cat: "w1", exp: "✅ 'Agri cultura' literally means cultivation of the soil/agriculture from Latin 'colere'." },
    { q: "Which ancient Roman thinker used the phrase «cultura animi»?", opts: ["Plato", "Aristotle", "Cicero", "Seneca", "Marcus Aurelius"], ans: 2, cat: "w1", exp: "✅ Marcus Tullius Cicero (45 BCE, Tusculan Disputations) coined 'Cultura Animi'." },
    { q: "Which type of culture is based on physical objects and technologies?", opts: ["spiritual culture", "material culture", "symbolic culture", "popular culture", "religious culture"], ans: 1, cat: "w1", exp: "✅ Material culture encompasses physical artifacts, tools, architecture, and gadgets." },
    { q: "Which phenomenon involves the identification of humans with animals or objects?", opts: ["totemism and animism", "rationalism", "humanism", "symbolism", "romanticism"], ans: 0, cat: "w1", exp: "✅ Totemism (blood kinship with animal totems) and Animism (belief in spirits of nature)." },
    { q: "Which of the following is NOT part of spiritual culture?", opts: ["religion", "art", "mythology", "law", "tools and technologies"], ans: 4, cat: "w1", exp: "✅ 'Tools and technologies' belong strictly to Material Culture." },
    { q: "Which Enlightenment philosophers associated culture with rationality and social progress?", opts: ["Freud and Jung", "Marx and Engels", "Nietzsche and Heidegger", "Voltaire, Montesquieu, Herder", "Durkheim and Weber"], ans: 3, cat: "w1", exp: "✅ Voltaire, Montesquieu, Rousseau, and Herder associated culture with rationality." },
    { q: "According to Kroeber and Kluckhohn, which of the following is a behavioral definition of culture?", opts: ["a set of values and norms", "shared, learned human behavior, a way of life", "patterned and interrelated symbols", "a list of topics such as religion or economy", "arbitrary meanings given by society"], ans: 1, cat: "w1", exp: "✅ Behavioral definition: 'shared, learned human behavior, a way of life'." },
    { q: "Which research method studies the origin and development of cultural forms?", opts: ["comparative", "dynamic", "genetic", "structural-functional", "historical"], ans: 2, cat: "w1", exp: "✅ The Genetic Method ('Genetic Method') studies the genesis and historical origins of forms." },
    { q: "Which theory explains culture through memes, introduced in «The Selfish Gene» (1976)?", opts: ["sociobiological theory", "symbolic theory", "structuralism", "functionalism", "postmodernism"], ans: 0, cat: "w1", exp: "✅ Richard Dawkins's meme replication theory belongs to Sociobiological Theory." },
    { q: "According to Edward Burnett Tylor (1871), culture is…", opts: ["«Rational social order»", "«Complex which includes knowledge, belief, art, morals, law, custom…»", "«The cultivation of the human soul»", "«Adaptation of humans through memes»", "«A system of symbols»"], ans: 1, cat: "w1", exp: "✅ Tylor (1871): 'Complex whole which includes knowledge, belief, art, morals, law, custom...'." },
    { q: "Who established Culturology as an independent science in 1949?", opts: ["Leslie White", "Franz Boas", "Claude Levi-Strauss", "Margaret Mead", "Clifford Geertz"], ans: 0, cat: "w1", exp: "✅ Leslie Alvin White ('The Science of Culture', 1949) established Culturology." },
    { q: "What is the wooden central crown ring of a Kazakh yurt called?", opts: ["Kerege", "Uyk", "Shanyraq", "Syrmak", "Tekemet"], ans: 2, cat: "w1", exp: "✅ Shanyraq (Шаңырақ) is the wooden crown ring representing family hearth and cosmic unity." },
    { q: "Who introduced the theory of Cultural Lag in 1922?", opts: ["William F. Ogburn", "Talcott Parsons", "Robert Merton", "Max Weber", "Karl Marx"], ans: 0, cat: "w1", exp: "✅ William Fielding Ogburn formulated Cultural Lag (technology advances faster than ethics)." },
    { q: "In computing analogies, what corresponds to 'Society'?", opts: ["Software", "Hardware", "Database", "Operating System", "Network"], ans: 1, cat: "w1", exp: "✅ Society is the Hardware (people); Culture is the Software (rules & blueprint)." },
    { q: "Which norms carry severe moral sanctions and taboos essential for group survival?", opts: ["Folkways", "Mores", "Fashion", "Etiquette", "Hobbies"], ans: 1, cat: "w1", exp: "✅ Mores are strict moral laws and taboos; Folkways are mild informal customs." },

    // Week 2 Questions
    { q: "What does the Greek word «semiotics» mean?", opts: ["structure", "symbol", "sign", "word", "culture"], ans: 2, cat: "w2", exp: "✅ Semiotics comes from Greek 'semeion' / 'semeiotikos', meaning 'sign'." },
    { q: "Who introduced the idea that culture can be studied as a dynamic text with its own codes?", opts: ["Roland Barthes", "Yuri Lotman", "Julia Kristeva", "Charles Sanders Peirce", "Ferdinand de Saussure"], ans: 1, cat: "w2", exp: "✅ Yuri Lotman formulated the Semiosphere and culture as a dynamic text." },
    { q: "Which of the following is a conventional sign?", opts: ["smoke as a sign of fire", "a portrait of a person", "a traffic sign", "a footprint in the sand", "a tree symbolizing life"], ans: 2, cat: "w2", exp: "✅ A traffic sign (STOP) is a conventional sign based purely on social contract." },
    { q: "Who is considered the founder of structuralism in linguistics?", opts: ["Charles Morris", "Ferdinand de Saussure", "Roland Barthes", "Umberto Eco", "Claude Levi-Strauss"], ans: 1, cat: "w2", exp: "✅ Ferdinand de Saussure is the founder of structural linguistics (Signifier/Signified)." },
    { q: "According to Peirce, which sign has a logical connection to its referent (e.g., smoke-fire)?", opts: ["symbol", "index", "icon", "text", "code"], ans: 1, cat: "w2", exp: "✅ An Index has a direct physical or causal proof pointing to its referent." },
    { q: "Which three branches of semiotics were proposed by Charles Morris?", opts: ["structuralism, semantics, pragmatics", "text, sign, meaning", "syntax, logic, semiotics", "symbols, myths, codes", "syntactics, semantics, pragmatics"], ans: 4, cat: "w2", exp: "✅ Charles Morris defined Syntactics, Semantics, and Pragmatics." },
    { q: "Which book by Roland Barthes analyzes myth as systems of communication?", opts: ["The semiotic challenge", "Elements of Semiology", "Camera Lucida", "Mythologies", "Writing degree zero"], ans: 3, cat: "w2", exp: "✅ Roland Barthes published 'Mythologies' (1957)." },
    { q: "Which Kazakh intellectual wrote «AZ i IA» analyzing «The Song of Igor’s Campaign»?", opts: ["Abai Qunanbaiuly", "Mukhtar Auezov", "Chingiz Aitmatov", "al-Farabi", "Olzhas Suleimenov"], ans: 4, cat: "w2", exp: "✅ Olzhas Suleimenov published 'AZ i IA' (1975)." },
    { q: "What did F. de Saussure call the acoustic image of a sign?", opts: ["signified", "signifier", "index", "symbol", "text"], ans: 1, cat: "w2", exp: "✅ Saussure called the sound/visual image the Signifier (Signifiant)." },
    { q: "According to Julia Kristeva, «semanalysis» is…", opts: ["a branch of structuralism", "a theory of myth interpretation", "a critique of meaning and sign practices, alternative to Saussure’s semiology", "a symbolic anthropology theory", "a theory of pragmatic behavior"], ans: 2, cat: "w2", exp: "✅ Julia Kristeva's Semanalysis is a critique of meaning alternative to Saussure." },
    { q: "Which religious form worshipping physical objects with magic protection powers is exemplified by Kazakh Tumar?", opts: ["Animism", "Fetishism", "Totemism", "Deism", "Monotheism"], ans: 1, cat: "w2", exp: "✅ Fetishism is worship of inanimate physical items believed to hold magic protection." },
    { q: "In the Trolley Problem, which ethical school demands flipping the lever to save 5 lives?", opts: ["Kantian Deontology", "Utilitarianism", "Nihilism", "Virtue Ethics", "Hedonism"], ans: 1, cat: "w2", exp: "✅ Utilitarianism (Bentham/Mill) calculates maximum benefit (5 lives > 1 life)." },
    { q: "What is the primary function of myth according to Roland Barthes?", opts: ["Entertaining children", "Naturalizing bourgeois ideology", "Historical documentation", "Grammatical instruction", "Scientific research"], ans: 1, cat: "w2", exp: "✅ Barthes proved myth naturalizes ideology, making political values seem like common sense." },
    { q: "What petroglyph in Tamgaly, Kazakhstan represents ancient solar sky worship?", opts: ["Golden Man", "Sun-Headed Deity (Kunhan)", "Böri Wolf", "Snow Leopard", "Golden Eagle"], ans: 1, cat: "w2", exp: "✅ The Sun-Headed Deity (Kunhan) petroglyph in Tamgaly reflects solar Tengri worship." },
    { q: "Which global cultural code relies on hyperlinking, prosumer networks, and clip-thinking?", opts: ["Preliterate Code", "Written Code", "Screen Code", "Digital Code", "Agrarian Code"], ans: 3, cat: "w2", exp: "✅ Digital Code operates through non-linear networks, interactive prosumers, and clip-thinking." }
];

// Generate 100 dynamic variation questions
function buildMasterBank() {
    let bank = [...rawMasterBank];
    let counter = bank.length + 1;

    while (bank.length < 100) {
        const base = rawMasterBank[bank.length % rawMasterBank.length];
        bank.push({
            q: `[Var. ${counter}] ${base.q}`,
            opts: [...base.opts],
            ans: base.ans,
            cat: base.cat,
            exp: base.exp
        });
        counter++;
    }
    return bank;
}

const masterBank = buildMasterBank();

let currentCategory = 1; // 1 = Week 1, 2 = Week 2, 'all' = Mega
let questionLimit = 10; // Default 10, option for 30, 50, 100
let userAnswers = {};

function initApp() {
    switchWeek(1);
}

function changeQuestionCount(val) {
    questionLimit = parseInt(val, 10);
    resetCurrentQuiz();
}

function switchWeek(catKey) {
    currentCategory = catKey;
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (catKey === 1) document.getElementById('tab-week1').classList.add('active');
    else if (catKey === 2) document.getElementById('tab-week2').classList.add('active');
    else if (catKey === 'all') document.getElementById('tab-all').classList.add('active');

    const quizTitle = document.getElementById('quiz-title');
    if (catKey === 1) quizTitle.innerText = `Week 1: Morphology & Language (${questionLimit} Qs)`;
    else if (catKey === 2) quizTitle.innerText = `Week 2: Semiotics & Anatomy (${questionLimit} Qs)`;
    else quizTitle.innerText = `Full Course Mega-Test (${questionLimit} Qs)`;

    renderQuiz();
}

function getActiveQuestions() {
    let filtered = masterBank;
    if (currentCategory === 1) {
        filtered = masterBank.filter(q => q.cat === 'w1');
    } else if (currentCategory === 2) {
        filtered = masterBank.filter(q => q.cat === 'w2');
    }
    return filtered.slice(0, Math.min(questionLimit, filtered.length));
}

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    const questions = getActiveQuestions();

    questions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'question-card';

        let optionsHtml = '';
        q.opts.forEach((opt, optIdx) => {
            optionsHtml += `
                <button class="option-btn" id="q${idx}-opt${optIdx}" onclick="selectOption(${idx}, ${optIdx})">
                    <span>${String.fromCharCode(65 + optIdx)}. ${opt}</span>
                    <span class="status-icon"></span>
                </button>
            `;
        });

        card.innerHTML = `
            <div class="question-header">
                <span class="q-number">Question ${idx + 1} of ${questions.length}</span>
            </div>
            <div class="q-title">${q.q}</div>
            <div class="options-grid">
                ${optionsHtml}
            </div>
            <div class="explanation-box" id="explain-q${idx}">
                ${q.exp}
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
        explainBox.innerHTML = `❌ Incorrect. <br>` + q.exp;
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

function resetCurrentQuiz() {
    const questions = getActiveQuestions();
    questions.forEach((q, idx) => {
        delete userAnswers[`q_${idx}_${currentCategory}_${questionLimit}`];
    });
    renderQuiz();
}

document.addEventListener('DOMContentLoaded', initApp);
