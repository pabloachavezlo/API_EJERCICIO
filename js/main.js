let url = 'https://jsonplaceholder.typicode.com/posts';

function cargar_api() {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
    
      console.log("Título: " + post.title, "Comentario: " + post.body);
    });
  })
  .catch(error => {
    console.error('Error:', error);
});
}
cargar_api();


