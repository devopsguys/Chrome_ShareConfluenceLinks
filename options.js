// Saves options to chrome.storage
function save_options() {
  var confluence_url = document.getElementById('confluence_url').value;
  chrome.storage.sync.set({
    confluence_url: confluence_url
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value confluence_url = 'devopsguys.atlassian.net'
  chrome.storage.sync.get({
    confluence_url: 'devopsguys.atlassian.net'
  }, function(items) {
    document.getElementById('confluence_url').value = items.confluence_url;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);