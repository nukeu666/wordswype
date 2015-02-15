<<<<<<< HEAD
Meteor.call("getSessionId", function(err, connId) {
  console.log("ID:"+connId);
  Meteor.subscribe('words',connId);
  Meteor.subscribe('letters',connId);
  conId=connId;
});
=======
Meteor.subscribe('letters');
>>>>>>> bf632c67e786d76d56c32ba3b0de41a373bdb02e
