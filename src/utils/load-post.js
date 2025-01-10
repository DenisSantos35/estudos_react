export const loadPosts = async () => {
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
    });

    return postsAndPhotos;
    

}