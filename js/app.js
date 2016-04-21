// Count is a `reducer function`
// Described as a `pure function`
// takes the previous state and dispatched action
// and returns the next state
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Store expects a Reducer fn
const { createStore } = Redux;
const store = createStore(counter);

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    value
  ),
  React.createElement(
    'button',
    { onClick: onIncrement },
    '+'
  ),
  React.createElement(
    'button',
    { onClick: onDecrement },
    '-'
  )
);

const render = () => {
  ReactDOM.render(React.createElement(Counter, {
    value: store.getState(),
    onIncrement: () => store.dispatch({
      type: 'INCREMENT'
    }),
    onDecrement: () => store.dispatch({
      type: 'DECREMENT'
    })
  }), document.getElementById('root'));
};

// Register a callback everytime an action has been dispatched
store.subscribe(render);

// Call at least once to render initial state
render();