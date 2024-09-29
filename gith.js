const {smsg, getGroupAdmins, formatp, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize, InteractiveMessage, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage, cp, exec, promisify, axios, os, fs, TelegraPh, UploadFileUgu, webp2mp4File, floNime, util, cron, fetch, speed, moment, spawn, exec, primbon, performance, ytdl, colors, chalk, more, readmore, toPTT, toAudio, makeWaSocket, useMultiFileAuthState, pino} = require("./const");

process.chdir(__dirname);
require("dotenv").config();
const { Octokit } = require("@octokit/rest");

const clientWithAuth = new Octokit({
    auth: "",
});
let cmd = process.argv[2];
let folderName = process.argv[3];
//create repository

if (cmd === "create") {
    clientWithAuth.repos.createForAuthenticatedUser({
        name: folderName,
    });
}
//delete repo
if (cmd === "delete") {
    clientWithAuth.repos
        .delete({
            owner: "osiafv",
            repo: folderName,
        })
        .then((data) => {
            console.log("success fully delete " + folderName + "repo");
        })
        .catch((e) => {
            console.log(e);
        });
}
