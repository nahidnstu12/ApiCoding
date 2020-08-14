document.querySelector('#generate-names').addEventListener('submit', loadNames);

// Execute the function to query the API
function loadNames(e) {
     e.preventDefault();

     const albumId = document.getElementById('albumId').value;
     const photosNum = document.getElementById('photos').value;

     let url =   'https://jsonplaceholder.typicode.com/albums/';

     if(albumId !== ''){
          url += `${albumId}/photos`;
     }
     console.log(url)
     // Ajax Call
    getNames(url)
    .then(data =>{
        
        let html = `<h3>Generated Album Photos </h3>
        <ul class="lists">`
        data.forEach((name,ind) => {
             if(ind < photosNum){
            html+=` <img src='${name.thumbnailUrl}' title=${name.id} />`
             }
        })
        html+=`</ul>`;
        document.getElementById('result').innerHTML = html;
    })
     
}
async function getNames(url) {
    const response = await fetch(url);
    const names = await response.json();

    return names
}