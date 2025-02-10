import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./Button";

interface Props {
  children: ReactNode;
  fallback?: (props: { error: Error; reset: () => void }) => ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  reset = () => {
    this.setState({
      hasError: false,
      error: undefined,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback?.({
          error: this.state.error!,
          reset: this.reset,
        }) ?? (
          <div className="flex flex-col items-center gap-2">
            <p className="text-red-500">에러가 발생했습니다.</p>
            <Button onClick={this.reset}>재시도</Button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
