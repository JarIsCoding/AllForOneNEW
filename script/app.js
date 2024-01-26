let showbtn = document.getElementById('showbtn')
let navside = document.getElementById('navside')
let showbtnmob = document.getElementById('showbtnmob')
let navsidemob = document.getElementById('navsidemob')

showbtn.addEventListener("click", () => {
    if (navside.classList.contains('invisible')) {
        navside.classList.remove('invisible')
    } else {
        navside.classList.add('invisible')
    }
})
showbtnmob.addEventListener("click", () => {
    if (navsidemob.classList.contains('invisible')) {
        navsidemob.classList.remove('invisible')
    } else {
        navsidemob.classList.add('invisible')
    }
})