// Countdown timer
const countdownTimer = document.getElementById('countdown-timer');
const birthdayDate = new Date('YYYY-MM-DD'); // Replace with your girlfriend's birthday date
const today = new Date();
const timeLeft = birthdayDate.getTime() - today.getTime();
const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

countdownTimer.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

setInterval(() => {
  const newToday = new Date();
  const newTimeLeft = birthdayDate.getTime() - newToday.getTime();
  const newDays = Math.floor(newTimeLeft / (1000 * 60 * 60 * 24));
  const newHours = Math.floor((newTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const newMinutes = Math.floor((newTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const newSeconds = Math.floor((newTimeLeft % (1000 * 60)) / 1000);

  countdownTimer.innerHTML = `${newDays} days, ${newHours} hours, ${newMinutes} minutes, ${newSeconds} seconds`;
}, 1000);

// Birthday wishes form submission
const wishForm = document.getElementById('wish-form');
const wishInput = document.getElementById('wish-input');
const wishList = document.getElementById('wish-list');

wishForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const wishText = wishInput.value.trim();
  if (wishText !== '') {
    const wishListItem = document.createElement('li');
    wishListItem.textContent = wishText;
    wishList.appendChild(wishListItem);
    wishInput.value = '';
  }
});

// Virtual birthday cake
const cakeContainer = document.getElementById('cake-container');
const cake = document.getElementById('cake');

cakeContainer.addEventListener('click', () => {
  cake.classList.toggle('lit');
});

// Music player
const musicPlayer = document.getElementById('music-player');
const music = document.getElementById('music');

musicPlayer.addEventListener('click', () => {
  music.play();
});

// Quiz/game code (optional)
// Add your quiz or game code here