let categories = localStorage.getItem('category') ? JSON.parse(localStorage.getItem('category')) : [];

getcategories = () => {
    return categories
}

generatecatg = (catg) => {
    let html = '';
    if (catg) {

        html = `
        <ul id="catgul">
            <li id="${catg.id}">${catg.category}</li>
            <hr>
        </ul>
        `;
    }
    return html
}

generatecategories = (element) => {
    const catgList = getcategories();
    let catgListHtml = ''
    if (!catgList)
        return ''
    catgList.forEach(catg => {
        catgListHtml += generatecatg(catg);
    });
    document.getElementById(`${element}`).innerHTML = catgListHtml;
}

addcatg = (catg, element) => {
    var categories = getcategories();
    categories = [...categories, catg];
    localStorage.setItem('category', JSON.stringify(categories));
    generatecategories(element);
}