let button = document.querySelector("button.get");
let fetchComments =async() => {
   try { 
    html = "";
    let res= await axios.get("https://jsonplaceholder.typicode.com/comments")
    res.data.forEach((elem)=>{
        html += `<div class="comment">
                    <h2 class="postId">postId: ${elem.postId}</h2>
                    <h2 class="id">ID: ${elem.id}</h2>
                    <h2 class="name">Name: ${elem.name}</h2>
                    <p class="email">Email: ${elem.email}</p>
                    <p class="body">Comment: ${elem.body}</p>
                </div>`;
    })
    document.querySelector("div.wrapper").innerHTML=html
   } catch (error) {
    document.querySelector("div.wrapper").innerHTML=error
   }
};
button.addEventListener("click", fetchComments);