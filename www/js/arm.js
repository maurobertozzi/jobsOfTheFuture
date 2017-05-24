$(document).scroll(function() {
    // body...
    var offset = $(this).scrollTop();
    if (offset > 1) {
        armtxt2();
    }
    if (offset > 2) {
        armimg2();
    }

    if (offset > 600) {
        armtxt3();
    }

    if (offset> 650) {
        armimg3();
    }



    test();

});

function test() {
    console.log($(this).scrollTop());

}


function armtxt2() {
    document.getElementById('armtext2').style.display = "unset";
    console.log("2 txt");
}

function armimg2() {
    document.getElementById('armimg2').style.display = "unset";
    console.log("2 img");
}

function armtxt3() {
    document.getElementById('armtext3').style.display = "unset";
    console.log("3 txt");
}

function armimg3() {
    document.getElementById('armimg3').style.display = "unset";
    console.log("3 img");
}


