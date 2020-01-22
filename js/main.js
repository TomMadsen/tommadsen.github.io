////////////////////////////////////////////////////////////////////
//                    Letterize animation                         //
////////////////////////////////////////////////////////////////////
function letterize(string) {
    $(string).each(function () {
        let $myStr = $(this).html();
        // Split myStr into an array of characters
        myStr = $myStr.split("");
        // Build an html string of characters wrapped in  tags with classes
        let myContents = "";
        myStr.forEach(function(letter, i){
            if (letter == " "){
                letter = '&nbsp;';
            }
            myContents += `<span class="single-char char-${i}">${letter}</span>`;
        });
        $(this).html(myContents);
    });
}


////////////////////////////////////////////////////////////////////
//                   Responsive Navbar                            //
////////////////////////////////////////////////////////////////////


$('.navbar-collapse a').click(function (e) {
    if (!$(this).hasClass('dropdown-toggle')){
    $(".navbar-collapse").collapse('hide')
    }
    console.log($(e.target));
});



////////////////////////////////////////////////////////////////////
//                    Custom Sticky Headers                       //
////////////////////////////////////////////////////////////////////
    let $mainMarker = $(".navbar"),
        $marker2 = $('#examples'),
        $marker3 = $('#aboutme');
    let $push1 = $('.content'),
        $push2 = $('.work-examples'),
        $push3 = $('#aboutpage'),
        $firstBarHeight = 56,
        $secondBarHeight = 44,
        $windowHeight = $(window).height();
// Get the offset position of the markers
    let $sticky = $mainMarker.offset().top,
        $sticky2 = $marker2.offset().top,
        $sticky3 = $marker3.offset().top;

// Add the sticky class to the navbar when you reach its scroll position. Remove "stuck" when you leave the scroll position
function addStickies() {
    if ($(window).scrollTop() >= $sticky) {
        $mainMarker.addClass("stuck");
        $push1.addClass("pushed-down");
    } else {
        $mainMarker.removeClass("stuck");
        $push1.removeClass("pushed-down");
    }
    if ($(window).scrollTop()>= ($sticky2 - 56)) {
        $marker2.addClass("also-stuck");
        $push2.addClass("also-pushed-down");
    } else {
        $marker2.removeClass("also-stuck");
        $push2.removeClass("also-pushed-down");
    }
    if ($(window).scrollTop() >= ($sticky3 - 100)) {

        $marker3.addClass("also-stuck");
        $push3.addClass("also-pushed-down");
    }   else{
        $marker3.removeClass("also-stuck");
        $push3.removeClass("also-pushed-down");
    }
}

////////////////////////////////////////////////////////////////////
//                    Contact Page                                //
////////////////////////////////////////////////////////////////////


let $name = $('#entry.2005620554'),
    $insta = $('#entry.807115045'),
    $email = $('#entry.1045781291'),
    $message = $('#entry.839337160'),
    $form = $('form');
$form.submit(function (e) {
    $name.val("");
    $insta.val("");
    $email.val("");
    $message.val("");
});


////////////////////////////////////////////////////////////////////
//                    Page listeners                              //
////////////////////////////////////////////////////////////////////


$('document').ready(function () {
    letterize($('.hero'));
});

$(window).scroll(function(){
    addStickies()
});