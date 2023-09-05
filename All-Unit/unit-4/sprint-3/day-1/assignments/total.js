var e_commerce = {
    products : ["earphone","headphone","earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
    total_price : // write code here
    function() {
        var total = 0;
        for (var i=0; i<e_commerce.products.length; i++)
        {
            total += e_commerce.quantity[i]*e_commerce.price[i];
        }
        console.log(total);
    }
  };
  e_commerce.total_price();