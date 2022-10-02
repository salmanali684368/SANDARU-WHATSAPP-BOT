const { generateMessageID, downloadContentFromMessage, proto, generateWAMessageFromContent, prepareWAMessageMedia, areJidsSameUser, getLastMessageInChat, jidDecode } = require('@adiwajshing/baileys');
const colors = require('colors');
const axios = require('axios');
const util = require('util');
const chalk = require('chalk');
const { times, fetchJson, isUrl, getBuffer, getRandom, sleep, getGroupAdmins, downloadMediaMessage, runtime, jsonformat, formatDate, tanggal, formatp } = require('./utils/smsg');
const { y2mateV, y2mateA } = require('./utils/ytdl');
const fs = require('fs');
const os = require('os');
const { color, mylog, infolog } = require("./lib/color")
const moment = require('moment-timezone');
const ytdl = require('ytdl-core');
const hentai = require('nhentai');
const fdl = require("caliph-api");
const hikki = require("hikki-me");
const ffmpeg = require('fluent-ffmpeg');
const PhoneNumber = require('awesome-phonenumber');
const readline = require('readline');
const { performance } = require('perf_hooks');
const speed = require('performance-now')
const { exec, spawn } = require('child_process');
const toMs = require("ms")
let print = console.log;
const cooldown = new Map();

const fke = '```'

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}


module.exports = index = async(conn, m, store, warn) =>{
try {
	var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
	var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "!" : prefa ?? global.prefix
	const jsn = JSON.parse(fs.readFileSync('./src/database.json'));
	const dta = JSON.parse(fs.readFileSync('./database/setting.json'));
	const args = body.trim().split(/ +/).slice(1)
	const arg = body.substring(body.indexOf(" ") + 1);
	const isCmd = body.startsWith(prefix)
	const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
	const from = m.key.remoteJid ? m.key.remoteJid : m.key.participant
	const sender = m.key.participant ? m.key.participant : m.key.remoteJid
	const senderName = m.pushName ? m.pushName : ''
	const pushname = m.pushName || "No Name"
	const text = q = args.join(" ")
	const fatkuns = (m.quoted || m)
	const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const qmsg = (quoted.msg || quoted)
	const isMedia = /image|video|sticker|audio/.test(mime)

	const isGroup = from.endsWith('@g.us')
	const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupDesc = isGroup ? groupMetadata.desc : ''
	const groupId = isGroup ? groupMetadata.id : ''
	const number = [`global.owner@s.whatsapp.net`]
	const isOwner = number.includes(sender)
	const botNumber = await conn.decodeJid(conn.user.id)
	const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : ''
	const isGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isBotGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const participants = m.isGroup ? await groupMetadata.participants : ''
	let who = m.mentions && m.mentions[0] ? m.mentions : m.fromMe ? this.user : m.sender 
	require('./setting');

const downloadContentFromMediaMessage = async(m) => {
let mime = (m.msg || m).mimetype || ''
const stream = await downloadContentFromMessage(m.quoted ? m.quoted : m.msg, mime.split("/")[0])
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

	const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG!*`,jpegThumbnail: global.thumb}}}
	const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6283102650464-1589321480@g.us","inviteCode": "m","groupName": "XCoco", "caption": `XCoco MD`, 'jpegThumbnail': global.thumb}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': global.thumb}}}

		// TEMPLATE BUTTON!
		const buttonsDefault = []

        if (m.message) {
            conn.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.white(chalk.bgGreen(new Date)) + '\n          ' + chalk.white(chalk.bgMagenta(budy || m.mtype)) + '\n' + chalk.green('=> Dari'), chalk.magenta(pushname), chalk.yellow(m.sender) + '\n' + chalk.green('=> Di'), chalk.blueBright(m.isGroup ? pushname : 'Private Chat', from) + '\n' + chalk.magenta(''))
        }

// START COMMAND
switch(command){
			case'menu':
			case'help': {
				footerr = `🗓️ : ${tanggal(new Date)}`
				anu = `${fke}${m.pushName}${fke}\n\n*ENGLISH :*\n${fke}THIS BOT IS MADE TO EASY TO DOWNLOAD MUSIC & VIDEOS EVEN MEDIA FROM TIKTOK! IF YOU ARE LOOKING FOR A BOT WITH MORE FEATURES TRY TO FIND ANOTHER BOT :)${fke}
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
*( 📃 ) LIST MENU!*

   ╰≻ ${prefix}Play
   ╰≻ ${prefix}Sticker
   ╰≻ ${prefix}TikTok`,
					btn = [{
                                urlButton: {
                                    displayText: 'SANDARU MD!',
                                    url: 'https://chat.whatsapp.com/CF1UzSe346d9oAMxupysGT'
                                }
                            }]

				conn.send5ButLoc(from, anu, footerr, global.thumb, btn)
 				 }                      
				break
			case 'owner':
			case 'creator': {
                conn.sendContact(from, global.owner, m)
          	  }
        	    break
			case 'sticker': case 's': case 'stickergif': case 'sgif': {
        	   if (/image/.test(mime)) {
              	  let media = await conn.downloadMediaMessage(qmsg)
            	    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
             	   await fs.unlinkSync(encmedia)
         	   } else if (/video/.test(mime)) {
        	    m.reply(act.proc)
        	        if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
             	   let media = await conn.downloadMediaMessage(qmsg)
             	   let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
        	        await fs.unlinkSync(encmedia)
      	      } else {
       	         m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
       	         }
        	    }
        	    break
			case 'stickerwm':
			case 'swm':
			case 'stickergifwm':
			case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
            	m.reply(act.proc)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
        	    }
        	    break
			case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${prefix + command}*`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(from, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
       	     }
     	       break
			case 'play':
			case 'ytplay': {
                if (!text) return m.reply(`Example : ${prefix + command} Deddy Corbuzier`)
                m.reply(act.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    { quickReplyButton: { displayText: `Ⓥ AUDIO`, id: `ytmp3 ${anu.url}` } },
                    { quickReplyButton: { displayText: `Ⓥ VIDEO`, id: `ytmp4 ${anu.url}` } }
                ]
                let buttonMessage = {
                    image : { url: anu.thumbnail },
                    caption : `${fke}YOUTUBE PLAY!${fke}`,
                    footer : `${anu.title}\n
[ 📹 ] : ${anu.timestamp}
[ 👀 ] : ${anu.views}
[ 👤 ] : ${anu.author.name}
[ 🖇 ] : ${anu.url}`,
                    templateButtons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
                console.log(anu)
      	      }
      	      break
			case 'ytmp3':
			case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                conn.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
       	     }
        	    break
            case 'ytmp4':
			case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                conn.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${media.title}` }, { quoted: m })
        	    }
        	    break
			case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`_CONTOH : !Menfes 628 ×××××|Pesan_`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let pesan = q.split('|')[1] ? q.split('|')[1] : ''
				if (pesan.length < 1) return m.reply(`_CONTOH : !Menfes 628 ×××××|Pesan_`)
				 let teksnya = `Hii Kak Ada Menfes Atau Surat Nih\nSaya Bot WhatsApp Hanya Pengantar!\n\nDari : Rahasia\nPesan : ${pesan}`
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 but = [
                    { quickReplyButton: { displayText: `CONFIRM <3`, id: `menfesconfirm ${m.sender}` } }
                		]
					conn.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, templateButtons: but, footer: `` })
				m.reply(`Sukses Mengirim Menfess!`)
				break

			case 'menfesconfirm':
 				 conn.sendMessage(q, {text: `Pesanmu Sudah Di Baca <3`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
				break
			case 'tiktoknowm':
			case 'tiktok':
			case 'tt':
			    if (!text) return m.reply('masukkan link nya')
				let p = await fdl.downloader.tiktok(q)
				let nih = `*[ 👤 ] UPLOAD :* ${p.author}`
				let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'AUDIO'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: p.nowm },
                    caption: nih,
                    title: 'TIKTOK DOWNLOADER',
                    footer: '',
                    buttons: buttons,
                    headerType: 5
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
            
			    break
			case 'tiktokmp3': 
			case 'tiktokaudio': {
				if (!text) return m.reply('masukkan link nya')
				let aud = await fdl.downloader.tiktok(text)
				let cap = ``
				conn.sendMessage(from, { audio: { url: aud.audio }, mimetype: 'audio/mpeg'}, { quoted: m })
				}
				break
			case 'kick': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'tes':{
			let buttons = [
                    {buttonId: `owner`, buttonText: {displayText: 'TES OWNER'}, type: 1}
                ]
                conn.sendMessage(from, {text:`Connected! Siap Di Pakai :)\nBot Simpel Download & Media TikTok`, title: 'WALLET', footer: 'XCoco Multi Device', buttons: buttons})
                }
                break
			case 'tagall': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply('_Bot Not Admin!_')
                if (!isAdmins) return m.reply('_Only Admin!_')
				let teks = `\`\`\`[ 👄 ] TAG ALL MEMBER!!\`\`\`\n\n`
                for (let mem of participants) {
                teks += `╰≻ @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
			case 'ping': case 'botstatus': case 'statusbot': {
           	  const used = process.memoryUsage()
           	  const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
           	  })
           	  const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
        	     }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
           	  }
         	    })
           	  let timestamp = speed()
        	     let latensi = speed() - timestamp
          	   neww = performance.now()
      	       oldd = performance.now()
       	      respon = `
RESPON : ${latensi.toFixed(4)} DETIK!\nRUNTIME : ${runtime(process.uptime())}`.trim()
                m.reply(respon)
       	     }
         	   break
			case 'emojimix': {
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1) return m.reply(`_CONTOH : !EMOJIMIX 😅 + 🤔_`)
				if (!emoji2) return m.reply(`_CONTOH : !EMOJIMIX 😅 + 🤔_`)
				let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
				for (let res of anu.results) {
				    let encmedia = await conn.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
				    await fs.unlinkSync(encmedia)
				}
	 		   }
	  		  break
			case 'hidetag': {
           	 if (!m.isGroup) return m.reply(act.gc)
            	if (!isBotAdmins) return m.reply(act.botadm)
          	  if (!isAdmins) return m.reply(act.admin)
         	   conn.sendMessage(from, { text : q ? q : 'XCoco' , mentions: participants.map(a => a.id)}, { quoted: m })
         	   }
            	break
            case 'totag': {
               if (!m.isGroup) return m.reply(act.gc)
               if (!isBotAdmins) return m.reply(act.botadm)
               if (!isAdmins) return m.reply(act.admin)
               if (!m.quoted) return m.reply(`_CONTOH : REPLY PESAN & KETIK !TOTAG_`)
               conn.sendMessage(from, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
case 'linkgroup': case 'linkgc': {
			if (!isGroup) return m.reply(act.gc)
			if (!isBotGroupAdmins) return m.reply(act.admin)
				var url = await conn.groupInviteCode(from).catch(() => m.reply(mess.error.api))
			    url = 'Https://chat.whatsapp.com/'+url
				m.reply(url)
}
				break
					case 'sc':
			case 'script':
			case 'donasi':{
				let message = {
  				"requestPaymentMessage": {
   				 "currencyCodeIso4217": "RP",
  				  "amount1000": "10000000",
   				 "requestFrom": m.sender,
   				 "noteMessage": {
     				 "extendedTextMessage": {
        				"text": `*DONASI BOT SIMPEL :)*\n   ╰≻ *DANA : 085755825621*\n   ╰≻ *PULSA : 081392791658*\n\n*MAU SCRIPT ? HUBUNGI OWNER ( !OWNER )*\n*NOTE : BELI YA ANJG MURAH COY!*`,
    				    "footer": "testes",
    		 		    "contextInfo": {
    				      "forwardingScore": 9999,
    				      "isForwarded": true
    				    }
   				   }
  				  },
  				"showAdAttribution": true,
  				  "expiryTimestamp": "1660787819",
   				 "amount": {
     				 "value": "7900",
    				  "currencyCode": "USD"
    				}
  				}
				}
conn.relayMessage(m.chat, message, {messageId: generateMessageID()})
				}
           	 break
// BATAS AKHIR COMMAND
default:
if (budy.includes('bot') || budy.includes('Bot')) {
	let mojii = ["🤧","🤨","🗿","🤪","🤫","🤬","🤭","🤮","🤯","🤟","🤠","🤡","🤢","🤣","🤤","🤥","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗"]
			let ran = mojii[Math.floor(Math.random() * mojii.length)]
const reactionMessage = {
    react: {
        text: ran, 
        key: m.key
    }
}

conn.sendMessage(from, reactionMessage)
	}
        if ((m.mtype === 'groupInviteMessage' || budy.startsWith('https://chat') || budy.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        	let buttons = [
                    {buttonId: `owner`, buttonText: {displayText: 'DEVELOPER'}, type: 1}
                ]
			conn.sendMessage(from, {text:`Mau Masukin Bot Ke Group Kamu? Hubungi Developer`, title: 'LINK GROUP DECTETED', footer: 'XCoco Multi Device :)', buttons: buttons, headerType: 5})
		}
if (budy.startsWith("$") && isCreator) {
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) m.reply(`${stdout}`.trim())
})
}
if (budy.startsWith(`>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(m.key.remoteJid, { text: JSON.stringify(eval(body.slice(2)), null, 2)}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(from, { text: String(e)}, { quoted: m})}
}
if (budy.startsWith(`=>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(from, { text: util.format(eval(`( async () => { return ${body.slice(3)}})()`))}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(`6283102650464@s.whatsapp.net`, { text: String(e) }, { quoted: m})
}
}
}
} catch(e) {
print(`[x] Error: ${e}`.red)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update!`), chalk.yellow(`${__filename}`))
	delete require.cache[file]
	require(file)
})
