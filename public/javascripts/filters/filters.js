app.filter('inStock', function(){
  return function(input){
    if (input == true){
      return "Available"
    } else {return "Not Available"}
  }
})

app.filter('hourly', function(){
  return function(input){
    if (input == null){
      return "Hourly Rental not Available"
    } else {return input}
  }
})
