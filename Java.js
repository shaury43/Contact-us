
var length=document.getElementById('length');
var width=document.getElementById('width');
var result=document.getElementById('results');
var form=document.getElementById('calculator');

form.addEventListener( 'submit', function(event){
        
        var l=length.value;
        var w=width.value;
        var area=l*w;
        result.innerText="Below is the worked solution of the area of your \n dimension you have prodided please go through it." + "\n\nFormular\n"+ "Area= Length x Width\n\n" +"Values\n" +"Length=" + l + "\nWidth=" + w  + "\n\nSubstuting\n" + "Area=" + l + " x " + w + " \nArea=" + area;
        event.preventDefault();
    

     

});


 

    


