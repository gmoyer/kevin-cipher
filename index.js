const LETTER = "abcdefghijklmnopqrstuvwxyz"; //for getting correct letter position


$( document ).ready(function() {
    $( "#submit" ).click(function() {
        var intxt = $('#inBox').val();
        var outtxt = "";
        var base = "m";
        //cycle through all the letters in the input text
        for (let i in intxt) {
            var unicode = LETTER.indexOf(base) * 27; //setting correct base
            unicode += LETTER.indexOf(intxt[i]); //getting correct letter
            var unistring = "0x0";
            if (unicode < 100) {
                unistring += "0";
                if (unicode < 10) {
                    unistring += "0";
                }
            }
            unistring += unicode;
            console.log(String.fromCodePoint(unistring));
            outtxt += String.fromCodePoint(unistring);
        }
        console.log(outtxt);
        $("#inBox").html(outtxt);
    });
});