function getAndroidVersion(ua) {
    ua = (ua || navigator.userAgent).toLowerCase(); 
    var match = ua.match(/android\s([0-9\.]*)/);
    return match ? match[1] : undefined;
};
	
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
         var check2= parseInt(getAndroidVersion(), 10);
	    if(check2<6){
		    return "bad";
	       };
       return "ок";
    }
    return "unknown";
}
var check=getMobileOperatingSystem();
if(check=='bad'){
   window.location.href = "https://moipolicliniki.github.io/error.html";
   };
   
   
