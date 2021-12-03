const conf = require("../../../../a-sunucuayar.json")
const { green } = require("../../../../a-emoji.json");

module.exports = async (message) => {
  if (message.content.toLowerCase() === "tag" || message.content.toLowerCase() === "!tag" || message.content.toLowerCase() === ".tag") {
    message.react(green);
    message.lineReply(conf.tag);
  }
};
module.exports.conf = {
  name: "message"
};