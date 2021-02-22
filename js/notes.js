// notes 
// not to use


t.addEventListener("DOMContentLoaded", () => {
  
	const formFocus = document.getElementById("comment-input").focus();
	const newCommentButton = document.getElementById("submit");
	const newComment = document.getElementById("comment-input");
	
	const allComments = document.getElementById("comments");
	const newCommentList = document.getElementById("list")
	const commentForm = document.getElementById("comment-form")
	
	const theCounter = document.getElementById("counter").innerText
  
	newCommentButton.addEventListener('click', function(e) {
	  e.preventDefault();
	  let newCommentValue = newComment.value;
	  
	  if (newValue === "") {
		commentForm.placeholder = "Enter something!";
	  } else {
		newCommentList.innerHTML += `<li class="comment">${newCommentValue}</li>`;
		newCommentDescription.value = "";
	  }
	});
  




// create a timer. 

// the counter. increment this by +1 per second

theCounter.increment()

let i = 1;

let interval = setInterval(increment, 1000);

function increment(){
    i = i % 360 + 1;
}