const LETTER = "abcdefghijklmnopqrstuvwxyz"; //for getting correct letter position
const PUNCTUATION = " .,!?:;0123456789";

var base = "m";
var bswap = false;
var textlength = 0;

$( document ).ready(function() {
    $('#inBox').bind('input propertychange', function() {
        var currentlength = $('#inBox').val().length;
        if (currentlength == 1 + textlength) {
            //------------------Single character added-------------------
            var loc = document.getElementById('inBox').selectionStart;
            var intxt = $('#inBox').val().toLowerCase().slice(loc-1, loc);
            //cycle through all the letters in the input text
            if (LETTER.indexOf(intxt) == -1) {
                if (PUNCTUATION.indexOf(intxt) != -1) {
                    $("#inBox").append(intxt);
                    //textlength += 1;
                } else {
                    $("#inBox").val($('#inBox').val().slice(0, loc-1)+$('#inBox').val().slice(loc));
                }
                if (intxt == "~") {
                    if (bswap) {
                        bswap = false;
                    } else {
                        bswap = true;
                    }
                    //remove the thing so that it is not included
                    $("#inBox").val($('#inBox').val().slice(0, loc-1)+$('#inBox').val().slice(loc));
                }

            }
            else {
                var unicode = 3400; 
                if (bswap) {
                    unicode += 27;
                    bswap = false;
                } else {
                    //find the correct base
                    if (textlength != 0) {
                        var prevChar = $("#inBox").val().slice(loc-2, loc-1);
                        console.log(prevChar.charCodeAt());
                    }
                    unicode += LETTER.indexOf(intxt) + 1; //getting correct letter
                }
                unicode += LETTER.indexOf(base) * 27; //setting correct base
                var unistring = "0x" + unicode;
                $("#inBox").val($('#inBox').val().slice(0, loc-1)+String.fromCodePoint(unistring)+$('#inBox').val().slice(loc));
                //textlength += 1;
            }
            document.getElementById('inBox').setSelectionRange(loc, loc);
        }
        //$("#inBox").html(outtxt);

        //update the new textlength
        textlength = $('#inBox').val().length;
    });
});