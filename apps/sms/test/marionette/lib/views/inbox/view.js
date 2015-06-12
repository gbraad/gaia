'use strict';

/* global module */

var InboxAccessor = require('./accessors');

function InboxView(client) {
  this.client = client;
  this.accessors = new InboxAccessor(client);
}

InboxView.prototype.goToFirstThread = function() {
  this.accessors.firstConversation.tap();
  var ConversationView = require('../conversation/view');
  var conversation = new ConversationView(this.client);
  conversation.accessors.waitToAppear();
  return conversation;
};

InboxView.prototype.createNewMessage = function() {
  this.accessors.createNewMessageButton.tap();
  var NewMessageView = require('../new-message/view');
  var newMessage = new NewMessageView(this.client);
  newMessage.accessors.waitToAppear();
  return newMessage;
};

module.exports = InboxView;
