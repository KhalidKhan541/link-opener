chrome.runtime.onMessage.addListener((msg, s, resp) => { if(msg.action === 'openAll') { msg.urls.forEach(url => chrome.tabs.create({url, active: false})); resp({success: true}); } });
