// const col = prompt ("first color bg ")
// const col2 = prompt ("second color bg")



// document.body.style.backgroundColor = col 
// document.body.style.color = col2


// const userLogin = +prompt("Login kiriting");
// const userPassword = +prompt("Parol kiriting");

// const oquvchilar = [
//     {
//         login:1234,
//         parol:78910,
//         ism:"Safina",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:2010,
//     },
//     {
//         login:5678,
//         parol:1112,
//         ism:"Sitora",
//         coin:920,
//         ustoz:"Sunnatbek",
//         group:2010,
//     },
//     {
//         login:1030,
//         parol:1903,
//         ism:"Gulzoda",
//         coin:1106,
//         ustoz:"Sunnatbek",
//         group:2010,
//     },
//     {
//         login:91011,
//         parol:1314,
//         ism:"Mahmud",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:2010,
//     },
//     {
//         login:1213,
//         parol:1516,
//         ism:"Muhammadsaid",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:2010,
//     },
//     {
//         login:1415,
//         parol:1718,
//         ism:"Dilshod",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:2010,
//     },
//     {
//         login:1617,
//         parol:1920,
//         ism:"Dilmuhammad",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:2010,
//     },
//     {
//         login:1819,
//         parol:2122,
//         ism:"Sardor",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:2010,
//     },
//     {
//         login:2021,
//         parol:324,
//         ism:"Akbar",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:2010,
//     },
//     {
//         login:2223,
//         parol:2526,
//         ism:"Jahongir",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:2010,
//     },
// ]

// oquvchilar.forEach(item => {
//     if(item.login == userLogin && item.parol == userPassword){
//         const ota = document.createElement("div")
//     }
// })




document.addEventListener("DOMContentLoaded", function () {
    let textColor = prompt("Enter text color");
    
   
    let bgColor = prompt("Enter body backgroundColor");
    
  
    document.body.style.color = textColor;
    document.body.style.backgroundColor = bgColor;
    
  
    let textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    textContainer.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(100);
    document.body.appendChild(textContainer);
});
