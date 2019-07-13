// get data from local storage
getfromlocal = () => {
    let data = localStorage.getItem('bloggs') ? JSON.parse(localStorage.getItem('bloggs')) : [];
    return data;
}

// add data to local storage
addtolocal = (info) => {
    let data = getfromlocal();
    data.push(info);
    localStorage.setItem('bloggs', JSON.stringify(data));
}

generatedata = (info, element) => {
    data = document.createElement('div');
    data.id = `${info.id}`;
    data.innerHTML = ` <div class="blogbox" >
    <div id="headwrap">
        <div id="category">
            <h4>${info.category}</h4>
        </div>
        <div id="date">
            <em>${info.date}</em>
        </div>
    </div>
    <div id="Title">
        <h4 class="text-uppercase font-weight-bold">${info.title}</h4>
    </div>
    <div id="description">
        <p>${info.description}</p>
    </div>
    <div id="author">
        <p>posted by ${info.author}</p>
    </div>
    </div>`;
    document.querySelector(`${element}`).appendChild(data);

}

displaydata = (element) => {
    let data = getfromlocal();
    if (data.length < 1) {
        let First = document.querySelector('#data-blog-list');
        let empty = document.createElement('div');
        empty.id = 'empity';
        empty.appendChild(document.createTextNode('No items'));
        First.appendChild(empty);
        return;
    } else {
        data.forEach((info) => generatedata(info, element));
    }
}

// Validation
Validatefor3elements = (element1, element2, element3, elementx) => {
    ele1 = document.querySelector(`${element1}`).value;
    ele2 = document.querySelector(`${element2}`).value;
    ele3 = document.querySelector(`${element3}`).value;
    elex = document.querySelector(`${elementx}`);
    if (ele1 == '' || ele2 == '' || ele3 == '') {
        let div = document.createElement('div');
        div.className = 'yoyo';
        div.appendChild(document.createTextNode('Plz enter all the fields'));
        elex.appendChild(div);
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