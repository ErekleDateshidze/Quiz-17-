const API_URL = 'https://randomuser.me/api?results=50'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


getInfo(API_URL)

async function getInfo(url) {
    const res = await fetch(url)
    const data = await res.json()
    showInfo(data.results)

}



function showInfo(persondata) {
    main.innerHTML = ''
    persondata.forEach((info) => {
        const { picture, name, dob, phone, email } = info

        const infoEl = document.createElement('div')
        infoEl.classList.add('info')

        infoEl.innerHTML = `
        <div class="profile">
            <div class="person image">
                <img src= "${picture.large} " alt="">
            </div>
            <div class="person-info">
                <h3>${name.first + " " + name.last}</h3>
                <p class="age" > age : ${dob.age} </p>
                <p class="phone"> Phone : ${phone} </p>
                <p class= "mail"> E-Mail : ${email} </p>                     
            </div>
        </div>
        `
        main.appendChild(infoEl)
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== ' ') {
        getInfo(API_URL + searchTerm)
        search.value = ' '
    }
    else {
        window.location.reload()
    }
})