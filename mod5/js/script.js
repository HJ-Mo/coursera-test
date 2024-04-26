// //L53 DOM manipulation

// // DOM manipulation
// // console.log(document.getElementById("title"));
// // console.log(document instanceof HTMLDocument);

// function sayHello () {
//   var name =
//    document.getElementById("name").value;
//    //value를 안 넣으면 element가 됨! value로 만들어야 하는것을 잊지 말자
//    var message = "<h2>Hello " + name + "!</h2>";

//   // document
//   //   .getElementById("content")
//   //   .textContent = message;
//    //=>이 코드도 working 한다.

//   document
//     .getElementById("content")
//     .innerHTML = message;
//     //위에 있는 코드도 진행이 가능하지만 글씨를 <h2> 바꾸어 주기 위해서 innerhtml을 사용.

//   if (name === "student") {
//     //valuerk student이면 ===를 사용하는 이유는 strong하게 하기위해
//     var title = 
//       document
//         .querySelector("#title")//querySelector는 specify한 #를 선택하는!
//         .textContent;
//     title += " & Lovin' it!";
//     document
//         .querySelector("h1")//head1 element is only one, that why we can use it. if more than 1 h1, it will return the first amtching element.
//         .textContent = title;
//   }
// }

// //54L Handling Events
// // Event handling
// //basically functions that you bind using specific methods to certain events that happen in the browser.
// document.addEventListener("DOMContentLoaded",//event를 여기로 묶음, script.가 바디에 포함될 필요 없음

//   function (event) {
    
//     function sayHello (event) {
//       this.textContent = "Said it!";//after event end, say it turns into said it.
//       var name =
//        document.getElementById("name").value;
//        var message = "<h2>Hello " + name + "!</h2>";

//       document
//         .getElementById("content")
//         .innerHTML = message;

//       if (name === "student") {
//         var title = 
//           document
//             .querySelector("#title")
//             .textContent;
//         title += " & Lovin' it!";
//         document
//             .querySelector("h1")
//             .textContent = title;
//       }
//     }

//     // Unobtrusive event binding=> index에 있는 onbutton element를 없에주고!
//     document.querySelector("button")//specify button select!
//       .addEventListener("click", sayHello);
//       //click event, sayHello function
//   }
// );

// // document.querySelector("button")
// //   .onclick = sayHello;

//L55 The 'event' Argument//Mozilla Developer Network website참조
// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      console.log(event);

      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

    document.querySelector("body")
      .addEventListener("mousemove",//mosemove의 위치를 알려줌
        function (event) {
          if (event.shiftKey === true) {//only shift키를 눌렀을때만 값이 나옴
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          }
        }
      );

  }
);

// document.querySelector("button")
//   .onclick = sayHello;