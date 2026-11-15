// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import QuizRunner from "../../src/components/QuizRunner";
import type { QuizQ } from "../../src/content/types";
import { Provider } from "../../src/store";

const questions: QuizQ[] = [
  {
    q: { en: "Question one", ar: "السؤال واحد" },
    options: [
      { en: "Answer A1", ar: "إجابة أ1" },
      { en: "Answer B1", ar: "إجابة ب1" },
    ],
    answer: 0,
    why: { en: "Because one", ar: "لأن واحد" },
  },
  {
    q: { en: "Question two", ar: "السؤال اثنان" },
    options: [
      { en: "Answer A2", ar: "إجابة أ2" },
      { en: "Answer B2", ar: "إجابة ب2" },
    ],
    answer: 1,
    why: { en: "Because two", ar: "لأن اثنان" },
  },
];

afterEach(cleanup);
beforeEach(() => localStorage.setItem("csf.lang", "en"));

describe("QuizRunner", () => {
  it("supports native radio selection, submit gating, scoring and retry", async () => {
    const user = userEvent.setup();
    const onDone = vi.fn();
    render(
      <Provider>
        <QuizRunner questions={questions} onDone={onDone} />
      </Provider>,
    );

    const submit = screen.getByRole("button", { name: "Submit answers" });
    expect(submit).toBeDisabled();

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(4);

    await user.click(radios[0]);
    await user.click(radios[3]);
    expect(radios[0]).toBeChecked();
    expect(radios[3]).toBeChecked();
    expect(submit).toBeEnabled();

    await user.click(submit);
    expect(onDone).toHaveBeenCalledWith(2, 2);
    expect(screen.getByRole("status")).toHaveTextContent("Score: 2/2");
    expect(screen.getByRole("status")).toHaveTextContent("Passed");

    await user.click(screen.getByRole("button", { name: "Try again" }));
    expect(screen.getByRole("button", { name: "Submit answers" })).toBeDisabled();
    expect(screen.getAllByRole("radio").every((r) => !(r as HTMLInputElement).checked)).toBe(true);
  });

  it("marks a wrong answer and reports the failing score", async () => {
    const user = userEvent.setup();
    const onDone = vi.fn();
    render(
      <Provider>
        <QuizRunner questions={questions} onDone={onDone} />
      </Provider>,
    );
    const radios = screen.getAllByRole("radio");
    await user.click(radios[1]); // wrong for question 1
    await user.click(radios[2]); // wrong for question 2
    await user.click(screen.getByRole("button", { name: "Submit answers" }));
    expect(onDone).toHaveBeenCalledWith(0, 2);
    expect(screen.getByRole("status")).toHaveTextContent("0/2");
    expect(screen.getByRole("status")).toHaveTextContent("Not yet passed");
  });
});
