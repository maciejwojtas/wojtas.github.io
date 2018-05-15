var qty = 1;
var cart = 0;
   

$("#menOpen").toggle()
 $("#womenOpen").toggle()
 $("#languageOpen").toggle()
 $("#colorOpen").toggle()
 $("#sizeOpen").toggle()




                     


$("#menClose").click(function(){
    $("#menOpen").toggle()
    $("#men p").toggleClass("rotate")
    
    

})
$("#womenClose").click(function(){
    $("#womenOpen").toggle()
    $("#women p").toggleClass("rotate")
})
$("#languageClose").click(function(){
    $("#languageOpen").toggle()
    $("#language p").toggleClass("rotate")
})
  
$("#colorClose").click(function(){
    $("#colorOpen").toggle()
    $("#colorClose p").toggleClass("rotate")
})

$("#sizeClose").click(function(){
    $("#sizeOpen").toggle()
    $("#sizeClose p").toggleClass("rotate")
})




$(".close").click(function(){
     $(".welcomeMessage").toggle()
})

$("#up").click(function(){
    qty+=1;
     $("#qty").text(qty)
})


$("#down").click(function(){
    if(qty>=2){    qty-=1;
}
     $("#qty").text(qty)
})




$( "#colorOpen" ).click(function( event ) {
  $( "#color" ).text( event.target.textContent );
    $("#colorOpen").toggle()
})

$( "#sizeOpen" ).click(function( event ) {
  $( "#size" ).text( event.target.textContent );
    $("#sizeOpen").toggle()
    
})


$("#clearSelection a").click(function(){
    qty=1;
     $("#qty").text(qty)
    $( "#size" ).text("Select Size")
        $( "#color" ).text("Select Color")

})

$("#addCart").click(function(){
    var sizeType = $("#size").text()
        var colorType = $("#color").text()


    if(sizeType!='Select Size'){
            if(colorType!='Select Color'){

          cart+=qty;
     $("#cart").text("CART("+cart+")")
        
        
        
        
    }else{alert("chose color")}
   
}else{alert("chose size")}

})











