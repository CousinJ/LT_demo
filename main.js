const submitButton =  document.querySelector('#sub');


const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Thank you for your submission!')
}











submitButton.addEventListener('click', handleSubmit)