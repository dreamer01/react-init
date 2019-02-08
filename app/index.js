const React = require("react");
const ReactDOM = require("react-dom");

require("./index.css");

class App extends React.Component {
  render() {
    return <div>Hi</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
