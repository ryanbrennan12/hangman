import React from 'react';
import ReactDOM from 'react-dom';
// require ('./css/style.css');


class App extends React.Component{

  render() {
    return (
      <div>
        Heyyyyyyy
      </div>
    )
  }
}

// export default App;
ReactDOM.render(<App />, document.getElementById('app'));