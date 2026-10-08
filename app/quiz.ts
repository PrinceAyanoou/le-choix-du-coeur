export type AnswerLetter = "A" | "B" | "C";

export const answerCategories: Record<AnswerLetter, string> = {
  A: "Tendresse",
  B: "Étincelles",
  C: "Rires complices",
};

export type Choice = {
  letter: AnswerLetter;
  text: string;
  joke?: string;
};

export type Question = {
  title: string;
  choices: [Choice, Choice, Choice];
};

export const questions: Question[] = [
  {
    title: "Dans un moment tout simple, qu’est-ce qui te fait penser « c’est nous » ?",
    choices: [
      {
        letter: "A",
        text: "Sa main cherche la mienne sans même y penser.",
      },
      {
        letter: "B",
        text: "Un regard suffit, et j’ai déjà envie de l’embrasser.",
      },
      {
        letter: "C",
        text: "On est censés faire quelque chose… et on finit par rire pour rien.",
        joke: "Le programme était peut-être trop ambitieux dès le départ.",
      },
    ],
  },
  {
    title: "Le petit geste qui pourrait refaire ta journée, c’est…",
    choices: [
      {
        letter: "A",
        text: "Un message juste pour me dire « je pense à toi ».",
      },
      {
        letter: "B",
        text: "Un baiser inattendu qui fait oublier l’heure.",
      },
      {
        letter: "C",
        text: "La dernière part de gâteau. Le vrai grand amour sait partager.",
        joke: "La dernière part, c’est une déclaration en chocolat.",
      },
    ],
  },
  {
    title: "Quel souvenir de nous te donnerait envie d’appuyer sur « replay » ?",
    choices: [
      {
        letter: "A",
        text: "Un moment tout doux où je me suis senti·e à ma place.",
      },
      {
        letter: "B",
        text: "Notre premier baiser… ou un autre que je ne raconterai pas ici.",
      },
      {
        letter: "C",
        text: "Ce fou rire impossible à expliquer aux autres. On a essayé.",
        joke: "Pour les autres, ce souvenir reste classé top secret.",
      },
    ],
  },
  {
    title: "Avec cette personne, tu peux vraiment…",
    choices: [
      {
        letter: "A",
        text: "Baisser la garde et te sentir exactement à ta place.",
      },
      {
        letter: "B",
        text: "Te lancer dans des aventures que tu n’aurais pas osé tenter seul·e.",
      },
      {
        letter: "C",
        text: "Être parfaitement ridicule. C’est même devenu une tradition.",
        joke: "Le ridicule partagé est une grande preuve de confiance.",
      },
    ],
  },
  {
    title: "Quand vous ne vous voyez pas pendant quelque temps, qu’est-ce qui te manque le plus ?",
    choices: [
      {
        letter: "A",
        text: "Sa présence tranquille, même quand on ne dit rien.",
      },
      {
        letter: "B",
        text: "Ses bras. Et les retrouvailles qui vont avec.",
      },
      {
        letter: "C",
        text: "Nos conversations interminables sur absolument n’importe quoi.",
      },
    ],
  },
  {
    title: "La phrase que tu aimerais entendre un peu plus souvent ?",
    choices: [
      {
        letter: "A",
        text: "« Je vois tout ce que tu fais, et je l’apprécie. »",
      },
      {
        letter: "B",
        text: "« J’ai de la chance de partager mon histoire avec toi. »",
      },
      {
        letter: "C",
        text: "« Ta blague était nulle. J’ai quand même ri. »",
        joke: "C’est la note maximale en humour de couple.",
      },
    ],
  },
  {
    title: "Si on avait toute une soirée rien qu’à nous, on…",
    choices: [
      {
        letter: "A",
        text: "Dîne tranquillement, et refait le monde jusqu’à trop tard.",
      },
      {
        letter: "B",
        text: "Part sans trop prévoir et voit où la soirée nous emmène.",
      },
      {
        letter: "C",
        text: "Commande à manger, sort le plaid et ne s’excuse de rien.",
        joke: "Le dress code, c’est « confortable ». Le menu est non négociable.",
      },
    ],
  },
  {
    title: "Quand la journée a été longue, la meilleure façon de t’aimer, c’est…",
    choices: [
      {
        letter: "A",
        text: "M’écouter, m’accueillir et me faire sentir moins seul·e.",
      },
      {
        letter: "B",
        text: "Me serrer contre toi et me rappeler qu’on est une équipe.",
      },
      {
        letter: "C",
        text: "Trouver exactement la seule vidéo qui peut me faire rire.",
      },
    ],
  },
  {
    title: "La petite chose que cette personne remarque à chaque fois ?",
    choices: [
      {
        letter: "A",
        text: "Quand j’ai besoin d’attention, même si je ne le dis pas.",
      },
      {
        letter: "B",
        text: "Ce qui me donne envie de rêver plus grand.",
      },
      {
        letter: "C",
        text: "Ma commande préférée. Parfois avant même que je l’aie choisie.",
        joke: "Un talent aussi utile mérite son propre diplôme.",
      },
    ],
  },
  {
    title: "Le rêve à deux qui te met le sourire rien qu’en y pensant ?",
    choices: [
      {
        letter: "A",
        text: "Un chez-nous plein de petits rituels rien qu’à nous.",
      },
      {
        letter: "B",
        text: "Un grand voyage ou un projet qu’on aura construit ensemble.",
      },
      {
        letter: "C",
        text: "Continuer à vieillir ensemble en riant des mêmes bêtises.",
      },
    ],
  },
  {
    title: "Quelle est votre façon préférée de vous retrouver ?",
    choices: [
      {
        letter: "A",
        text: "Se prendre le temps de se raconter vraiment sa journée.",
      },
      {
        letter: "B",
        text: "Se réserver un vrai rendez-vous, avec des papillons en prime.",
      },
      {
        letter: "C",
        text: "Partager un goûter et un épisode de notre série doudou.",
      },
    ],
  },
  {
    title: "Ce qui rend votre histoire différente de toutes les autres ?",
    choices: [
      {
        letter: "A",
        text: "La confiance d’être aimé·e exactement comme je suis.",
      },
      {
        letter: "B",
        text: "L’élan qu’on se donne pour inventer la suite ensemble.",
      },
      {
        letter: "C",
        text: "Nos références secrètes. Un seul mot, et on repart à rire.",
        joke: "Rien que les initiés comprendront cette réponse.",
      },
    ],
  },
];

export type CoupleProfile = {
  letter: AnswerLetter;
  title: string;
  subtitle: string;
  description: string;
  strength: string;
  challenge: string;
  loveMessage: string;
  suggestion: string;
  action: string;
};

export const LOVE_NOTE_LEAD =
  "Quel que soit le résultat, la vérité est que notre histoire n’est pas parfaite, mais elle est la nôtre. Et au fond, peu importe les disputes ou les silences, mon cœur n’a de cesse de te choisir.";
export const LOVE_NOTE_ENDING = "Je t’aime, tout simplement.";

export function getLoveNote(name: string, profile: CoupleProfile): string {
  const personalNote = `${name.trim() ? `${name.trim()}, ` : ""}${profile.loveMessage}`;
  return `${personalNote}\n\n${LOVE_NOTE_LEAD} ${LOVE_NOTE_ENDING}`;
}

export const profiles: Record<AnswerLetter, CoupleProfile> = {
  A: {
    letter: "A",
    title: "Les amoureux en mode refuge",
    subtitle: "La tendresse tranquille, ça vous va si bien.",
    description:
      "Chez vous, aimer, c’est offrir un endroit où l’on peut enfin souffler. Les gestes comptent autant que les mots, et les moments simples deviennent vos plus beaux souvenirs.",
    strength:
      "Votre force : faire de votre présence un endroit sûr, où l’on peut être entièrement soi-même.",
    challenge:
      "Votre petit rappel : les tendresses que l’on ressent font aussi du bien quand on les dit tout haut.",
    loveMessage:
      "J’aime cette paix que je ressens auprès de toi, et tous ces petits instants où tu me fais me sentir chez moi.",
    suggestion:
      "Dis à cette personne quel petit geste, tout récent, t’a fait te sentir aimé·e. Un détail précis vaut mille grands discours.",
    action: "Vous préparer un vrai moment à deux, sans téléphone.",
  },
  B: {
    letter: "B",
    title: "Les amoureux à étincelles",
    subtitle: "Beaucoup de caractère, et du cœur à la même mesure.",
    description:
      "Avec vous, les conversations sont vivantes et la passion ne prend pas souvent sa journée. Derrière vos petites joutes, il y a surtout deux personnes qui ont beaucoup de choses à se dire.",
    strength:
      "Votre force : vous donner de l’élan, vous faire grandir et garder vivante cette étincelle qui vous rapproche.",
    challenge:
      "Votre petit rappel : les petits gestes tendres ont parfois plus de charme qu’une grande déclaration.",
    loveMessage:
      "Avec toi, j’ai envie de voir grand, d’oser davantage et de revivre ces papillons que tu sais si bien provoquer.",
    suggestion:
      "Organisez-vous un vrai rendez-vous cette semaine. Même votre restaurant préféré, pourvu que le téléphone reste dans la poche.",
    action: "Vous prévoir une sortie rien qu’à deux.",
  },
  C: {
    letter: "C",
    title: "Les amoureux complices",
    subtitle: "Votre humour maison, c’est déjà une langue de l’amour.",
    description:
      "Vous savez rendre les choses plus légères et transformer le quotidien en souvenir drôle. Votre complicité est une petite signature que personne d’autre ne sait vraiment imiter.",
    strength:
      "Votre force : ramener la joie dans le quotidien et partager une complicité où l’on peut rire comme des enfants.",
    challenge:
      "Votre petit rappel : après les blagues, osez aussi les mots doux, même un peu maladroits.",
    loveMessage:
      "Tu es ma personne préférée pour rire, pour ne rien faire et pour transformer une journée ordinaire en notre histoire.",
    suggestion:
      "Racontez-vous votre souvenir préféré ensemble. Chacun donne un détail : votre version peut différer, et c’est ça qui est drôle.",
    action: "Vous ressortir votre meilleure anecdote de couple.",
  },
};

export const balancedProfile: CoupleProfile = {
  letter: "A",
  title: "Un duo unique, impossible à mettre dans une case",
  subtitle: "Un mélange bien à vous, c’est ça, votre signature.",
  description:
    "Tendresse, étincelles, humour : vous avez un peu de chaque. C’est justement votre façon à vous de conjuguer les petits moments, les grandes émotions et le reste.",
  strength:
    "Votre force : avoir plein de façons de vous aimer, sans jamais ressembler à un autre duo.",
  challenge:
    "Votre petit rappel : demandez-vous ce qui vous fait vous sentir aimé·e en ce moment. Les réponses changent, et c’est normal.",
  loveMessage:
    "J’aime qu’avec toi, la vie puisse être tendre, pétillante ou complètement absurde, souvent le même jour.",
  suggestion:
    "Choisissez chacun une chanson qui vous fait penser à l’autre, faites-vous écouter vos deux choix et racontez pourquoi.",
  action: "Vous créer une mini-playlist rien qu’à vous.",
};

export function getCounts(answers: AnswerLetter[]): Record<AnswerLetter, number> {
  return answers.reduce<Record<AnswerLetter, number>>(
    (counts, answer) => {
      counts[answer] += 1;
      return counts;
    },
    { A: 0, B: 0, C: 0 },
  );
}

export function getProfile(answers: AnswerLetter[]): CoupleProfile {
  const counts = getCounts(answers);
  const highestCount = Math.max(counts.A, counts.B, counts.C);
  const tied = (Object.keys(counts) as AnswerLetter[]).filter(
    (letter) => counts[letter] === highestCount,
  );
  return tied.length === 1 ? profiles[tied[0]!] : balancedProfile;
}

export function getProfileTitle(answers: AnswerLetter[]): string {
  const counts = getCounts(answers);
  const maximum = Math.max(counts.A, counts.B, counts.C);
  const leading = (Object.keys(counts) as AnswerLetter[]).filter(
    (letter) => counts[letter] === maximum,
  );

  if (leading.length > 1) {
    return "Un duo unique, impossible à mettre dans une case";
  }

  return profiles[leading[0]!].title;
}
