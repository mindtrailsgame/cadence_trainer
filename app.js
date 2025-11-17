// --- DATA ---
// Visa sakinių biblioteka, dabar 100% atitinkanti Disco Elysium.pdf
const passageLibrary = [
    {
        original: "The street is a needle threading the sky.",
        template: `
            The <input type="text" class="apply-input" placeholder="NOUN">
            is a <input type="text" class="apply-input" placeholder="NOUN">
            <input type="text" class="apply-input" placeholder="VERB-ing">
            the <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['noir', 'metaphor', 'atmosphere']
    },
    {
        original: "Another day, another migraine.",
        template: `
            Another <input type="text" class="apply-input" placeholder="NOUN">,
            another <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['short', 'internal monologue']
    },
    {
        original: "Your smile is a broken zipper.",
        template: `
            Your <input type="text" class="apply-input" placeholder="NOUN">
            is a <input type="text" class="apply-input" placeholder="ADJECTIVE">
            <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['metaphor', 'dialogue-like']
    },
    {
        original: "The city was a corpse, and he was the detective picking at the bones.",
        template: `
            The <input type="text" class="apply-input" placeholder="NOUN">
            was a <input type="text" class="apply-input" placeholder="NOUN">,
            and he was the <input type="text" class="apply-input" placeholder="NOUN">
            <input type="text" class="apply-input" placeholder="VERB-ing">
            at the <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['noir', 'metaphor', 'complex']
    },
    {
        original: "He is a man of unimaginable sadness.",
        template: `
            He is a <input type="text" class="apply-input" placeholder="NOUN">
            of <input type="text" class="apply-input" placeholder="ADJECTIVE">
            <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['internal monologue', 'description']
    },
    {
        original: "Silence. Only the wind.",
        template: `
            <input type="text" class="apply-input" placeholder="NOUN">.
            Only the <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['short', 'fragment', 'atmosphere']
    },
    // PAŠALINTI SAKINIAI (kurie buvo čia):
    // 1. "The limbed and headed machine..." (Iš kito PDF)
    // 2. "Even the air is heavy..." (Mano klaida)
    // 3. "Hope is a small, shivering bird..." (Mano klaida)
    {
        original: "He’s a mirror, and you’re the one who’s cracked.",
        template: `
            He’s a <input type="text" class="apply-input" placeholder="NOUN">,
            and you’re the <input type="text" class="apply-input" placeholder="NOUN">
            who’s <input type="text" class="apply-input" placeholder="ADJ">.
        `,
        tags: ['metaphor', 'dialogue-like', 'short']
    },
    {
        original: "The world is a vampire.",
        template: `
            The <input type="text" class="apply-input" placeholder="NOUN">
            is a <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['metaphor', 'short']
    },
    {
        original: "This is the spot. Right here. The precise centre of the world’s despair.",
        template: `
            This is the <input type="text" class="apply-input" placeholder="NOUN">.
            Right here. The <input type="text" class="apply-input" placeholder="ADJ">
            <input type="text" class="apply-input" placeholder="NOUN">
            of the world’s <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['fragment', 'internal monologue', 'atmosphere']
    },
    {
        original: "It’s a bad day for capitalism.",
        template: `
            It’s a <input type="text" class="apply-input" placeholder="ADJ">
            <input type="text" class="apply-input" placeholder="NOUN">
            for <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['humor', 'short']
    },
    {
        original: "A glorious, confused storm of memory and pain.",
        template: `
            A <input type="text" class="apply-input" placeholder="ADJ">,
            <input type="text" class="apply-input" placeholder="ADJ">
            <input type="text" class="apply-input" placeholder="NOUN">
            of <input type="text" class="apply-input" placeholder="NOUN">
            and <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['fragment', 'complex', 'description']
    },
    {
        original: "The expression on his face is a fifty-euro word for 'heartbreak'.",
        template: `
            The <input type="text" class="apply-input" placeholder="NOUN">
            on his <input type="text" class="apply-input" placeholder="NOUN">
            is a <input type="text" class="apply-input" placeholder="ADJ">
            <input type="text" class="apply-input" placeholder="NOUN">
            for '<input type="text" class="apply-input" placeholder="NOUN">'.
        `,
        tags: ['metaphor', 'humor', 'complex']
    },
    {
        original: "Your thoughts are a storm, and you are the boat.",
        template: `
            Your <input type="text" class="apply-input" placeholder="NOUN/PLURAL">
            are a <input type="text" class="apply-input" placeholder="NOUN">,
            and you are the <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['metaphor', 'internal monologue', 'short']
    },
    {
        original: "Nothing. Just the endless, hollow echo of the city.",
        template: `
            <input type="text" class="apply-input" placeholder="NOUN">.
            Just the <input type="text" class="apply-input" placeholder="ADJ">,
            <input type="text" class="apply-input" placeholder="ADJ">
            <input type="text" class="apply-input" placeholder="NOUN">
            of the <input type="text" class="apply-input" placeholder="NOUN">.
        `,
        tags: ['fragment', 'atmosphere', 'noir']
    }
];

// Šis kintamasis saugos sakinius, atitinkančius dabartinį filtrą
let filteredPassageLibrary = [];
// Šis kintamasis saugos dabartinį sakinį
let currentPassage = {};

// --- UI ELEMENTAI ---
const stepObserve = document.getElementById('step-observe');
const stepReplicate = document.getElementById('step-replicate');
const stepApply = document.getElementById('step-apply');

const observePassageEl = document.getElementById('observe-passage');
const replicateInputEl = document.getElementById('replicate-input');
const replicateFeedbackEl = document.getElementById('replicate-feedback');
const applyTemplateEl = document.getElementById('apply-template');
const tagFilterEl = document.getElementById('tag-filter'); 

// --- PROGRAMOS LOGIKA ---

/**
 * Užpildo filtro <select> elementą unikaliomis žymomis iš bibliotekos.
 */
function populateFilterDropdown() {
    // Randame visas unikalias žymas
    const allTags = passageLibrary.flatMap(passage => passage.tags);
    const uniqueTags = [...new Set(allTags)]; // "Set" automatiškai pašalina dublikatus
    
    uniqueTags.sort(); // Surūšiuojame pagal abėcėlę

    // Išvalome senas parinktis (jei kartais ši funkcija būtų iškviesta vėl)
    tagFilterEl.innerHTML = '<option value="all">All Passages</option>';

    // Sukuriame <option> elementus ir pridedame juos į <select>
    uniqueTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        // Padarome pirmą raidę didžiąją geresniam skaitymui
        option.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
        tagFilterEl.appendChild(option);
    });
}

/**
 * Iškviečiama, kai vartotojas pakeičia filtro reikšmę.
 */
function filterPassages() {
    const selectedTag = tagFilterEl.value;

    if (selectedTag === 'all') {
        // Rodyti visus sakinius
        filteredPassageLibrary = [...passageLibrary];
    } else {
        // Filtruoti biblioteką, paliekant tik tuos, kurie turi pasirinktą žymą
        filteredPassageLibrary = passageLibrary.filter(passage => 
            passage.tags.includes(selectedTag)
        );
    }
    
    // Svarbu: pabaigus filtravimą, iškart pradedame ciklą iš naujo
    // su nauju sakiniu iš filtruoto sąrašo.
    startOver(true); // "true" nurodo, kad nereikia slėpti 3 žingsnio (jis jau paslėptas)
}

/**
 * Paima atsitiktinį sakinį iš FILTRUOTO sąrašo.
 */
function selectNewPassage() {
    // Patikriname, ar filtruotame sąraše yra sakinių
    if (filteredPassageLibrary.length === 0) {
        // Jei sąrašas tuščias (pvz., filtras nieko nerado),
        // parodome klaidą, užuot "nulūžus" programai.
        observePassageEl.textContent = "No passages found matching this filter. Try selecting 'All Passages'.";
        // Blokuojame "Next" mygtuką
        document.querySelector('#step-observe button').disabled = true;
        currentPassage = {}; // Išvalome dabartinį sakinį
        return;
    }
    
    // Išjungiame mygtuko blokavimą (jei buvo įjungtas)
    document.querySelector('#step-observe button').disabled = false;

    // Išrenkame atsitiktinį indeksą iš filtruoto sąrašo
    const randomIndex = Math.floor(Math.random() * filteredPassageLibrary.length);
    currentPassage = filteredPassageLibrary[randomIndex];
}

/**
 * Paleidžiama programos pradžioje.
 */
function initializeApp() {
    // 1. Užpildome filtro <select> elementą
    populateFilterDropdown(); 
    
    // 2. Pagal nutylėjimą, filtruotas sąrašas yra tas pats, kas pilna biblioteka
    filteredPassageLibrary = [...passageLibrary];
    
    // 3. Išrenkame pirmą sakinį
    selectNewPassage(); 
    
    // 4. Paruošiame UI
    observePassageEl.textContent = currentPassage.original;
    applyTemplateEl.innerHTML = currentPassage.template;
}

/**
 * Pereina iš 1 žingsnio į 2
 */
function goToReplicateStep() {
    // Patikriname, ar 'currentPassage' egzistuoja, priešingu atveju nieko nedarome
    // (Tai apsaugo nuo 'No passages found' atvejo)
    if (!currentPassage.original) return; 

    stepObserve.classList.add('hidden');
    stepReplicate.classList.remove('hidden');
    replicateFeedbackEl.textContent = "";
    replicateInputEl.value = "";
    replicateInputEl.focus();
}

/**
 * Mygtuko "Užuomina" logika
 */
function showHint() {
    if (!currentPassage.original) return; // Apsauga
    replicateInputEl.value = currentPassage.original;
    
    setTimeout(() => {
        if (replicateInputEl.value === currentPassage.original) {
            replicateInputEl.value = "";
        }
    }, 2000);
}

/**
 * Tikrina 2 žingsnio įvestį
 */
function checkReplication() {
    if (!currentPassage.original) return; // Apsauga
    
    const userInput = replicateInputEl.value.trim();
    const originalText = currentPassage.original.trim();

    if (userInput === originalText) {
        replicateFeedbackEl.textContent = "Perfect! Copied exactly.";
        replicateFeedbackEl.style.color = "green";
        setTimeout(goToApplyStep, 1000);
    } else {
        replicateFeedbackEl.textContent = "Not quite. Try re-typing it exactly (check punctuation and capitalization).";
        replicateFeedbackEl.style.color = "red";
    }
}

/**
 * Pereina iš 2 žingsnio į 3
 */
function goToApplyStep() {
    stepReplicate.classList.add('hidden');
    stepApply.classList.remove('hidden');
}

/**
 * Grąžina programėlę į pradinę būseną (1 žingsnį)
 * IR PARUOŠIA NAUJĄ SAKINĮ iš dabartinio filtruoto sąrašo.
 */
function startOver(isFilterChange = false) {
    // 'isFilterChange' yra pagalbinis parametras, kad nerodytume 3 žingsnio,
    // jei "startOver" iškvietė filtro pakeitimas.
    if (!isFilterChange) {
        stepApply.classList.add('hidden');
    }
    stepObserve.classList.remove('hidden');
    stepReplicate.classList.add('hidden'); // Svarbu paslėpti 2 žingsnį

    // Išrenkame NAUJĄ atsitiktinį sakinį iš FILTRUOTO sąrašo
    selectNewPassage();

    // Atnaujiname UI (jei sakinys buvo rastas)
    if (currentPassage.original) {
        observePassageEl.textContent = currentPassage.original;
        applyTemplateEl.innerHTML = currentPassage.template;
    }
}

// --- PALEIDIMAS ---
initializeApp();