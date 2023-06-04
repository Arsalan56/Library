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

// Make trash button work
const Alltrash = document.querySelectorAll('.trash');
Alltrash.forEach((trash) =>
    trash.addEventListener('click', () => {
        trash.parentNode.remove();
    })
);

const form = document.querySelector('form');
const openForm = document.querySelector('.btn > button');
const body = document.querySelector('body');

const radioY = document.querySelector('#status-y');
const radioN = document.querySelector('#status-n');
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

const submitForm = document.querySelector('form > div > button');

const myLibrary = [];

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBook(name, author, pages, status) {
    myLibrary.push(new Book(name, author, pages, status));
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
    }
});

function displayBooks() {
    const card = document.querySelector('.template');
    card.remove();
    console.log(card);

    // myLibrary.forEach((book) => {
    //     book[1];
    // });
}

displayBooks();
