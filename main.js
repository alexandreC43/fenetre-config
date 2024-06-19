// On récupère les élements HTML
const select1V = document.querySelector(".select1V");
const select2V = document.querySelector(".select2V");
const selectFixe = document.querySelector(".selectFixe");
const divButtonColor = document.getElementById("buttonColor");
const divButtonColorDeuxV = document.getElementById("buttonColorDeuxV");
const titreOuverture = document.getElementById("titreOuverture");
const titreModele = document.getElementById("titreModele");
const modeleFixe = document.getElementById("modeleFixe");
const modeles1V = document.getElementById("modeles1V");
const modeles2V = document.getElementById("modeles2V");
const modelesTechnal1V = document.getElementById("modelesTechnal1V");
const modelesTechnal2V = document.getElementById("modelesTechnal2V");
const paragrapheModele = document.getElementById("paragrapheModele");
const fixe = document.getElementById("fixe");
const FYM1V = document.querySelector(".FYM1V");
const FYM2V = document.querySelector(".FYM2V");
const FYA1V = document.querySelector(".FYA1V");
const FYA2V = document.querySelector(".FYA2V");
const cache1V = document.querySelector(".cache1V")
const cache2V = document.querySelector(".cache2V")
const RAL7016 = document.getElementById("RAL7016")
const RAL9016 = document.getElementById("RAL9016")
const Champ = document.getElementById("Champ")
const RAL7035 = document.getElementById("RAL7035")
const RAL9005 = document.getElementById("RAL9005")
const argent = document.getElementById("argent")
const titreFinition = document.getElementById("titreFinition")
const paragrapheFinition = document.getElementById("paragrapheFinition")
const imgProduit = document.getElementById("imgProduit");
const imgProduitFace = document.getElementById("imgProduitFace")
const imgProduitPoignee = document.getElementById("imgProduitPoignee")
const imgProduitArriere = document.getElementById("imgProduitArriere")
const flecheG = document.getElementById("flecheG")
const flecheD = document.getElementById("flecheD")
const sansPoignee = document.getElementById("sansPoignee")
const poigneesPrefal = document.getElementById("poigneesPrefal")
const poigneesTechnal = document.getElementById("poigneesTechnal")
const poigneePrefal1 = document.getElementById("poigneePrefal1")
const poigneePrefal2 = document.getElementById("poigneePrefal2")
const poigneeTechnal1 = document.getElementById("poigneeTechnal1")
const poigneeTechnal2 = document.getElementById("poigneeTechnal2")
const titrePoignee = document.getElementById("titrePoignee")
const sousTitrePoignee = document.getElementById("sousTitrePoignee")
const paragraphePoignee = document.getElementById("paragraphePoignee");
const save = document.getElementById("save")
const vueOptions = document.getElementById("vueOptions")
const vueRecap = document.getElementById("vueRecap")
const recapOptions = document.getElementById("recapOptions")
const back = document.getElementById("back")
const contentPDF = document.getElementById("contentPDF")
const paragrapheSelect = document.getElementById("paragrapheSelect")
const sousTitreOuverture = document.getElementById("sousTitreOuverture")


let vueActuelle = "VueCote"; // Initialisation de la vue caméra de départ



// Initialisation de l'application
afficherImage()
select1V.classList.add("active");
FYM1V.classList.add("active");
afficherElem ([modeles1V, poigneesTechnal])
masquerElem ([modeles2V,modeleFixe, poigneesPrefal, sansPoignee])
rendreActif (RAL7016)
rendreActif (poigneeTechnal1)
sessionStorage.setItem("cam","VueCote")
sessionStorage.setItem("modele","modele1VFYM")
sessionStorage.setItem("couleur","7016")
sessionStorage.setItem("poignee","poignee1")
console.log(imgProduit.src)
masquerElem([vueRecap])





//--------------
// LES FONCTIONS

function afficherImage() {
  // Récupérer les valeurs depuis sessionStorage
  const modele = sessionStorage.getItem("modele") || "modele1VFYM"; // Valeur par défaut si non présente
  const coloris = sessionStorage.getItem("couleur") || "7016"; // Valeur par défaut si non présente
  const poignee = sessionStorage.getItem("poignee") || "poignee1"; // Valeur par défaut si non présente
  const camera = sessionStorage.getItem("cam") || "VueCote"; // Valeur par défaut si non présente
  

  // Construire le chemin de l'image en fonction des choix
  const cheminImage = `Images/modeles/${modele}/${coloris}/${poignee+camera}.png`;
  console.log(cheminImage)

  // Mettre à jour l'attribut src de l'image avec le chemin construit
  imgProduit.src = cheminImage;
  imgProduit.alt = `Fenêtre - Modèle: ${modele}, Coloris: ${coloris}, Poignée: ${poignee}, Cam: ${camera}`;
  console.log(cheminImage)
}


function rendreActif (elem) {
  elem.classList.add("active")
}

function rendreInactif (elem) {
  elem.classList.remove("active")
}

function afficherElem (elem) {
  for (let elements of elem) {
  elements.style.display = "flex"
} }

function masquerElem (elem) {
  for (let elements of elem) {
  elements.style.display = "none"
} }

function modifierTexte (titre, contenu) {
  titre.innerHTML = contenu ;
}

function changerVueDroite() {
  if (vueActuelle === "VueCote") {
    vueActuelle = "VueFace";
  } else if (vueActuelle === "VueFace") {
    vueActuelle = "VuePoignee";
  } else if (vueActuelle === "VuePoignee") {
    vueActuelle = "VueArriere";
  } else {
    vueActuelle = "VueCote"; // Si l'état est "VueArriere", revenir à "VueCote"
  }
  sessionStorage.setItem("cam", vueActuelle); // 
  afficherImage(); // 
}

function changerVueGauche () {
  if (vueActuelle === "VueArriere") {
    vueActuelle = "VuePoignee";
  } else if (vueActuelle === "VuePoignee") {
    vueActuelle = "VueFace"
  } else if (vueActuelle === "VueFace") {
    vueActuelle = "VueCote"
  } else {
    vueActuelle = "VueArriere"
  }
  sessionStorage.setItem("cam", vueActuelle)
  afficherImage()
}




//--------------
// LES ECOUTEURS

flecheD.addEventListener("click", changerVueDroite)

flecheG.addEventListener("click", changerVueGauche)

selectFixe.addEventListener("click", function () {
  sessionStorage.setItem("modele", "modeleFixeTechnal");
  afficherImage("modeleFixeTechnal", "7016", "poignee1");
  rendreActif(selectFixe)
  rendreInactif(select2V)
  rendreInactif(select1V)

  rendreInactif(FYM1V)
  rendreInactif (FYM2V)
  rendreInactif (FYA1V)
  rendreInactif (FYA2V)
  rendreInactif (cache1V)
  rendreInactif (cache2V)
  afficherElem ([modeleFixe, sansPoignee])
  masquerElem ([modeles2V, modeles1V, poigneesPrefal, poigneesTechnal])
  modifierTexte (titreOuverture, "Fixe")
  modifierTexte (paragrapheSelect, "Favorise un clair de jour important.")
  modifierTexte (sousTitreOuverture, "Fenêtre à Chassis Fixe.")
  modifierTexte(paragrapheModele, "Fenêtre fixe, fine et élégante.")
  modifierTexte (titrePoignee, "Pas de poignée")
  modifierTexte(sousTitrePoignee, "")
  modifierTexte(paragraphePoignee, "")
  modifierTexte(titreModele, "Technal Soleal Fixe")
  afficherImage();
});

select1V.addEventListener("click", function () {
  sessionStorage.setItem("modele", "modele1VFYM");
  afficherImage("modele1VFYM", "7016", "poignee1");
  rendreActif(select1V)
  rendreActif (FYM1V)
  rendreInactif (FYM2V)
  rendreInactif (FYA1V)
  rendreInactif (FYA2V)
  rendreInactif(select2V)
  rendreInactif(selectFixe)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  afficherElem ([modeles1V, poigneesTechnal])
  masquerElem ([modeles2V,modeleFixe, sansPoignee, poigneesPrefal])
  modifierTexte (titreOuverture, "1 Vantail")
  modifierTexte (paragrapheSelect, "Ouverture à la française, et oscillo-battante possible.")
  modifierTexte (sousTitreOuverture, "Fenêtre à Frappe")
  modifierTexte (titreModele, "Technal Soleal FYM")
  afficherImage();
});

select2V.addEventListener("click", function () {
  sessionStorage.setItem("modele", "modele2VFYM");
  rendreActif(select2V)
  rendreInactif(select1V)
  rendreInactif(selectFixe)

  rendreActif(FYM2V)
  rendreInactif (FYM1V)
  rendreInactif (FYA1V)
  rendreInactif (FYA2V)
  rendreInactif(cache1V)
  rendreInactif (cache2V)
  afficherElem ([modeles2V, poigneesTechnal])
  masquerElem ([modeles1V, modeleFixe, sansPoignee, poigneesPrefal])
  modifierTexte (titreOuverture, "2 Vantaux")
  modifierTexte (paragrapheSelect, "Ouverture à la française, et oscillo-battante possible sur un ouvrant.")
  modifierTexte (sousTitreOuverture, "Fenêtre à Frappe")
  modifierTexte (titreModele, "Technal Soleal FYM")
  afficherImage();
  
});

FYM1V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele1VFYM");
  rendreActif(FYM1V)
  rendreInactif(FYM2V)
  rendreInactif(FYA1V)
  rendreInactif(FYA2V)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Technal Soleal FYM")
  modifierTexte (paragrapheModele, "Fenêtre de style contemporain, à ouvrant minimal <br> pour maximiser le clair de jour.</p>")
  modifierTexte (sousTitrePoignee, "Design sobre et élégant. Prise en main ergonomique. <br> Une version à clé pour plus de sécurité est disponible.")
  afficherImage();
  afficherElem([poigneesTechnal])
  masquerElem([poigneesPrefal])

});

FYA1V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele1VFYA");
  rendreActif(FYA1V)
  rendreInactif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA2V)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Technal Soleal FYA")
  modifierTexte (paragrapheModele, "Fenêtre de style traditionnel, à ouvrant apparent.")
  modifierTexte (sousTitrePoignee, "Design sobre et élégant. Prise en main ergonomique. <br> Une version à clé pour plus de sécurité est disponible.")
  afficherImage();
  afficherElem([poigneesTechnal])
  masquerElem([poigneesPrefal])

});

FYM2V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele2VFYM");
  rendreActif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA1V)
  rendreInactif(FYA2V)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Technal Soleal FYM")
  modifierTexte (paragrapheModele, "Fenêtre de style contemporain, à ouvrant minimal <br> pour maximiser le clair de jour.")
  modifierTexte (sousTitrePoignee, "Design sobre et élégant. Prise en main ergonomique. <br> Une version à clé pour plus de sécurité est disponible.")
  afficherImage();
  afficherElem([poigneesTechnal])
  masquerElem([poigneesPrefal])

});

FYA2V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele2VFYA");
  rendreActif(FYA2V)
  rendreInactif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA1V)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Technal Soleal FYA")
  modifierTexte (paragrapheModele, "Fenêtre de style traditionnel, à ouvrant apparent.")
  modifierTexte (sousTitrePoignee, "Design sobre et élégant. Prise en main ergonomique. <br> Une version à clé pour plus de sécurité est disponible.")
  afficherImage();
  afficherElem([poigneesTechnal])
  masquerElem([poigneesPrefal])

});




cache1V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele1Vcache");
  rendreActif(cache1V)
  rendreInactif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA1V)
  rendreInactif(FYA2V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Prefal Allure")
  modifierTexte (paragrapheModele, "Fenêtre de style contemporain, à ouvrant caché <br> pour maximiser le clair de jour.")
  afficherImage();
  afficherElem([poigneesPrefal])
  masquerElem([poigneesTechnal])

});

cache2V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele2Vcache");
  rendreActif(cache2V)
  rendreInactif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA1V)
  rendreInactif(FYA2V)
  rendreInactif(cache1V)
  modifierTexte (titreModele, "Prefal Allure")
  modifierTexte (paragrapheModele, "Fenêtre de style contemporain, à ouvrant caché <br> pour maximiser le clair de jour.")
  afficherImage();
  afficherElem([poigneesPrefal])
  masquerElem([poigneesTechnal])

});


RAL7016.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "7016");
  afficherImage();
  rendreActif(RAL7016)
  rendreInactif(RAL9016)
  rendreInactif(Champ)
  rendreInactif(RAL7035)
  rendreInactif(argent)
  rendreInactif(RAL9005)
  modifierTexte (titreFinition, "RAL 7016")
  modifierTexte (paragrapheFinition, "Anthracite Mat")
});

RAL9016.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "9016")
  rendreActif(RAL9016)
  rendreInactif(RAL7016)
  rendreInactif(Champ)
  rendreInactif(RAL7035)
  rendreInactif(argent)
  rendreInactif(RAL9005)
  modifierTexte (titreFinition, "RAL 9016")
  modifierTexte (paragrapheFinition, "Blanc Mat")
  afficherImage();
});

Champ.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "champagne")
  rendreActif(Champ)
  rendreInactif(RAL7016)
  rendreInactif(RAL9016)
  rendreInactif(RAL7035)
  rendreInactif(argent)
  rendreInactif(RAL9005)
  modifierTexte (titreFinition, "Champagne anodisé")
  modifierTexte (paragrapheFinition, "Finition résistante et durable")
  afficherImage();
});

RAL7035.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "7035")
  rendreActif(RAL7035)
  rendreInactif(RAL7016)
  rendreInactif(Champ)
  rendreInactif(argent)
  rendreInactif(RAL9016)
  rendreInactif(RAL9005)
  modifierTexte (titreFinition, "RAL 7035")
  modifierTexte (paragrapheFinition, "Gris Mat")
  afficherImage();
});

RAL9005.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "9005")
  rendreActif(RAL9005)
  rendreInactif(RAL7016)
  rendreInactif(Champ)
  rendreInactif(argent)
  rendreInactif(RAL9016)
  rendreInactif(RAL7035)
  modifierTexte (titreFinition, "RAL 9005")
  modifierTexte (paragrapheFinition, "Noir Mat")
  afficherImage();
});


argent.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "argent")
  rendreActif(argent)
  rendreInactif(RAL7016)
  rendreInactif(Champ)
  rendreInactif(RAL7035)
  rendreInactif(RAL9016)
  rendreInactif(RAL9005)
  modifierTexte (titreFinition, "Argent anodisé")
  modifierTexte (paragrapheFinition, "Finition résistante et durable")
  afficherImage();
});

poigneeTechnal1.addEventListener("click", function () {
sessionStorage.setItem("poignee", "poignee1")
rendreActif(poigneeTechnal1)
rendreInactif(poigneeTechnal2)
rendreInactif(poigneePrefal1)
rendreInactif(poigneePrefal2)
modifierTexte (titrePoignee, "Poignée Sélection Carrée")
modifierTexte (sousTitrePoignee, "Design sobre et élégant. Prise en main ergonomique. <br> Une version à clé pour plus de sécurité est disponible.") 
  afficherImage();
})

poigneeTechnal2.addEventListener("click", function () {
  sessionStorage.setItem("poignee", "poignee2")
  rendreActif(poigneeTechnal2)
  rendreInactif(poigneeTechnal1)
  rendreInactif(poigneePrefal1)
  rendreInactif(poigneePrefal2)
  modifierTexte (titrePoignee, "Poignée Sélection Ronde")
  modifierTexte (sousTitrePoignee, "Design sobre et élégant. Prise en main ergonomique. <br> Une version à clé pour plus de sécurité est disponible.") 
  afficherImage();
  })

poigneePrefal1.addEventListener("click", function () {
  sessionStorage.setItem("poignee", "poignee1")
  rendreActif(poigneePrefal1)
  rendreInactif(poigneeTechnal1)
  rendreInactif(poigneeTechnal2)
  rendreInactif(poigneePrefal2)
  modifierTexte (titrePoignee, "Poignée Toulon")
  modifierTexte(sousTitrePoignee, "Mécanisme anti-infraction, Design contemporain.<br> Coloris Noir, Blanc, 7016. Aspect Inox et à la teinte <br> en option.")
  afficherImage();
  })
  
  poigneePrefal2.addEventListener("click", function () {
    sessionStorage.setItem("poignee", "poignee2")
    rendreActif(poigneePrefal2)
    rendreInactif(poigneeTechnal1)
    rendreInactif(poigneeTechnal2)
    rendreInactif(poigneePrefal1)
    modifierTexte (titrePoignee, "Poignée Rasata")
    modifierTexte(sousTitrePoignee,"Design épuré dernière génération. Coloris Noir,<br> Blanc, 7016. Aspect Inox et à la teinte en option")
    afficherImage();
    })
    



  save.addEventListener("click", function() {
    // Masquer la section "vue-options" et afficher "vue-recap"
    vueOptions.style.display = "none"
    vueRecap.style.display = "block";


  back.addEventListener("click",function () {
    vueOptions.style.display = "block"
    vueRecap.style.display = "none";
  })
    
// Récupérer les valeurs depuis le sessionStorage
let modeleRecap = titreModele.textContent || "";
let couleurRecap = titreFinition.textContent || "";
let poigneeRecap = titrePoignee.textContent || "";
let marqueRecap = ""


const modele = sessionStorage.getItem("modele") || "";
const couleur = sessionStorage.getItem("couleur") || "";
const poignee = sessionStorage.getItem("poignee") || ""


// Afficher les données dans le récapitulatif
recapOptions.innerHTML = `
<img id ="imageRecap" src = Images/modeles/${modele}/${couleur}/${poignee}VueCote.png>

<table>
    <colgroup>
      <col style="width: 400px;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="width: 400px; text-align: left;">Modèle :</td>
      <td style=" text-align: right;"><b>${modeleRecap}</b></td>
    </tr>
    <tr>
      <td style="width: 400px; text-align: left;">Finition :</td>
      <td style=" text-align: right;"><b>${couleurRecap}</b></td>
    </tr>
    <tr>
      <td style="width: 400px; text-align: left;">Poignée :</td>
      <td style=" text-align: right;"><b>${poigneeRecap}</b></td>
    </tr>
  </table>


`;
});



////GENERER LE PDF///////

function telechargerPDF() {
  // Récupérer les valeurs depuis le sessionStorage à l'intérieur de cette fonction
  const modeleRecap = titreModele.textContent || "";
  const couleurRecap = titreFinition.textContent || "";
  const poigneeRecap = titrePoignee.textContent || "";
  const modele = sessionStorage.getItem("modele") || "";
  const couleur = sessionStorage.getItem("couleur") || "";
  const poignee = sessionStorage.getItem("poignee") || "";


  // Fonction pour obtenir la date actuelle
  function getCurrentDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  }

  // Mettre à jour le contenu de la div contentPDF avec les nouvelles valeurs
  contentPDF.innerHTML = `
  <div style="margin-top: -50px;">
    
  <img id="logoPDF" src="Images/LOGO 2.svg" style="width: 30% display: block; margin-left: 70px;">
      
    </div>
    <div style="margin-top: 20px; text-align: left; margin-left: 70px; width: 635px;">
      <p style="font-size: 15px; text-align: left; font-weight: 600;">Ma configuration Different</p>
      <p style="font-size: 12px; font-weight: 400; text-align: left; margin-top : 10px;">Merci d’avoir configuré vos fenêtres avec Different ! Pour obtenir un chiffrage précis de votre projet, ou pour être accompagné, contactez nos équipes dès maintenant.</p>
    </div>
    <div style="margin-top: 10px; text-align: left;">
      <p style="font-size: 12px; margin-left : -485px; font-weight: 400;">Le : <i>${getCurrentDate()}</i>, </p>
    </div>
    <table style="width: 620px; margin-left: 70px; margin-top: 20px; margin-bottom: 30px; border-collapse: collapse; border: 1px solid #D6D5CB;">
    <tr>
      <td style="border: 1px solid #303030; padding: 0;"><img src="Images/modeles/${modele}/${couleur}/${poignee}VueCote.png" style="width: 100%; display: block;"></td>
      <td style="border: 1px solid #303030; padding: 0;"><img src="Images/modeles/${modele}/${couleur}/${poignee}VueFace.png" style="width: 100%; display: block;"></td>
    </tr>
    <tr>
      <td style="border: 1px solid #303030; padding: 0;"><img src="Images/modeles/${modele}/${couleur}/${poignee}VuePoignee.png" style="width: 100%; display: block;"></td>
      <td style="border: 1px solid #303030; padding: 0;"><img src="Images/modeles/${modele}/${couleur}/${poignee}VueArriere.png" style="width: 100%; display: block;"></td>
    </tr>
  </table>
  
    <table>
    <table style="margin-left: 60px;">
      <colgroup>
      <col style="font-size:12px;">
      </colgroup>
    <tr>
      <td style="width: 330px;text-align:left;">Modèle :</td>
      <td style="width: 310px;font-weight:600;text-align:right;">${modeleRecap}</td>
    </tr>
    <tr>
      <td style="width: 330px;text-align:left;">Finition :</td>
      <td style="width: 310px;font-weight:600;text-align:right;">${couleurRecap}</td>
    </tr>
    <tr>
      <td style="width: 330px;text-align:left;">Poignée :</td>
      <td style="width: 310px;font-weight:600;text-align:right;">${poigneeRecap}</td>
    </tr>
  </table>

  <div style="display:flex; flex-direction: row; justify-content: space-between; margin-top: 30px; margin-left: 62px;width:635
  px;">
    <p>01 89 70 52 92</p>
    <p>contact@different-projet.com</p>
    <p>www.different-fenetre.com</p>
    </div>
    `;

  // Afficher la div pour que son contenu puisse être rendu dans le PDF
  contentPDF.style.display = 'block';

  // Options pour html2pdf
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5], // Marges réduites pour maximiser l'espace utilisable
    filename: 'ma_configuration_different.pdf',
    image: { type: 'jpeg', quality: 1.0 },
    html2canvas: { scale: 6 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Générer le PDF à partir du contenu de la div
  html2pdf()
    .set(opt)
    .from(contentPDF)
    .save()
    .then(() => {
  // Masquer la div après que le PDF ait été généré
      contentPDF.style.display = 'none';
    });
}

// Ajouter un écouteur d'événement au bouton de téléchargement
document.getElementById('buttonTelecharger').addEventListener('click', telechargerPDF);
