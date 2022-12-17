// link this file in your html!
import 'bootstrap/dist/css/bootstrap.min.css';
import { createWordItem } from './dom/word-item';

let dictionaryEntries;
async function fetchDictionaryEntry(e){
    let response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ (e))
    const dictionaryEntry = await response.json()
    dictionaryEntries = {...dictionaryEntry}
    render(dictionaryEntries)
}

document.querySelector('#dictionary-search').addEventListener('submit', (e)=>{
    e.preventDefault()
    let search = e.target.elements['word'].value.trim().toLowerCase()
    fetchDictionaryEntry(search)
})

function render(entries){
    const contents = document.createElement('div')
    Object.values(entries).forEach(entry=>{
        const markup = createWordItem(entry)
        const list = document.createRange().createContextualFragment(markup).children[0]
        list.querySelector('.favourite-word').addEventListener('click', onAddToFavourites)
        contents.append(list)
    })
    document.querySelector('.recently-search-words').append(contents)
    
}

function onAddToFavourites(e){
    const contents = document.createElement('div')
    const id = e.currentTarget.dataset.uid
    const list = Object.values(dictionaryEntries)
    list.forEach(entry=>{
        const markup = createWordItem(entry)
        const entries = document.createRange().createContextualFragment(markup).children[0]
        entries.querySelector('.favourite-word').remove('button')
        contents.append(entries)
    })
    document.querySelector('.favourite-words').append(contents)
}