//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
  state = {
    //counter: 0,
    posts: [
      // {
      //   id: 1,
      //   title: 'O titulo 1',
      //   body: 'O corpo 1'
      // },
      // {
      //   id: 2,
      //   title: 'O titulo 2',
      //   body: 'O corpo 2'
      // },
      // {
      //   id: 3,
      //   title: 'O titulo 3',
      //   body: 'O corpo 3'
      // }
    ]
  }

  //timeoutUpdate = null;

//methodo realizado na montagem do componete
  componentDidMount(){
       //this.handleTimeOut();
       this.loadPosts();       
  }

  loadPosts = async () => {
    //recupera dados da url
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    //resolve a promisse
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  
    

    //após resolvido a promisse transforma os dados em json
    const postJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postJson.map((post, index) => {
      return {...post, cover: photosJson[index].url}
    })



    //seta o estado colocando o post em json dentro da lista posts
    this.setState({posts: postsAndPhotos});
    
    
  }
//atualiza o componente a cada atualização realizada
  componentDidUpdate(){
    //this.handleTimeOut();
  }

//methodo de desmontagem 
  componentWillUnmount(){
    //clearTimeout(this.timeoutUpdate);
  }

  handleTimeOut(){
    const {posts} = this.state;
    posts[0].title = 'O titulo mudou';
    this.timeoutUpdate = setTimeout(()=>{
    this.setState({
      posts
    })
    }, 5000) 
  }

  render(){
    const { posts } = this.state;
    return(
      <section className='container'>
        <div className='posts'>
        {posts.map((element) => (
          <div className='post'>
            <img src={element.cover} alt={element.title}></img>
            <div key={element.id} className='post-content'>
            <h1>{element.title}</h1>
            <p>{element.body}</p>
          </div>
          </div>
          ))}
      </div>
      </section>
    )
  }
}

// //forma antiga

// class App extends Component{
//   // constructor(props){
//   //   super(props);
//   //   // this.handlePClick = this.handlePClick.bind(this);
//   //   this.state = {
//   //     name: 'Denis Diogo dos Santos',
//   //     counter: 0
//   //   };
//   // }

//   state = {
//         name: 'Denis Diogo dos Santos',
//         counter: 0
//   };

//   handlePClick = () => {
//     // const {name} = this.state;
//     // console.log(`<p> clicado ${name}`);
//     // para mundar o estado é necessário fazer um set state
//     //toda vez que o stado mudar e renderizado toda a tela, ou seja
//     // no caso render e chamdo novamente
//     this.setState({
//       name: 'Joyce Alecim Pereira'
//     })
//   }

//   //para eliminar o bind podemos criar o metodo como herow function
//   handleAClick = (event) => {
//     event.preventDefault();
//     const { counter } = this.state;
//     const nextCounter = counter + 1;
//     this.setState({
//       counter: nextCounter
//     })
//   }

//   render(){
//     const {name, counter} = this.state;
//       return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={this.handlePClick}>{name} {counter}</p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           onClick={this.handleAClick}
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
    
//   }

// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //       <div>Denis Diogo dos Santos</div>
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>Olá Mundo!</p>
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
      
// //     </div>
// //   );
// // }

export default App;
