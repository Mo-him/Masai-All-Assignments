append();

function append(){
    console.log("yes");
    let data = JSON.parse(localStorage.getItem("students")) || [];
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(function(el, index){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let p = document.createElement("p");
        p.innerText = el.name;
        let btn = document.createElement("button");
        btn.innerText = "remove";
        btn.addEventListener("click", function(){
            this.remove(index);
        })
        div.append(img, p, btn);
        container.append(div);
    })
}

function remove(index){
    let data = JSON.parse(localStorage.getItem("students")) || [];

    let newData = data.filter(function(el, i){
        if(i===index){
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash", JSON.stringify(trash));
        }
        else{
            return i !== index;
        }
    });
}
remove();