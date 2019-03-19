// //html 반환
// console.log(document);

// //getElementById();
// const oldTitle = document.getElementById("title");
// console.log(oldTitle);
// oldTitle.innerHTML = "innerHTML";

// //console.dir();
// console.dir(oldTitle);
// oldTitle.style.color = "red";

// //querySelector
// const title = document.querySelector("#title");
// title.style.color = "#777";


// function handleResize(event){
//     // console.log("I have been resized");
//     console.log(event);
// }

// window.addEventListener("resize", handleResize);


// function handleClick(){
//     title.style.color = "red";
// }

// title.addEventListener("click", handleClick);



// if (10 > 5 || "dayeon" === "dayoen"){
//     console.log("hi");
// }else{
//     console.log("ho");
// }


// const age = prompt("How old are you");
// console.log(age);

// if(age > 18){
//     console.log("you can drink");
// }else{
//     console.log("you can't drink");
// }



// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     // title.addEventListener("click", handleClick);
//     title.addEventListener("mouseenter", handleClick);
// }
// init();

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     // title.className = CLICKED_CLASS;
    //     title.classList.add(CLICKED_CLASS);
    // }else{
    //     // title.className = "";
    //     title.classList.remove(CLICKED_CLASS);
    // }

    //이 코드가 위와 같은 역할을 함
    title.classList.toggle(CLICKED_CLASS);
}



function init(){
    title.addEventListener("click", handleClick);
}

init();
