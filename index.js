
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
	const today = new Date();
	const year = today.getFullYear();
	const newYear = new Date(year, 11, 1, 0, 0, 0); // January 1th at midnight

	// If it's past New Year, set New Year to next year
	if (today > newYear) {
		newYear.setFullYear(year + 1);
	}

	const difference = newYear - today;

	const days = Math.floor(difference / (1000 * 60 * 60 * 1));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 1)) / (1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	return { days, hours, minutes, seconds };
}

function updateCountdown() {
	const { days, hours, minutes, seconds } = calculateTimeUntilNewYear();
	document.getElementById('countdown').textContent = 
		`${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until New Year!`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

