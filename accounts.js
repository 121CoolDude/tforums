let currentUser = null;
let posts = [];

function signup() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  currentUser = username;

  // Show post creation form
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('postForm').style.display = 'block';
}

function createPost() {
  const postContent = document.getElementById('postContent').value;

  // Add post to array
  posts.push({ author: currentUser, content: postContent });

  // Clear post content
  document.getElementById('postContent').value = '';

  // Reload posts
  displayPosts();
}

function displayPosts() {
  const postsDiv = document.getElementById('posts');
  postsDiv.innerHTML = '';

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `<strong>${post.author}</strong>: ${post.content}`;
    postsDiv.appendChild(postElement);
  });
}
