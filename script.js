/**
 * Liste des modules disponibles avec leurs chemins ZIP
 * @type {Array<{nom: string, cheminZip: string}>}
 */

const modules = [
    {
        nom: "Java",
        cheminZip: "/Tous_les_semestres/Semestre1.zip/Semestre1/Java.zip" // ZIP pré-généré
        // OU cheminDossier: "/Tous_les_semestres/S1/Java/" // Alternative
    },
    {
        nom: "Architecture des proccesseurs",
        cheminZip: "/Tous_les_semestres/Semestre1.zip/Semestre1/Architecture des proccesseurs.zip"
    },
    {
        nom: "Compétences Numériques & Informatiques",
        cheminZip: "/Tous_les_semestres/Semestre1.zip/Semestre1/Compétences Numériques & Informatiques.zip"
    },
    {
        nom: "Examens S1",
        cheminZip: "/Tous_les_semestres/Semestre1.zip/Semestre1/Examens S1.zip"
    },
    {
        nom: "Linux",
        cheminZip: "/Tous_les_semestres/Semestre1.zip/Semestre1/Linux.zip"
    },
    {
        nom: "Reseaux",
        cheminZip: "/Tous_les_semestres/Semestre1.zip/Semestre1/Reseaux.zip"
    },
    {
        nom: "S1 K.MELLAK",
        cheminZip: "/Tous_les_semestres/Semestre1.zip/Semestre1/S1 K.MELLAK.zip"
    },
    {
        nom: "Statistiques Descriptives & Probabilités Avancées",
        cheminZip: "/Tous_les_semestres/Semestre1.zip/Semestre1/Statistiques Descriptives & Probabilités Avancées.zip"
    },
    {
        nom: "TEC",
        cheminZip: "/Tous_les_semestres/Semestre1.zip/Semestre1/TEC.zip"
    },
    {
        nom: "anglais",
        cheminZip: "/Tous_les_semestres/Semestre2.zip/Semestre2/anglais.zip"
    },
    {
        nom: "Arabe",
        cheminZip: "/Tous_les_semestres/Semestre2.zip/Semestre2/Arabe.zip"
    },
    {
        nom: "Python et Frameworks IA",
        cheminZip: "/Tous_les_semestres/Semestre2.zip/Semestre2/Python et Frameworks IA.zip"
    },
    {
        nom: "Système d'information et Bases de données",
        cheminZip: "/Tous_les_semestres/Semestre2.zip/Semestre2/Système d'information et Bases de données.zip"
    },
    {
        nom: "tec",
        cheminZip: "/Tous_les_semestres/Semestre2.zip/Semestre2/tec.zip"
    },
    {
        nom: "Technologies Web Backend",
        cheminZip: "/Tous_les_semestres/Semestre2.zip/Semestre2/Technologies Web Backend.zip"
    },
    {
        nom: "Traitement de signal",
        cheminZip: "/Tous_les_semestres/Semestre2.zip/Semestre2/Traitement de signal.zip"
    },
    {
        nom: "Statistiques Inferentielles",
        cheminZip: "/Tous_les_semestres/Semestre2.zip/Semestre2/Statistiques Inferentielles.zip"
    }
];


// Initialisation après chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la recherche de modules
    const searchInput = document.getElementById('search');
    const resultsContainer = document.getElementById('module-results');
    
    // Gestion de l'événement de recherche
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        resultsContainer.innerHTML = '';
        
        if (searchTerm.length < 2) return;

        // Filtrage des modules
        const filteredModules = modules.filter(module => 
            module.nom.toLowerCase().includes(searchTerm)
        );

        // Affichage des résultats
        if (filteredModules.length > 0) {
            filteredModules.forEach(module => {
                const moduleElement = document.createElement('div');
                moduleElement.className = 'module-card';
                moduleElement.innerHTML = `
                    <h3>${module.nom}</h3>
                    <a href="${module.cheminZip}" download class="download-btn">
                        Télécharger le module complet (.ZIP)
                    </a>
                `;
                resultsContainer.appendChild(moduleElement);
            });
        } else {
            resultsContainer.innerHTML = '<p class="no-results">Aucun module trouvé</p>';
        }
    });
});