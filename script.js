function changeBookTitle() {
    const titles = [
        "The Great Gatsby",
        "To Kill a Mockingbird",
        "1984",
        "Pride and Prejudice",
        "The Catcher in the Rye"
    ];

  
    const titleElement = document.getElementById("BookTitle");

   
    let currentTitle = titleElement.textContent;
    let currentIndex = titles.indexOf(currentTitle);

   
    let nextIndex = (currentIndex + 1) % titles.length;

  
    titleElement.textContent = titles[nextIndex];
}
