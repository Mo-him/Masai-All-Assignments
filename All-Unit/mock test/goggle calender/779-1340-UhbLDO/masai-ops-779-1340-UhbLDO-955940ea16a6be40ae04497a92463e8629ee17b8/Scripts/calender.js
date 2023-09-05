// Write code related to Calender page here
append();

function append(){
    let data = JSON.parse(localStorage.getItem("meets")) || [];
    let calender = document.getElementById("calender");
    container.innerHTML = null;

    data.forEach(function(el, index){
        let div = document.createElement("div");
        let name = document.createElement("name");
        name.innerText = el.name;
        let desc = document.querySelector("desc");
        desc.innerHTML = el.desc;
        let meetType = document.createElement("meetType");
        meetType.innerText = el.meetType;
        let week = document.createElement("week");
        week.innerText = el.week;
        let btn = document.createElement("button");
        btn.innerText = "delete";
        btn.addEventListener("click", function(){
            this.remove(index);
        })


        div.append(name, desc, meetTyppe, week, btn);
        calender.append(div);
    })

}

function remove(index){
    let data = JSON.parse(localStorage.getItem("meets")) || [];

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
