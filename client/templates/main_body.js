Template.mainBody.rendered=function(){
  $('body').on('keydown',function(e){
<<<<<<< HEAD
  if(e.which === 38){
    var active=Session.get('active');
    active=(active-1)%numWords;
    if(active<0)active=active+numWords;
    Session.set('active',active);
  }
  else if(e.which === 40){
    var active=Session.get('active');
    active=(active+1)%numWords;
    Session.set('active',active);
  }
    else if(e.which === 39){
      var active=Session.get('active');
      Meteor.call('checkWord',active);
    }
=======
  console.log(e.which);
>>>>>>> bf632c67e786d76d56c32ba3b0de41a373bdb02e
});
}