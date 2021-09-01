  var i = 0;
    function buttonplus() {
        document.getElementById('but1').value = ++i;
        }

        var i = 0;
    function buttonplus1() {
        document.getElementById('but2').value = ++i;
        }

        var i = 0;
    function buttonplus2() {
        document.getElementById('but3').value = ++i;
        }




         var i = 0;
    function buttonminus() {
      if(document.getElementById('but1').value>0){
        document.getElementById('but1').value = --i;}
        }

        
         var i = 0;
    function buttonminus1() {
      if(document.getElementById('but2').value>0){
        document.getElementById('but2').value = --i;}
        }

        
         var i = 0;
    function buttonminus2() {
      if(document.getElementById('but3').value>0){
        document.getElementById('but3').value = --i;}
        }


        document.querySelector('#delet').addEventListener(('click'),function(){
  document.getElementById('tablerow1').remove()
})

 document.querySelector('#delet2').addEventListener(('click'),function(){
  document.getElementById('tablerow2').remove()
})

 document.querySelector('#delet3').addEventListener(('click'),function(){
  document.getElementById('tablerow3').remove()
})



 var i = 0;
   function MULTIPLY (price, quantity) {
    return price*quantity;
   }
  