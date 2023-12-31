// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
const firstButton = document.body.children[2].children[4];
// console.log(firstButton);
const secondButton = document.getElementById("button2");
// console.log(secondButton);

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

// first button click event listner
function paragraphRemover() {
  console.dir(firstButton);
}
firstButton.addEventListener("click", paragraphRemover);

// second button click event listner
function backgroundAdder(event) {
  console.dir(event.target);
}
secondButton.addEventListener("click", backgroundAdder);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
const removeParagraph = document.body.children[2].children[3];
// const firstParagraph = document.body.children[2].children[1];
// const firstParagraph = removeParagraph.previousElementSibling.previousElementSibling;
const firstParagraph = removeParagraph.parentElement.firstElementChild.nextElementSibling;
console.log(firstParagraph);
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
function paragraphRemover() {
//   removeParagraph.textContent = "";
removeParagraph.remove();
}
firstButton.addEventListener("click", paragraphRemover);

function backgroundAdder() {
  firstParagraph.style.backgroundColor = "rgb(70, 70, 250)";
}
secondButton.addEventListener("click", backgroundAdder);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
function classAdder() {
//   firstParagraph.className = "blueBackground";
firstParagraph.classList.add("bludBackground");
}
secondButton.addEventListener("click", classAdder);
