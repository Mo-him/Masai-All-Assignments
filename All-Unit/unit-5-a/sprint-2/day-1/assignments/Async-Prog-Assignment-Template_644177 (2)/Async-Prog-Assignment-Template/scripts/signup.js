document.querySelector('form').addEventListener('submit',myfunction)
      var data= JSON.parse(localStorage.getItem('data')) || []
      document.querySelector('form').value = "";
    function myfunction(){
        event.preventDefault();
        var obj = {
             name : document.querySelector('#name').value,
         number : document.querySelector('#number').value,
         email : document.querySelector('#email').value,
         password : document.querySelector('#password').value,
        }
  
        if(obj.name == '' || obj.number=='' || obj.email=='' ||obj.password =='' ){
        alert('!! Please fill required field')
        return
    }
    data.push(obj)
    localStorage.setItem('data',JSON.stringify(data))
    alert('User Registerd')
    window.location.href = 'login.html'
    }