#!/usr/bin/env node
const yargs = require('yargs');
const slackifyMarkdown = require('slackify-markdown');

const argv = yargs
  .option('message', {
    alias: 'm',
    description: 'The message content',
    type: 'string',
  })
  .help()
  .alias('help', 'h').argv;

if (argv.message) {
  console.log(slackifyMarkdown(argv.message));
}
