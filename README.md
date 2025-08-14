# Forged20
A tool that enables rolls from Drawsteel character sheets built in the Forge Steel character builder to be rolled into Roll20.

Note that this tool does not use the Roll20 api and so should not require you to be a Pro member to make use of it.

This tool is also compatible with the Discord Activity for Roll20.

I am not connected to the people building Forge Steel, their repository can be found here: https://github.com/andyaiken/forgesteel

And the builder itself can be found here: https://andyaiken.github.io/forgesteel/#/

## Overview
This is a ```UserScript```, meaning it needs to be used with a browser extension like [TamperMonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [ViolentMonkey](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) etc.

Once you have one of those extensions, you can enable it by clicking the install button on this page:

https://greasyfork.org/en/scripts/524075-forged20

When enabled, it creates a communication layer between Forge Steel and Roll20, allowing rolls made in your Forge Steel character sheet to automatically appear in Roll20 (with the same roll result that shows in Forge Steel).

Note, if you are on Google Chrome, you will need to turn on the developer mode extension setting for Tampermonkey to work properly, see the instructions here:

https://www.tampermonkey.net/faq.php#Q209

This should not be necessary for firefox users.

## Getting Started

Once you have added the userscript to your extension of choice and enabled it, you have everything you need (do note the caveat about the developer setting on chrome above).

Each time you open Roll20, you should see an extra bit of ui under the chat box labelled 'Enable rolls from Forge Steek'.
This checkbox defaults to off whenever you open a new Roll20 session to prevent you from making rolls accidentally.

If you check the checkbox, any rolls made from any Forge Steel character sheet open in any of your browser tabs will be "funneled" to Roll20 and appear in the Roll20 chat. Keep in mind you must have both Roll20 and Forge Steel open in the same browser for this to work.

## Changelog:

1.1 - Added support for displaying the tier results in roll20 (and having the edges and banes modify those as well).
1.2 - Addressed some bugs introduced by changes in new version of Forgesteel.
