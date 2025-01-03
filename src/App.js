import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//forma antiga

class App extends Component{
  // constructor(props){
  //   super(props);
  //   // this.handlePClick = this.handlePClick.bind(this);
  //   this.state = {
  //     name: 'Denis Diogo dos Santos',
  //     counter: 0
  //   };
  // }

  state = {
        name: 'Denis Diogo dos Santos',
        counter: 0
  };

  handlePClick = () => {
    // const {name} = this.state;
    // console.log(`<p> clicado ${name}`);
    // para mundar o estado é necessário fazer um set state
    //toda vez que o stado mudar e renderizado toda a tela, ou seja
    // no caso render e chamdo novamente
    this.setState({
      name: 'Joyce Alecim Pereira'
    })
  }

  //para eliminar o bind podemos criar o metodo como herow function
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    const nextCounter = counter + 1;
    this.setState({
      counter: nextCounter
    })
  }

  render(){
    const {name, counter} = this.state;
      return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick}>{name} {counter}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          onClick={this.handleAClick}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
    
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <div>Denis Diogo dos Santos</div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Olá Mundo!</p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
//     </div>
//   );
// }

export default App;
