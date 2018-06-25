import WebClient from '@slack/client';

//An access token (from slack app)
const token  = process.env.SLACK_TOKEN;

const web = new WebClient(token);

//this argument can be a channel ID, a DM id, a MPDM id, or a group ID
const conversationId = 'C123456';

//POST A message
web.chat.postMessage({
    channel: conversationId,
    text: 'Hello there'
}).then((res) => {
    console.log('Message sent: ', res.ts);
}).catch(console.error);
