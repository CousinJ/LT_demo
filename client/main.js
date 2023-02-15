const submitButton =  document.querySelector('#sub');
const form = document.querySelector('#form');





const data = {name: 'Yasuo', age: '22'}


const errorCB = (error) => {console.log(error)}
const successCB = (response) => {console.log(response)}





const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your submission!')
    axios.post("http://localhost:3008/api/user/", data).then(successCB).catch(errorCB)
    
 

}



submitButton.addEventListener('click', handleSubmit)