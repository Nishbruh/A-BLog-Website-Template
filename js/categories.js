// get data from local storage
getfromlocal = () => {
    let data = localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : [];
    return data;
}

// add data to local storage
addtolocal = (info) => {
    let data = getfromlocal();
    data.push(info);
    localStorage.setItem('categories', JSON.stringify(data));
}

generatedata = (info) => {
    data = document.createElement('li');
    data.id = `${info.id}`;
    data.className = 'd-flex justify-content-between';
    span = document.createElement('button');
    span.id = `${info.id}`;
    // span.className = ' cross badge badge-danger d-flex pl-2 pr-2 cursor-pointer';
    span.className = ' cross btn btn-danger d-flex justify-content-center align-items-center pr-2 pl-2 pt-0';
    span.appendChild(document.createTextNode('x'));
    data.appendChild(document.createTextNode(`${info.category}`));
    data.appendChild(span);
    document.querySelector('#catgul').appendChild(data);
}

notdisplaydata = (el) => {
    if (el.classList.contains('cross')) {
        el.parentElement.remove();
    }
}

delfromlocal = (id) => {
    let data = getfromlocal();
    data.forEach((info, index) => {
        if (id === info.id) {
            data.splice(index, 1);
        }
    });
    localStorage.setItem('categories', JSON.stringify(data));

}

displaydata = () => {
    let data = getfromlocal();
    if (data.length < 1) {
        displayempty();
    } else {
        data.forEach((info) => generatedata(info));
    }
}

displayempty = () => {
    let First = document.querySelector('#catgul');
    let empty = document.createElement('div');
    empty.id = 'empity';
    empty.appendChild(document.createTextNode('No items'));
    First.appendChild(empty);
    return;
}

displaywhenclicked = (e) => {
    if (e.target.classList.contains('cross')) {
        let data = getfromlocal();
        if (data.length < 1) {
            displayempty();
        }
    }
}

// Validation
Validatefor1elements = (element1, elementx) => {
    ele1 = document.querySelector(`${element1}`).value;
    elex = document.querySelector(`${elementx}`);
    if (ele1 == '') {
        let div = document.createElement('div');
        div.className = 'yoyo display-block';
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