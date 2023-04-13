const currentDate = new Date();
const startDate = new Date(currentDate.getFullYear(), 0, 1);
const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));

const weekNumber = Math.ceil(days / 7);

const weekNumberMessage = `Week: ${weekNumber}`;

const weekNumberDisplay = document.getElementById('weekNumberDisplay')
weekNumberDisplay.innerHTML = weekNumberMessage