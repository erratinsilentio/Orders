import * as React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface Props {
  children?: React.ReactNode;
}

class ErrorBoundary extends React.Component<Props, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
