// fetch from the dictionary api here!
import { render } from "..";

let entries;
async function fetchDictionaryEntry(event){
    let response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ (event))
    const dictionaryEntry = await response.json()
    entries = {...dictionaryEntry}
    console.table(entries)
    render(entries)
}
export {fetchDictionaryEntry}
