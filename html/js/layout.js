//sidebar slide left
$(function () {
    $(".show-side-btn").on("click", function () {
        $(".sidebar").toggleClass("show-sidebar", 0);
        $(".side-cont").toggleClass("fullwidth", 0);
    });
});


//sidebar-nav dropdown menu
$('.sidebar-nav .has-dropdown a').on('click', function (e) {
    var element = $(this).parent('.sidebar-nav > li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(0, "swing");
    } else {
        element.addClass('open');
        element.children('ul').slideDown(0, "swing");
        element.siblings('li').children('ul').slideUp(0, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(0, "swing");
    }
});



//select
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("hd-select");

for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);






//password show/hide icon
$(".toggle-password").click(function () {

    $(this).toggleClass("show");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});




//datepicker calendar
$( function() {
	$( "#datepicker, #datepicker2, #datepicker3, #datepicker4, #datepicker5" ).datepicker({
		dateFormat: "yy-mm-dd",
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        yearSuffix: '년',
        showMonthAfterYear: true,
        showOtherMonths: true,
        duration: "fast",
        beforeShow: function(input, inst) {
            var calendar = inst.dpDiv;
            setTimeout(function() {
                calendar.position({
                    my: 'right top+7',
                    at: 'right bottom',
                    collision: 'none',
                    of: input
                });
            }, 1);
        }
	}).datepicker("setDate", new Date());
} );



$(window).resize(function () {
    $("#ui-datepicker-div").css({
        display: "none"
    });
})


// timepicker
var options1 = {
    now: "00:00", //hh:mm 24 hour format only, defaults to current time
    twentyFour: true,  //Display 24 hour format, defaults to false
    upArrow: 'wickedpicker__controls__control-up',  //The up arrow class selector to use, for custom CSS
    downArrow: 'wickedpicker__controls__control-down', //The down arrow class selector to use, for custom CSS
    close: 'wickedpicker__close', //The close class selector to use, for custom CSS
    hoverState: 'hover-state', //The hover state class to use, for custom CSS
    title: '', //The Wickedpicker's title,
    showSeconds: false, //Whether or not to show seconds,
    timeSeparator: ' : ', // The string to put in between hours and minutes (and seconds)
    secondsInterval: 1, //Change interval for seconds, defaults to 1,
    minutesInterval: 10, //Change interval for minutes, defaults to 1
    beforeShow: null, //A function to be called before the Wickedpicker is shown
    afterShow: null, //A function to be called after the Wickedpicker is closed/hidden
    show: null, //A function to be called when the Wickedpicker is shown
    clearable: false, //Make the picker's input clearable (has clickable "x")
};

var options2 = {
    now: "24:00", //hh:mm 24 hour format only, defaults to current time
    twentyFour: true,  //Display 24 hour format, defaults to false
    upArrow: 'wickedpicker__controls__control-up',  //The up arrow class selector to use, for custom CSS
    downArrow: 'wickedpicker__controls__control-down', //The down arrow class selector to use, for custom CSS
    close: 'wickedpicker__close', //The close class selector to use, for custom CSS
    hoverState: 'hover-state', //The hover state class to use, for custom CSS
    title: '', //The Wickedpicker's title,
    showSeconds: false, //Whether or not to show seconds,
    timeSeparator: ' : ', // The string to put in between hours and minutes (and seconds)
    secondsInterval: 1, //Change interval for seconds, defaults to 1,
    minutesInterval: 10, //Change interval for minutes, defaults to 1
    beforeShow: null, //A function to be called before the Wickedpicker is shown
    afterShow: null, //A function to be called after the Wickedpicker is closed/hidden
    show: null, //A function to be called when the Wickedpicker is shown
    clearable: false, //Make the picker's input clearable (has clickable "x")
};

$('.timepicker1').wickedpicker(options1);
$('.timepicker2').wickedpicker(options2);



