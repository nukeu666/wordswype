Template.availableLetters.helpers({
  letters:function(){
    return Letters.find();
  }
});

Template.availableLetters.events({
  'click .letter':function(e){
    var clicked=$(e.target).attr('id');
    console.log('sending:'+clicked+" "+Session.get('active')+" "+conId);
    Meteor.call('pop',clicked,Session.get('active'),conId);
    /*if(null===Meteor.userId()){
      alert('Please login');
    }*/
  }
});

