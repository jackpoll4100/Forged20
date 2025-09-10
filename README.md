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

When enabled, it creates a communication layer between Forge Steel and Roll20, allowing rolls and abilities/features made in your Forge Steel character sheet to be sent to Roll20 (with the same roll result that shows in Forge Steel).

Note, if you are on Google Chrome (as well as Brave and Opera), you will need to turn on the developer mode extension setting for Tampermonkey to work properly, see the instructions here:

https://www.tampermonkey.net/faq.php#Q209

This should not be necessary for Firefox users.

## Getting Started

Once you have added the userscript to your extension of choice and enabled it, you have everything you need (do note the caveat about the developer setting on chrome above).

Each time you open Roll20, you should see an extra bit of ui under the chat box labelled 'Enable Forged20'.
This checkbox defaults to off whenever you open a new Roll20 session to prevent you from making rolls accidentally.

<img width="303" height="133" alt="image" src="https://github.com/user-attachments/assets/884be839-2228-4a03-ac71-61c6adf42131" />

If you check the checkbox, any rolls made from any Forge Steel character sheet open in any of your browser tabs will automatically be sent to Roll20 and appear in the Roll20 chat. Keep in mind you must have both Roll20 and Forge Steel open in the same browser for this to work.

<img width="368" height="856" alt="image" src="https://github.com/user-attachments/assets/8d7de2d8-58d4-4ab5-a189-64c4798b3661" />

With version 2.0, you can now also send any ability or feature from your Forge Steel sheet to Roll20. Start by opening the panel for that ability/feature, and you will see a button that says "Send to Roll20" in the bottom right corner of the panel. Clicking this will send the ability to the Roll20 chat (as long as you have checked the "Enable Forged20" box mentioned in the previous step). This should allow you to send any "non rollable" abilties and features to Roll20 chat to reference.

<img width="501" height="377" alt="image" src="https://github.com/user-attachments/assets/f7465aa5-c755-4f53-a388-d55cbd181145" />

Also, if you are using the Community Drawsteel character sheet for Roll20, you will see an additional button in the import section labelled "Import directly from Forgesteel", this will copy over whichever Forgesteel character you currently have open in another tab into the sheet. This is just a convenience feature to avoid needing to export and copy paste the character data from Forgesteel but note that I do not maintain that importer, it is a part of the character sheet itself and currently only imports things like stats etc., not abilities/power cards.

<img width="854" height="169" alt="image" src="https://github.com/user-attachments/assets/2f61fc5c-80c5-4836-845c-d78c14745a8f" />


## Changelog:

1.1 - Added support for displaying the tier results in roll20 (and having the edges and banes modify those as well).

1.2 - Addressed some bugs introduced by changes in new version of Forge Steel.

1.3 - Much improved macros that have more complete information from the Forge Steel ability cards. Also added plumbing for Forge Steel -> Roll20 imports via the in development character sheet, will add more details on that once the character sheet is officially released.

2.0 - Changed the method of sending rolls so that they can preserve the look and feel of forgesteel rolls and cover more use cases. Also, added sending of any ability or feature to Roll20 from the side panel.
