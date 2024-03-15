
let count = Number(localStorage.getItem("count")) ||0;
document.querySelector("#s1").innerHTML=count;
const like = () => {
    count = count + 1;
    document.querySelector("#s1").innerHTML = count;
    localStorage.setItem("count",count);
}



let counter = Number(localStorage.getItem("counter"));
document.querySelector("#s2").innerHTML=counter;
const user = () => {
    counter = counter + 1;
    document.querySelector("#s2").innerHTML = counter;
    localStorage.setItem("count_1 ",counter);
}



let count_1 = Number(sessionStorage.getItem("count_1"));
document.querySelector("#s3").innerHTML=count_1;
const like_1 = () => {
    count_1 = count_1 + 1;
    document.querySelector("#s3").innerHTML = count_1;
    sessionStorage.setItem("count_2 ",count_1);
}

let count_2 = Number(sessionStorage.getItem("count_2"));
document.querySelector("#s4").innerHTML=count_2;
const user_1 = () => {
    count_2 = count_2 + 1;
    document.querySelector("#s4").innerHTML = count_2;
    sessionStorage.setItem("count_3 ",count_2);
}