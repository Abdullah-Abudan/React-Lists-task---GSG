import { Component } from "react";
export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <span>{this.props.count}</span>
        <div className="counter-controls">
          <button
            className="button red-color"
            onClick={() =>
              this.props.onDecrement(this.props.id, this.props.steps)
            }
          >
            -
          </button>
          <button
            className="button green-color"
            onClick={() =>
              this.props.onIncrement(this.props.id, this.props.steps)
            }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
