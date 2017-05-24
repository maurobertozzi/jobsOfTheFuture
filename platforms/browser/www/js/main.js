$(document).scroll(function() {
    // body...
    var offset = $(this).scrollTop();
    if (offset > 20) {
        rijktxt2();
    }
    if (offset > 90) {
        rijkimg2();
    }

    if (offset > 100) {
        rijktxt3();
    }


    if (offset > 150) {
        rijkimg3();
    }



    test();

});

function test() {
    console.log($(this).scrollTop());

}


function rijktxt2() {
    document.getElementById('rijktext2').style.display = "unset";
    console.log("2 txt");
}

function rijkimg2() {
    document.getElementById('rijkimg2').style.display = "unset";
    console.log("2 img");
}

function rijktxt3() {
    document.getElementById('rijktext3').style.display = "unset";
    console.log("3 txt");
}

function rijkimg3() {
    document.getElementById('rijkimg3').style.display = "unset";
    console.log("3 img");
}


