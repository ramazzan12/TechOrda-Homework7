const URL_Post = 'https://jsonplaceholder.typicode.com/posts';

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhrPost = new XMLHttpRequest();
xhrPost.open('GET', URL_Post);
xhrPost.send();

xhrPost.responseType = 'json';

xhrPost.onload = () => {
    const posts = xhrPost.response;
    for (const post of posts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h1').textContent += post.id;
        postEl.querySelector('h2').textContent += post.title;
        postEl.querySelector('p').textContent += post.body;
        postEl.querySelector('.post-item').id = post.id;
        listElement.appendChild(postEl);
    }
};