$(".burger").click(
    function(){
        $(this).toggleClass("on");   /* on 이라는 class가 있으면 빼고 있으면 넣어라 */
        $(".popup_nav").toggleClass("on"); 
    }
);


