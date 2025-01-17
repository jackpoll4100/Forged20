// ==UserScript==
// @name         ForgeSteel 2 Roll20
// @namespace    jackpoll4100
// @version      1.0
// @description  Allows rolling from forge steel character sheets into roll20.
// @author       jackpoll4100
// @match        https://andyaiken.github.io/forgesteel*
// @match        https://app.roll20.net/*
// @match        https://*.discordsays.com/*
// @icon         https://raw.githubusercontent.com/jackpoll4100/Forgesteel2Roll20/refs/heads/main/DS%20logo.png
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// ==/UserScript==

(function() {
  'use strict';
  if (!window.location.href.includes('forgesteel')){
      window.forgesteelEnabled = false;
      function forgesteelToggle(){
          window.forgesteelEnabled = !window.forgesteelEnabled;
      };
      let forgesteelSettingsTemplate =
          `<div id="forgesteelSettings" style="display: flex; flex-direction: row; justify-content: space-between;">
              <input type="checkbox" id="forgesteelEnabled" title="Enables rolling from your Forge Steel character sheet in another tab.">
              <input id="autoCheckLabel" style="margin: 5px 5px 5px 5px; width: 90%" disabled value="Enable rolls from Forge Steel" type="text" title="Enables rolling from your Forge Steel character sheet in another tab.">
           </div>`;
      function GM_onMessage(label, callback){
          GM_addValueChangeListener(label, function(){
              callback.apply(undefined, arguments[2]);
          });
      }
      function execMacro(macro){
          console.log('Forge Steel - Executing Macro: ', macro);
          if (!window.forgesteelEnabled){
              console.log('cancelling macro execution, forgesteel connection not enabled.');
              return;
          }
          document.querySelectorAll('[title="Text Chat Input"]')[0].value = macro;
          document.getElementById('chatSendBtn').click();
      }
      GM_onMessage('forgesteel-pipe', function(message) {
          console.log('forgesteel message received: ', message);
          if (message.includes('template')){
              let cleanedString = message.split('---')[1];
              execMacro(cleanedString);
          }
      });
      function appendForgeSteelSettings(){
          let uiContainer = document.createElement('div');
          uiContainer.innerHTML = forgesteelSettingsTemplate;
          document.getElementById('textchat-input').appendChild(uiContainer);
          document.getElementById('forgesteelEnabled').addEventListener('click', forgesteelToggle);
      }
      function timer (){
          if (document.getElementById('chatSendBtn')){
              appendForgeSteelSettings();
          }
          else{
              setTimeout(timer, 500);
          }
      }
      setTimeout(timer, 0);
      console.log('forgesteel listener registered');
  }
  else {

      function GM_sendMessage(label){
          GM_setValue(label, Array.from(arguments).slice(1));
      }
      console.log('sending open message');
      GM_sendMessage('forgesteel-pipe', 'forgesteel opened');

      let classMap = {
          rollSelector: '.total > div.ant-statistic-content > span > span',
          rollTitles: ['.modal-content .characteristic-modal > div.ant-statistic > div.ant-statistic-title', '.modal-content .ability-panel > div.header-text-panel > div'],
          characterSelector: '.hero-main-column > div.header-text-panel > div',
          rollButton: ''
      };

      function rollWatcher(){

          const roll = document.querySelector(classMap.rollSelector)?.innerHTML;

          let rollTitle = '';
          classMap.rollTitles.forEach((selector)=>{
              rollTitle = document.querySelector(selector)?.innerHTML ? document.querySelector(selector).innerHTML : rollTitle;
          });

          const charName = document.querySelector(classMap.characterSelector)?.innerHTML;
          const constructedMessage = `&{template:default} {{name=${ charName ? `${ charName }` : '' }}} ${ rollTitle ? `{{type=${ rollTitle }}}` : '' } {{result=${ roll } ${ document.querySelector('.ant-alert-success') ? '(Critical Success)' : ''}}}`;
          console.log('Sending message to roll20: ', constructedMessage);
          GM_sendMessage('forgesteel-pipe', `${ Math.random() }---` + constructedMessage);
      }

      const bodyTarget = document.querySelector('body');
      const config = { attributes: false, childList: true, subtree: true };
      const listenerSetup = ()=>{
          const foundElement = document.querySelector('.die-roll-panel > .ant-btn');
          if (foundElement && !foundElement.getAttribute('listener-applied')){
              foundElement.setAttribute('listener-applied', true);
              foundElement.addEventListener('click', ()=>{ setTimeout(rollWatcher, 100); });
          }
      };
      const observer = new MutationObserver(listenerSetup);
      observer.observe(bodyTarget, config);
  }

})();
