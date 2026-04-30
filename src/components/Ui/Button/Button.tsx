import { Component, type ButtonHTMLAttributes } from 'react';

class Button extends Component<ButtonHTMLAttributes<HTMLButtonElement>> {
  render() {
    return <button {...this.props}>{this.props.children}</button>;
  }
}

export default Button;
