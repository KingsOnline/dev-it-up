// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({status: 'inactive'}, function() {
    console.log('The extension is inactive.');
  });
});

chrome.action.onClicked.addListener(() => {
  chrome.storage.sync.get('status', function(data) {
    var current = data.status;
    current = (current === 'inactive' ? 'active' : 'inactive');
    chrome.storage.sync.set({status: current}, function() {
      console.log('The extension is ' + current);
    });
    // update icon
    chrome.action.setIcon({path: 'images/icon-change-' + current +'-16.png'});
  });  
});
