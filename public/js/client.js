const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  menu.classList.toggle('active')
})

//Gallery Scripts
const imageTemplate= document.querySelector('#image-template');
if(imageTemplate!== null){
//Fetching gallery information
fetch('/gallery')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
   
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();

  })
  .then(function(data){
    
      //consts decleration
      const imageTemplate= document.querySelector('#image-template');
      const main= document.querySelector('main');

      //looping through image object array galleryImages
      data.forEach(function(images){
        //cloning the template
        const clone = imageTemplate.content.cloneNode(true);

        // getting all the a elements in clone
      
        const anchor=clone.querySelectorAll('a');

        //looping throught array anchor which contains all the <a> tags in clone
        anchor.forEach(function(item){
          item.href=images.linkURL;
        });

        //setting all the image data to appropriate attributes
        clone.querySelector('img').id=images.id;
        clone.querySelector('img').src=images.imageSrc;
        clone.querySelector('img').width=images.width;
        clone.querySelector('img').height=images.height;
        clone.querySelector('img').alt=images.menuTitle;
        clone.querySelector('img').title=images.menuTitle;

        //setting data into figcaption
        clone.querySelector('h5').innerHTML=images.menuTitle;

        clone.querySelector('p').innerHTML=images.description;

        

        //appending clone to main to display image gallery
        main.appendChild(clone);

      });
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
}