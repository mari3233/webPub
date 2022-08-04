$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
    }
);

$(".tab1").click(     /* $(".tab li:eq(0) a")해도됨 */
    function(){
        $(".notice").show();     /* show아닌 fade하면 이상함 */
        $(".gallery").hide();
    }
);
$(".tab2").click(
    function(){       /* $(".tab li:eq(1) a")해도됨 */
        $(".notice").hide(); 
        $(".gallery").css("display", "flex"); /* gallery show 의미는 display block가 됨 */
    }
);




$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);

$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);