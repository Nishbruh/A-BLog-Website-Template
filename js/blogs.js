let blogs = localStorage.getItem('blogs') ? JSON.parse(localStorage.getItem('blogs')) : [];

getBlogs = () => {
    return blogs
}

generateBlog = (blog) => {
    let html = '';
    if (blog) {

        html = `
        <div class="blogbox" id="${blog.id}">
            <div id="headwrap">
                <div id="category">
                    <h4>${blog.category}</h4>
                </div>
                <div id="date">
                    <em>${blog.date}</em>
                </div>
            </div>
        <hr id="one">
        <div id="description">
            <p>${blog.description}</p>
        </div>
        <hr id="two">
        <div id="author">
            <p>posted by ${blog.author}</p>
        </div>
        </div>
        `;
    }
    return html
}

generateBlogs = (element) => {
    const blogList = getBlogs();
    let blogListHtml = ''
    if (!blogList)
        return ''
    blogList.forEach(blog => {
        blogListHtml += generateBlog(blog);
    });
    document.getElementById(`${element}`).innerHTML = blogListHtml;
}

addBlog = (blog, element) => {
    var blogs = getBlogs();
    blogs = [...blogs, blog];
    localStorage.setItem('blogs', JSON.stringify(blogs));
    generateBlogs(element);
}