
var user_obj = JSON.parse(localStorage.getItem("userData"));


let getNews = async () => {
    try {
        let country_code = user_obj.country;
        let query = document.querySelector("#search_box").value
        let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${query}`
        let res = await fetch(url)
        res = await res.json()
        console.log(res.articles)
        showData(res.articles)

    } catch (error) {
        console.log(error)
    }
}
getNews()




var showData = (data) => {
    data.forEach(ele => {
        let news = document.querySelector("#news_world")
        let newsCard = document.createElement("div")
        let img = document.createElement("img")
        img.src = ele.urlToImage
        let titleElement = document.createElement("h3")
        titleElement.textContent = ele.title
        let descriptionElement = document.createElement("h4")
        descriptionElement.textContent = ele.description
        newsCard.append(img,titleElement,descriptionElement)
        news.append(newsCard)

    });


}

let timerId;

    let debounce = (getNews,delay)=>{
        if(timerId){
            clearInterval(timerId)
        }
         timerId = setTimeout( ()=>{
            getNews()
        },delay)
    }



