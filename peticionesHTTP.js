function sendHTTPRequest(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json());
}

 async function fetchPosts() {
    const responseData = await sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts");
    console.log(responseData);
    const listOfPosts = [...responseData];
    console.log("||||||||||  ", listOfPosts[0]);
} 

fetchPosts();

async function createPost(title, content) {
    const userId = Math.floor(Math.random() * 10);
    const postBody = {
        title: title,
        body: content,
        userId: userId
    };
    sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", postBody);
}

//DELETE
const postId = 11;
sendHTTPRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);