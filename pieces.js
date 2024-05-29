import { ajoutListenersAvis } from "./avis.js";

const pieces = await fetch('pieces-autos.json').then(pieces => pieces.json());

// const pieces = await response.json()

// document.querySelector('.fiches').innerHTML = "";
 
function genererPieces(pieces) {
    for(let i = 0; i < pieces.length; i++){
        const section = document.querySelector('.fiches')
        const pieceElement = document.createElement("article");
        const imageElement = document.createElement("img");
        const nomElement = document.createElement('p');
        const prixElement = document.createElement('p');
        const categoryElement = document.createElement('p');
        const descriptionElement = document.createElement('p');
        const stockElement = document.createElement("p");
        const avisBouton = document.createElement("button");
        imageElement.src = pieces[i].image;
        nomElement.innerHTML = pieces[i].nom;
        prixElement.innerHTML = `${pieces[i].prix} €`;
        categoryElement.innerHTML = pieces[i].categorie;
        descriptionElement.innerHTML = pieces[i].description;
        stockElement.innerText = pieces.disponibilite ? "En stock" : "Rupture de stock";
        avisBouton.dataset.id = pieces.id;
        avisBouton.textContent = "Afficher les avis";
        pieceElement.appendChild(imageElement)
        pieceElement.appendChild(nomElement)
        pieceElement.appendChild(prixElement)
        pieceElement.appendChild(categoryElement)
        pieceElement.appendChild(descriptionElement)
        pieceElement.appendChild(stockElement)
        pieceElement.appendChild(avisBouton)
        section.appendChild(pieceElement)
        // document.body.appendChild(pieceElement);
    }
    ajoutListenersAvis()
}

genererPieces(pieces);

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
   const piecesOrdonnees = Array.from(pieces)
   piecesOrdonnees.sort(function (a, b) {
       return b.prix - a.prix;
   });

   document.querySelector(".fiches").innerHTML = "";
   genererPieces(piecesOrdonnees);
 });
 const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.disponibilite;
   });
   // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});

const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});
const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].prix > 35){
        noms.splice(i,1);
    }
}
// console.log(noms)
//Création de l'en-tête

const pElement = document.createElement('p')
pElement.innerText = "Pièces abordables";
//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(pElement)
    .appendChild(abordablesElements);

//Code Exercice 
const nomsDisponibles = pieces.map(piece => piece.nom)
const prixDisponibles = pieces.map(piece => piece.prix)

for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].disponibilite === false){
        nomsDisponibles.splice(i,1);
        prixDisponibles.splice(i,1);
    }
}

const disponiblesElement = document.createElement('ul');

for(let i=0 ; i < nomsDisponibles.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
    disponiblesElement.appendChild(nomElement);
}

const pElementDisponible = document.createElement('p')
pElementDisponible.innerText = "Pièces disponibles:";
document.querySelector('.disponibles').appendChild(pElementDisponible).appendChild(disponiblesElement);


const prixMax = document.querySelector('#prix-max')
prixMax.addEventListener('input', function(){
    const piecesFiltrees = pieces.filter(function(piece){
       return piece.prix <= prixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
})

// const inputPrixMax = document.querySelector('#prix-max')
// inputPrixMax.addEventListener('input', function(){
//     const piecesFiltrees = pieces.filter(function(piece){
//         return piece.prix <= inputPrixMax.value;
//     });
//     document.querySelector(".fiches").innerHTML = "";
//     genererPieces(piecesFiltrees);  
// })


// for (let i = 0; i < pieces.length; i++) {
//     const sectionFiches = document.querySelector('.fiches');
//     const pieceElement = document.createElement('article');
//     const imageElement = document.createElement('img');
//     const nomElement = document.createElement('h2');
//     const prixElement = document.createElement('p');
//     const categorieElement = document.createElement('p');
//     const descriptionElement = document.createElement('p');
//     const disponibiliteElement = document.createElement('p');
    
//     imageElement.src = pieces[i].image;
//     nomElement.innerText = pieces[i].nom;
//     prixElement.innerText = `Prix : ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`;
//     categorieElement.innerText = pieces[i].categorie ?? ('Aucune categorie');
//     descriptionElement.innerText = pieces[i].description ?? ('Pas de description pour le moment.');
//     disponibiliteElement.innerText = pieces[i].disponibilite ? "En stock" : "Rupture de stock";

//     sectionFiches.appendChild(pieceElement);
//     pieceElement.appendChild(imageElement);
//     pieceElement.appendChild(nomElement);
//     pieceElement.appendChild(prixElement);
//     pieceElement.appendChild(categorieElement);
//     pieceElement.appendChild(descriptionElement);
//     pieceElement.appendChild(disponibiliteElement);
// }

// const btnTrier = document.querySelector('.btn-trier');
// btnTrier.addEventListener('click', function () {
//     const orderPieces = Array.from(pieces)
//     orderPieces.sort(function (a,b) {
//         return a.prix - b.prix
//     });
//     console.log(orderPieces)
// });

// const btnFilter = document.querySelector('.btn-filtrer');
// btnFilter.addEventListener('click', function () {
//     const filterPieces = pieces.filter(function (piece) {
//             return piece.prix <= 35;
//         });
//     console.log(filterPieces);
// });


// const article = pieces[0]


// const titleElement = document.createElement('h2')
// titleElement.innerText = article.nom;
// const prixElement = document.createElement('p')
// prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
// const categorieElement = document.createElement('p')
// categorieElement.innerText = article.categorie ?? ('Aucune categorie');
// const descriptionElement = document.createElement('p')
// descriptionElement.innerText = article.description ?? ('Pas de description pour le moment.');
// const disponibilityElement = document.createElement('p')
// disponibilityElement.innerText = `Disponiblité: ${article.disponibilite ? "En stock" : "Rupture de stock"}`;


// sectionFiches.appendChild(imageElement);
// sectionFiches.appendChild(titleElement);
// sectionFiches.appendChild(prixElement);
// sectionFiches.appendChild(categorieElement);
// sectionFiches.appendChild(descriptionElement);
// sectionFiches.appendChild(disponibilityElement);