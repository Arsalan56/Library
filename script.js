// const myLibrary = [];

// function Book() {}

// function AddBook() {}

// function displayBooks() {}

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

const Alltrash = document.querySelectorAll('.trash');
Alltrash.forEach((trash) =>
    trash.addEventListener('click', () => {
        trash.parentNode.remove();
    })
);
