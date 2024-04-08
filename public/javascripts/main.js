const promise = fetch("http://localhost:3000/newTitle")
.then(response => response.json())
.then(json => console.log(json.get));