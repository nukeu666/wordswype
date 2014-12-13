Meteor.publish('letters',function(){
  return Letters.find({});
});
Meteor.publish('words',function(){
  return Words.find({});
});
var generateLetters=function(){
  Letters.insert({"letter":makeChar()});
}
var makeChar=function(){
  return String.fromCharCode(Math.random()*26+65);
}

var letterCount=Letters.find({});
var addLetters=letterCount.observeChanges({
  removed:function(){
    console.log('generated');
    generateLetters();
  }
});
Meteor.startup(function(){
  while(Letters.find().count()<numLetters){
     generateLetters();
 }
});


