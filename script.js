// Animation du header au lancement de la page

	// Taille du header au lancement de la page
		document.querySelector("header").style = "height: 20rem; min-width: 85.5rem;"
		document.getElementById("logo").style = "width: 711px; height: 235.5px"

	// Réduire la taille du header
		document.querySelector("header").style = "height: 11rem; min-width: 73.5rem;"
		document.getElementById("logo").style = "width: 399.9375px; height: 132.46875px"

// Déroulement de la barre de navigation :

const navbar = document.getElementById("navbar");

  // Variables pour suivre l'état
  let isMouseOverNav = false;
  let isMouseNearNav = false;

  // Fonction pour détecter la proximité de la souris
  document.addEventListener("mousemove", (event) => {
	const navbarHeight = 75; // Hauteur de la barre
	const triggerDistance = 35; // Distance de déclenchement en pixels

	// Vérifie si la souris est proche de la barre
	if (event.clientY <= navbarHeight + triggerDistance) {
	  isMouseNearNav = true;
	  navbar.style.top = "0"; // Affiche la barre
	} else if (!isMouseOverNav) {
	  isMouseNearNav = false;
	  navbar.style.top = "-75px"; // Cache la barre
	}
  });

  // Gère le survol direct de la barre
  navbar.addEventListener("mouseenter", () => {
	isMouseOverNav = true;
	navbar.style.top = "0";
  });

  navbar.addEventListener("mouseleave", () => {
	isMouseOverNav = false;
	if (!isMouseNearNav) {
	  navbar.style.top = "-75px"; // Cache la barre
	}
  });