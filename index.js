let homeScoreCount = 0
let guestScoreCount = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function addOneHome() {
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount
}

function addTwoHome() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
}

function addThreeHome() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
}

function addOneGuest() {
    guestScoreCount += 1
    guestScore.textContent = guestScoreCount
}

function addTwoGuest() {
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
}

function addThreeGuest() {
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount
}