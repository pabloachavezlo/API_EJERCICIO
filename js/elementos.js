async function actualizarAPI(url){
    let datos = await fetch(url); // la función api_url
    let dato = await datos.json(); 
    cargar_contenido(dato);
}
actualizarAPI(url);


function cargar_contenido(data){
    let dom = document.querySelector(".contenido");
    data.forEach(post => {
  
      let item = document.createElement("div");
      item.classList.add("content")  
      item.innerHTML = 
      `
      <h1>Título tweets: </h1>
      <h3>${post.title}</h3>
      <h1>Contenido: </h1>
      <p>${post.body}</p>
      `;
    
    dom.appendChild(item);
})};
