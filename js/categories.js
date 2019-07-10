let categories = localStorage.getItem('category') ? JSON.parse(localStorage.getItem('category')) : [];

getcategories = () => {
    return categories
}

generatecatg = (catg) => {
    let html = '';
    if (catg) {

        html = `
            <li id="${catg.id}">${catg.category}</li>
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