"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  getCounts,
  getLoveNote,
  getProfile,
  getProfileTitle,
  answerCategories,
  LOVE_NOTE_ENDING,
  LOVE_NOTE_LEAD,
  questions,
  type AnswerLetter,
} from "./quiz";

type Phase = "intro" | "quiz" | "result";

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.4 5.6a5.5 5.5 0 0 0-7.8 0L12 6.2l-.6-.6a5.5 5.5 0 0 0-7.8 7.8l.6.6L12 21l7.8-7 .6-.6a5.5 5.5 0 0 0 0-7.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.65"
      />
    </svg>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        d="M9 1c.9 4.1 2.9 6.1 7 7-4.1.9-6.1 2.9-7 7-0.9-4.1-2.9-6.1-7-7 4.1-.9 6.1-2.9 7-7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Brand() {
  return (
    <a aria-label="Le Choix du Cœur, accueil" className="brand" href="/">
      <span aria-hidden="true" className="brand-mark">
        <HeartIcon />
      </span>
      <span className="brand-name">
        le choix <span>du cœur</span>
      </span>
    </a>
  );
}

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState<AnswerLetter[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerLetter | null>(
    null,
  );
  const [feedback, setFeedback] = useState("");
  const [acceptedChallenge, setAcceptedChallenge] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const question = questions[currentQuestion]!;
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const score = useMemo(() => getCounts(answers), [answers]);
  const profile = getProfile(answers);

  function startQuiz() {
    setAnswers([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setFeedback("");
    setAcceptedChallenge(false);
    setCopyMessage("");
    setPhase("quiz");
  }

  function chooseAnswer(letter: AnswerLetter, joke?: string) {
    if (busy) return;

    setBusy(true);
    setSelectedAnswer(letter);
    setFeedback(
      joke ||
        (letter === "A"
          ? "Noté : l’amour se glisse souvent dans les petits détails."
          : letter === "B"
            ? "Noté : quelques papillons sont probablement dans le coup."
            : "Noté : votre complicité a déjà sa propre langue."),
    );

    window.setTimeout(() => {
      setAnswers((previous) => [...previous, letter]);

      if (currentQuestion + 1 === questions.length) {
        setPhase("result");
      } else {
        setCurrentQuestion((previous) => previous + 1);
      }

      setSelectedAnswer(null);
      setFeedback("");
      setBusy(false);
    }, 920);
  }

  function goBack() {
    if (busy) return;

    if (currentQuestion === 0) {
      setPhase("intro");
      return;
    }

    setAnswers((previous) => previous.slice(0, -1));
    setCurrentQuestion((previous) => previous - 1);
    setSelectedAnswer(null);
    setFeedback("");
  }

  async function handleCopyMessage() {
    try {
      await navigator.clipboard.writeText(getLoveNote(name, profile));
      setCopyMessage("C’est copié ! Il ne reste qu’à l’envoyer.");
    } catch {
      setCopyMessage(
        "La copie automatique n’est pas disponible ici. Sélectionne le mot doux affiché pour le copier.",
      );
    }
  }

  return (
    <main className="site-shell">
      <div aria-hidden="true" className="ambient ambient-left" />
      <div aria-hidden="true" className="ambient ambient-right" />

      <header className="site-header">
        <Brand />
        <span className="header-note">
          <span className="live-dot" />
          Un petit jeu fait avec amour
        </span>
      </header>

      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.section
            key="intro"
            animate={{ opacity: 1, y: 0 }}
            className="intro-screen page-width"
            exit={{ opacity: 0, y: -14 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
          >
            <div className="intro-copy">
              <div className="eyebrow">
                <Sparkle className="eyebrow-spark" />
                L’AMOUR, AVEC UN PEU DE RECUL
              </div>
              <h1>
                Le cœur a
                <br />
                ses <span className="headline-script">raisons.</span>
                <br />
                Et vous, <span className="headline-highlight">les vôtres.</span>
              </h1>
              <p className="intro-description">
                Douze questions sur vos souvenirs, vos petites attentions et
                tout ce qui fait votre histoire. Pour mieux se dire « je
                t’aime », rire un peu et se choisir encore une fois.
              </p>

              <div className="intro-cta-row">
                <button
                  className="button button-primary button-start"
                  onClick={startQuiz}
                  type="button"
                >
                  <HeartIcon className="button-heart" />
                  <span>Révéler la vérité</span>
                  <span aria-hidden="true" className="button-arrow">
                    ↗
                  </span>
                </button>
                <span className="cta-caption">                12 questions · un vrai mot doux · 0 jugement</span>
              </div>

              <div className="promise-row">
                <span className="promise-heart">
                  <HeartIcon />
                </span>
                <span>
                  À la fin, un mot doux
                  <span className="promise-accent"> juste pour votre duo.</span>
                </span>
              </div>

              <div aria-label="Petit mot doux personnalisé" className="personalization-prompt">
                <label htmlFor="partner-name">
                  <span className="prompt-icon">♡</span>
                  <span>
                    <strong>Un petit mot en plus ?</strong>
                    <span>Le prénom de ta moitié, si tu veux.</span>
                  </span>
                </label>
                <input
                  autoComplete="off"
                  id="partner-name"
                  maxLength={40}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Son petit prénom…"
                  type="text"
                  value={name}
                />
              </div>
            </div>

            <div aria-label="Illustration d’un rendez-vous amoureux" className="hero-art">
              <div aria-hidden="true" className="art-orbit art-orbit-outer" />
              <div aria-hidden="true" className="art-orbit art-orbit-inner" />
              <Sparkle className="art-spark art-spark-one" />
              <Sparkle className="art-spark art-spark-two" />
              <span aria-hidden="true" className="art-handwritten art-word-one">
                nous
              </span>
              <span aria-hidden="true" className="art-handwritten art-word-two">
                deux
              </span>
              <div aria-hidden="true" className="hero-heart-disc">
                <svg fill="none" viewBox="0 0 174 174">
                  <path
                    d="M87 147S29 112 29 68c0-23 16-36 35-36 12 0 20 6 23 17 4-11 12-17 24-17 19 0 35 13 35 36 0 44-59 79-59 79Z"
                    fill="#F8C5B8"
                    stroke="#B36E64"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M52 50c-7 5-10 12-10 21m80-16c5 5 7 11 7 17"
                    stroke="#FFF8F4"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <div className="art-caption">
                <span className="art-caption-icon">
                  <HeartIcon />
                </span>
                <span>
                  <strong>Le bonheur à deux</strong>
                  <span>se cache dans les petits détails.</span>
                </span>
              </div>
              <span aria-hidden="true" className="art-side-note">
                depuis votre premier fou rire
              </span>
            </div>

            <div className="intro-footnote">
              <span className="footnote-star">✳</span>
              100 % bienveillance, 0 % expertise conjugale auto-proclamée
            </div>
          </motion.section>
        )}

        {phase === "quiz" && (
          <motion.section
            key={`question-${currentQuestion}`}
            animate={{ opacity: 1, y: 0 }}
            className="quiz-screen page-width"
            exit={{ opacity: 0, y: -12 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="quiz-topline">
              <button className="text-button" onClick={goBack} type="button">
                <span aria-hidden="true">←</span> Retour
              </button>
              <span className="quiz-counter">
                <span className="quiz-counter-current">
                  {String(currentQuestion + 1).padStart(2, "0")}
                </span>
                <span className="quiz-counter-divider">/</span>
                {String(questions.length).padStart(2, "0")}
              </span>
              <span className="quiz-top-caption">votre histoire, votre tempo</span>
            </div>

            <div
              aria-label={`Progression : ${currentQuestion + 1} sur ${questions.length}`}
              aria-valuemax={questions.length}
              aria-valuemin={0}
              aria-valuenow={currentQuestion + 1}
              className="progress-track"
              role="progressbar"
            >
              <motion.div
                animate={{ width: `${progress}%` }}
                className="progress-value"
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </div>

            <div className="question-card">
              <div className="question-kicker">
                <HeartIcon className="question-kicker-heart" />
                LE PETIT TEST DES CŒURS
              </div>
              <h1 className="question-title">{question.title}</h1>
              <p className="question-subtitle">
                Réponds comme tu le sens. On ne dira rien au pot de confiture.
              </p>

              <div aria-label="Choisis une réponse" className="answers-list" role="group">
                {question.choices.map((choice) => {
                  const isSelected = selectedAnswer === choice.letter;

                  return (
                    <button
                      aria-pressed={isSelected}
                      aria-label={`${choice.letter}. ${choice.text}`}
                      className={`answer-option${isSelected ? " answer-selected" : ""}`}
                      disabled={busy}
                      key={choice.letter}
                      onClick={() => chooseAnswer(choice.letter, choice.joke)}
                      type="button"
                    >
                      <span aria-hidden="true" className="answer-letter">
                        {choice.letter}
                      </span>
                      <span className="answer-text">{choice.text}</span>
                      <span aria-hidden="true" className="answer-chevron">
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              <div
                aria-live="polite"
                className={`answer-feedback${feedback ? " feedback-visible" : ""}`}
              >
                <Sparkle className="feedback-spark" />
                <span>{feedback || " "}</span>
              </div>

              <div className="quiz-footnote">
                <span aria-hidden="true">♥</span>
                Chaque réponse est une pièce de votre histoire.
              </div>
            </div>
          </motion.section>
        )}

        {phase === "result" && (
          <motion.section
            key="result"
            animate={{ opacity: 1, y: 0 }}
            className="result-screen page-width"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="result-eyebrow">
              <Sparkle className="eyebrow-spark" />
              ALERTE : BEAUCOUP DE COMPLICITÉ DÉTECTÉE
            </div>
            <div className="result-grid">
              <div className="result-main">
                <span aria-hidden="true" className="result-stamp">
                  <HeartIcon />
                </span>
                <span className="result-label">VOTRE PORTRAIT DE DUO</span>
                <h1 className="result-title">{getProfileTitle(answers)}</h1>
                <p className="result-subtitle">{profile.subtitle}</p>
                <p className="result-description">{profile.description}</p>

                <div className="result-insight">
                  <div className="insight-block">
                    <span aria-hidden="true" className="insight-emoji">
                      ✨
                    </span>
                    <span>
                      <strong>Votre super-pouvoir</strong>
                      <span>{profile.strength}</span>
                    </span>
                  </div>
                  <div className="insight-divider" />
                  <div className="insight-block">
                    <span aria-hidden="true" className="insight-emoji">
                      🌱
                    </span>
                    <span>
                      <strong>Le petit rappel du cœur</strong>
                      <span>{profile.challenge}</span>
                    </span>
                  </div>
                </div>

                <div className="score-section">
                  <div className="score-heading">
                    <span>Votre recette du moment</span>
                    <span className="score-note">ce n’est pas une science exacte</span>
                  </div>
                  <div
                    aria-label={`${answerCategories.A} ${score.A}, ${answerCategories.B} ${score.B}, ${answerCategories.C} ${score.C}`}
                    className="score-track"
                  >
                    <span style={{ flex: score.A }} />
                    <span style={{ flex: score.B }} />
                    <span style={{ flex: score.C }} />
                  </div>
                  <div aria-hidden="true" className="score-legend">
                    {(["A", "B", "C"] as const).map((letter) => (
                      <span key={letter}>
                        <i
                          className={`legend-dot legend-${letter.toLowerCase()}`}
                        />
                        {answerCategories[letter]}
                        <b>{score[letter]}</b>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="result-aside">
                <div className="challenge-card">
                  <div className="challenge-icon">
                    <Sparkle />
                  </div>
                  <span className="challenge-eyebrow">VOTRE MINI-DÉFI À DEUX</span>
                  <h2>Et si on se choisissait, là, maintenant ?</h2>
                  <p>{profile.suggestion}</p>
                  <div className="challenge-suggestion">
                    <span aria-hidden="true">♡</span> {profile.action}
                  </div>
                  <button
                    aria-pressed={acceptedChallenge}
                    className={`button challenge-button${acceptedChallenge ? " challenge-accepted" : ""}`}
                    onClick={() => setAcceptedChallenge((previous) => !previous)}
                    type="button"
                  >
                    {acceptedChallenge ? "Défi accepté ! ✓" : "Oui, on le fait !"}
                  </button>
                  {acceptedChallenge && (
                    <p className="accepted-note" role="status">
                      C’est noté. À vous de jouer, les amoureux.
                    </p>
                  )}
                </div>
                <span className="aside-scribble">PS : le pot de confiture aussi.</span>
              </aside>
            </div>

            <div className="love-note">
              <span className="love-note-kicker">
                <HeartIcon className="love-note-heart" />
                ET SURTOUT, N’OUBLIE JAMAIS…
              </span>
              <p>
                {name.trim() && (
                  <span className="personalized-name">{name.trim()},{" "}</span>
                )}
                {profile.loveMessage}
              </p>
              <p className="love-note-forever">
                {LOVE_NOTE_LEAD}{" "}
                <span className="love-note-ending">{LOVE_NOTE_ENDING}</span>
              </p>
              <span aria-hidden="true" className="love-note-flourish">
                de tout mon cœur ♡
              </span>
            </div>

            <div className="result-footer">
              <button
                className="button button-primary copy-button"
                onClick={handleCopyMessage}
                type="button"
              >
                <span aria-hidden="true">↗</span>
                Copier mon petit mot
              </button>
              <button className="text-button restart-button" onClick={startQuiz} type="button">
                <span aria-hidden="true">↻</span>
                Refaire le test
              </button>
              {copyMessage && (
                <span aria-live="polite" className="copy-feedback" role="status">
                  {copyMessage}
                </span>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="site-footer">
        <span>FAIT AVEC</span>
        <HeartIcon />
        <span>ET UN BRIN D’HUMOUR</span>
        <span className="footer-separator">·</span>
        <span>VOS RÉPONSES RESTENT VOTRE PETIT SECRET</span>
      </footer>
    </main>
  );
}
