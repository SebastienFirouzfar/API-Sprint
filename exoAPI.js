//Exercice fetch 
let paragraphe = document.createElement("p")
document.querySelector("#buttonUser").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data) => {
            data.forEach(element => {
              // buttonAPi.insertAdjacentHTML("beforebegin",'<br><br><p>"'+element.name+'"</p>' )
               paragraphe.insertAdjacentHTML("beforebegin",' <p>"'+element.name +'"</p> ' )
               paragraphe.insertAdjacentHTML("beforebegin",' <p>"'+element.username +'"</p> ' )
               paragraphe.insertAdjacentHTML("beforebegin",' <p>"'+element.email +'"</p> ' )
               paragraphe.insertAdjacentHTML("beforebegin",'<br> <br>' )
               //paragraphe.append(element.name) 
               //paragraphe.append(element.username )
               //paragraphe.append(element.email )
               paragraphe.setAttribute('style', 'margin : 10px ; padding : 10px;')
               console.log(data)
            });
        })
        //afficher les données tel que le nom, prenom et email dans l'html
        //fin exercice
        document.body.appendChild(paragraphe)
})