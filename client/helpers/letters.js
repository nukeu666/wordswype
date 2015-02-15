Meteor.call("getSessionId", function(err, connId) {
  console.log("ID:"+connId);
  Meteor.subscribe('words',connId);
  Meteor.subscribe('letters',connId);
  conId=connId;
});