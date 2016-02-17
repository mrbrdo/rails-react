var React = require('react');
var ReactDOM = require('react-dom');

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="Sebastian" />, document.getElementById('example'));
