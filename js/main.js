let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];
//Cach 1 :

  let renderImg = (arr) => {
    let output = "";
    for(let value of arr){
      let image = value;
      output += `
      <div class="col-4" onclick="TextInfo('${image.id}')">
      <img class="card-img-top" src=${image.src} alt="Title"  onclick="Show('${image.virtualImg}')">
      </div>
      `
    }

    document.getElementById("vglassesList").innerHTML = output;
   
  }
  renderImg(dataGlasses);

window.Show = (virtualImg) => {
   document.querySelector("#myImage").src = virtualImg;
 };

TextInfo = (id) => {
 let data = dataGlasses.find(value => value.id === id);
  if(data){
    Render(data);
  }
}

let Render = (obj) => {
  document.getElementById("glassesInfo").innerHTML = `
  <div class="Dark-theme">
       <h3>${obj.name}- ${obj.brand} (${obj.color})</h3>
       <span>$${obj.price}</span> <span>Stop</span>
       <p>${obj.description}</p>
    </div>
 `;
}


//Cach 2:
// function Show(){
//   document.getElementById('myImage')
//   .src="./img/v1.png";
//   document.querySelector('.vglasses__info')
//   .innerHTML=`
//   <div class="Dark-theme">
//       <h3>Bamboo wood - Armani Exchange (Brown)</h3>
//       <span>$10</span> <span>Stop</span>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptatibus?</p>
//   </div>
// `;
// }

// function ShowAmerican(){
//   document.getElementById('myImage')
//   .src="./img/v2.png";
//   document.querySelector('.vglasses__info')
//   .innerHTML=`
//   <div class="Dark-theme">
//       <h3>American flag - Arnette (Red,Black)</h3>
//       <span>$150</span> <span>Stop</span>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptatibus?</p>
//   </div>
// `;
// }

// function ShowBlue(){
//   document.getElementById('myImage')
//   .src="./img/v3.png";
//   document.querySelector('.vglasses__info')
//   .innerHTML=`
//   <div class="Dark-theme">
//       <h3>Belt of Hippolyte - Burberry (Blue)</h3>
//       <span>$150</span> <span>Stop</span>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptatibus?</p>
//   </div>
// `;
// }
// function ShowRed(){
//   document.getElementById('myImage')
//   .src="./img/v4.png";
//   document.querySelector('.vglasses__info')
//   .innerHTML=`
//   <div class="Dark-theme">
//       <h3>Cretan Bull - Coarch (Red)</h3>
//       <span>$150</span> <span>Stop</span>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptatibus?</p>
//   </div>
// `;
// }
// function ShowYellow(){
//   document.getElementById('myImage')
//   .src="./img/v5.png";
//   document.querySelector('.vglasses__info')
//   .innerHTML=`
//   <div class="Dark-theme">
//       <h3>JOYRIDE - D&J (Gold)</h3>
//       <span>$150</span> <span>Stop</span>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptatibus?</p>
//   </div>
// `;
// }
// function ShowGreen(){
//   document.getElementById('myImage')
//   .src="./img/v6.png";
//   document.querySelector('.vglasses__info')
//   .innerHTML=`
//   <div class="Dark-theme">
//       <h3>NATTY ICE - Vip (Blue, White)</h3>
//       <span>$150</span> <span>Stop</span>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptatibus?</p>
//   </div>
// `;
// }
// function ShowGrow(){
//   document.getElementById('myImage')
//   .src="./img/v7.png";
//   document.querySelector('.vglasses__info')
//   .innerHTML=`
//   <div class="Dark-theme">
//       <h3>TORTOISE - Arnette (Red,Yellow)</h3>
//       <span>$200</span> <span>Stop</span>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptatibus?</p>
//   </div>
// `;
// }
// function ShowAny(){
//   document.getElementById('myImage')
//   .src="./img/v8.png";
//   document.querySelector('.vglasses__info')
//   .innerHTML=`
//   <div class="Dark-theme">
//       <h3>American flag - Arnette (Red,Black)</h3>
//       <span>$150</span> <span>Stop</span>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptatibus?</p>
//   </div>
// `;
// }
// function ShowAwa(){
//   document.getElementById('myImage')
//   .src="./img/v9.png";
//   document.querySelector('.vglasses__info')
//   .innerHTML=`
//   <div class="Dark-theme">
//       <h3>MIDNIGHT VIXEN REMIX - Arnette (Blue,Black)</h3>
//       <span>$1500</span> <span>Stop</span>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptatibus?</p>
//   </div>
// `;
// }



