const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_31_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyLFxuICAgICAgICAyLFxuICAgICAgICA3NixcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NixcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgwLFxuICAgICAgICA5NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2c0F1SkxZZDErNjZ1TWNvd3dMMHdEMkxWNERQWjh0dmhEeUg1UVVMaVpJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLdlVDVl9yQVNlNlU0N1hvV2p0TC13XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ2MTg5NjUyLWQyZjUtNGIyZS1hMzJmLTQyZWEwOTJiZmEzYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAyMTMsXG4gICAgICA2MyxcbiAgICAgIDExNSxcbiAgICAgIDM4LFxuICAgICAgODAsXG4gICAgICAxMTYsXG4gICAgICA3MCxcbiAgICAgIDY1LFxuICAgICAgMTExLFxuICAgICAgODIsXG4gICAgICA0OCxcbiAgICAgIDE2NyxcbiAgICAgIDQ2LFxuICAgICAgMTUyLFxuICAgICAgMTg1LFxuICAgICAgMjA0LFxuICAgICAgMTU4LFxuICAgICAgMjUsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxOTEsXG4gICAgICA3NyxcbiAgICAgIDE4NyxcbiAgICAgIDI0NSxcbiAgICAgIDcyLFxuICAgICAgMTM5LFxuICAgICAgMjEyLFxuICAgICAgMTM3LFxuICAgICAgMjI5LFxuICAgICAgMTkzLFxuICAgICAgNTAsXG4gICAgICAxLFxuICAgICAgMTAsXG4gICAgICAyNDcsXG4gICAgICAyNDksXG4gICAgICAxMCxcbiAgICAgIDUxLFxuICAgICAgMjM1LFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkoyRkg3NUVMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTQxMjcxNTc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJkYXZlXCIsXG4gICAgXCJsaWRcIjogXCI3ODQ1MjM0MjQ0NDEzODoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM0FzWlFCRVBmeXM3a0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxJL0h4Z0h3U2RHRTFGdnM3dFZ1ZU9ZS0ZZZ3llS1o3cHByNE1qTlYvMVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia3NJeUJmbUV4LzIrcVNaWFRKd2FxSmNSMHlXWjMrQ1E1ZmFMM0RBbG44Y0g1QmN5RWNROXoxVWNIZ2gyOHR0bDd1MHl4QUpqdXBEOHYvU25GTERTRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaU9pSm1hK3F2OUJ3NDFiOGxHVzBoaUZRQk1neERYcUFNRUJudnBhYktoTDJrS0VLeWRZMU5Jc2ZCaFBHUnZvdVZVQXpCbEtwYWVPNjRVSlhmSjVMaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE0MTI3MTU3OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTAwMDY5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1QVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVBWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZHBnaFRrQkltZ1piQUdVTUxFVDlJbXQvTno1d3piRkZTZXo3MzhtRjQ5dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTExODk1ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDkxMDEyNDgzNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
