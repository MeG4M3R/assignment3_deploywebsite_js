// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
  const contactPage = document.getElementById("contact-page");
  contactPage.innerHTML =
    "<h2>Thank you for your message!</h2>" +
    '<p id="home-message">Click the home below to return to the homepage.</p>';
  const homePage = document.getElementById("home-page");
  homePage.id = "show-home-page";
  contactPage.style.fontSize = "24px";
});
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
