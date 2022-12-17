/*
HTML Structure 

<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto definition">
        <div class="fw-bold">WORD HERE</div>
        <p>PARAGRAPH HERE</p>
    </div>
    <button class="m-2 btn btn-primary favourite-word">Add To Favourites</button>
</li>


Note: I'm sure you've read the PDF but there will be no marks given
for using innerHTML. 
*/
 
function createWordItem({word, meanings, sourceUrls}){
    return(`
        <li class="list-group-item d-flex justify-content-between align-items-start" data-uid="${sourceUrls}">
            <div class="ms-2 me-auto definition">
                <div class="fw-bold">${word}</div>
                <p>${meanings[0].definitions[0].definition}</p>
            </div>
            <button class="m-2 btn btn-primary favourite-word">Add To Favourites</button>
        </li>
    `)
}

export {createWordItem}