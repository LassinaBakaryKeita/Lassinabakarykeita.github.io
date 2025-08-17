document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.accordion-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            // Ferme tous les autres dépliants + réinitialise leurs flèches
            document.querySelectorAll('.accordion-content').forEach(content => {
                if (content.id !== targetId) {
                    content.classList.remove('active');
                    // Réinitialise la flèche des autres dépliants
                    const otherButton = document.querySelector(`[data-target="${content.id}"]`);
                    if (otherButton) {
                        otherButton.querySelector('.arrow').textContent = '▼';
                    }
                }
            });
            
            // Active/désactive le dépliant cliqué
            targetContent.classList.toggle('active');
            
            // Met à jour la flèche du bouton cliqué
            const arrow = this.querySelector('.arrow');
            arrow.textContent = targetContent.classList.contains('active') ? '▲' : '▼';
        });
    });
});