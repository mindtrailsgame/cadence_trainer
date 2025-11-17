// --- DATA ---
// Visa sakinių biblioteka, dabar 100% paremta JŪSŲ galutiniu sąrašu.
// Iš viso 88 unikalūs sakiniai.
const passageLibrary = [
    // --- Philosophical, Poetic, and Declarative Statements ---
    {
        original: "Spookiness is not a matter for police investigation.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun">
            is not a matter for <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "A male artist is a contradiction in terms...",
        template: `
            A <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            is a <input type="text" class="apply-input" placeholder="noun">
            in <input type="text" class="apply-input" placeholder="noun">...
        `,
        tags: ['philosophical']
    },
    {
        original: "A politícien is never off z'e clock.",
        template: `
            A <input type="text" class="apply-input" placeholder="Noun">
            is never off <input type="text" class="apply-input" placeholder="pronoun">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "Intuition is an aberrant psychologism.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun">
            is an <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "Mental illness is a term the powers use to homogenize people.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun">
            <input type="text" class="apply-input" placeholder="noun">
            is a <input type="text" class="apply-input" placeholder="noun">
            the <input type="text" class="apply-input" placeholder="noun">
            use to <input type="text" class="apply-input" placeholder="verb">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "All real connections begin in the mind.",
        template: `
            All <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            begin in the <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "A man can never be truly happy with who he is.",
        template: `
            A <input type="text" class="apply-input" placeholder="noun">
            can never be truly <input type="text" class="apply-input" placeholder="adjective">
            with who <input type="text" class="apply-input" placeholder="pronoun"> is.
        `,
        tags: ['philosophical']
    },
    {
        original: "As long as there is mankind, there is also meaning.",
        template: `
            As long as there is <input type="text" class="apply-input" placeholder="noun">,
            there is also <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "There's no such thing as free money.",
        template: `
            There's no such thing as <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "The advance of the pale is unstoppable.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            of the <input type="text" class="apply-input" placeholder="noun">
            is <input type="text" class="apply-input" placeholder="adjective">.
        `,
        tags: ['philosophical']
    },
    {
        original: "That's the nature of the powerful to exploit the weak.",
        template: `
            That's the <input type="text" class="apply-input" placeholder="noun">
            of the <input type="text" class="apply-input" placeholder="adjective">
            to <input type="text" class="apply-input" placeholder="verb">
            the <input type="text" class="apply-input" placeholder="adjective">.
        `,
        tags: ['philosophical']
    },
    {
        original: "Moralists believe in a normal, stable world governed by democratic values.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun (Plural)">
            believe in a <input type="text" class="apply-input" placeholder="adjective">,
            <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            governed by <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "Capital is finished. But understand this -- its end won't free anyone. It will only lead to more suffering.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun">
            is <input type="text" class="apply-input" placeholder="adjective">.
            But understand this -- its <input type="text" class="apply-input" placeholder="noun">
            won't <input type="text" class="apply-input" placeholder="verb">
            anyone. It will only lead to more <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "The world no longer stores his personality in its composition.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            no longer <input type="text" class="apply-input" placeholder="verb">
            his <input type="text" class="apply-input" placeholder="noun">
            in its <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "The past is a warm and inviting place, but it's also a trap.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            is a <input type="text" class="apply-input" placeholder="adjective">
            and <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="place">,
            but it's also a <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "All large human gatherings are narcotic.",
        template: `
            All <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun (plural)">
            are <input type="text" class="apply-input" placeholder="adjective">.
        `,
        tags: ['philosophical']
    },
    {
        original: "The king is holy and his statues are indestructible.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            is <input type="text" class="apply-input" placeholder="adjective">
            and his <input type="text" class="apply-input" placeholder="noun (plural)">
            are <input type="text" class="apply-input" placeholder="adjective">.
        `,
        tags: ['philosophical']
    },
    {
        original: "When one fucks everything, he fucks nothing. And that, to me, feels glorious -- sticking your dick into the void.",
        template: `
            When one <input type="text" class="apply-input" placeholder="verb">
            everything, he <input type="text" class="apply-input" placeholder="verb">
            nothing. And that, to me, feels <input type="text" class="apply-input" placeholder="adjective">
            -- <input type="text" class="apply-input" placeholder="verb-ing">
            your <input type="text" class="apply-input" placeholder="noun">
            into the <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "The so-called science community hasn't accepted me as one of their own quite yet.",
        template: `
            The so-called <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun">
            hasn't <input type="text" class="apply-input" placeholder="verb-ed">
            me as one of their own quite yet.
        `,
        tags: ['philosophical']
    },
    {
        original: "Thine spells are no match for purity and strength of will.",
        template: `
            Thine <input type="text" class="apply-input" placeholder="noun (plural)">
            are no match for <input type="text" class="apply-input" placeholder="noun">
            and <input type="text" class="apply-input" placeholder="noun">
            of <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "Even music is a form of homicidal competition.",
        template: `
            Even <input type="text" class="apply-input" placeholder="noun">
            is a form of <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "The pale is the enemy of matter and life.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            is the <input type="text" class="apply-input" placeholder="noun">
            of <input type="text" class="apply-input" placeholder="noun">
            and <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "Art is a bourgeois establishment.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun">
            is a <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "A sound monetary policy is essential for addressing uncertainty.",
        template: `
            A <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            is <input type="text" class="apply-input" placeholder="adjective">
            for <input type="text" class="apply-input" placeholder="verb-ing">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['philosophical']
    },
    {
        original: "A life is true if it's free from fear and internal division among oneself.",
        template: `
            A <input type="text" class="apply-input" placeholder="noun">
            is <input type="text" class="apply-input" placeholder="adjective">
            if it's free from <input type="text" class="apply-input" placeholder="noun">
            and <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            among oneself.
        `,
        tags: ['philosophical']
    },
    {
        original: "It's the nature of the powerful to exploit the weak.",
        template: `
            It's the <input type="text" class="apply-input" placeholder="noun">
            of the <input type="text" class="apply-input" placeholder="adjective">
            to <input type="text" class="apply-input" placeholder="verb">
            the <input type="text" class="apply-input" placeholder="adjective">.
        `,
        tags: ['philosophical']
    },
    {
        original: "When one fucks everything, he fucks nothing.",
        template: `
            When one <input type="text" class="apply-input" placeholder="verb">
            everything, he <input type="text" class="apply-input" placeholder="verb">
            nothing.
        `,
        tags: ['philosophical']
    },
    {
        original: "Capital is finished. But understand this -- its end won't free anyone.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun">
            is <input type="text" class="apply-input" placeholder="adjective">.
            But understand this -- its <input type="text" class="apply-input" placeholder="noun">
            won't <input type="text" class="apply-input" placeholder="verb">
            anyone.
        `,
        tags: ['philosophical']
    },

    // --- Descriptive and Evocative Prose ---
    {
        original: "A slow, sad song started playing. Like organ music, on repeat.",
        template: `
            A <input type="text" class="apply-input" placeholder="adjective">,
            <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            started <input type="text" class="apply-input" placeholder="verb-ing">.
            Like <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun">,
            on <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['descriptive']
    },
    {
        original: "Her crown-of-hair is aglow with the red of the neon on the corner.",
        template: `
            Her <input type="text" class="apply-input" placeholder="noun-of-noun">
            is <input type="text" class="apply-input" placeholder="adjective">
            with the <input type="text" class="apply-input" placeholder="color">
            of the <input type="text" class="apply-input" placeholder="noun">
            on the <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['descriptive']
    },
    {
        original: "The artillery was eighty kilometres away in Ozonne but I knew, I knew the Commune would fall.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            was <input type="text" class="apply-input" placeholder="number">
            <input type="text" class="apply-input" placeholder="noun">
            away in <input type="text" class="apply-input" placeholder="Place">
            but I knew, I knew the <input type="text" class="apply-input" placeholder="Noun">
            would <input type="text" class="apply-input" placeholder="verb">.
        `,
        tags: ['descriptive']
    },
    {
        original: "A wisp of smoke rises from somewhere between the charred logs.",
        template: `
            A <input type="text" class="apply-input" placeholder="noun">
            of <input type="text" class="apply-input" placeholder="noun">
            rises from somewhere between the <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun (plural)">.
        `,
        tags: ['descriptive']
    },
    {
        original: "His blood runs yellow too.",
        template: `
            His <input type="text" class="apply-input" placeholder="noun">
            runs <input type="text" class="apply-input" placeholder="color">
            too.
        `,
        tags: ['descriptive']
    },
    {
        original: "Bourgeois love from a bourgeois god-queen towards a world getting rapidly more bourgeois, that's lungs for you.",
        template: `
            <input type="text" class="apply-input" placeholder="Adjective">
            <input type="text" class="apply-input" placeholder="noun">
            from a <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun-noun">
            towards a <input type="text" class="apply-input" placeholder="noun">
            getting rapidly more <input type="text" class="apply-input" placeholder="adjective">,
            that's <input type="text" class="apply-input" placeholder="noun"> for you.
        `,
        tags: ['descriptive']
    },
    {
        original: "His voice drowns out in a sudden gust of wind.",
        template: `
            His <input type="text" class="apply-input" placeholder="noun">
            drowns out in a <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            of <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['descriptive']
    },
    {
        original: "The future will belong to a circus of identities, just spinning around, surreal and unreal...",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            will belong to a <input type="text" class="apply-input" placeholder="noun">
            of <input type="text" class="apply-input" placeholder="noun (plural)">,
            just <input type="text" class="apply-input" placeholder="verb-ing">
            around, <input type="text" class="apply-input" placeholder="adjective">
            and <input type="text" class="apply-input" placeholder="adjective">...
        `,
        tags: ['descriptive']
    },
    {
        original: "The f****t can't even cry.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            can't even <input type="text" class="apply-input" placeholder="verb">.
        `,
        tags: ['descriptive']
    },
    {
        original: "As I awakened into this world something came with me. An ancient sadness.",
        template: `
            As I <input type="text" class="apply-input" placeholder="verb-ed">
            into this <input type="text" class="apply-input" placeholder="noun">
            something came with me. An <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['descriptive']
    },
    {
        original: "Her eyes turn to sorrowful ovals.",
        template: `
            Her <input type="text" class="apply-input" placeholder="noun (plural)">
            turn to <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun (plural)">.
        `,
        tags: ['descriptive']
    },
    {
        original: "The words echo in the cold air of the church.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun (plural)">
            echo in the <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            of the <input type="text" class="apply-input" placeholder="place">.
        `,
        tags: ['descriptive']
    },
    {
        original: "A single light bulb flickers, throwing a weak, yellow light across the room.",
        template: `
            A <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="verb-s">,
            <input type="text" class="apply-input" placeholder="verb-ing">
            a <input type="text" class="apply-input" placeholder="adjective">,
            <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            across the <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['descriptive']
    },
    {
        original: "Snow blankets the old patio chairs and dead house plants, and all the neighbouring windows are black.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun">
            <input type="text" class="apply-input" placeholder="verb-s">
            the <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun (plural)">
            and <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun (plural)">,
            and all the neighbouring <input type="text" class="apply-input" placeholder="noun (plural)">
            are <input type="text" class="apply-input" placeholder="color">.
        `,
        tags: ['descriptive']
    },
    {
        original: "His eyes are wide with fear.",
        template: `
            His <input type="text" class="apply-input" placeholder="noun (plural)">
            are <input type="text" class="apply-input" placeholder="adjective">
            with <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['descriptive']
    },
    {
        original: "The city sleeps under a blanket of fog.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="verb-s">
            under a <input type="text" class="apply-input" placeholder="noun">
            of <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['descriptive']
    },
    {
        original: "The man in the dirty tracksuit trousers stares at you, panting from hatred.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            in the <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="verb-s">
            at you, <input type="text" class="apply-input" placeholder="verb-ing">
            from <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['descriptive']
    },
    {
        original: "A gust of wind blows in from the sea, bending the reeds behind him...",
        template: `
            A <input type="text" class="apply-input" placeholder="noun">
            of <input type="text" class="apply-input" placeholder="noun">
            blows in from the <input type="text" class="apply-input" placeholder="place">,
            <input type="text" class="apply-input" placeholder="verb-ing">
            the <input type="text" class="apply-input" placeholder="noun (plural)">
            behind him...
        `,
        tags: ['descriptive']
    },
    {
        original: "Rhythmic rock music fills the cabin, as the back-to-back DJs mix it with sounds from car crashes and illegal speeding competitions.",
        template: `
            <input type="text" class="apply-input" placeholder="Adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun">
            fills the <input type="text" class="apply-input" placeholder="place">,
            as the <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun (plural)">
            mix it with <input type="text" class="apply-input" placeholder="noun (plural)">
            from <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun (plural)">
            and <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun (plural)">.
        `,
        tags: ['descriptive']
    },
    {
        original: "The room is pretty bare bones, but it's got a bed and roof over it.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            is pretty <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">,
            but it's got a <input type="text" class="apply-input" placeholder="noun">
            and <input type="text" class="apply-input" placeholder="noun">
            over it.
        `,
        tags: ['descriptive']
    },
    {
        original: "Rain patters on the window sills and dead house plants, too late to do them any good.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun">
            <input type="text" class="apply-input" placeholder="verb-s">
            on the <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun (plural)">
            and <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun (plural)">,
            too <input type="text" class="apply-input" placeholder="adjective">
            to do them any <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['descriptive']
    },
    {
        original: "The streetlights cast long, dancing shadows.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun (plural)">
            cast <input type="text" class="apply-input" placeholder="adjective">,
            <input type="text" class="apply-input" placeholder="verb-ing">
            <input type="text" class="apply-input" placeholder="noun (plural)">.
        `,
        tags: ['descriptive']
    },
    {
        original: "The wind howls, a lonely sound in the deserted streets.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="verb-s">,
            a <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            in the <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun (plural)">.
        `,
        tags: ['descriptive']
    },
    {
        original: "Old patio chairs and dead house plants litter the scene.",
        template: `
            <input type="text" class="apply-input" placeholder="Adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun (plural)">
            and <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun (plural)">
            <input type="text" class="apply-input" placeholder="verb">
            the <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['descriptive']
    },

    // --- Character Voice and Dialogue Snippets ---
    {
        original: "'A man my age'? What are you implying? I'm at the peak of my abilities.",
        template: `
            '<input type="text" class="apply-input" placeholder="Noun">
            my <input type="text" class="apply-input" placeholder="noun">?'
            What are you <input type="text" class="apply-input" placeholder="verb-ing">?
            I'm at the <input type="text" class="apply-input" placeholder="noun">
            of my <input type="text" class="apply-input" placeholder="noun (plural)">.
        `,
        tags: ['dialogue']
    },
    {
        original: "'Cop Sets Fire to Himself.' That would be quite an interesting conceptual piece, don't you think?",
        template: `
            '<input type="text" class="apply-input" placeholder="Noun">
            Sets <input type="text" class="apply-input" placeholder="Noun">
            to <input type="text" class="apply-input" placeholder="Pronoun">.'
            That would be quite an <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">,
            don't you think?
        `,
        tags: ['dialogue']
    },
    {
        original: "'Life gets hard -- but we go on.'",
        template: `
            '<input type="text" class="apply-input" placeholder="Noun">
            gets <input type="text" class="apply-input" placeholder="adjective">
            -- but we <input type="text" class="apply-input" placeholder="verb">
            on.'
        `,
        tags: ['dialogue']
    },
    {
        original: "I'm not doing anything. The music made its mind up a long time ago -- I'm just implementing!",
        template: `
            I'm not doing anything. The <input type="text" class="apply-input" placeholder="noun">
            made its <input type="text" class="apply-input" placeholder="noun">
            up a long time ago -- I'm just <input type="text" class="apply-input" placeholder="verb-ing">!
        `,
        tags: ['dialogue']
    },
    {
        original: "'I don't care about my gun'...' he repeats. 'I love it, Harry! Wish I could be like that.'",
        template: `
            '<input type="text" class="apply-input" placeholder="Sentence fragment">.'
            ... he repeats. 'I <input type="text" class="apply-input" placeholder="verb">
            it, <input type="text" class="apply-input" placeholder="Name">!
            Wish I could be like that.'
        `,
        tags: ['dialogue']
    },
    {
        original: "Mon dieu, the pain is exceptionally bad today...",
        template: `
            <input type="text" class="apply-input" placeholder="Exclamation">,
            the <input type="text" class="apply-input" placeholder="noun">
            is <input type="text" class="apply-input" placeholder="adverb">
            <input type="text" class="apply-input" placeholder="adjective">
            today...
        `,
        tags: ['dialogue']
    },
    {
        original: "Please, turn it off! I can't take it any more!",
        template: `
            Please, <input type="text" class="apply-input" placeholder="verb">
            it <input type="text" class="apply-input" placeholder="preposition">!
            I can't <input type="text" class="apply-input" placeholder="verb">
            it any more!
        `,
        tags: ['dialogue']
    },
    {
        original: "'Where can I listen to this?' he mocks you. 'Why don't you try shoving it up your ass, genius?!'",
        template: `
            '<input type="text" class="apply-input" placeholder="Question">?'
            he <input type="text" class="apply-input" placeholder="verb-s">
            you. 'Why don't you try <input type="text" class="apply-input" placeholder="verb-ing">
            it up your <input type="text" class="apply-input" placeholder="noun">,
            <input type="text" class="apply-input" placeholder="noun">?!'
        `,
        tags: ['dialogue']
    },
    {
        original: "Man, you sound like a hundred years old when you say that.",
        template: `
            Man, you <input type="text" class="apply-input" placeholder="verb">
            like a <input type="text" class="apply-input" placeholder="number">
            <input type="text" class="apply-input" placeholder="noun">
            old when you say that.
        `,
        tags: ['dialogue']
    },
    {
        original: "I feel like I'm not a real person.",
        template: `
            I <input type="text" class="apply-input" placeholder="verb">
            like I'm not a <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['dialogue']
    },
    {
        original: "I can't imagine living without my jaw.",
        template: `
            I can't <input type="text" class="apply-input" placeholder="verb">
            <input type="text" class="apply-input" placeholder="verb-ing">
            without my <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['dialogue']
    },
    {
        original: "My imagination fails me.",
        template: `
            My <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="verb-s">
            me.
        `,
        tags: ['dialogue']
    },
    {
        original: "I have no idea how stupid mistakes like this can even happen...",
        template: `
            I have no <input type="text" class="apply-input" placeholder="noun">
            how <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun (plural)">
            like this can even <input type="text" class="apply-input" placeholder="verb">...
        `,
        tags: ['dialogue']
    },
    {
        original: "I don't know what got into me, really... work has been stressful lately.",
        template: `
            I don't know what got into me, really...
            <input type="text" class="apply-input" placeholder="noun">
            has been <input type="text" class="apply-input" placeholder="adjective">
            lately.
        `,
        tags: ['dialogue']
    },
    {
        original: "'Bout fuckin' time, man. I've done my duty.",
        template: `
            'Bout <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">,
            man. I've done my <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['dialogue']
    },
    {
        original: "'FALN'? That's medium-concept stuff. Not my style at all...",
        template: `
            '<input type="text" class="apply-input" placeholder="NOUN">?'
            That's <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">.
            Not my <input type="text" class="apply-input" placeholder="noun">
            at all...
        `,
        tags: ['dialogue']
    },
    {
        original: "'I see. You know something, but you've decided not to tell us.",
        template: `
            '<input type="text" class="apply-input" placeholder="Sentence">.
            You <input type="text" class="apply-input" placeholder="verb">
            something, but you've <input type="text" class="apply-input" placeholder="verb-ed">
            not to <input type="text" class="apply-input" placeholder="verb">
            us.'
        `,
        tags: ['dialogue']
    },
    {
        original: "A Deuill,' she pronounces: 'Who being of great Charme and Guille, sneaketh into the homes of the Godlie.'",
        template: `
            '<input type="text" class="apply-input" placeholder="Noun">,'
            she <input type="text" class="apply-input" placeholder="verb-s">:
            'Who being of great <input type="text" class="apply-input" placeholder="Noun">
            and <input type="text" class="apply-input" placeholder="Noun">,
            <input type="text" class="apply-input" placeholder="verb-eth">
            into the <input type="text" class="apply-input" placeholder="noun (plural)">
            of the <input type="text" class="apply-input" placeholder="Noun">.'
        `,
        tags: ['dialogue']
    },
    {
        original: "Cop is a pejorative term. I don't have a problem with policemen.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun">
            is a <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">.
            I don't have a problem with <input type="text" class="apply-input" placeholder="noun (plural)">.
        `,
        tags: ['dialogue']
    },
    {
        original: "Regular dance music wasn't hard enough.",
        template: `
            <input type="text" class="apply-input" placeholder="Adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="noun">
            wasn't <input type="text" class="apply-input" placeholder="adjective">
            enough.
        `,
        tags: ['dialogue']
    },

    // --- Short, Rhythmic Fragments and Sentences ---
    {
        original: "He snarls.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "Bullets started flying.",
        template: `
            <input type="text" class="apply-input" placeholder="Noun (plural)">
            started <input type="text" class="apply-input" placeholder="verb-ing">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He clears his throat.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">
            his <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "(Smile.)",
        template: `
            (<input type="text" class="apply-input" placeholder="Verb">.)
        `,
        tags: ['short-fragment']
    },
    {
        original: "(Wink.)",
        template: `
            (<input type="text" class="apply-input" placeholder="Verb">.)
        `,
        tags: ['short-fragment']
    },
    {
        original: "She smiles.",
        template: `
            She <input type="text" class="apply-input" placeholder="verb-s">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He claps his hands, enthusiastically...",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">
            his <input type="text" class="apply-input" placeholder="noun (plural)">,
            <input type="text" class="apply-input" placeholder="adverb">...
        `,
        tags: ['short-fragment']
    },
    {
        original: "The cryptozoologist's eyes grow wide.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">'s
            <input type="text" class="apply-input" placeholder="noun (plural)">
            grow <input type="text" class="apply-input" placeholder="adjective">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "She shouts with glee.",
        template: `
            She <input type="text" class="apply-input" placeholder="verb-s">
            with <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "The lieutenant nods.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="verb-s">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He pants from exhaustion.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">
            from <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "She gasps.",
        template: `
            She <input type="text" class="apply-input" placeholder="verb-s">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He nods.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "The old man scoffs.",
        template: `
            The <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="verb-s">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He mumbles, slowly shaking his head.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">,
            <input type="text" class="apply-input" placeholder="adverb">
            <input type="text" class="apply-input" placeholder="verb-ing">
            his <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He kicks the door open.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">
            the <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="adjective">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "She throws her head back and laughs.",
        template: `
            She <input type="text" class="apply-input" placeholder="verb-s">
            her <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="adverb">
            and <input type="text" class="apply-input" placeholder="verb-s">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He pulls the trigger.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">
            the <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He runs his fingers through his moustache.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">
            his <input type="text" class="apply-input" placeholder="noun (plural)">
            through his <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He takes a sip from his beer.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">
            a <input type="text" class="apply-input" placeholder="noun">
            from his <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "The big man exhales loudly.",
        template: `
            The <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="verb-s">
            <input type="text" class="apply-input" placeholder="adverb">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "The man frowns, disapprovingly.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="verb-s">,
            <input type="text" class="apply-input" placeholder="adverb">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He shakes his head in disbelief.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">
            his <input type="text" class="apply-input" placeholder="noun">
            in <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['short-fragment']
    },
    {
        original: "He nods eagerly along.",
        template: `
            He <input type="text" class="apply-input" placeholder="verb-s">
            <input type="text" class="apply-input" placeholder="adverb">
            along.
        `,
        tags: ['short-fragment']
    },
    {
        original: "The piece shines in his outstretched hand.",
        template: `
            The <input type="text" class="apply-input" placeholder="noun">
            <input type="text" class="apply-input" placeholder="verb-s">
            in his <input type="text" class="apply-input" placeholder="adjective">
            <input type="text" class="apply-input" placeholder="noun">.
        `,
        tags: ['short-fragment']
    }
];

// Kintamieji
let filteredPassageLibrary = [];
let currentPassage = {};
let currentPassageIndex = 0; // Sekame, kurį sakinį iš sąrašo rodome

// --- UI ELEMENTAI ---
const stepObserve = document.getElementById('step-observe');
const stepReplicate = document.getElementById('step-replicate');
const stepApply = document.getElementById('step-apply');

const observePassageEl = document.getElementById('observe-passage');
const replicateInputEl = document.getElementById('replicate-input');
const replicateFeedbackEl = document.getElementById('replicate-feedback');
const applyTemplateEl = document.getElementById('apply-template');
const tagFilterEl = document.getElementById('tag-filter');
const passageCounterEl = document.getElementById('passage-counter'); // Skaitiklio elementas

// --- PAGALBINĖS FUNKCIJOS ---

/**
 * Fisher-Yates masyvo sumaišymo algoritmas.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- PROGRAMOS LOGIKA ---

/**
 * Užpildo filtro <select> elementą unikaliomis žymomis.
 */
function populateFilterDropdown() {
    const allTags = passageLibrary.flatMap(passage => passage.tags);
    const uniqueTags = [...new Set(allTags)];
    uniqueTags.sort();

    tagFilterEl.innerHTML = '<option value="all">All Passages</option>';

    uniqueTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        // Padarome pirmą raidę didžiąja ir pakeičiame '-' į ' '
        let tagName = tag.charAt(0).toUpperCase() + tag.slice(1);
        tagName = tagName.replace('-', ' ');
        option.textContent = tagName;
        tagFilterEl.appendChild(option);
    });
}

/**
 * Iškviečiama, kai vartotojas pakeičia filtro reikšmę.
 */
function filterPassages() {
    const selectedTag = tagFilterEl.value;

    if (selectedTag === 'all') {
        filteredPassageLibrary = [...passageLibrary];
    } else {
        filteredPassageLibrary = passageLibrary.filter(passage => 
            passage.tags.includes(selectedTag)
        );
    }
    
    // Sumaišome naują filtruotą sąrašą
    shuffleArray(filteredPassageLibrary);
    
    // Nustatome indeksą į 0
    currentPassageIndex = 0;
    
    // Iškviečiame startOver, kad parodytume pirmą sakinį
    startOver(true);
}

/**
 * Užkrauna dabartinį sakinį pagal indeksą.
 */
function loadCurrentPassage() {
    if (filteredPassageLibrary.length === 0) {
        // Atvejis, jei filtras nieko nerado
        observePassageEl.textContent = "No passages found matching this filter. Try selecting 'All Passages'.";
        passageCounterEl.textContent = "0 / 0";
        document.querySelector('#step-observe button').disabled = true;
        currentPassage = {};
        return;
    }
    
    // Įjungiame mygtuką (jei buvo išjungtas)
    document.querySelector('#step-observe button').disabled = false;

    // Gauname dabartinį sakinį
    currentPassage = filteredPassageLibrary[currentPassageIndex];
    
    // Atnaujiname UI
    observePassageEl.textContent = currentPassage.original;
    applyTemplateEl.innerHTML = currentPassage.template;
    
    // Atnaujiname skaitiklį
    passageCounterEl.textContent = `Passage: ${currentPassageIndex + 1} / ${filteredPassageLibrary.length}`;
}

/**
 * Paleidžiama programos pradžioje.
 */
function initializeApp() {
    populateFilterDropdown(); 
    
    filteredPassageLibrary = [...passageLibrary];
    
    // Sumaišome pradinį sąrašą
    shuffleArray(filteredPassageLibrary);
    
    currentPassageIndex = 0;
    
    // Naudojame naują funkciją
    loadCurrentPassage();
}

/**
 * Pereina iš 1 žingsnio į 2
 */
function goToReplicateStep() {
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
    if (!currentPassage.original) return;
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
    if (!currentPassage.original) return;
    
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
 * Dabar pereina prie KITO sakinio sąraše.
 */
function startOver(isFilterChange = false) {
    if (!isFilterChange) {
        // Jei tai ne filtro pakeitimas, o "Start Over" mygtuko paspaudimas,
        // pereiname prie kito sakinio indekso.
        currentPassageIndex++;
        
        // Jei pasiekėme sąrašo pabaigą, pradedame iš naujo (ir vėl sumaišome)
        if (currentPassageIndex >= filteredPassageLibrary.length) {
            currentPassageIndex = 0;
            // Vėl sumaišome sąrašą naujai "sesijai"
            shuffleArray(filteredPassageLibrary); 
        }
    }
    
    // Paslepiame/parodome reikiamus blokus
    stepApply.classList.add('hidden');
    stepObserve.classList.remove('hidden');
    stepReplicate.classList.add('hidden');

    // Užkrauname naują (arba pirmą filtruotą) sakinį
    loadCurrentPassage();
}

// --- PALEIDIMAS ---
initializeApp();