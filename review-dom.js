// Iteración#1

window.onload = () => {
    printArr(countries);
    removeElement();
    printArrClass(cars);
    printTitleImage(countries2);
    btnRemoveLast();
    removeImage1x1(countries2)
}

// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

printArr = (arr) =>{
    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    for(let i=0; i<arr.length; i++){
        let li = document.createElement("li");
        let arrText = document.createTextNode(arr[i]);
        li.appendChild(arrText);
        ul.appendChild(li);
    }
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

removeElement = () =>{
    let elementToRemmove = document.querySelector("p.fn-remove-me");
    elementToRemmove.remove();
}
// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

printArrClass = (arr) =>{
    const parentNode = document.querySelector('div[data-function="printHere"]')
    let ul = document.createElement("ul");
    parentNode.appendChild(ul);
    for(let i=0; i<arr.length; i++){
        let li = document.createElement("li");
        let arrText = document.createTextNode(arr[i]);
        li.appendChild(arrText);
        ul.appendChild(li);
    }
}
// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countries2 = [  
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

printTitleImage = (arr) =>{
    let parentNode = document.querySelector("div#exercise-1-4");
    for(let i=0; i<arr.length; i++){ 
        let div = document.createElement("div")
        div.innerHTML = `<h4>${arr[i].title} ${i+1}</h4><img src="${arr[i].imgUrl}"/>`;
        parentNode.appendChild(div);  
    }
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

btnRemoveLast = () =>{
    let parentNode = document.querySelector("div#exercise-1-4");
    let body = document.querySelector("body#cuerpo")
    let btn = document.createElement("button");
    btn.innerText = "Borra la ultima imagen";
    body.appendChild(btn);
    btn.addEventListener("click", function(){
        parentNode.removeChild(parentNode.lastChild );
    });

}

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

removeImage1x1 = (arr) =>{
    let parentNode = document.querySelector("div#exercise-1-4");
    for(let i=0; i<arr.length; i++){ 
        let div = document.createElement("div")
        div.innerHTML = `<h4>${arr[i].title} ${i+1}</h4><img src="${arr[i].imgUrl} "/><br>`;
        
        let btn = document.createElement("button");
        btn.innerText = "Borrame";

        div.appendChild(btn);
        
        parentNode.appendChild(div);
        btn.addEventListener("click", function(){
            div.remove();
        });  
    }
}