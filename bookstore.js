function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function(){
		return this.title +
		" by " + this.author + ", " +
		this.pages + " pages," +
		(this.read ? " read already" : " not read yet");
}

//example
book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

let myLibrary = [];

function addBookToLibrary(){

}
function render(){
	
}
