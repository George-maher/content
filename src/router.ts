import { useEffect, useState } from "react";
import { SESSIONS } from "./content";

export type Tab = "lesson" | "lab" | "quiz" | "homework" | "refs";
export type Route =
  | { page: "home" }
  | { page: "sessions" }
  | { page: "glossary" }
  | { page: "exam" }
  | { page: "notFound" }
  | { page: "session"; id: number; tab: Tab };

const TABS: Tab[] = ["lesson", "lab", "quiz", "homework", "refs"];
const SESSION_IDS = new Set(SESSIONS.map((s) => s.id));

export function parse(hash: string): Route {
  const parts = hash
    .replace(/^#\/?/, "")
    .split("/")
    .filter(Boolean);

  if (parts.length === 0) return { page: "home" };

  if (parts[0] === "sessions") {
    return parts.length === 1 ? { page: "sessions" } : { page: "notFound" };
  }
  if (parts[0] === "glossary") {
    return parts.length === 1 ? { page: "glossary" } : { page: "notFound" };
  }
  if (parts[0] === "exam") {
    return parts.length === 1 ? { page: "exam" } : { page: "notFound" };
  }
  if (parts[0] === "session") {
    if (parts.length > 3) return { page: "notFound" };
    const raw = parts[1];
    if (!raw || !/^\d+$/.test(raw)) return { page: "notFound" };
    const id = Number(raw);
    if (!Number.isSafeInteger(id) || !SESSION_IDS.has(id)) return { page: "notFound" };
    const candidate = parts[2] as Tab | undefined;
    const tab = candidate && TABS.includes(candidate) ? candidate : "lesson";
    return { page: "session", id, tab };
  }
  return { page: "notFound" };
}

export const href = {
  home: "#/",
  sessions: "#/sessions",
  glossary: "#/glossary",
  exam: "#/exam",
  session: (id: number, tab: Tab = "lesson") => `#/session/${id}/${tab}`,
};

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    parse(typeof location === "undefined" ? "#/" : location.hash),
  );

  useEffect(() => {
    const onChange = () => {
      setRoute(parse(location.hash));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
