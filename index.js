
// Spustí animace při skrolování
const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('.skills');

window.addEventListener('scroll', () => {
	if (isVisible(aboutSection)) {
		aboutSection.style.animation = 'fadeInUp 1s forwards';
	}
	if (isVisible(skillsSection)) {
		skillsSection.style.animation = 'fadeInUp 1s forwards';
	}
});


