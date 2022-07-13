import { storageService } from './async-storage.service.js'
import { utilService } from './util-service.js';
import axios from 'axios'

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/toy/' : '//localhost:3030/api/toy/';
const KEY = 'toyDB';

export const toyService = {
    query,
    remove,
    getById,
    getEmptyToy,
    save
}

_createToys()

function query(filterBy) {
    // return storageService.query(KEY)
    return axios.get(BASE_URL, { params: filterBy })
    .then (res => res.data)
}

function remove(toyId) {
    // return storageService.remove(KEY, id)
    return axios.delete(BASE_URL + toyId)
    .then (res => res.data)
}

function getById(toyId) {
    return axios.get(BASE_URL + toyId)
    .then (res => res.data)
    .then(toy => {
        toy.reviews = _createreviews()
        return toy
    })
}

function save(toy) {
    // const savedToy = (toy._id) ? storageService.put(KEY, toy) : storageService.post(KEY, toy)
    // return savedToy

    if (toy._id) {
        return axios.put(BASE_URL +toy._id, toy)
        .then(res => res.data)
    } else {
      return axios.post(BASE_URL, toy)
      .then(res => res.data)
      .catch(err => err)
    }
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