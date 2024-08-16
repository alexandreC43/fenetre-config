const salon = document.getElementById('salon');
const chambre = document.getElementById('chambre');


document.getElementById("choixSalon").addEventListener("click", function() {
    masquerElem(chambre);
    afficherElem(salon);
    rendreActif(choixSalon);
    rendreInactif(choixChambre);
    changerSource();
    resetActiveButtons('salon');

        // Ajout de la classe .active aux boutons de la chambre
        document.getElementById('aubade-abetone-salon').classList.add('active');
        document.getElementById('luxens-forest3-salon').classList.add('active');
        
        // Suppression de la classe .active des boutons du salon
        document.getElementById('aubade-abetone-chambre').classList.remove('active');
        document.getElementById('luxens-trench6-chambre').classList.remove('active');
   
});

document.getElementById("choixChambre").addEventListener("click", function() {
    masquerElem(salon);
    afficherElem(chambre);
    rendreActif(choixChambre);
    rendreInactif(choixSalon);
    changerSource();
    resetActiveButtons('chambre');


        // Ajout de la classe .active aux boutons de la chambre
    document.getElementById('aubade-abetone-chambre').classList.add('active');
    document.getElementById('luxens-trench6-chambre').classList.add('active');
    
    // Suppression de la classe .active des boutons du salon
    document.getElementById('aubade-abetone-salon').classList.remove('active');
    document.getElementById('luxens-forest3-salon').classList.remove('active');
   
});

// FONCTIONS
function changerImageSalon(vue, type) {
    const cheminImage = `images/${vue}.png`;
    console.log(cheminImage);

    if (type === 'sol') {
        document.getElementById(`sol-overlay-salon`).src = cheminImage;
        document.getElementById(`sol-overlay-chambre`).src = cheminImage;
    } else if (type === 'peinture') {
        document.getElementById(`peinture-overlay-salon`).src = cheminImage;
        document.getElementById(`peinture-overlay-chambre`).src = cheminImage;
    }
}

function afficherElem (elem) {
    elem.style.display = "flex"
  } 
  
  function masquerElem (elem) {
    elem.style.display = "none"
  } 

  function rendreActif (elem) {
    elem.classList.add("active")
  }
  
  function rendreInactif (elem) {
    elem.classList.remove("active")
  }

  function changerSource () {
    const imgSalon = document.getElementById(`peinture-overlay-salon`)
    const imgSolSalon = document.getElementById(`sol-overlay-salon`)
    const imgChambre = document.getElementById(`peinture-overlay-chambre`)
    const imgSolChambre= document.getElementById(`sol-overlay-chambre`)
    


    imgSalon.src=""
    imgChambre.src=""
    imgSolChambre.src =""
    imgSolSalon.src=""
  }

  //   /////INITIALLISATION/////////

  rendreActif(choixSalon)
  masquerElem(chambre)




  document.addEventListener("DOMContentLoaded", function() {
    const solButtonsSalon = document.querySelectorAll("#salon-sol button");
    const peintureButtonsSalon = document.querySelectorAll("#salon-peinture button");
    const solButtonsChambre = document.querySelectorAll("#chambre-sol button");
    const peintureButtonsChambre = document.querySelectorAll("#chambre-peinture button");

    solButtonsSalon.forEach(button => {
        button.addEventListener("click", function() {
            removeActiveClass(solButtonsSalon);
            this.classList.add("active");
        });
    });

    peintureButtonsSalon.forEach(button => {
        button.addEventListener("click", function() {
            removeActiveClass(peintureButtonsSalon);
            this.classList.add("active");
        });
    });

    solButtonsChambre.forEach(button => {
        button.addEventListener("click", function() {
            removeActiveClass(solButtonsChambre);
            this.classList.add("active");
        });
    });

    peintureButtonsChambre.forEach(button => {
        button.addEventListener("click", function() {
            removeActiveClass(peintureButtonsChambre);
            this.classList.add("active");
        });
    });

    function removeActiveClass(buttons) {
        buttons.forEach(button => {
            button.classList.remove("active");
        });
    }
});


function resetActiveButtons(piece) {
    // Retirer la classe .active de tous les boutons de peinture et de sol
    const allActiveButtons = document.querySelectorAll(`#${piece} button`);
    allActiveButtons.forEach(button => {
        button.classList.remove("active");
});

    // Restaurer les boutons avec la classe .active de base dans le HTML
    const baseActiveButtons = document.querySelectorAll(`#${piece} .active`);
    baseActiveButtons.forEach(button => {
        button.classList.add("active");
});
}




