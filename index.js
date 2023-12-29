const daysCountdownDisplay = document.getElementById("days-countdown-display")
const hoursCountdownDisplay = document.getElementById("hours-countdown-display")
const minutessCountdownDisplay = document.getElementById("minutes-countdown-display")
const secondsCountdownDisplay = document.getElementById("seconds-countdown-display")


function renderCountdown(){
    const christmasDay = new Date("2023-12-25 00:00:00")
    let today = new Date()
    let currentDay = today.getDate()
    let daysToChristams = christmasDay- currentDay
    let hoursTochristmas = daysToChristams 
    
    daysCountdownDisplay.textContent=daysToChristams
    hoursCountdownDisplay.textContent = hoursTochristmas

    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}
 
renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
