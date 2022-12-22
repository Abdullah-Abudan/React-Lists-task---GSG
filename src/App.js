import { Component } from "react";
import Container from "./Component/Container";
import Counter from "./Component/Counter";
const counters = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 2 },
  { id: 3, count: 0, steps: 3 },
  { id: 4, count: 0, steps: 4 },
];

class App extends Component {
  state = {
    counters,
  };

  onIncrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        //قيمة جديدة
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + steps };
          }

          return item;
        }),
      };
    });
  };

  onDecrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            //ما بدي تكون الفاليو بالسالب
            if (item.count > 0) {
              return { ...item, count: item.count - steps };
            }
            return item;
          }
          return item;
        }),
      };
    });
  };

  render() {
    return (
      <Container>
        <div className="App">
          {this.state.counters.map((item) => (
            <Counter
              key={item.id}
              {...item}
              onDecrement={this.onDecrement}
              onIncrement={this.onIncrement}
            />
          ))}
          {/*Total*/}
          <p>
            Total is:
            <b>
              {this.state.counters
                .map((item) => item.count)
                .reduce((previousValue, currentValue) => {
                  return previousValue + currentValue;
                })}
            </b>
          </p>
        </div>
      </Container>
    );
  }
}
export default App;
