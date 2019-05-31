// // Use JavaScript to obtain a reference to the first section with the class of 
// // article_header and change its text with the textContent property to 
// // "Welcome to the {insert your name here} blog"
const sectionE1 = document.querySelector(".article__header").textContent = "Welcome to Matthew's blog";

// // Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
 const headerList = document.querySelectorAll(".article__header");
//  allList[1].classList.remove("article__header");
 headerList[1].classList.add("important")
//  console.log(allList[1].classList);
// // Obtain a reference the element with a class of dashed and remove it.
const border = document.querySelector(".dashed").style.border="none";


// // Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const footer = document.querySelector(".article__footer"); 
footer.classList.add("goldenrod");
