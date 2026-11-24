import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode; fallback?: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error(error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      this.props.fallback ?? (
        <div role="alert" className="grid min-h-dvh place-items-center px-6 text-center">
          <div className="max-w-md">
            <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Something broke</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">This page hit an unexpected error.</h1>
            <p className="mt-3 text-muted">
              Refreshing usually fixes it. You can also reach me directly at{" "}
              <a className="text-accent underline" href="mailto:mahadarshad214@gmail.com">
                mahadarshad214@gmail.com
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-8 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg"
            >
              Reload page
            </button>
          </div>
        </div>
      )
    );
  }
}
