// Mark out the needed variables
let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let heartButton = document.getElementById("heart");
let timerButton = document.getElementById("pause");
let likes = document.getElementById("likes");
let submitButton = document.getElementById("submit");
let commentList = document.getElementById("list");
let newComment = document.getElementById("comment-input");

let timerNumber = parseInt(document.getElementById("counter").innerText);
let timer = document.getElementById("counter");
let seconds = timer.innerHTML;

// Load page
document.addEventListener("DOMContentLoaded", () => {

// timer
timerNumber = setInterval(function() {
	timer.innerHTML = seconds++
}, 1000);

// Add seconds to timer
plusButton.addEventListener("click", function() {
	timer.innerHTML = seconds++}, 1000);
	
// Subtract seconds from timer
minusButton.addEventListener("click", function() {
	timer.innerHTML = seconds--}, 1000);

// Like a second. still needs work
heartButton.addEventListener("click", function() {
	likes.innerHTML += '<li>' + "Number " + timer.innerText + " has" + " count_of " + "likes" + '</li>'
	});

// Pause/Resume Timer
timerButton.addEventListener("click", function() {
	if (timerButton.innerText == "pause") {
		timerButton.innerText = "resume";
		clearInterval(timerNumber);
		toggleDisabled([minusButton, plusButton, heartButton, submitButton])
	} else if (timerButton.innerText == "resume") { 
		timerNumber = setInterval(function() {
			timer.innerHTML = seconds++
		}, 1000);
		timerButton.innerText = "pause";
		toggleDisabled([minusButton, plusButton, heartButton, submitButton])
	};
	});

function toggleDisabled(array) {
	array.forEach ((e) => e.toggleAttribute("disabled"))
	};
	
// Submit comments

submitButton.addEventListener("click", function(e) {
	let comment = document.createElement('li')
	comment.textContent = newComment.value
	if (newComment.value == ""){
		newComment.placeholder = "Enter something..."
	} else {
		commentList.appendChild(comment)
		newComment.value = ''
	};
	e.preventDefault()
	});


	
});

	// let newComment = document.getElementById("comment-input").value;
	// if (newComment == ""){
	// 	document.getElementById("comment-input").placeholder = "Enter something..."
	// }
	// else {
	// 	commentList.innerHTML += '<li>' + newComment + '</li>';
	// 	document.getElementById("comment-input").value = ""; /* why can't i get this to just be newCommnent = "" */
	// }


