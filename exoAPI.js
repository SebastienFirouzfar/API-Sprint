//Exercice fetch 
document.querySelector("#buttonUser").addEventListener("click", function () {
    fetch("http://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data) => {
            data.forEach(element => {
                document.getElementById("buttonUser").insertAdjacentHTML("beforebegin",'<br><br><p>"'+element.name+'"</p>')
                console.log(data)
            });
        })
})