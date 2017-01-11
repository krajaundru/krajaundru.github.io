angular.module("jsrc", [])

angular.module('jsrc').controller("mainController", function() {
  var that = this;
  
  activate();
  
  function activate() {
     var message = {
         title: "They Don't Want To Lose Pawan Kalyan",
         content: `This is on GitHub so let me know if I've b0rked it somewhere.
                   Props to Mr. Doob and his code editor, from which the inspiration to this, 
                   and some handy implementation hints, came.`
     };
     var messages = [];
     for (var i = 0; i < 15; i++) {
       messages.push(message);
     }
     that.messages = messages;
  }
  
  that.cancel = function() {that.isAdd = false;}  
  that.newAdd = function() {
    that.isAdd = true;
  }  
  that.isAdd = false;
  that.fc = {};
  that.save = function() {
    that.messages.unshift(that.fc);
    that.fc = {};
    that.isAdd = false;
  }
});