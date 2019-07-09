let authors = localStorage.getItem('blogs') ? JSON.parse(localStorage.getItem('blogs')) : [];

getauthors = () => {
    return authors
}

generateauthor = (author) => {
    let html = '';
    if (author) {

        html = `
        <ul id="authorul">
            <li id="${author.id}">${author.author}</li>
            <hr>
        </ul>
        `;
    }
    return html
}

generateauthors = (element) => {
    const authorList = getauthors();
    let authorListHtml = ''
    if (!authorList)
        return ''
    authorList.forEach(author => {
        authorListHtml += generateauthor(author);
    });
    document.getElementById(`${element}`).innerHTML = authorListHtml;
}

addauthor = (author, element) => {
    var authors = getauthors();
    authors = [...authors, author];
    localStorage.setItem('blogs', JSON.stringify(authors));
    generateauthors(element);
}