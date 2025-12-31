const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ISHAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0lNRWR0M2VpWmFHcEd1Zk55OENGVHpoVGtFTExqaStqL3FrWWZqelgxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOU1ueTRiWlNGbVRRSWozc0JkNlVXWkRsdDRWUWVjWkNsSUtDdmhLekEwVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQXB1amVhYXpHS2RheEM1Z2kvQ0ZpRUtFcnQyaWZlY3dBWmw5cFJ1QVhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyNEtJblA3allsUFErTWNXdFhzSWVKb0FQRkljSC9Ga2hDRFk0MnpTeVZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRMeWh5WVhnU29MdW1lenVKZUpGdEl3V08xVDI2aUs1N0tCL3B5Y0lyV2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ6a2FOWGVqUERCUjVBS3hYNmRCQjRJVWhndThJL1V1SHQ2bWZOeGVmWGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdWVjJ1TW1VSE4zVXduMGdIM0FoejExMkc3ZzFQRmVlaWRKOFFFTk0yTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1lHdVdMNUh4bzNLTjdCdkxSOFpKWFlta2ZzOFU0QUM0UXNGbkwwQzhpbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklkRmg5K044Nnh6akd3bUVjMnIvZmlyczZsTUp0WEw5ZlpKSm93U284NFoxa0NGTHd3WEkxSCtTOFNxZDBLSm40OTZvdW5YWUd0V1hOZFYxMk9ZVEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJiZ3FvVkpiSEVYdklhd2tlc3NJYk5Ja2h5UGdSQlRzZi9RTnVNUDBITGdRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwaGh6eHN5blJ2cWoxVmNEaG5JUUtRIiwicGhvbmVJZCI6ImRiMGQzMzBlLWY1N2EtNGZjYS05YzdkLTMzZGYwZTY0YTE4YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmOVVkdlhaQTJPd280TnVGK2hZWG5yT0NORkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTN6QjdhMWN3cFdyYkVUVTNhU0IrWmFrbTNNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxTVlE5VDRBIiwibWUiOnsiaWQiOiI5NDc2MTYzODM3OTo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKJqyBA8J2ZhPCdmY7wnZmD8J2YvPCdmYkt8J2ZkyDiiasiLCJsaWQiOiIyNzM2MjAxNjk0MTY3MDY6N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B2a3hia0hFTW0yMDhvR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJXUWljdmVVYlpUTlMweFQ0UWpXYVJ5RUtpYjZVMjJEZFRoRTdKSGJtQ1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImkwbWlrajF3RzlyT24zemFaZUJSSHJrc1BiWkpxS3VXdTJKem03VURBL3p3N1hTbHV2ekhLMGZ2Qm9LYWNiNDUza2hQa2FVQm1VcFU1VFdqS1JUM0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0RUNYc1R5WkMxaHZ3Vi9vTVhZMGlHdi9kS1Qzb1FPeDBHUXJNNjJOVUFOc1BmTUhqRFFVU0FsWFNaR3IxaHd0a3IvSjM0TWZobE5DRnJ6dGNBWnFEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYxNjM4Mzc5OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTFrSW5MM2xHMlV6VXRNVStFSTFta2NoQ29tK2xOdGczVTRST3lSMjVnbSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUNRZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY3MTY4ODU0LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ISHAN-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/7dG1XghF/9393b876bdc4ff00.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ISHAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ISHAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94785457011",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ISHAN-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝚋𝚢 𝙸𝚂𝙷𝙰𝙽-𝚇 ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/7dG1XghF/9393b876bdc4ff00.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
