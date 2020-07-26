$(function(){

  const imgSrc = new Array("../images/goo.png","../images/tyoki.png","../images/paa.png");

  function janken(myHand){
    var enemyHand = 1 + Math.floor( Math.random() * 3);
    $("#enemy-hand").attr("src", imgSrc[enemyHand-1]);
    if((myHand === 1 && enemyHand === 2) || (myHand === 2 && enemyHand === 3) || (myHand === 3 && enemyHand === 1)){
      $("#result").html("勝利！！");
    }else if(myHand === enemyHand){
      $("#result").html("あいこ！");
    }else{
      $("#result").html("敗北...");
    }
  }

  $("#goo").on('click', function(e) {
    janken(1);
  });

  $("#tyoki").on('click', function(e) {
    janken(2);
  });

  $("#paa").on('click', function(e) {
    janken(3);
  });

});