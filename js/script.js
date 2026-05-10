// Enable smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Offset for sticky header height
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        // Use 'flex' instead of 'block' to keep the CSS centering (align-items: center) working properly
        modal.style.display = 'flex'; 
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore background scrolling
        
        // Pause video playback when modal closes
        const video = modal.querySelector('video');
        if (video) {
            video.pause();
        }
    }
}

// Close modal when clicking outside the content area
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore background scrolling
        
        // Pause video playback
        const video = event.target.querySelector('video');
        if (video) {
            video.pause();
        }
    }
};