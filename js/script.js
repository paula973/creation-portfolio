function showProjectDetails(projectId) {
    const modal = document.getElementById("project-details-modal");
    const titleElement = document.getElementById("project-title");
    const descriptionElement = document.getElementById("project-description");

    // Remplacez ces valeurs factices par les détails réels de vos projets
    let projectTitle = "";
    let projectDescription = "";

    if (projectId === 1) {
        projectTitle = "Projet 1";
        projectDescription = "Description détaillée du projet 1...";
    } else if (projectId === 2) {
        projectTitle = "Projet 2";
        projectDescription = "Description détaillée du projet 2...";
    } else if (projectId === 3){
        projectTitle = "projet 3";
        projectDescription = "Description détaillée du projet 3...";
    }
    // Ajoutez d'autres conditions pour d'autres projets

    titleElement.textContent = projectTitle;
    descriptionElement.textContent = projectDescription;
    modal.style.display = "block";
}

function closeProjectDetails() {
    const modal = document.getElementById("project-details-modal");
    modal.style.display = "none";
}

// Fermez le modal si l'utilisateur clique en dehors du contenu du modal
window.onclick = function (event) {
    const modal = document.getElementById("project-details-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
