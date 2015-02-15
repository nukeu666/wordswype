Template.makeWords.helpers({
  wordLine:function(){
<<<<<<< HEAD
    var active=Session.get('active');
    var col= Words.find({userId:conId},
        {transform:function(d){d.act=(d.seq===active);return d;}},{sort:{seq:1}});
    console.log(col.fetch());
    return col;
  }
});

Template.makeWords.rendered=function(){
  Session.setDefault('active',0);
};
=======
    //return an array of words
    return Words.find({},{sort:{seq:1}});
  }
});
Template.makeWords.rendered=function(){
  Session.setDefault('active',0);
};
// Template.word.helpers({
  
// });
>>>>>>> bf632c67e786d76d56c32ba3b0de41a373bdb02e
