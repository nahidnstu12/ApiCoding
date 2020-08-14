document.querySelector('#generate-names').addEventListener('submit', loadNames);

// Execute the function to query the API
function loadNames(e) {
     e.preventDefault();

     // Read the values from the form and create the variables
     const albumId = document.getElementById('albumId').value;
     const photosNum = document.getElementById('photos').value;

     // let CORS = 'https://cors-anywhere.herokuapp.com/';
     let url =   'https://jsonplaceholder.typicode.com/albums/';

     // Read the origin and append to the url
     if(albumId !== ''){
          url += `${albumId}/photos`;
     }
     
     const xhr = new XMLHttpRequest();
     xhr.open('GET',url,true);
     xhr.onload =function(){
          if(this.status === 200){
               // console.log(JSON.parse(this.responseText));
               const names = JSON.parse(this.responseText);

               let html = `<h3>Generated Album Photos </h3>
                         <ul class="lists">`
                         names.forEach((name,ind) => {
                              if(ind < photosNum){
                             html+=` <img src='${name.thumbnailUrl}' title=${name.id} />`
                              }
                         })
                         html+=`</ul>`;
                    document.getElementById('result').innerHTML = html;
          }
     }
     xhr.send();
     
}