import { describe, expect, it } from "vitest";
import { parse } from "../../src/router";

describe("router", () => {
  it("maps the top-level pages", () => {
    expect(parse("")).toEqual({ page: "home" });
    expect(parse("#/")).toEqual({ page: "home" });
    expect(parse("#/sessions")).toEqual({ page: "sessions" });
    expect(parse("#/glossary")).toEqual({ page: "glossary" });
    expect(parse("#/exam")).toEqual({ page: "exam" });
  });

  it("accepts valid session routes and ignores an unknown tab", () => {
    expect(parse("#/session/1")).toEqual({ page: "session", id: 1, tab: "lesson" });
    expect(parse("#/session/20/refs")).toEqual({ page: "session", id: 20, tab: "refs" });
    expect(parse("#/session/5/nonsense")).toEqual({ page: "session", id: 5, tab: "lesson" });
  });

  it("rejects fractional, out-of-range and malformed ids", () => {
    for (const hash of [
      "#/session/0",
      "#/session/21",
      "#/session/5.5",
      "#/session/-1",
      "#/session/abc",
      "#/session/",
      "#/session/1/lab/extra",
      "#/nope",
    ]) {
      expect(parse(hash), hash).toEqual({ page: "notFound" });
    }
  });
});
