

class Persons {


  constructor(name, surname, img, age, gender, relation ,likes, id) {
    this.name = name;
    this.surname = surname;
    this.img = img;
    this.age = age;
    this.gender = gender;
    this.relation = relation;
    this.likes = likes;
    this.id = id;
  }

 
  render() {

    let msg = `

       
       <div class="card mb-4 col-sm-6 col-md-3" >

          <img class="card-img-top" src=" ${this.img} "style=100%>
          <div class="card-body">
          <h5 class="card-title"> ${this.name} ${this.surname} </h5>
          </div>
           <ul class="list-group list-group-flush">
          <li class="list-group-item">AGE : ${this.age}</li>
           <li class="list-group-item"> ${this.relation} </li>
           </ul>
          <div class="card-body">
          
          <button id="${this.id}" class="btn btn-danger">LIKE</button></br></br>

          
          <span id="likeout${this.id}"> ${this.likes} </span> <span><i id="heart${this.id}" class="fa fa-heart fa-2x" aria-hidden="true"></i></span></p>
          </div>
                  <div id="overlay" onclick="off()">
                    <div id="text">
                    <div class="container">
                    <img class="card-img-top" id="imgs1" src="${this.img}"style=70%>
                    <p><h1 id="nams1">${this.name} ${this.surname}</h1> </p>
                      <ul class="list-group list-group-flush" >
          <li class="list-group-item" id="ages1">AGE : ${this.age}</li>
           <li class="list-group-item" id="relation1"> ${this.relation} </li>
           
           </ul>
           <p id="cr"></p>
                  </div>



                </div>
              </div>

              <div style="padding:20px">
                
                <button class="btn btn-info" onclick="on()" id="b${this.id}">more information</button>
              </div>
          <a href="https://www.facebook.com/" ><p><button class="btn btn-primary">Contact by <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></button></p> </a>
          </div>
     
      `;

    return msg;
  }


}


class Male extends Persons {
  

  constructor(name, surname, img, age, gender, relation, likes, id) {
    super(name, surname, img, age, gender, relation, likes, id);
    this.name = name;
    this.surname = surname;
    this.img = img;
    this.age = age;
    this.gender = gender;
    this.relation = relation;
    this.likes = likes;
    this.id = id;
  }

 
  render() {
    

    let msg = `
       
       
       <div class="card mb-4 col-sm-6 col-md-3" >

          <img class="card-img-top" src=" ${this.img} "style=100%>
          <div class="card-body">
          <h5 class="card-title"> ${this.name} ${this.surname} </h5>
          </div>
           <ul class="list-group list-group-flush">
          <li class="list-group-item">AGE : ${this.age}</li>
           <li class="list-group-item"> ${this.relation} </li>
           </ul>
          <div class="card-body">
          
          <button id="${this.id}" class="btn btn-danger">LIKE</button></br></br>

          
          <span id="likeout${this.id}"> ${this.likes} </span> <span><i id="heart${this.id}" class="fa fa-heart fa-2x" aria-hidden="true"></i></span></p>
          </div>
                  <div id="overlay" onclick="off()">
                    <div id="text">
                    <div class="container">
                    <img class="card-img-top" id="imgs1" src="${this.img}"style=70%>
                    <p><h1 id="nams1">${this.name} ${this.surname}</h1> </p>
                      <ul class="list-group list-group-flush" >
          <li class="list-group-item" id="ages1">AGE : ${this.age}</li>
           <li class="list-group-item" id="relation1"> ${this.relation} </li>
           
           </ul>
           <p id="cr"></p>
                  </div>
                  


                </div>
              </div>

              <div style="padding:20px">
                
                <button class="btn btn-info" onclick="on()" id="b${this.id}">more information</button>
              </div>
          <a href="https://www.facebook.com/" ><p><button class="btn btn-primary">Contact by <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></button></p> </a>
          </div>
      `;
    return msg;


  }

 
}


class Female extends Persons {

  constructor(name, surname, img, age, gender, relation, likes, id) {
    super(name, surname, img, age, gender, relation, likes, id);
    this.name = name;
    this.surname = surname;
    this.img = img;
    this.age = age;
    this.gender = gender;
    this.relation = relation;
    this.likes = likes;
    this.id = id;
  }


  render() {


    let msg = `
       
       
       <div class="card mb-4 col-sm-6 col-md-3" >

          <img class="card-img-top" src=" ${this.img} "style=100%>
          <div class="card-body">
          <h5 class="card-title"> ${this.name} ${this.surname} </h5>
          </div>
           <ul class="list-group list-group-flush">
          <li class="list-group-item">AGE : ${this.age}</li>
           <li class="list-group-item"> ${this.relation} </li>
           </ul>
          <div class="card-body">
          
          <button id="${this.id}" class="btn btn-danger">LIKE</button></br></br>

          
          <span id="likeout${this.id}"> ${this.likes} </span> <span><i id="heart${this.id}" class="fa fa-heart fa-2x" aria-hidden="true"></i></span></p>
          </div>
                  <div id="overlay" onclick="off()">
                    <div id="text">
                    <div class="container">
                    <img class="card-img-top" id="imgs1" src="${this.img}"style=70%>
                    <p><h1 id="nams1">${this.name} ${this.surname}</h1> </p>
                      <ul class="list-group list-group-flush" >
          <li class="list-group-item" id="ages1">AGE : ${this.age}</li>
           <li class="list-group-item" id="relation1"> ${this.relation} </li>

           </ul>

           <p id="cr"></p>
                  </div>

                </div>
              </div>

              <div style="padding:20px">
                
                <button class="btn btn-info" onclick="on()" id="b${this.id}">more information</button>
              </div>
          <a href="https://www.facebook.com/" ><p><button class="btn btn-primary">Contact by <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></button></p> </a>
          </div>
     
      `
      ;
    return msg;
  }


  }




var mediaCollection = [
  new Male( "Max", "Green", "img/male1.jpg", 24, "male", "not in a relation", 5, 1),
  new Male( "Leo", "Van hullt", "img/male2.jpg", 30, "male", "not in relation", 8, 2),  
  new Male( "Martin", "Oliver", "img/portrait-1287413_960_720.jpg", 21, "male", "not in a relation", 3, 3),
  new Male( "Alhuseen", "Abdaljabar", "img/stylish-boy-2988896_960_720.jpg", 19, "male", "not in a relation", 23, 4),  
  new Male( "Matt", "Ferdenand", "img/application-1934972_960_720.jpg", 27, "male", "not in relation", 22, 5),
  new Male( "Andy", "Orten", "img/male-2637801_960_720.jpg", 33, "male", "not in a relation", 14, 6), 
  new Male( "Adam", "Freeman", "img/boy-2119178_960_720.jpg", 18, "male", "not in relation", 11, 7), 
  new Female( "Rosa", "Jackson", "img/proimg.jpg", 22, "Female", "not in a relation", 999, 8),
  new Female( "Lata", "Nillson", "img/model-2349105_960_720.jpg", 25, "Female", "not in a relation", 12, 9),
  new Female( "Reem", "Jaber", "img/pretty-girl-2039216_960_720.jpg", 29, "Female", "not in a relation", 19, 10),
  new Female( "Sally", "Ronald", "img/portrait-597173_960_720.jpg", 30, "Female", "not in a relation", 20, 11),
  new Female( "Zahra", "Adams", "img/womens-2437214_960_720.jpg", 25, "Female", "not in a relation", 42, 12),
  new Female( "Lana", "Ibraham", "img/female1.jpg", 40, "Female", "not in relation", 14, 13),
  new Female( "Angileka", "Stark", "img/model-1155293_960_720.jpg", 18, "Female", "not in a relation", 18, 14),
  new Female( "Christina", "Watson", "img/model-2425659_960_720.jpg", 21, "Female", "not in a relation", 12, 15),
  new Female( "Margarita", "Afron", "img/pose-2690310_960_720.jpg", 19, "Female", "not in a relation", 11, 16),
  new Female( "Taylor", "Koslo", "img/womens-2349045_960_720.jpg", 31, "Female", "not in a relation", 7, 17),
  new Male( "Markovic", "Anderson", "img/man-2367953_960_720.jpg", 23, "male", "not in a relation", 10, 18),
  new Male( "Mario", "Propst", "img/man-2792505_960_720.jpg", 25, "male", "not in a relation", 12, 19),
  new Male( "Stivan", "Hanndanuvic", "img/boy-2082270_960_720.jpg", 22, "male", "not in a relation", 31, 20),

];



function showBigList() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < mediaCollection.length; i++) {
    bigList.innerHTML += mediaCollection[i].render();
  }
}


function showOnlyMale() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < mediaCollection.length; i++) {

    if (mediaCollection[i].constructor.name == "Male") {
    bigList.innerHTML += mediaCollection[i].render();
    }
  }
}


  function showOnlyFemyle() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < mediaCollection.length; i++) {

    if (mediaCollection[i].constructor.name == "Female") {
    bigList.innerHTML += mediaCollection[i].render();
    }
  }
}



 
