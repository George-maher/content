// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Provider, useProgress } from "../../src/store";

function Harness() {
  const { progress, saveQuiz, saveExam, reset, resetSession } = useProgress();
  return (
    <div>
      <output data-testid="quiz">{JSON.stringify(progress.quiz)}</output>
      <output data-testid="exam">{JSON.stringify(progress.exam ?? null)}</output>
      <button onClick={() => saveQuiz(1, 3, 5)}>save 3/5</button>
      <button onClick={() => saveQuiz(1, 2, 5)}>save 2/5</button>
      <button onClick={() => saveQuiz(1, 4, 5)}>save 4/5</button>
      <button onClick={() => saveExam(20, 40)}>exam 20</button>
      <button onClick={() => saveExam(30, 40)}>exam 30</button>
      <button onClick={() => resetSession(1)}>reset session</button>
      <button onClick={reset}>reset all</button>
    </div>
  );
}

beforeEach(() => localStorage.clear());
afterEach(cleanup);

describe("Provider progress transitions", () => {
  it("retains the best session quiz and exam scores", async () => {
    const user = userEvent.setup();
    render(
      <Provider>
        <Harness />
      </Provider>,
    );
    await user.click(screen.getByRole("button", { name: "save 3/5" }));
    expect(screen.getByTestId("quiz")).toHaveTextContent('{"1":{"score":3,"total":5}}');
    await user.click(screen.getByRole("button", { name: "save 2/5" }));
    expect(screen.getByTestId("quiz")).toHaveTextContent('{"1":{"score":3,"total":5}}');
    await user.click(screen.getByRole("button", { name: "save 4/5" }));
    expect(screen.getByTestId("quiz")).toHaveTextContent('{"1":{"score":4,"total":5}}');

    await user.click(screen.getByRole("button", { name: "exam 20" }));
    expect(screen.getByTestId("exam")).toHaveTextContent('{"score":20,"total":40}');
    await user.click(screen.getByRole("button", { name: "exam 30" }));
    expect(screen.getByTestId("exam")).toHaveTextContent('{"score":30,"total":40}');
  });

  it("resets a single session or all progress", async () => {
    const user = userEvent.setup();
    render(
      <Provider>
        <Harness />
      </Provider>,
    );
    await user.click(screen.getByRole("button", { name: "save 4/5" }));
    await user.click(screen.getByRole("button", { name: "exam 30" }));
    await user.click(screen.getByRole("button", { name: "reset session" }));
    expect(screen.getByTestId("quiz")).toHaveTextContent("{}");
    expect(screen.getByTestId("exam")).toHaveTextContent('{"score":30,"total":40}');
    await user.click(screen.getByRole("button", { name: "reset all" }));
    expect(screen.getByTestId("exam")).toHaveTextContent("null");
  });

  it("starts cleanly from malformed storage", () => {
    localStorage.setItem("csf.progress.v1", '{"quiz":{"1":{"score":-5,"total":0}}}');
    expect(() =>
      render(
        <Provider>
          <Harness />
        </Provider>,
      ),
    ).not.toThrow();
    expect(screen.getByTestId("quiz")).toHaveTextContent("{}");
    expect(screen.getByTestId("exam")).toHaveTextContent("null");
  });
});
