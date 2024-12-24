
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
	const newYear = new Date(year + 1, 0, 1); // January 1st at midnight

	const difference = newYear - today;

	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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

