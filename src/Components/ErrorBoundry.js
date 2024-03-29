import React, { Component } from 'react'

class ErrorBoundry extends Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    return (
      <>
        {this.state.hasError ? (
          <h1>Ooooop. Something went wrong...</h1>
        ) : (
          this.props.children
        )}
      </>
    )
  }
}

export default ErrorBoundry
