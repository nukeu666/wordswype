Template.availableLetters.helpers({
  letters:function(){
    return Letters.find();
  }
});

Template.availableLetters.events({
  'click .letter':function(e){
    var clicked=$(e.target).attr('id');
<<<<<<< HEAD
    console.log('sending:'+clicked+" "+Session.get('active')+" "+conId);
    Meteor.call('pop',clicked,Session.get('active'),conId);
=======
    console.log('sending:'+clicked);
    Meteor.call('pop',clicked);
>>>>>>> bf632c67e786d76d56c32ba3b0de41a373bdb02e
    /*if(null===Meteor.userId()){
      alert('Please login');
    }*/
  }
});

