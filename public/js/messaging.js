const messaging=firebase.messaging();
function addDeviceToGroup(token)
{
    console.log(token);
//   var notificationData = {
//  "to": "APA91bEmZIrHf4hF99b4H14lgrfaEG-4ImiKTo-QxU1mdD_suPTkLgkFo7C1WOIX7bopvBGnlrdQbJMPqT_3B_531YVVd0q19mHEIiqeFQYQsT3ywwwt0z0",
//  "data": {
//    "mrp": 5000,
//    "retailPrice": 3000
//  },
//  "notification": {
//    "color": "#FF0000",
//    "title": "Off Upto 70% yofunky.com"
//  }
//}
//
//$.ajax({
//    url: 'https://fcm.googleapis.com/fcm/send',
//    type: 'post',
//    data: JSON.stringify(notificationData),
//    headers: {
//      'Content-Type': 'application/json',
//      'Authorization': 'key=AIzaSyD1aqciM48jQXz-yv4W_0mkFCicWsJ7Gpo'
//    },
//    dataType: 'json',
//    success: function (data) {
//      console.info(data);
//    }
//  });
    
    console.log(token);
   var notificationData = {
  "data": { "operation": "add",
	   "notification_key_name": "xxxxx",
        "notification_key": "APA91bEmZIrHf4hF99b4H14lgrfaEG-4ImiKTo-QxU1mdD_suPTkLgkFo7C1WOIX7bopvBGnlrdQbJMPqT_3B_531YVVd0q19mHEIiqeFQYQsT3ywwwt0z0",
        "registration_ids": ["f_iKw_kuFiI:APA91bE5RkRdvd9_yE7j_UVO1nPZcq7yQv1OmEI3PwETbWMlha-v409rWplBi7yY8a0xPxgdIqJQ84JZ3Rha9RUOl8xH9EFnw_g0xJZfCERsJ6Pf8CvTyXdDMP8-a1Cv9PmFyJY8ddS2"]
}
   }

$.ajax({
    url: 'https://android.googleapis.com/gcm/notification',
    type: 'post',
    data: JSON.stringify(notificationData),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'key=AIzaSyD1aqciM48jQXz-yv4W_0mkFCicWsJ7Gpo',
    },
    dataType: 'json',
    success: function (data) {
      console.info(data);
    }
  });
 
    
//    $.ajax({
//  type: 'POST',
//  url: 'https://fcm.googleapis.com/fcm/send',
//  contentType: 'application/json',
//  dataType:'json',
//  
//  headers : {
//    Authorization:'key=AIzaSyD1aqciM48jQXz-yv4W_0mkFCicWsJ7Gpo',
//    project_id:357922932377
//  },
//    data:{
//        "to":"APA91bEmZIrHf4hF99b4H14lgrfaEG-4ImiKTo-QxU1mdD_suPTkLgkFo7C1WOIX7bopvBGnlrdQbJMPqT_3B_531YVVd0q19mHEIiqeFQYQsT3ywwwt0z0",
//        "notification":{
//            "body":"Hello World",
//            "title":"FCM MESSAGE"
//        }
//    },
//  success: function(data) {
//    console.log(data)
//  },
//
//  error: function() {
//    
//  }
//});
}
function askPermission()
{
    messaging.requestPermission()
    .then(function() {
      console.log('Notification permission granted.');
      return messaging.getToken();
    }).then(function(token){
        addDeviceToGroup(token);
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
}
messaging.onMessage(function(payload){
    console.log("onMessage", payload);
});
