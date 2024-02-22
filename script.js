const tbody = document.querySelector('.tbody');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = form.title.value;
    const author = form.author.value;
    const isbn = form.isbn.value;

    const tr = document.createElement('tr');
    const userTitle = document.createElement('td');
    const userAuthor = document.createElement('td');
    const userIsbn = document.createElement('td');
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";

    userTitle.textContent = title;
    userAuthor.textContent = author;
    userIsbn.textContent = isbn;

    tr.appendChild(userTitle);
    tr.appendChild(userAuthor);
    tr.appendChild(userIsbn);
    tr.appendChild(deleteBtn);

    tbody.appendChild(tr);
	form.reset();
    deleteBtn.addEventListener('click', () => {
        tr.remove();
    });
});
