$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    $('#randomNumber').text(Random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    let values = [];
    
    reset();
    render();
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);

        values = [num1, num2, num3, num4];

        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  function woohoo(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  function loss(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            woohoo();
          }
          else if ( userTotal > Random){
            loss();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            woohoo();
          }
          else if ( userTotal > Random){
            loss();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
            if (userTotal == Random){
            woohoo();
          }
          else if ( userTotal > Random){
            loss();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            woohoo();
          }
          else if ( userTotal > Random){
            loss();
          }
    }); 
    function render() {
      for (let i = 0; i < 4; i++) {
        console.log("test");
        
        let newDiv = $("<div>");
        
        newDiv.val(values[i]);
        newDiv.text(values[i]);
        // IDs at index
        $(".gems").append(newDiv);
      }
    }  
  }); 
