const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmasDay = 25
    let today = new Date()
    let currentDay = today.getDate()
    let daysToChristams = christmasDay- currentDay
    countdownDisplay.textContent=daysToChristams

    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}
 
renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
