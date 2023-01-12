import * as React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // po przechwyceniu błędu aktualizujemy stan i wyświetlimy w przyszłości zastępcze UI
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // można stąd wysłać error do serwisu logującego błędy
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // jeśli wystąpił błąd wyświetl zastępcze UI
      return <h1>Something went wrong.</h1>;
    }
    // w innym przypadku wyświetlaj komponenty w normalny sposób
    return this.props.children;
  }
}

export default ErrorBoundary;
