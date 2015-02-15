Letters=new Mongo.Collection("letters");
Words=new Mongo.Collection("words");
numWords=3;
numLetters=10;

Meteor.methods({
  pop:function(letter){
    console.log('server pop:'+letter);
    Letters.remove(Letters.findOne({_id:letter}));
  }
});
