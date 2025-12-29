const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ISHAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dUSUFKZDFDNVZMa1hjMUhGMXBOMy9nM2hkR09zS3NDUllHWGt2RmoyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmY2TDFWYytxZDdKZ2lJcStQdGJyeTdzR2MrdC84dlYxenFlN3c5cmJ3cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTzlJVU0wSmFWZ1F0M0ltRDhheTlxa2dQbUVsWkxUeXVOanVpVmtWOG0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtaTg5R1NLdGl2NkQ0dUkzQ05NZTVHRDdTNFFIa25iOWY4TXJGc2xFNHpJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMNEx0SXJZbjFaQTI5YUZ2TjAycTBFZkl1TGtpRi95MGVaZkhpeDZQSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxwMWVLVFVMaWswS1A1L0tHeEZUOUI5Q0JYNXdkTWg2Nk9tN1k4UC9UaFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExRQjc5b08vZnZJMmNUZGVPazN4MktVelFMWG1nU0R4WHpnaUtXRDNucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEVoSHNpTkNwV1U5R25Qdkk1ekhOVW14dnl0Y3hlK3BUcjdPbWFVZzJCcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxjeXIreUhxdVFVMmlyMHNUbk9GQjFmYy9JQUM1YitEbFp3M3FXdm1LbHo3MERvRG0vQ2hFZkd0a2JFZTc4dVpyVDlYM2lxMnZlUHhISzlVNFdCOUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJoY3JVUXdoSDlGY3FPSGwxcFlRZVZwYk1KRlNRSm0weDRHcXJJSStqZXNFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllVUFJBREVWIiwibWUiOnsiaWQiOiI5NDc4NTQ1NzAxMTo1OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIzOTkxMzIzMjUxNTMwNTo1OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lXMGdJSUZFTTdneXNvR0dCTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFhRFM1YVpRZ3pvOE5wazdpd1RQU01vdURnL2w2T0tHY3d2VEcrVmFKd0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVsUTUrYWxxb1JOQUszMlpoYTBDR1lPQm9uM0pJU2xJS25pRlhGMHB5N2dPL09oVldIK1hGTC9kaEFIUFNyTkZoWWJrNjY4ZjdGL3pmNTNZZnVpQUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxTVo4U2RiODhKQUhzcmd1Z0x4Uk9JZUdwYlN6UDM3WTRka1lWVExSdzY1WmIzVGY5OGtkSHVaZi9nZzlvVzROWDNqSDN6TCtTOE5XeUQzSjR2OHFDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg1NDU3MDExOjU5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRXZzB1V21VSU02UERhWk80c0V6MGpLTGc0UDVlamlobk1MMHh2bFdpY0EifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUWdTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NzAyNjc3OSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV6ayJ9",
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
