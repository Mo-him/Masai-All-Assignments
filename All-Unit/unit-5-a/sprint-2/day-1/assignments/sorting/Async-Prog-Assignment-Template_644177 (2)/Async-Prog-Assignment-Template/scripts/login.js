document.querySelector('form').addEventListener('submit',loginFn)

    var registeredUsers = JSON.parse(localStorage.getItem('data'))

    function loginFn(){
        event.preventDefault()
        var Email = document.querySelector('#email').value;
        var Password = document.querySelector('#password').value
        
    var flag=false;
   console.log(registeredUsers)
   
    registeredUsers.forEach(function(data)
        {
            // console.log(usersData.email,usersData.password)
            if(data.email == Email && data.password == Password && !flag)
            {
                flag=true;
                alert("Login Successfull")
                window.location.href="index.html";
            }
        })
        if(!flag)
        {
            alert("Invalid Email or Password")
            window.location.reload();
        }
    }
