var notificationCount = 0;
function randomMessage() {
    notificationCount++; 
    var message = "Notification " + notificationCount; 
    var notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.getElementById("notificationContainer").appendChild(notification);

    setTimeout(function() {
        notification.remove(); 
    }, 3000);
}

document.getElementById("randomButton").addEventListener("click", randomMessage);

