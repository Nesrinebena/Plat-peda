document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne tous les boutons de sélection de projet
    const projectButtons = document.querySelectorAll('.project-button');

    // Ajoute un écouteur d'événements à chaque bouton
    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.project; // Récupère l'ID du projet (project1 ou project2)

            // Ici, vous pouvez gérer la navigation vers la page du projet
            // Pour l'exemple, nous allons juste afficher une alerte et simuler une redirection.
            // En réalité, vous créerez des fichiers HTML séparés pour chaque projet (ex: project1.html, project2.html)
            // et vous redirigerez l'utilisateur vers ces pages.

            if (projectId === 'project1') {
                alert('Redirection vers la page du Projet 1 : Classification des Problèmes...');
                window.location.href = 'Projetone.html'; // Remplacez par le chemin réel de votre page
            } else if (projectId === 'project2') {
                alert('Redirection vers la page du Projet 2 : Système de Recommandation...');
                window.location.href = 'project2.html'; // Remplacez par le chemin réel de votre page
            }
        });
    });

    // Optionnel : Ajoutez des animations ou des effets visuels supplémentaires ici
    // Par exemple, faire apparaître les éléments progressivement
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
 const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuButton.addEventListener('click', () => {
        dropdownMenu.style.display = 
            dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-menu-wrapper')) {
            dropdownMenu.style.display = 'none';
        }
    });

// Ajout de classes pour l'animation CSS (à ajouter dans style.css)
// .fade-in-up {
//     opacity: 0;
//     transform: translateY(20px);
//     animation: fadeInUp 0.8s ease-out forwards;
// }

// @keyframes fadeInUp {
//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }