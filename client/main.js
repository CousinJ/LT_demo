const submitButton =  document.querySelector('#sub');
const form = document.querySelector('#form');









const errorCB = (error) => {console.log(error)}
const successCB = (response) => {console.log(response)}





const handleSubmit = (event) => {
    event.preventDefault();
    
    const name = form.elements['name'].value;
    const age = form.elements['age'].value;



    axios.post("http://localhost:3008/api/user/", {name: name, age: age})

    alert('Thank you for your submission!')
    form.reset();
}



submitButton.addEventListener('click', handleSubmit)