// let submit = document.getElementById("submit");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '01cdd0e372msh12a33a71f764a53p186411jsnd680b7a4ce12',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWether = (city) =>{
cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err))
}    

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWether(city.value)
})

getWether("Delhi")


let names = [
    "Delhi",
    "Bihar",
    "Mumbai",
    "New York",
    "Boston",
    "Shanghai",
    "Pune",
]

let soretedNames = names.sort();

let input = document.getElementById("city");
input.addEventListener("keyup",(e)=>{
    removeElement();
    for(let i of soretedNames){
        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){
            let listItem = document.createElement("li");
            listItem.classList.add("list-items")
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick","displayNames('"+ i +"')");

            let word = "<b>"+ i.substr(0,input.value.length) +"</b>";
            word += i.substr(input.value.length);
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

function displayNames(value){
    input.value = value;
}

function removeElement(){
    let items = document.querySelectorAll(".list-items");
    items.forEach((item)=>{
        item.remove();
    })
}
