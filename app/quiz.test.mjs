import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  answerCategories,
  balancedProfile,
  getCounts,
  getLoveNote,
  getProfile,
  getProfileTitle,
  profiles,
  questions,
} from "./quiz.ts";

describe("quiz", () => {
  it("scores tender, passionate, and playful answers in their matching categories", () => {
    assert.deepEqual(answerCategories, {
      A: "Tendresse",
      B: "Étincelles",
      C: "Rires complices",
    });
  });

  it("proposes twelve complete questions with three choices each", () => {
    assert.equal(questions.length, 12);
    for (const question of questions) {
      assert.equal(question.choices.length, 3);
      assert.deepEqual(
        question.choices.map((choice) => choice.letter),
        ["A", "B", "C"],
      );
      for (const choice of question.choices) {
        assert.ok(choice.text.length >= 20, "answers give a specific, thoughtful response");
      }
    }
    assert.match(questions[0].title, /moment tout simple/i);
    assert.match(questions[9].title, /rêve à deux/i);
    assert.ok(questions.some((question) => question.choices.some((choice) => choice.joke)));
  });

  it("counts answers and selects the corresponding dominant profile", () => {
    assert.deepEqual(getCounts(["A", "B", "A", "C", "A", "B"]), {
      A: 3,
      B: 2,
      C: 1,
    });
    assert.equal(getProfile(["A", "A", "B"]).letter, "A");
    assert.equal(getProfile(["B", "C", "B", "A"]).letter, "B");
    assert.equal(getProfile(["C", "C", "A"]).letter, "C");
  });

  it("adds the correct couple-specific message and optional name to the exact love note", () => {
    const message = getLoveNote("  Camille ", profiles.A);
    assert.equal(
      message,
      `Camille, ${profiles.A.loveMessage}\n\nQuel que soit le résultat, la vérité est que notre histoire n’est pas parfaite, mais elle est la nôtre. Et au fond, peu importe les disputes ou les silences, mon cœur n’a de cesse de te choisir. Je t’aime, tout simplement.`,
    );
    assert.equal(
      getLoveNote("", profiles.C),
      `${profiles.C.loveMessage}\n\nQuel que soit le résultat, la vérité est que notre histoire n’est pas parfaite, mais elle est la nôtre. Et au fond, peu importe les disputes ou les silences, mon cœur n’a de cesse de te choisir. Je t’aime, tout simplement.`,
    );
    assert.notEqual(profiles.A.loveMessage, profiles.B.loveMessage);
    assert.notEqual(profiles.B.loveMessage, profiles.C.loveMessage);
    assert.notEqual(balancedProfile.loveMessage, profiles.A.loveMessage);
  });

  it("describes tied answers as a unique couple instead of forcing a profile", () => {
    assert.equal(getProfileTitle(["A", "B"]), "Un duo unique, impossible à mettre dans une case");
    assert.equal(getProfileTitle(["A", "A", "B"]), profiles.A.title);
    assert.equal(getProfile(["A", "B"]), balancedProfile);
  });
});
