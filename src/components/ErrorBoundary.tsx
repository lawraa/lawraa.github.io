import { Component, type ReactNode } from 'react'

// Catches render errors, including a lazy chunk that fails to load, so one broken part
// shows its fallback instead of unmounting the whole site.
export default class ErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: unknown) {
    console.error(error)
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}
