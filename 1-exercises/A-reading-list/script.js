function readingList(books) {
  // Write your code here...
  const myDiv = document.querySelector("#content");
  const ul = document.createElement("ul");
  myDiv.appendChild(ul);
  books.forEach((book) => {
    const li = document.createElement("li");
    const authParagraph = document.createElement("p");
    authParagraph.innerText = `${book.title} by ${book.author}`;
    ul.appendChild(li);
    li.appendChild(authParagraph);

    const bookPic = document.createElement("img");
    bookPic.src = `${book.bookCoverImage}`;
    li.appendChild(bookPic);

    if (book.alreadyRead) li.style.backgroundColor = "green";
    else li.style.backgroundColor = "red";
  });
}


const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

readingList(books);