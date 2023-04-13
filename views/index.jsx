import React from 'react';

class App extends React.Component {
  render() {
    return <>
			<link rel="stylesheet" href="/public/styles.css" />
      <div className="App">
        <header className="App-header">
          <img src="/public/logo.svg" className="App-logo" alt="logo" />
          <p>
            Edit <code>views/index.</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>;
  }
}

export default App;