async function fetchPosts() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
function displayPosts(posts){

    const postList= document.getElementById('postList');
    
    posts.forEach(post => {
        const listItem= document.createElement("li");
        listItem.textContent=post.title;
        postList.appendChild(listItem);
    });

}
(async ()=>{
    try {
        const res= await fetchPosts();
        displayPosts(res);
    } catch (error) {
        console.error(`An Error Occured ${error}`)
    }
})();
