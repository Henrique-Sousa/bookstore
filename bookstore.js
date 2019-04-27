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

let myLibrary = [];

function addBookToLibrary(){
	let title = $("#title").val();
	let author = $("#author").val();
	let pages = $("#pages").val();
	let read = $("#read").attr("checked")==="checked";

	myLibrary.push(new Book(title, author, pages, read));

	$('#books-list').empty();
	render();
}
function render(){

	for(let i in myLibrary){
		bookHtml =
			`<tr data-id=${i}>` +
				"<td>" + myLibrary[i].title + "</td>" +
				"<td>" + myLibrary[i].author + "</td>" +
				"<td>" + myLibrary[i].pages + "</td>" +
				"<td>" + (myLibrary[i].read ? "yes" : "no") + "</td>" +
				`<td><button class='btn btn-danger delete-btn'>delete</button></td>`
			"</tr>";
		$('#books-list').append(bookHtml);
	}
	$(".delete-btn").click(removeBookfromLibrary);
}
function removeBookfromLibrary(e){
	let el = $(e.target).parent().parent();
	let id = el.attr("data-id");
	delete myLibrary[id];
	el.remove();

}
function toggleChecked(e){
	let el = $(e.target);
	if (el.attr("checked") === "checked"){
		el.removeAttr("checked");
	} else {
		el.attr("checked", true);
	}
}

$('document').ready(function(){

	$("#add-btn").click(addBookToLibrary);
	$("#read").click(toggleChecked);

	myLibrary.push(new Book("The Hobbit", "J. R. R. Tolkien", 295, false));
	myLibrary.push(new Book("Harry Potter", "J. K. Rowling", 300, false));
	myLibrary.push(new Book("Grande Sertão Veredas", "Guimaraes Rosa", 1000, false));
	myLibrary.push(new Book("Memórias Póstumas de Brás Cubas", "Machado de Assis", 500, true));

	render();

});
