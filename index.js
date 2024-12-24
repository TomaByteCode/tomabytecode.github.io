
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

function calculateTimeUntilNewYear() {
	const now = new Date();
	const year = now.getFullYear();
	const newYear = new Date(year + 1, 0, 1); // 1. ledna příštího roku o půlnoci

	// Zjistí rozdíl v milisekundách
	const difference = newYear - now;

	// Přepočet na dny, hodiny, minuty a sekundy
	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	return { days, hours, minutes, seconds };
}

function updateCountdown() {
	const { days, hours, minutes, seconds } = calculateTimeUntilNewYear();
	const countdownElement = document.getElementById('countdown');

	if (countdownElement) {
		countdownElement.textContent = 
			`${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until New Year!`;
	}
}

// Aktualizace každou sekundu
setInterval(updateCountdown, 1000);
updateCountdown();


