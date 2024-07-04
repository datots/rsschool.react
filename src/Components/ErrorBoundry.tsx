import React, { Component, ErrorInfo } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('Error caught in ErrorBoundary:', error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
