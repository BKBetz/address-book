//create let to store the data in
let data;

//fetch api
fetch('https://randomuser.me/api/?results=10')
//if it works then forward it to json
.then(function(response) {
    return response.json();
})
//if that is works then store the data in the let and activate function
.then(function(json) {
    data = json;
    resultLength();
    console.log(json);
});


function resultLength() {
    //create let equal to the length of the data
    let userLength = data.results.length;
    //sort by first name
    data.results.sort(function sort_by(a, b){
        //if name "b" comes before name "a" return -1
        //-1 means that right is greater than left
        if(a.name.first < b.name.first) return -1;
         //if name "a" comes before name "b" return 1
        //1 means that left is greater than right
        if(a.name.first > b.name.first) return 1;
        //if they are the same return 0
        //0  means that both are equal
        if(a.name.first == b.name.first) return 0;
    })


    //loop through the data and make nieuw contact
    for(const item of data.results) {

        const mainBody = document.querySelector(".main-body");
        //create elements
        const image = document.createElement("img");
        const contactBox = document.createElement("div");
        const name = document.createElement("p");
        const phoneNumber = document.createElement("p");
        //add classes to elements
        name.classList.add("name");
        phoneNumber.classList.add("number");
        image.classList.add("image");
        contactBox.classList.add("contact-box");
        //add data to elements
        name.innerText = `${item.name.first} ${item.name.last}`;
        phoneNumber.innerText = `${item.phone}`;
        image.src = item.picture.thumbnail;
        //add elements to the main
        mainBody.appendChild(image);
        mainBody.appendChild(contactBox);
        contactBox.appendChild(name);
        contactBox.appendChild(phoneNumber);
    }
}

