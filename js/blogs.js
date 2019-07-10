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
            <div id="Title">
                <h4 class="text-uppercase font-weight-bold">${blog.title}</h4>
            </div>
        <div id="description">
            <p>${blog.description}</p>
        </div>
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
    let blogListHtml = '';
    if (!blogList) {
        document.querySelector('.omg').remove();
        return '';
    }
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
    clearance('#title', '#category', '#author', '#description');
}
Validatefor3elements = (element1, element2, element3, elementx, elementy) => {
    ele1 = document.querySelector(`${element1}`).value;
    ele2 = document.querySelector(`${element2}`).value;
    ele3 = document.querySelector(`${element3}`).value;
    elex = document.querySelector(`${elementx}`);
    eley = document.querySelector(`${elementy}`);
    if (ele1 == '' || ele2 == '' || ele3 == '') {
        let div = document.createElement('div');
        div.className = 'yoyo';
        div.appendChild(document.createTextNode('Plz enter all the fields'));
        elex.insertBefore(div, eley);
        setTimeout(() => document.querySelector('.yoyo').remove(), 3000);
        return false;
    }
    return true;


}

clearance = (element1, element2, element3, element4) => {
    document.querySelector(`${element1}`).value = '';
    document.querySelector(`${element2}`).value = '';
    document.querySelector(`${element3}`).value = '';
    document.querySelector(`${element4}`).value = '';
}