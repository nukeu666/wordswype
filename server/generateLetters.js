<<<<<<< HEAD
Meteor.publish('letters',function(userId){
  console.log("ask let:"+userId);
  return Letters.find({"userId":userId});
});
Meteor.publish('words',function(userId){
  console.log("ask wor:"+userId);
  return Words.find({"userId":userId});
});
var generateLetters=function(userId){
  Letters.insert({"letter":makeChar(),"userId":userId});
=======
Meteor.publish('letters',function(){
  return Letters.find({});
});
Meteor.publish('words',function(){
  return Words.find({});
});
var generateLetters=function(){
  Letters.insert({"letter":makeChar()});
>>>>>>> bf632c67e786d76d56c32ba3b0de41a373bdb02e
}
var makeChar=function(){
  return String.fromCharCode(Math.random()*26+65);
}

<<<<<<< HEAD
function observeLetters(userId){
  return Letters.find({"userId":userId}).observeChanges({
    removed:function(){
      //console.log('generated:'+userId);
      generateLetters(userId);
  }});
}
function createLetters(userId){
  while(Letters.find({userId:userId}).count()<numLetters){
     generateLetters(userId);
 }
}
function createWords(userId){
  for(var t=0;t<numWords;t++){
     Words.insert({
      word:"",
      seq:t,
      userId:userId
      });
  }}
function wordSwype(userId){
  this.userId=userId;
  this.score=0;
  createLetters(userId);
  this.letterObserver=observeLetters(userId);
  createWords(userId);
}

var games={};
Meteor.onConnection(function(conn){
  console.log("open:"+conn.id);
  games[conn.id]=new wordSwype(conn.id);
  conn.onClose(function(){
    console.log("close:"+conn.id);
    Words.remove({userId:conn.id});
    Letters.remove({userId:conn.id});
    games[conn.id].letterObserver.stop();
    delete games[conn.id];
  });
});
=======
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

>>>>>>> bf632c67e786d76d56c32ba3b0de41a373bdb02e
