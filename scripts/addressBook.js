function getAddress(){
    fetch('http://localhost:8080/api/addresses')
    .then(response => response.json())
    .then(data => console.log("data from get"+JSON.stringify(data)))
    .catch(error => console.error(error));
}

async function createAddress(){
    const form = document.getElementById('my-form');
    const formData = new FormData(form);
    const  data =  Object.fromEntries(formData);
    const createResult = await fetch('http://localhost:8080/api/addresses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    console.log(json.stringify(createResult));
}

getAddress();



