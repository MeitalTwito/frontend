import { storageService } from './async-storage.service.js'
import { utilService } from './util-service.js';


const KEY = 'toyDB';

export const toyService = {
    query,
    remove,
    getById,
    getEmptyToy,
    save
}

_createToys()

function query() {
    return storageService.query(KEY)
}

function remove(id) {
    return storageService.remove(KEY, id)
}

function getById(id) {
    return storageService.get(KEY, id)
    .then(toy => {
        toy.reviews = _createreviews()
        return toy
    })
}

function save(toy) {
    const savedToy = (toy._id) ? storageService.put(KEY, toy) : storageService.post(KEY, toy)
    return savedToy
}

function getEmptyToy() {
    return {
        name: '',
        price: 0,
        labels: [],
        createdAt: null,
        inStock: true,
    }
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

function _createreviews() {
    return [
        _createreview('Elisha T.'),
        _createreview('Alexy S.'),
        _createreview('Meital T.'),
        _createreview('Dina A.')
    ]
}

function _createreview(name) {
    const reviews = ['Greate toy, my son loved it!', 'It\'s OK, I would choose something else next time', 'Wonderful', 'Love it!', 'Very Recomanded']
    return {
        _id: utilService.makeId(),
        name,
        rate: utilService.getRandomInt(1, 5),
        review: reviews[utilService.getRandomInt(0, 4)],
    }
}