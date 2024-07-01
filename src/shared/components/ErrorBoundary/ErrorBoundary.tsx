import { Component, ReactNode, ErrorInfo } from 'react';
import { ErrorContainer, ErrorMessage, ErrorTitle } from './ErrorBoundary.styles';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong.</ErrorTitle>
          <ErrorMessage>We're sorry for the inconvenience. Please try again later.</ErrorMessage>
        </ErrorContainer>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
