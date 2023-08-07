// We need us Object.keys to manage all things inside at object

// function loadAPI() {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://dog.ceo/api/breeds/list/all");
//   xhr.onload = function () {
//     let output = "";
//     if (this.status === 200) {
//       let data = JSON.parse(this.responseText); //This to convert in text the json info
//       data.Object.keys((user) => {
//         //output += `<div className="profile"><h2>Welcome ${user.first_name}</h2> Your email is: ${user.email}</br><img src= ${user.avatar} width="200" class="pic"/></div>`;
//         console.log(user.message);
//       });
//       //document.querySelector("#output").innerHTML = output;
//     }
//   };
//   xhr.send();
// }

async function loadAPI() {
  let res = await fetch("https://dog.ceo/api/breeds/list/all");
  let data = await res.json();
  let output = "";
  //console.log(Object.keys(data.message));
  Object.keys(data.message).forEach((breed) => {
    output += `<option value="${breed}">${breed}</option>`;
  });

  document.querySelector("#dogs").innerHTML = output;
}

let button1 = document.querySelector("#show");

button1.addEventListener("click", function (event) {
  event.stopPropagation();
  checkImage();
});
async function checkImage() {
  window.event.stopPropagation();
  let number = document.getElementById("numberImage").value;
  let breed = document.getElementById("dogs").value;
  if (number === "" || number < 1 || number > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    // let res = await fetch(
    //   `https://dog.ceo/api/breed/${breed}/images/random/${number}`
    // );
    // let data = await res.json();
    // //console.log(Object.keys(data.message));
    // data.message.forEach((pic) => {
    //   console.log(pic);
    //   alert(pic);
    //   //   document.querySelector(
    //   //     "#library"
    //   //   ).innerHTML += `<div className="im"><img src="${pic}"></div>`;
    // });

    // event.stopPropagation();
    // alert(number);
    insertImages(breed, number);
  }
}

async function insertImages(breed, number) {
  const urls = `https://dog.ceo/api/breed/${breed}/images/random/${number}`;
  //     fetch(urls)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         const imagesDiv = document.querySelector("#library");
  //         imagesDiv.innerHTML = "";
  //         // create img elements for each image and append to the imagesDiv
  //         data.message.forEach((imageUrl) => {
  //           console.log(imageUrl);
  //           alert(imageUrl);
  //           const img = document.createElement("img");
  //           img.src = imageUrl;
  //           imagesDiv.appendChild(img);
  //         });
  //       })
  //       .catch((error) => console.error(error));
  ///////////////////////////////////////////////////////////////////
  //   let xhr = new XMLHttpRequest();

  //   xhr.open("GET", urls);
  //   xhr.onload = function () {
  //     let output = "";
  //     if (this.status === 200) {
  //       let data = JSON.parse(this.responseText); //This to convert in text the json info
  //       data.message.forEach((pic) => {
  //         console.log(pic);
  //         //output += `<div className="profile"><h2>Welcome ${user.first_name}</h2> Your email is: ${user.email}</br><img src= ${user.avatar} width="200" class="pic"/></div>`;
  //       });
  //       document.querySelector("#output").innerHTML = output;
  //     }
  //   };
  //   xhr.send();
  console.log(urls);
  let res = await fetch(urls)
    .then((res) => res.json())
    .then((data) => {
      let imageDiv = "";
      data.message.forEach((pic) => {
        imageDiv += `<div class="picture"><img src="${pic}"/></div>`;
      });
      return imageDiv;
    });
  document.querySelector("#library").innerHTML = res;
}
