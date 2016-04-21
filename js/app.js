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
}

// Tests using `expect` by Michael Jackson
expect(
	counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
	counter(1, { type: 'DECREMENT' })
).toEqual(0);

expect(
	counter(3, { type: 'INCREMENT' })
).toEqual(4);

expect(
	counter(undefined, { type: 'OTHER' })
).toEqual(0);

console.log('Tests passed!');

// Store expects a Reducer fn
const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

// Register a callback everytime an action has been dispatched
/*
 * The following is not called at least once
store.subscribe(() => {
  document.body.innerText = store.getState();
});
*/

// Call at least once to render initial state
render();

// Event listener
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});