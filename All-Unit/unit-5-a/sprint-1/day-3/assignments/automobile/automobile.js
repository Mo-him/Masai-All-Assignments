

const modal = {
    name : "Hondai",
    modals : 2020,
    wheels :"Aloy wheels",
    sportMode :"Yes" 
    }



    let modal1 = Object.create(modal)
    this.name = "Jaguar"

    function newModal(){
    this.name = "Hondai",
    this.modal = 2020,
    this.wheels ="Aloy wheels",
    this.sportMode ="Yes" 
    }


  let newModal2 = new newModal()
    newModal2.modals = 2050;
    newModal2.wheels = "Ceat Tyres"
    console.log(newModal2)