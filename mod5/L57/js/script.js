// Event handling
document.addEventListener("DOMContentLoaded",
  //it working, but css or image files are not load.
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        // var self = this;
        // var name = "";
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;
              //위에 있는 2개의 var이 없어지고 밑에있던에 안으로 들어오는 이유는
              //만든 $ajaxUtils가 asynchronous이기 때문에
              //다른 기능을 기다리지 않고 바로 다음 코드로 넘어간다.
              //그러하므로 위에 있던 var 2개와 밑에 실행코드가 $ajaxUtils안으로 들어와야 한다.

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);





