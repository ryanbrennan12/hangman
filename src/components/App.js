import React from 'react';
import ReactDOM from 'react-dom';
// require ('./css/style.css');


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secretWord: 'apple',
      incorrectLetters: []
    }
  }


  render() {
    return (
      <div>
        {this.state.secretWord}
      </div>
    )
  }
}


// export default App;
ReactDOM.render(<App />, document.getElementById('app'));