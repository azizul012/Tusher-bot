module.exports = {
  config: {
    name: "remove",
    version: "1.0",
    hasPermission: 1, // 1 = Admin, 2 = S-Admin, 0 = User
    credits: "Eren",
    description: "Removes a member from the group.",
    commandCategory: "Admin",
    usages: "[mention]",
    cooldowns: 5
  },

  run: async function({ api, event, args }) {
    if (!event.messageReply) {
      return api.sendMessage("Please reply to a message of the user you want to remove.", event.threadID, event.messageID);
    }

    const mentionID = event.messageReply.senderID;

    api.removeUserFromGroup(mentionID, event.threadID, (err) => {
      if (err) {
        return api.sendMessage("An error occurred. I cannot remove this user.", event.threadID, event.messageID);
      }
      api.sendMessage("User has been successfully removed from the group.", event.threadID);
    });
  }
};
