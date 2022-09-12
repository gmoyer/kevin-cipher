const LETTER = "abcdefghijklmnopqrstuvwxyz"; //for getting correct letter position
const PUNCTUATION = " .,!?";


var base = "m";
var bswap = false;

$( document ).ready(function() {
    $('#inBox').bind('input propertychange', function() {
        var intxt = $('#inBox').val().toLowerCase().slice(-1);
        //cycle through all the letters in the input text
        if (LETTER.indexOf(intxt) == -1) {
            if (PUNCTUATION.indexOf(intxt) != -1) {
                $("#inBox").append(intxt);
            } else {
                $("#inBox").val($('#inBox').val().slice(0, -1));
            }
            if (intxt == "~") {
                bswap = true;
            }

        }
        else {
            var unicode = 3400; 
            if (bswap) {
                base = intxt;
                unicode += 27;
                bswap = false;
            } else {
                unicode += LETTER.indexOf(intxt) + 1; //getting correct letter
            }
            unicode += LETTER.indexOf(base) * 27; //setting correct base
            var unistring = "0x" + unicode;
            console.log(unistring);
            $("#inBox").val($('#inBox').val().slice(0, -1) + String.fromCodePoint(unistring));
        }
        //$("#inBox").html(outtxt);
    });
});