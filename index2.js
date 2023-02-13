const URL_Comment = 'https://jsonplaceholder.typicode.com/comments';

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const searchBtn = document.querySelector('.search-button');
const noComment = document.querySelector('.no-comment');

const sandar = '0123456789';

const xhrComment = new XMLHttpRequest();
xhrComment.open('GET', URL_Comment);
xhrComment.send();

xhrComment.responseType = 'json';

searchBtn.addEventListener('click', function() {
    listElement.textContent = "";
    const posts = xhrComment.response;
        for (const post of posts) {
            const postEl = document.importNode(postTemplate.content, true);
            if (document.querySelector('.input-field').value == post.postId) {
                postEl.querySelector('h1').textContent += post.postId;
                postEl.querySelector('h2').textContent += post.email;
                postEl.querySelector('p').textContent += post.body;
                postEl.querySelector('.post-item').id = post.id;
                listElement.appendChild(postEl);
                noComment.style.display = "none";
            }  else if ((parseInt(document.querySelector('.input-field').value) > 100) || (!sandar.includes(document.querySelector('.input-field').value))) {
                noComment.style.display = "block";
            }
        }    
})