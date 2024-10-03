const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919496119864";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_18_09_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE2LFxuICAgICAgICA5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDcwLFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAyLFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICA5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTc2LFxuICAgICAgICAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDk0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3bmRZdEcxaXIxbGJLV2JqeVQvb3VtdmltMm5jbmJyaU5iQ0VkdWZzbHE4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTQ5NjExOTg2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODhDNjA2MUUyREI5MEE1MDdBMUUzNjgyMTVDQjQ2NTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3NTU4MzAxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInE3bUlFckZCUWJ1NVQ2TTVHNmlmR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzkwM2ZjMTEtMGIwMi00Y2Q5LWIxMjctNmJmMjY3YzhjN2IwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAyOCxcbiAgICAgIDE2NSxcbiAgICAgIDIyMixcbiAgICAgIDEyMSxcbiAgICAgIDE4NSxcbiAgICAgIDc3LFxuICAgICAgODUsXG4gICAgICAyMjUsXG4gICAgICAxNDMsXG4gICAgICAyMzAsXG4gICAgICAyMzQsXG4gICAgICAxOTMsXG4gICAgICAyMjcsXG4gICAgICAwLFxuICAgICAgMTk0LFxuICAgICAgOTEsXG4gICAgICA0OCxcbiAgICAgIDEzNSxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMTc2LFxuICAgICAgMTg2LFxuICAgICAgMTIwLFxuICAgICAgMTg3LFxuICAgICAgMjA3LFxuICAgICAgMTA5LFxuICAgICAgMTkzLFxuICAgICAgMTgzLFxuICAgICAgMTUzLFxuICAgICAgNixcbiAgICAgIDIxOCxcbiAgICAgIDIyMCxcbiAgICAgIDUzLFxuICAgICAgOTAsXG4gICAgICAwLFxuICAgICAgMTE3LFxuICAgICAgNTgsXG4gICAgICAxMjYsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVk0NVFTV05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTQ5NjExOTg2NDoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE2NzUwNjgzMjU0OTQyOjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIllhaG9v8J+YgfCfmLNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM2R3TUFIRUpibDRiY0dHQlVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRuaE1ObFhZOVhsNjBmTDRKc29mZk41djNLd2xGSDFPUjI2NGhXaTYvR3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVmcrRWpYbG1odExPeUc5Zllzd2xTZWJpaUN0N0pvaGdnRmVVb3FDT1pGeHVDaEM0OUZ5MlMxTFFHTFV5VEZTcFJqWnF0czZSYVF1dlc2KytrNHdZQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWQ5RVdBdVl3SUgycitObHdvOVhzSUEyRHZ1WjJsck01Vy9SRk15bTErRTdCdk1NRmZhS29USlZIOTVJRTl4R0hiYnJqd3NYV3pHekJzbWdlbWVHZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NDk2MTE5ODY0OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc1NTgyOTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNdmJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU12Yi5qc29uIjogIntcImtleURhdGFcIjpcIkIvWWRJMDhwdEkvbzRpK2pIbUgyd3NvMDgyT2xLaGw5NzFvdHJQU0w0Ukk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxNDMyNjQ3NyxcImN1cnJlbnRJbmRleFwiOjIwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDE4LDE5LDIwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc1NTgyODQxOTZcIn0iCn0="  // PUT your SESSION_ID 


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
