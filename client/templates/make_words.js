Template.makeWords.helpers({
  wordLine:function(){
    //return an array of words
    return Words.find({},{sort:{seq:1}});
  }
});
Template.makeWords.rendered=function(){
  Session.setDefault('active',0);
};
// Template.word.helpers({
  
// });