// Saves options to chrome.storage
function save_options() {
  var jira_url = document.getElementById('jira_url').value;
  chrome.storage.sync.set({
    jira_url: jira_url
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
  // Use default value jira_url = 'devopsguys.atlassian.net'
  chrome.storage.sync.get({
    jira_url: 'devopsguys.atlassian.net'
  }, function(items) {
    document.getElementById('jira_url').value = items.jira_url;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);