async function getPosts(){

    try {
        const resp= await fetch("https://jsonplaceholder.typicode.com/posts");
        const data= await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


async function getComments(postId){

    try {
        const resp= await fetch("https://jsonplaceholder.typicode.com/comments/"+postId);
        const data= await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getUser(userId){

    try {
        const resp= await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
        const data= await resp.json();
        return data.name;
    } catch (error) {
        console.log(error);
    }
}