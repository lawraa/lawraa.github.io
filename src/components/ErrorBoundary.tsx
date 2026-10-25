import { Component, type ReactNode } from 'react'

// Catches render errors, including a lazy chunk that fails to load, so one broken part
// shows its fallback instead of unmounting the whole site. React itself logs the caught error.
export default class ErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}
