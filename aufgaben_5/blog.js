
function toggleComment(toggle, commentId) {
    var ele = document.getElementById(commentId);
    if(ele.className == 'comment') {
        ele.className = 'comment-truncated';
        toggle.innerText = 'Kommentar lesen';
    } else {
        ele.className = 'comment';
        toggle.innerText = 'Kommentar ausblenden';
    }
}