/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
const form = document.querySelector('form');
const openForm = document.querySelector('.btn > button');
const body = document.querySelector('body');

const radioY = document.querySelector('#status-y');
const radioN = document.querySelector('#status-n');
const submitForm = document.querySelector('form > div > button');
const myLibrary = [];
const main = document.querySelector('main');
const templateCard = document.querySelector('.template');
const inputs = document.querySelectorAll(
    'form input[type=text], form input[type=number]'
);
const ClearForm = () => {
    inputs.forEach((input) => {
        // eslint-disable-next-line no-param-reassign
        input.value = '';
        radioY.checked = false;
        radioN.checked = false;
    });
};

openForm.addEventListener('click', (e) => {
    e.stopPropagation();
    form.style.visibility = 'visible';
    form.classList.add('active');
});

body.addEventListener('click', () => {
    form.style.visibility = 'hidden';
    form.classList.remove('active');
    ClearForm();
});

form.addEventListener('click', (e) => e.stopPropagation());

// Hide and clear form when x is clicked
const closeForm = document.querySelector('form > button');
closeForm.addEventListener('click', () => {
    form.style.visibility = 'hidden';
    form.classList.remove('active');
    ClearForm();
});

class Book {
    constructor(name, author, pages, status) {
        this._name = name;
        this._author = author;
        this._pages = pages;
        this._status = status;
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}

function addBook(name, author, pages, status) {
    myLibrary.push(new Book(name, author, pages, status));
}

templateCard.remove();
function displayBooks() {
    // Remove all displayed cards first
    const childs = document.querySelectorAll('main > div');
    childs.forEach((child) => main.removeChild(child));

    // Loop through list and display each book's info
    myLibrary.forEach((book) => {
        let card = templateCard.cloneNode(true);
        card.removeAttribute('class');
        main.appendChild(card);
        let name = document.querySelector('main > div:last-of-type .b-name');
        let author = document.querySelector(
            'main > div:last-of-type .b-author'
        );
        let pages = document.querySelector('main > div:last-of-type .b-pgs');
        let status = document.querySelector(
            'main > div:last-of-type .status > img'
        );

        name.textContent = book.name;
        author.textContent = book.author;
        pages.textContent = book.pages;
        // eslint-disable-next-line no-unused-expressions
        book.status === 'Read'
            ? status.setAttribute('src', 'svg-icons/check.svg')
            : status.setAttribute('src', 'svg-icons/uncheck.svg');
        function indexData() {
            card.setAttribute(
                'data',
                myLibrary.findIndex(
                    (arrBook) =>
                        arrBook.name === name.textContent &&
                        arrBook.author === author.textContent &&
                        arrBook.pages === pages.textContent
                )
            );
        }
        indexData();
    });

    // Make trash buttons work properly
    let allTrash = document.querySelectorAll('.trash');
    allTrash.forEach((trash) => {
        trash.addEventListener('click', () => {
            myLibrary.splice(trash.parentNode.getAttribute('data'), 1);
            trash.parentNode.classList.add('closing');
            trash.parentNode.remove();
            let cards = document.querySelectorAll('main > div');
            let index = 0;
            cards.forEach((crd) => {
                crd.setAttribute('data', index++);
            });
        });
    });

    // Toggle status button
    const statImgs = document.querySelectorAll('.status > img');
    statImgs.forEach((statImg) =>
        statImg.addEventListener('click', () => {
            let statIndex = statImg.parentNode.parentNode.getAttribute('data');
            const currentImg = statImg.getAttribute('src');
            if (currentImg === 'svg-icons/uncheck.svg') {
                statImg.setAttribute('src', 'svg-icons/check.svg');
                myLibrary[statIndex].status = 'Read';
            } else {
                statImg.setAttribute('src', 'svg-icons/uncheck.svg');
                myLibrary[statIndex].status = 'Unread';
            }
        })
    );
}

// Retrieve data from form, then hide and clear form inputs
submitForm.addEventListener('click', (e) => {
    if (form.checkValidity()) {
        e.preventDefault();
        form.style.visibility = 'hidden';
        form.classList.remove('active');
        let selectedRad = document.querySelector('input[type=radio]:checked');
        addBook(
            inputs[0].value,
            inputs[1].value,
            inputs[2].value,
            selectedRad.value
        );
        ClearForm();
        displayBooks();
    }
});
