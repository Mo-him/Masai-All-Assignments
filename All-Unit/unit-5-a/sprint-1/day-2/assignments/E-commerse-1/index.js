
    document.querySelector("#myform").addEventListener("submit", Add);

    function Add(event) {
        event.preventDefault();
        var name = document.querySelector("#name").value;
        var catigory = "";
        if (document.querySelector("#check1").checked) {
            catigory += " " + document.querySelector("#check1").value
        }
        if (document.querySelector("#check2").checked) {
            catigory += " " + document.querySelector("#check2").value
        }
        if (document.querySelector("#check3").checked) {
            catigory += " " + document.querySelector("#check3").value
        }

        var url = document.querySelector("#image").value;
        var price = document.querySelector("#price").value;
        var sex = "";

        if (document.querySelector("#radio1").checked) {
            sex += " " + document.querySelector("#radio1").value
        }
        if (document.querySelector("#radio2").checked) {
            sex += " " + document.querySelector("#radio2").value
        }
        if (document.querySelector("#radio3").checked) {
            sex += " " + document.querySelector("#radio3").value
        }
        var sold = document.querySelector("#sold").value;


        function Obj(name, catigory, url, price, sex, sold) {
            this.name = name;
            this.category = catigory;
            this.url = url;
            this.price = price;
            this.gender = sex;
            this.sold = sold;
        }

        if (name === null || catigory === "" || url === null || price === null || sex === "") {
            alert("Invalid Credintials");
        }
        else {
            var newobj = new Obj(name, catigory, url, price, sex, sold);
            var product;
            if (localStorage.getItem("product") === null) {
                product = [];
            }
            else {
                product = JSON.parse(localStorage.getItem("product"));
            }

            product.push(newobj);
            localStorage.setItem("product", JSON.stringify(product));
            alert(name +": Is added in Product Section")
        }

    }