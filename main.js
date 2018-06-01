
$('select').on('change', function(){
    var selection = this.value;
    console.log(selection);
    
    $.getJSON('client.json', function(dat){
        var nom = JSON.stringify(dat[selection]);
        
        console.log(nom);
        $("#clientjson").text(nom);
    })

})



