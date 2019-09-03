/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
    }
};

window.handleOpenURL=(function (url){ //override the default handler
   window.openedViaDeeplink = url;
});
