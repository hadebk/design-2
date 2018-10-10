$(document).ready(function(){
    
    //move char in head
    /*function move(x){
    
       $("#"+x).animate({letterSpacing:"30px",marginLeft:"50px"},2000,function(){
       $("#"+x).animate({letterSpacing:"0px",marginLeft:"0px"},2000,function(){move(x);});});
       
    }
    move("span1");
    move("span2");
    move("span3");*/
    
    //zoom in when hover on photo 
    
    function zoom(par){
    $("#"+par).hover(
        function(){
        $("#"+par).animate({
            height:"420px"
        },600)},
        function(){
        $("#"+par).animate({
            height:"300px"
        },600)
    });
    }
    
    zoom("img35");
    zoom("img14");
    zoom("img12");
    zoom("img06");
    zoom("img74");
    zoom("img01");
    
    //on photo click show clothing
    function swapp(big,small){
    $("#"+big).click(function(){
        $(this).fadeOut(300);
    });
        
    $("#"+small).click(function(){
        $("#"+big).fadeIn(300);
    });
    }
    
    swapp("img35","img35s");
    swapp("img14","img14s");
    swapp("img12","img12s");
    swapp("img06","img06s");
    swapp("img74","img74s");
    swapp("img01","img01s");
    
    
  
});
