Template.availableLetters.helpers({
  letters:function(){
    return Letters.find();
  }
});

Template.availableLetters.events({
  'click .letter':function(e){
    var clicked=$(e.target).attr('id');
    console.log('sending:'+clicked);
    Meteor.call('pop',clicked);
    /*if(null===Meteor.userId()){
      alert('Please login');
    }*/
  }
});

