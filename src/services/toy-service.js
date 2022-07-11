import {storageService} from './async-storage.service.js'
const KEY = 'toyDB';

export const toyService = {
    query,
}

function query() {
    return storageService.query(KEY)
}