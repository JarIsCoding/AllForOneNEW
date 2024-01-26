let showbtn = document.getElementById('showbtn')
let navside = document.getElementById('navside')
let showbtnmob = document.getElementById('showbtnmob')
let navsidemob = document.getElementById('navsidemob')

let UInput = document.getElementById('UInput');
let UInput2 = document.getElementById('UInput2');
let UInput3 = document.getElementById('UInput3');
let UInput4 = document.getElementById('UInput4');
let UInput5 = document.getElementById('UInput5');

let Output = document.getElementById('Output');
let Outputm = document.getElementById('Outputm');

let UInputm = document.getElementById('UInputm');
let UInput2m = document.getElementById('UInput2m');
let UInput3m = document.getElementById('UInput3m');
let UInput4m = document.getElementById('UInput4m');
let UInput5m = document.getElementById('UInput5m');

let StartBtn = document.getElementById('StartBtn');
let StartBtnm = document.getElementById('StartBtnm');

showbtn.addEventListener("click", () => {
    if (navside.classList.contains('invisible')) {
        navside.classList.remove('invisible')
    } else {
        navside.classList.add('invisible')
    }
})
showbtnmob.addEventListener("click", () => {
    if (navsidemob.classList.contains('invisible')) {
        navsidemob.classList.remove('invisible')
    } else {
        navsidemob.classList.add('invisible')
    }
})

StartBtn.addEventListener("click", async () => {

    let UserInput;
    let UserInput2;
    let UserInput3;
    let UserInput4;
    let UserInput5;

    if (window.location.href.includes('Add')) {
        UserInput = UInput.value || UInputm.value;
        UserInput2 = UInput2.value || UInput2m.value;
    } else if (window.location.href.includes('Ask')) {
        UserInput = UInput.value || UInputm.value;
        UserInput2 = UInput2.value || UInput2m.value;
    } else if (window.location.href.includes('Greater')) {
        UserInput = UInput.value || UInputm.value;
        UserInput2 = UInput2.value || UInput2m.value;
    } else if (window.location.href.includes('Mad')) {
        UserInput = UInput.value || UInputm.value;
        UserInput2 = UInput2.value || UInput2m.value;
        UserInput3 = UInput3.value || UInput3m.value;
        UserInput4 = UInput4.value || UInput4m.value;
        UserInput5 = UInput5.value || UInput5m.value;
    } else {
        UserInput = UInput.value || UInputm.value;
    }

    if (UserInput === "" || UserInput2 === ""){
        Output.innerText = "Please enter a value";
    } else if (window.location.href.includes('Hello')) {
        await SayHelloApi(UserInput);
    } else if (window.location.href.includes('Add')) {
        await AddNumApi(UserInput, UserInput2);
    } else if (window.location.href.includes('Ask')) {
        await AskQApi(UserInput, UserInput2);
    } else if (window.location.href.includes('Greater')) {
        await GreaterOrLessApi(UserInput, UserInput2);
    } else if (window.location.href.includes('Mad')) {
        await MadLibApi(UserInput, UserInput2, UserInput3, UserInput4, UserInput5);
    } else if (window.location.href.includes('Odd')) {
        await OddEvenApi(UserInput);
    } else if (window.location.href.includes('Alpha')) {
        await ReverseAlphaApi(UserInput);
    } else if (window.location.href.includes('ReverseNum')) {
        await ReverseNumpi(UserInput);
    } else if (window.location.href.includes('M8')) {
        await EightBallApi(UserInput);
    } else if (window.location.href.includes('Restaurant')) {
        await RestaurantApi(UserInput);
    }

});

StartBtnm.addEventListener("click", async () => {

    let UserInput;
    let UserInput2;
    let UserInput3;
    let UserInput4;
    let UserInput5;

    if (window.location.href.includes('Add')) {
        UserInput = UInput.value || UInputm.value;
        UserInput2 = UInput2.value || UInput2m.value;
    } else if (window.location.href.includes('Ask')) {
        UserInput = UInput.value || UInputm.value;
        UserInput2 = UInput2.value || UInput2m.value;
    } else if (window.location.href.includes('Greater')) {
        UserInput = UInput.value || UInputm.value;
        UserInput2 = UInput2.value || UInput2m.value;
    } else if (window.location.href.includes('Mad')) {
        UserInput = UInput.value || UInputm.value;
        UserInput2 = UInput2.value || UInput2m.value;
        UserInput3 = UInput3.value || UInput3m.value;
        UserInput4 = UInput4.value || UInput4m.value;
        UserInput5 = UInput5.value || UInput5m.value;
    } else {
        UserInput = UInput.value || UInputm.value;
    }

    if (UserInput === "" || UserInput2 === ""){
        Output.innerText = "Please enter a value";
    } else if (window.location.href.includes('Hello')) {
        await SayHelloApi(UserInput);
    } else if (window.location.href.includes('Add')) {
        await AddNumApi(UserInput, UserInput2);
    } else if (window.location.href.includes('Ask')) {
        await AskQApi(UserInput, UserInput2);
    } else if (window.location.href.includes('Greater')) {
        await GreaterOrLessApi(UserInput, UserInput2);
    } else if (window.location.href.includes('Mad')) {
        await MadLibApi(UserInput, UserInput2, UserInput3, UserInput4, UserInput5);
    } else if (window.location.href.includes('Odd')) {
        await OddEvenApi(UserInput);
    } else if (window.location.href.includes('Alpha')) {
        await ReverseAlphaApi(UserInput);
    } else if (window.location.href.includes('ReverseNum')) {
        await ReverseNumpi(UserInput);
    } else if (window.location.href.includes('M8')) {
        await EightBallApi(UserInput);
    } else if (window.location.href.includes('Restaurant')) {
        await RestaurantApi(UserInput);
    }

});

const SayHelloApi = async (UserInput) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/Hello/Hello/${UserInput}`);
    const data = await promise.text();
    console.log(data);
    Output.innerText = data;
    Outputm.innerText = data;
}

const AddNumApi = async (UserInput, UserInput2) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/SumOf/FindSum/${UserInput}/${UserInput2}`);
    const data = await promise.text();
    console.log(data);
    Output.innerText = data;
    Outputm.innerText = data;
}

const AskQApi = async (UserInput, UserInput2) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/WokeUpTime/TimeAndName/${UserInput}/${UserInput2}`);
    const data = await promise.text();
    console.log(data);
    Output.innerText = data;
    Outputm.innerText = data;
}

const GreaterOrLessApi = async (UserInput, UserInput2) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/GreaterOrLessThan/InputTwoNum/${UserInput}/${UserInput2}`);
    const data = await promise.text();
    console.log(data);
    Output.innerText = data;
    Outputm.innerText = data;
}

const MadLibApi = async (UserInput, UserInput2, UserInput3, UserInput4, UserInput5) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/Controller/Madlib/${UserInput}/${UserInput2}/${UserInput3}/${UserInput4}/${UserInput5}`);
    const data = await promise.text();
    console.log(data);
    Output.innerText = data;
    Outputm.innerText = data;
}

const OddEvenApi = async (UserInput) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/OddOrEven/Number/${UserInput}`);
    const data = await promise.text();
    console.log(data);
    Output.innerText = data;
    Outputm.innerText = data;
}

const ReverseAlphaApi = async (UserInput) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/StringReverse/InputHere/${UserInput}`);
    const data = await promise.text();
    console.log(data);
    Output.innerText = data;
    Outputm.innerText = data;
}

const ReverseNumpi = async (UserInput) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/NumberReverse/InputHere/${UserInput}`);
    const data = await promise.text();
    console.log(data);
    Output.innerText = data;
    Outputm.innerText = data;
}

const EightBallApi = async (UserInput) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/EightBall/AskAQuestion/${UserInput}`);
    const data = await promise.text();
    console.log(data);
    Output.innerText = data;
    Outputm.innerText = data;
}

const RestaurantApi = async (UserInput) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/RestaurantPicker/Asian-American-Mexican/${UserInput}`);
    const data = await promise.text();
    console.log(data);
    Output.innerText = data;
    Outputm.innerText = data;
}