const btNaddPlayer = document.querySelector('#addPlayer')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const country = document.querySelector('#country')
const playerScore = document.querySelector('#playerScore')
const cards = document.querySelector('[data-cards]')
const dataSection = document.querySelector('[data-section]')
const dataError = document.querySelector('[data-error]')

let players = []

btNaddPlayer.addEventListener('click', addPlayer)

function addPlayer(){
    if(firstName.value == '' || lastName.value === '' || country.value === '' || playerScore.value === ''){
        dataError.textContent = 'All fields are required'
        dataSection.append(dataError)
    }else{
        dataError.innerHTML = ''
        let index = players.length

        let newPlayer = {
            firstName: firstName.value,
            lastName: lastName.value,
            country: country.value.toUpperCase(),
            score: parseInt(playerScore.value),
            date: snapDate()
        }

        players.push(newPlayer)

        let fullName = `${newPlayer.firstName} ${newPlayer.lastName}`

        let html = `
        <div class="header">
            ${fullName}
            <div class="DateAndTime">
                ${newPlayer.date}
            </div>
        </div>
        <div class="county-card">
            ${newPlayer.country}
        </div>
        <div class="card-score">
            ${newPlayer.score}
        </div>
        <div class="buttons">
            <div onclick='deletePlayer(${index})' class="circle trash">
                <i id="trash" class="fa-solid fa-trash-can trash"></i>
            </div>
            <div onclick='addFivePoints(${index})' class="circle plus">
                <i id="plus" class="fa-solid fa-plus"> 5</i>
            </div>
            <div onclick='minusFivePoints(${index})' class="circle minus">
                <i id="minus" class="fa-solid fa-minus"> 5</i>
            </div>
        </div>`

        const card = document.createElement('div')
        card.classList.add('card')
        card.id = `player_${index}`
        card.innerHTML = html
        cards.append(card)
    }
    
}

function minusFivePoints(index){
    const element = document.getElementById(`player_${index}`)
    element.children[2].innerText =  Number(element.children[2].innerText) - 5 
}

function addFivePoints(index){
    const element = document.getElementById(`player_${index}`)
    element.children[2].innerText =  Number(element.children[2].innerText) + 5 
}

function deletePlayer(index){
    const element = document.getElementById(`player_${index}`)
    players = players.filter((player, id) => index != id)
    element.parentNode.removeChild(element)
}

function snapDate(){
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const date = new Date()

    const day = date.getDay()
    const year = date.getFullYear()
    const month = monthNames[date.getMonth()]
    let hours = date.getHours()
    let minutes = date.getMinutes()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    
    return `${month} ${day}, ${year} ${hours}:${minutes}`
}
