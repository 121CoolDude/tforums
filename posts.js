let posts = [];

function createPost() {
  const postContent = document.getElementById('postContent').value;

  // Add post to array
  posts.push({ author: 'Anonymous', content: postContent }); // For simplicity, assuming anonymous posts

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
