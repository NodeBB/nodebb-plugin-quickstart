# Quickstart Plugin for NodeBB

A starter kit for quickly creating NodeBB plugins.

This plugin creates two new pages, one public page at /quickstart and one admin page at /admin/plugins/quickstart. Each page has it's own styling defined in the styles files static/styles/client.scss and static/styles/admin.scss.



Most plugins need at least one of the above, so this ought to save you some time. For a full list of hooks have a look at our [wiki page](https://github.com/NodeBB/NodeBB/wiki/Hooks), and for more information about creating plugins please visit our [documentation portal](https://docs.nodebb.org/).

Fork this or copy it, and using your favourite text editor find and replace all instances of `nodebb-plugin-quickstart` with `nodebb-plugin-your-plugins-name`. Change the author's name in the LICENSE and package.json files.

## Hello World

Really simple, just edit `static/lib/main.js` and paste in `console.log('hello world');`, and that's it!

## Installation

    npm install nodebb-plugin-quickstart

## Screenshots

Don't forget to add screenshots!
