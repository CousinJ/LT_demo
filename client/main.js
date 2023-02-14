const submitButton =  document.querySelector('#sub');
const form = document.querySelector('#form');


const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your submission!')
    form.reset();

}











submitButton.addEventListener('click', handleSubmit)