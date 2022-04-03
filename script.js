// récupérer les éléments du DOM
const cases = [...document.getElementsByClassName("case")]; // copie tous les elements de class="case" dans le tableau
let joueur = document.getElementById("joueur");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreNul = document.getElementById("scoreNul");

// toutes les infos du jeu
let informations = {
  joueurEnCours: 1,
  scoreJoueur1: 0,
  scoreJoueur2: 0,
  matchNul: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
};



const resetInformations = () => {
  joueurEnCours = 1;
  informations.c1 = 0;
  informations.c2 = 0;
  informations.c3 = 0;
  informations.c4 = 0;
  informations.c5 = 0;
  informations.c6 = 0;
  informations.c7 = 0;
  informations.c8 = 0;
  informations.c9 = 0;
};

const verifierVictoire = () => {
  if (
    (informations.c1 == informations.c2 && informations.c2 == informations.c3 && informations.c1 > 0) ||
    (informations.c1 == informations.c4 && informations.c4 == informations.c7 && informations.c1 > 0) ||
    (informations.c1 == informations.c5 && informations.c5 == informations.c9 && informations.c1 > 0) ||
    (informations.c3 == informations.c5 && informations.c5 == informations.c7 && informations.c7 > 0) ||
    (informations.c2 == informations.c5 && informations.c5 == informations.c8 && informations.c2 > 0) ||
    (informations.c3 == informations.c6 && informations.c6 == informations.c9 && informations.c3 > 0) ||
    (informations.c4 == informations.c5 && informations.c5 == informations.c6 && informations.c4 > 0) ||
    (informations.c7 == informations.c8 && informations.c8 == informations.c9 && informations.c7 > 0)
  ) {
    
    return true;
  } else if (
    informations.c1 !== 0 &&
    informations.c2 !== 0 &&
    informations.c3 !== 0 &&
    informations.c4 !== 0 &&
    informations.c5 !== 0 &&
    informations.c6 !== 0 &&
    informations.c7 !== 0 &&
    informations.c8 !== 0 &&
    informations.c9 !== 0
  ) {
    return null;
  } else {
    return false;
  }
};

const jouer = (e) => {
  let idCaseClique = e.target.id;

  // si case déjà jouée on ne fait rien
  if (informations[idCaseClique] !== 0) return;

  informations[idCaseClique] = informations.joueurEnCours;

  let victoire = verifierVictoire();

  if (victoire === true) {
    // si victoire

    alert("Le gagnant est le joueur " + informations.joueurEnCours);

    if (informations.joueurEnCours == 1) {
      informations.scoreJoueur1++;
      score1.textContent = informations.scoreJoueur1;
    } else {
      informations.scoreJoueur2++;
      score2.textContent = informations.scoreJoueur2;
    }

    
    resetInformations();
    cases.forEach((c) => (c.textContent = ""));
  } else if (victoire === null) {
    // si nul

    alert("Match nul !");

    informations.matchNul++;
    scoreNul.textContent = informations.matchNul;
    joueur.textContent = "1";
    

    resetInformations();
    cases.forEach((c) => (c.textContent = ""));
  } else if (victoire === false) {
    // sinon on continue le jeu
    if (informations.joueurEnCours == 1) {
      informations.joueurEnCours = 2;
      e.target.textContent = "X";
      joueur.textContent = "2";
    } else {
      informations.joueurEnCours = 1;
      e.target.textContent = "O";
      joueur.textContent = "1";
    }
  }
};

cases.forEach((el) => {
  el.addEventListener("click", jouer);
});
