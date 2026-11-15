import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  message: string;
  action: string;
  resetKey?: string;
}

interface State {
  hasError: boolean;
}

/**
 * Catches render errors in the route outlet so a single bad data object cannot
 * blank the whole application. The fallback is localized and offers a reload.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Keep the diagnostic in the console for maintainers; never show it to learners.
    console.error("Route render failed", error, info);
  }

  componentDidUpdate(prev: Props) {
    if (this.state.hasError && prev.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div role="alert" className="mx-auto max-w-xl space-y-4 rounded-2xl border border-red-500/40 bg-red-500/10 p-8 text-center">
        <h1 className="text-2xl font-extrabold text-white">{this.props.title}</h1>
        <p className="text-slate-200">{this.props.message}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="min-h-11 rounded-lg bg-emerald-400 px-5 py-2 font-semibold text-slate-950 focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          {this.props.action}
        </button>
      </div>
    );
  }
}
