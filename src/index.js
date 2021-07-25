console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

document.addEventListener("DOMContentLoaded", function(){
    fetchImages()
    fetchBreeds()
    updateDropdown()
})

function fetchImages() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(images => renderImages(images))
};

function renderImages(images) {
    const div = document.querySelector("#dog-image-container")
    images.message.forEach(image => {
        const img = document.createElement("img");
        img.src = image;
        img.width = 200;
        div.appendChild(img)
    })
};

const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

function fetchBreeds() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => renderBreeds(breeds))
};

function renderBreeds(breeds) {
    const div = document.querySelector("#dog-breeds")
    for (const breed in breeds.message) {
        const name = document.createElement("li");
        name.innerHTML = breed
          name.addEventListener("click", function() {
              name.style = "color: blue"
          })
        div.appendChild(name)
    } 
};

function updateDropdown() {
    const dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener("change", function() {
        console.log("change")
        const breedList = document.getElementsByTagName("li");
        const letter = dropdown.value;
        for (let i = 0; i < breedList.length; i++) {
            breedList[i].style = "display: default"
            if (breedList[i].innerText.charAt(0) !== letter) {
                breedList[i].style = "display: none"
            }
        }
    })
}