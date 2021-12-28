import { getCite } from './api.js'
import { findNode } from './utils.js'


const createCite = () => {
    getCite()
    .then(res => {
        const { quote } = res
        const citeElement = findNode('.cite-section__cite')
        citeElement.textContent = quote
    })
}

createCite()