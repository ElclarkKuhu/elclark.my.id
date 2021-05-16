const api = new GhostContentAPI({
    url: 'https://elclark.my.id/journal',
    key: 'f42b8a1f8c3bfb30242ff74002',
    version: "v3"
  });

api.posts
    .browse({limit: 1, include: 'tags,authors'})
    .then((posts) => {
        posts.forEach((post) => {
            document.getElementById('blog-ttl').innerHTML = post.title;
            document.getElementById('blog-desc').innerHTML = post.meta_description;
            document.getElementById('blog-link').href=post.url; 
        });
    })
    .catch((err) => {
        console.error(err);
    });