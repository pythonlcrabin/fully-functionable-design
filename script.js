$(document).ready(function(){
  var no;
  var vr,tr,cr;
  function kong() {
     if (vr == "Done" & cr == "Done" & tr == "Done"){
      $("button").attr("disabled", false);
    }else{
      $("button").attr("disabled", true);
    };
    };
    kong();
function name(rt){

  if (rt == true){
    vr = "Done";
  }else{
    vr = "not done";
  };
  try{
    kong();
  }catch(err){
    no = no;
  };
};
function email(rt1){
  
  if (rt1 == true){
    tr = "Done";
  }else{
    tr = "not done";
  };
  try{
    kong();

  }catch(err){
    no = no;
  };
};
function password(rt2){
  
    if (rt2 == true){
    cr = "Done";
  }else{
    cr = "not done";
  };
  try{
    kong();
  }catch(err){
    no = no;
  };
};

  var bol,bol1,bol2,a,b,d,e,f,g;
  $("#x1").on("input", function(){
    $(".kname").text($(this).val())
    a = $(this).val();
    if (a == "Rabin" ){
      $(".kname").css('color','rgb(121, 184, 27)');
       $(".kname").text(a +" is valid");
       bol = "Done";
       name(true);
    }else if(a == ""){
      $(".kname").css('color','red');
      $(".kname").text("empty");
      bol = "not Done";
      name(false);
    }
    else{
      $(".kname").css('color','red');
      $(".kname").text(a +" is not valid");
      bol = "not Done";
      name(false);

    };
    
  });
    $("#x2").on("input", function(){
    $(".kemail").text($(this).val())
    b = $(this).val();
    if (b == "pythoncode15@gmail.com" ){
      $(".kemail").css('color','rgb(121, 184, 27)');
       $(".kemail").text(b +" is valid");
       bol1 = "Done";
       email(true);
    }else if(b == ""){
      $(".kemail").css('color','red');
      $(".kemail").text("empty");
      bol1 = "not Done";
      email(false);
    }
    else{
      $(".kemail").css('color','red');
      $(".kemail").text(b +" is not valid");
      bol1 = "not Done";
      email(false);


    };
    
   
  });

  $("#x3").on("input", function(){;
    $(".kpassword").text($(this).val())
    d = $(this).val();
    c = "password"
    if (d == "admin" ){
      $(".kpassword").css('color','rgb(121, 184, 27)');
       $(".kpassword").text(c +" is valid");
       bol2 = "Done";
      password(true);

    }else if(d == ""){
      $(".kpassword").css('color','red');
      $(".kpassword").text("empty");
      bol2 = "not Done";
      password(false);

    }
    else{
      $(".kpassword").css('color','red');
      $(".kpassword").text(c +" is not valid");
      bol2 = "not Done";
      password(false);

    };
    
    kong();

  });
  
});
