// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// add dev css in disabled state
var linkDev = document.createElement('link');
linkDev.type = 'text/css'
linkDev.href = 'https://git.iddkingsonline.com/designsystem-dev/css/main.css'
linkDev.rel ='stylesheet';
linkDev.id = 'devcss';
linkDev.disabled = true;
document.head.appendChild(linkDev);

var linkLive = document.querySelector('[href="https://git.iddkingsonline.com/designsystem/css/main.css"]');

// upon status change
chrome.storage.onChanged.addListener(() => {
  chrome.storage.sync.get('status', function(data) {
    var current = data.status;
    current === 'inactive'
      // if status is inactive disable dev and activate live css
      ? ( linkDev.disabled = true,
          linkLive.disabled = false)
      // if status is active disable live and activate dev css
      : ( linkLive.disabled = true,
          linkDev.disabled = false);
  });  
});
