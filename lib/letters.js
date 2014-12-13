Letters=new Mongo.Collection("letters");
Words=new Mongo.Collection("words");
numWords=3;
numLetters=10;

Meteor.methods({
  pop:function(letter,active){
    var theLetter=Letters.findOne(letter);
    console.log('server pop:'+letter+":"+theLetter.letter);
    var oldWord=Words.findOne({seq:active}).word;
    Words.update({seq:active},{$set:{word:oldWord+theLetter.letter}});
    Letters.remove(theLetter);
  },
  checkWord:function(active){
    var oldWord=Words.findOne({seq:active}).word;
    Words.update({seq:active},{$set:{word:""}});
    //verify word
    //modify score
  }
});
