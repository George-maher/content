import { useEffect, useRef } from "react";
import { SESSIONS } from "./content";
import SessionView from "./components/SessionView";
import ErrorBoundary from "./components/ErrorBoundary";
import { Exam, Glossary, Home, NotFound, SessionList } from "./components/Pages";
import { href, useRoute, type Route } from "./router";
import { Provider, useLang, useProgress } from "./store";
import { S } from "./strings";

function routeTitle(route: Route, t: (x: { en: string; ar: string }) => string): string {
  switch (route.page) {
    case "home":
      return t(S.appName);
    case "sessions":
      return t(S.sessions);
    case "glossary":
      return t(S.glossary);
    case "exam":
      return t(S.exam);
    case "notFound":
      return t(S.notFoundTitle);
    case "session": {
      const session = SESSIONS.find((s) => s.id === route.id);
      return session ? `${t(S.session)} ${session.id}: ${t(session.title)}` : t(S.notFoundTitle);
    }
  }
}

function Shell() {
  const { t, lang, setLang } = useLang();
  const { migrationNotice, dismissMigrationNotice } = useProgress();
  const route = useRoute();
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  const title = routeTitle(route, t);
  const routeKey = JSON.stringify(route);

  const links: [string, string, boolean][] = [
    [href.home, t(S.dashboard), route.page === "home"],
    [href.sessions, t(S.sessions), route.page === "sessions" || route.page === "session"],
    [href.glossary, t(S.glossary), route.page === "glossary"],
    [href.exam, t(S.exam), route.page === "exam"],
  ];

  useEffect(() => {
    document.title = route.page === "home" ? title : `${title} · ${t(S.appName)}`;
  }, [title, t, route.page]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    mainRef.current?.focus();
  }, [routeKey]);

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`min-h-screen bg-slate-950 text-slate-200 ${lang === "ar" ? "font-[Tahoma,'Segoe_UI',Arial,sans-serif]" : "font-sans"}`}
    >
      <a
        href="#main"
        onClick={(event) => {
          // The app uses hash routing, so keep the skip link from becoming a route.
          event.preventDefault();
          mainRef.current?.focus();
          mainRef.current?.scrollIntoView();
        }}
        className="sr-only z-50 rounded-lg bg-emerald-400 px-4 py-2 font-semibold text-slate-950 focus:not-sr-only focus:absolute focus:start-4 focus:top-4"
      >
        {t(S.skipToContent)}
      </a>
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-4 py-3">
          <a href={href.home} className="flex min-h-11 items-center gap-2 font-extrabold text-white focus-visible:ring-2 focus-visible:ring-emerald-400">
            <span className="text-xl" aria-hidden="true">🛡</span>
            <span className="hidden sm:inline">{t(S.appName)}</span>
            <span className="sr-only sm:hidden">{t(S.appName)}</span>
          </a>
          <nav className="ms-auto flex flex-wrap items-center gap-1 text-sm" aria-label={t(S.primaryNav)}>
            {links.map(([h, label, on]) => (
              <a
                key={h}
                href={h}
                aria-current={on ? "page" : undefined}
                className={`min-h-11 rounded-lg px-3 py-2 focus-visible:ring-2 focus-visible:ring-emerald-400 ${on ? "bg-slate-800 text-emerald-300" : "text-slate-400 hover:text-white"}`}
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="ms-2 min-h-11 rounded-lg border border-emerald-500/50 px-3 py-2 font-semibold text-emerald-300 hover:bg-emerald-500/10 focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label={t(S.switchLanguage)}
            >
              <span aria-hidden="true">🌐</span> {t(S.language)}
            </button>
          </nav>
        </div>
      </header>
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">{title}</div>
      <main id="main" ref={mainRef} tabIndex={-1} className="mx-auto max-w-5xl px-4 py-8 focus:outline-none">
        {migrationNotice && (
          <div
            role="status"
            className="mb-5 rounded-2xl border border-amber-500/50 bg-amber-500/10 p-4 text-sm text-amber-100"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-bold">{t(S.migrationTitle)}</p>
                <p className="mt-1 leading-relaxed">{t(S.migrationBody)}</p>
              </div>
              <button
                type="button"
                onClick={dismissMigrationNotice}
                className="min-h-11 rounded-lg border border-amber-400/60 px-3 py-2 font-semibold text-amber-100 hover:bg-amber-500/20 focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                {t(S.dismiss)}
              </button>
            </div>
          </div>
        )}
        <ErrorBoundary
          resetKey={routeKey}
          title={t(S.errorTitle)}
          message={t(S.errorBody)}
          action={t(S.reload)}
        >
          {route.page === "home" && <Home />}
          {route.page === "sessions" && <div className="space-y-6"><h1 className="text-3xl font-extrabold text-white">{t(S.sessions)}</h1><SessionList /></div>}
          {route.page === "glossary" && <Glossary />}
          {route.page === "exam" && <Exam />}
          {route.page === "notFound" && <NotFound />}
          {route.page === "session" && (() => {
            const session = SESSIONS.find((x) => x.id === route.id);
            return session ? <SessionView key={session.id} s={session} tab={route.tab} /> : <NotFound />;
          })()}
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Provider>
      <Shell />
    </Provider>
  );
}
