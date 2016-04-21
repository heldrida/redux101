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
console.log('a122123222');

// Store expects a Reducer fn
const { createStore } = Redux;
const store = createStore(counter);

const Counter = ({ value }) => (
  <h1>{value}</h1>
);

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()}/>,
    document.getElementById('root')
  );
};



// Register a callback everytime an action has been dispatched
store.subscribe(render);

// Call at least once to render initial state
render();

// Event listener
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});