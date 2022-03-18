import React from 'react';

interface ISafeState {
  hasError: boolean;
}

interface ISafeProps {}

export default class SafeComponent extends React.Component<
  ISafeProps,
  ISafeState
> {
  constructor(props: ISafeProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
