const form = document.getElementById('my-form');


form.addEventListener('submit', (event)=> {
    event.preventDefault(); 

    const formData = new FormData(form);
    console.log(formData.get( 'name'));
    const  data =  Object.fromEntries(formData); 

    fetch('http://localhost:8080/api/addresses', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

});



