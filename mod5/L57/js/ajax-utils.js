(function (global) { //global object/ window 로 묶어놓음! L55에 자세한 설명//

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {// it is not inside the var ajaxUtils! //
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
//main function!!! we have to becarefull to watch it!!
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler) {
            //where     //function
    var request = getRequestObject();
    //from here to request.send =>set up the request
    request.onreadystatechange = 
      function() { 
        handleResponse(request, responseHandler); 
      };
    request.open("GET", requestUrl, true);
          //request method         //browser freeze before doing anything else
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
    responseHandler(request);
  //check the response 
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

