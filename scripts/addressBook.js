function getAddress(){
    fetch('http://localhost:8080/api/addresses')
    .then(response => response.json())
    .then(data => {
    const table = `
    <table class="table table-striped table-bordered">
    <thead class="thead-dark">
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(user => `
          <tr id="${user.id}">
            <td>${user.name}</td>
            <td>${user.address}</td>
            <td>${user.phone}</td>
            <td>
              <button class= "btn btn-lg btn-outline" onclick="updateRecord(${user.id})">Update</button>
            </td>
            <td>
            <button class= "btn btn-lg btn-outline" onclick="deleteRecord(${user.id})">Delete</button>
          </td>
          </tr>
        `).join('')}
      </tbody></table>
    `;
    document.getElementById('my-table-container').innerHTML = table;
    })
    .catch(error => console.error(error));
}

async function createAddress(){

    const form = document.getElementById('my-form');
    const formData = new FormData(form);
    const  data =  Object.fromEntries(formData);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
    const createResult = await fetch('http://localhost:8080/api/addresses', options);
        getAddress();
    console.log(JSON.stringify(createResult));
}

function updateRecord(id){

}

function deleteRecord(id){


        fetch(`http://localhost:8080/api/addresses?id=${id}`, { method: 'DELETE' })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(`Record with ID ${id} deleted successfully`);
      // remove the row from the HTML table
      getAddress();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

getAddress();



