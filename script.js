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
});

body.addEventListener('click', () => {
    form.style.visibility = 'hidden';
    ClearForm();
});

form.addEventListener('click', (e) => e.stopPropagation());

// Hide and clear form when x is clicked
const closeForm = document.querySelector('form > button');
closeForm.addEventListener('click', () => {
    form.style.visibility = 'hidden';
    ClearForm();
});

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBook(name, author, pages, status) {
    myLibrary.push(new Book(name, author, pages, status));
}

templateCard.remove();
function displayBooks() {
    let index = 0;
    // Remove all displayed cards first
    const childs = document.querySelectorAll('main > div');
    childs.forEach((child) => main.removeChild(child));

    // Loop through list and display each book's info
    myLibrary.forEach((book) => {
        // eslint-disable-next-line prefer-const
        let card = templateCard.cloneNode(true);
        card.removeAttribute('class');
        // eslint-disable-next-line no-plusplus
        card.setAttribute('data', index++);
        console.log(card);
        main.appendChild(card);
        // eslint-disable-next-line prefer-const
        let name = document.querySelector('main > div:last-of-type .b-name');
        // eslint-disable-next-line prefer-const
        let author = document.querySelector(
            'main > div:last-of-type .b-author'
        );
        // eslint-disable-next-line prefer-const
        let pages = document.querySelector('main > div:last-of-type .b-pgs');
        // eslint-disable-next-line prefer-const
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
    });
    // Make trash button work
    const Alltrash = document.querySelectorAll('.trash');
    Alltrash.forEach((trash) =>
        trash.addEventListener('click', () => {
            trash.parentNode.remove();
        })
    );

    // Toggle status button
    const statImgs = document.querySelectorAll('.status > img');
    statImgs.forEach((statImg) =>
        statImg.addEventListener('click', () => {
            const currentImg = statImg.getAttribute('src');
            if (currentImg === 'svg-icons/uncheck.svg') {
                statImg.setAttribute('src', 'svg-icons/check.svg');
            } else {
                statImg.setAttribute('src', 'svg-icons/uncheck.svg');
            }
        })
    );
}

// Retrieve data from form, then hide and clear form inputs
submitForm.addEventListener('click', (e) => {
    if (form.checkValidity()) {
        e.preventDefault();
        form.style.visibility = 'hidden';
        // eslint-disable-next-line prefer-const
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
