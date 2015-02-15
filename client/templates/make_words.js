Template.makeWords.helpers({
  wordLine:function(){
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