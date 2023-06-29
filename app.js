const form = document.querySelector('form'); // replace 'form' with your form's ID or class
form.addEventListener('submit', function(event) {
event.preventDefault(); // prevent the form from submitting and refreshing the page
const thankYouMessage = document.createElement('p');
thankYouMessage.textContent = 'THANK YOU FOR SUBMITTING THE FORM!, HAVE A NICE DAY!';
form.parentNode.insertBefore(thankYouMessage, form.nextSibling);
form.reset(); // reset the form to its initial state
});