let authors = localStorage.getItem('authors') ? JSON.parse(localStorage.getItem('authors')) : [];

getauthors = () => {
    return authors
}

generateauthor = (author) => {
    let html = '';
    if (author) {

        html = `
            <li id="${author.id}">${author.author}</li>
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
    localStorage.setItem('authors', JSON.stringify(authors));
    generateauthors(element);
}
Validatefor1elements = (element1, elementx, elementy, e) => {
    ele1 = document.querySelector(`${element1}`).value;
    elex = document.querySelector(`${elementx}`);
    eley = document.querySelector(`${elementy}`);
    if (ele1 == '') {
        e.preventDefault();
        let div = document.createElement('div');
        div.className = 'yoyo';
        div.appendChild(document.createTextNode('Plz enter all the fields'));
        elex.insertBefore(div, eley);
        console.log(div);
        setTimeout(() => document.querySelector('.yoyo').remove(), 3000);
        return false;
    }
    return true;


}