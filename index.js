
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

function calculateTimeUntilChristmas() {
	const today = new Date();
	const year = today.getFullYear();
	const christmasDate = new Date(year, 11, 24, 0, 0, 0); // December 24th at midnight

	// If it's past Christmas, set Christmas to next year
	if (today > christmasDate) {
		christmasDate.setFullYear(year + 1);
	}

	const difference = christmasDate - today;

	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	return { days, hours, minutes, seconds };
}

function updateCountdown() {
	const { days, hours, minutes, seconds } = calculateTimeUntilChristmas();
	document.getElementById('countdown').textContent = 
		`${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until Christmas!`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

