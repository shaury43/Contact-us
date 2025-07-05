
var length=document.getElementById('length');
var width=document.getElementById('width');
var result=document.getElementById('results');
var form=document.getElementById('calculator');

form.addEventListener( 'submit', function(event){
        
        var l=length.value;
        var w=width.value;
        var area=l*w;
        result.innerText="Below is the worked solution of the area of your \n dimensions you have provided. Please go through it." + 
        "\n\nFORMULAR\n"+ "Area= Length x Width\n\n" +"VALUES\n" +"Length= " + l +"m" + "\nWidth= " + w + "m"  + "\n\nSUBSTUTING\n" + "Area= " + l + " x " + w + " \nArea= " + area + "m²";
        event.preventDefault();
    

     

});


 

    


