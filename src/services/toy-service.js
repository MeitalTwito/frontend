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

async function query(filterBy) {
    try {
        const res = await axios.get(BASE_URL, { params: filterBy })
        return res.data
    } catch (err) {
        throw new Error('Cannot load toys')
    }
}

async function remove(toyId) {
    try {
        const res = await axios.delete(BASE_URL + toyId)
        return res.data
    } catch (err) {
        throw new Error('Cannot delete toy: ' + toyId)
    }
}

async function getById(toyId) {
    try {
        const res = await axios.get(BASE_URL + toyId)
        return res.data
    } catch (err) {
        throw new Error('Cannot get toy: ' + toyId)
    }
}

async function save(toy) {
    if (toy._id) {
        try {
            await axios.put(BASE_URL + toy._id, toy)
            return getById(toy._id)
        } catch (err) {
            throw new Error('Cannot save toy: ' + toy._id)
        }

    } else {
        try {
            const res = await axios.post(BASE_URL, toy)
            return getById(res.data.insertedId)
        } catch (err) {
            throw new Error('Cannot save toy')
        }
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

