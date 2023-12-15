var books = document.querySelectorAll('#book-list li .name')

Array.from(books).forEach(function(books){
  books.textContent += '(book title)';
});

const booklist = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Books and more books...</h2>';
booklist.innerHTML += '<p>This is how you add HTML</p>';