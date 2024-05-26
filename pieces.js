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
        imageElement.src = pieces[i].image;
        nomElement.innerHTML = pieces[i].nom;
        prixElement.innerHTML = pieces[i].prix;
        categoryElement.innerHTML = pieces[i].categorie
        pieceElement.appendChild(imageElement)
        pieceElement.appendChild(nomElement)
        pieceElement.appendChild(prixElement)
        pieceElement.appendChild(categoryElement)
        section.appendChild(pieceElement)
        // document.body.appendChild(pieceElement);
    }
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
const prixMax = document.querySelector('#prix-max')
prixMax.addEventListener('input' , function(){
    const piecesFilter = pieces.filter(function(piece){
       return piece.prix <= piecesFilter.value;
    })
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFilter);
});


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