const API_URL = 'https://randomuser.me/api?results=50'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


getInfo(API_URL)




























// async function getInfo(url) {
//     const res = await fetch(url)
//     const data = await res.json()
//     showInfo(data.results)

// }


// function showInfo(data) {
//     main.innerHTML = ''
//     data.forEach((info) => {
//         const { title, first, last, age, picture, large } = info

//         const dataEl = document.createElement('div')
//         dataEl.classList.add('movie')

//         dataEl.innerHTML = `
//         <img src= "${picture} " alt=" ${title}">
//         <div class="movie-info">
//         <h3>${title}</h3>
//         </div>
//         <div class="oveview">
//         <h3>Overview</h3>
//         ${picture, large}
//         </div>
//     `
//         main.appendChild(dataEl)
//     })
// }


// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const searchTerm = search.value

//     if (searchTerm && searchTerm !== ' ') {
//         getInfo(API_URL + searchTerm)
//         search.value = ' '
//     }
//     else {
//         window.location.reload()
//     }
// })