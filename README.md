# Chrome-Extension-Sample

Vanillajs Chrome Extension Sample

### UI Elements

An [extension's user interface](https://developer.chrome.com/extensions/user_interface) should be purposeful and minimal. The UI should customize or enhance the browsing experience without distracting from it. Most extensions have a [browser action](https://developer.chrome.com/extensions/browserAction) or [page action](https://developer.chrome.com/extensions/pageAction), but can contain other forms of UI, such as [context menus](https://developer.chrome.com/contextMenus), use of the [omnibox](https://developer.chrome.com/extensions/omniBox), or creation of a [keyboard shortcut](https://developer.chrome.com/extensions/commands).

<p align=center>
  <img src="https://github.com/Xenia101/Chrome-Extension-Sample/blob/master/img/UI%20Elements.png?raw=true">
</p>

### Content scripts

Extensions that read or write to web pages utilize a [content script](https://developer.chrome.com/extensions/content_scripts). The content script contains JavaScript that executes in the contexts of a page that has been loaded into the browser. Content scripts read and modify the DOM of web pages the browser visits.

<p align=center>
  <img src="https://github.com/Xenia101/Chrome-Extension-Sample/blob/master/img/Content scripts1.png?raw=true">
</p>

Content scripts can communicate with their parent extension by exchanging [messages](https://developer.chrome.com/extensions/messaging) and storing values using the [storage](https://developer.chrome.com/extensions/storage) API.

<p align=center>
  <img src="https://github.com/Xenia101/Chrome-Extension-Sample/blob/master/img/Content scripts2.png?raw=true">
</p>

### References
https://developer.chrome.com/extensions/overview
