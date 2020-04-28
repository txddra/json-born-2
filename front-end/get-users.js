const getUsers = (id) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('loadend', (event) => {
    console.log(event.target.response);
  })

  xhr.open('GET', `http://localhost:3000/users/${id}`);
  
  xhr.send();
}
/*taking in requests, making a request for data and changing file accordingly
        