//Exercice fetch 
let paragraphe = document.createElement("p")
//let buttonAPi = document.getElementById("buttonUser")
document.querySelector("#buttonUser").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data) => {
            data.forEach(element => {
               // buttonAPi.insertAdjacentHTML("beforebegin",'<br><br><p>"'+element.name+'"</p>' )
               paragraphe.append('\n'+ element.name +"  "+ element.username + "   "+ element.email+"\u0020")
               paragraphe.setAttribute('style', 'margin : 10px ; padding : 10px;')
               console.log(data)
            });
        })
        //afficher les données tel que le nom, prenom et email dans l'html
        //fin 
        document.body.appendChild(paragraphe)
})