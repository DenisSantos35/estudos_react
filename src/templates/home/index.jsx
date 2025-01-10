//import logo from './logo.svg';
import './style.css';
import { Component } from 'react';
import {loadPosts} from '../../utils/load-post';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';


export class Home extends Component{
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
    ],
    allPosts: [],
    page: 0,
    postPerPage: 20,
    searchValue: ''
  }

  //timeoutUpdate = null;

//methodo realizado na montagem do componete
  async componentDidMount(){
       //this.handleTimeOut();
     await this.loadPosts();       
  }

  loadPosts = async () => {
    const {page, postPerPage} = this.state;
    const postsAndPhotos = await loadPosts();

    //seta o estado colocando o post em json dentro da lista posts
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos
    });   
  }

  loadMorePosts = () => {
    const {
      page,
      postPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPost);
    this.setState({posts, page: nextPage});
  }
//atualiza o componente a cada atualização realizada
  componentDidUpdate(){
    //this.handleTimeOut();
  }

//methodo de desmontagem 
  componentWillUnmount(){
    //clearTimeout(this.timeoutUpdate);
  }

  // handleTimeOut(){
  //   const {posts} = this.state;
  //   posts[0].title = 'O titulo mudou';
  //   this.timeoutUpdate = setTimeout(()=>{
  //   this.setState({
  //     posts
  //   })
  //   }, 5000) 
  // }

  handleChange = (e) =>{
    const {value} = e.target;
    console.log(value);
    this.setState({
      searchValue: value
    })

  }

  render(){
    const { posts, page, postPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    const filteredPosts = searchValue? allPosts.filter( post => {
      return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
    }) : posts;
    return(
      
      <section className='container'>
        <div className='search-container'>
          {searchValue && (
              <h1>Search value: {searchValue}</h1>
          )}
          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>
       {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts}/>
       )}
       {filteredPosts.length === 0 &&(
        <p>Não existem posts =( </p>
       )}
       <div className='button-container'>
        {!searchValue && (
          <Button 
          text={'Load More Post'}
          onClick={this.loadMorePosts}
          disabled={noMorePosts}
          />
        )}
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

