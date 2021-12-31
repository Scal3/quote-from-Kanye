import { getCite } from './api.js'
import { findNode } from './utils.js'

const refreshButton = document.querySelector('.cite-section__refresh-btn')


const createCite = () => {
    getCite()
    .then(res => {
        const { quote } = res
        const citeElement = findNode('.cite-section__cite')
        citeElement.textContent = quote
    })
}

refreshButton.addEventListener('click', createCite)

createCite()