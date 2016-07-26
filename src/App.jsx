const contentNode = document.getElementById('contents');

const continents = ['Africa','America','Asia','Australia','Europe'];
const message = continents.map(c => `Hello ${c}!`).join(' ');

const component = <p>{message}</p>;           // A simple component, written in JSX

ReactDOM.render(component, contentNode);      // Render the component inside the content Node
