import { storageService } from './async-storage.service.js'
import { utilService } from './util-service.js';


const KEY = 'toyDB';

export const toyService = {
    query,
}

_createToys()
function query() {
    return storageService.query(KEY)
}




// Create Test Data:



function _createToys() {
    var toys = JSON.parse(localStorage.getItem(KEY))
    if (!toys || !toys.length) {
        toys = [
            _createToy('monopoly', ['Box game']),
            _createToy('Talking Doll', ['Baby', 'Doll']),
            _createToy('Basketball', ['Outdoor']),
        ]
        localStorage.setItem(KEY, JSON.stringify(toys))
    }
    return toys;
}


function _createToy(name, labels) {
    return {
        _id: utilService.makeId(),
        name,
        price: utilService.getRandomInt(10, 200),
        labels,
        createdAt: Date.now(),
        inStock: true,
    }
} 