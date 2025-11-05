// Task 0. Setup
$(document).ready(function () {
    console.log("jQuery is ready!");

    $("#footer-nav p").text("Contact us at: example@domain.com");
    $(".nav-link.active").html("<strong>My Portfolio</strong>");
    $("nav").css({
        "background-color": "#343a40",
        "border-bottom": "4px solid #00bcd4"
    });
    $("p").css("color", "lightgray");


    $("#hideBtn").click(function () {
        $("#myParagraph").hide();
    });

    $("#showBtn").click(function () {
        $("#myParagraph").show();
    });

    $("#toggleBtn").click(function () {
        $("#myParagraph").toggle();
    });


    // Task 3: Fade Methods
    $("#fadeOutBtn").click(function () {
        $("#myImage").fadeOut(1000);
    });

    $("#fadeInBtn").click(function () {
        $("#myImage").fadeIn(1000);
    });

    $("#fadeToggleBtn").click(function () {
        $("#myImage").fadeToggle(1000);
    });


    // Task 4: Slide Methods
    $("#slideDownBtn").click(function () {
        $("#panel").slideDown(1000);
    });

    $("#slideUpBtn").click(function () {
        $("#panel").slideUp(1000);
    });

    $("#slideToggleBtn").click(function () {
        $("#panel").slideToggle(1000);
    });
});



// --- Task 5: Add & Remove Elements ---
let itemCount = $("#myList li").length;

$("#addItemBtn").click(function () {
    itemCount++;
    $("#myList").append(`<li class="list-group-item">Appended Item ${itemCount}</li>`);
});

$("#prependItemBtn").click(function () {
    itemCount++;
    $("#myList").prepend(`<li class="list-group-item">Prepended Item ${itemCount}</li>`);
});

$("#removeItemBtn").click(function () {
    $("#myList li").last().remove();
});

$("#changeImageBtn").click(function () {
    const currentSrc = $("#switchImage").attr("src");

    const newSrc = currentSrc.includes("freakbob")
        ? "images/Spongebob/Cowboy-SpongeBob-meme-5.png"
        : "images/Spongebob/freakbob.png";

    $("#switchImage").attr("src", newSrc);
});


$("#changeLinkBtn").click(function () {
    $("#myLink")
        .attr("href", "https://lms.astanait.edu.kz/")
        .text("Visit Astana IT University");
});

// Task 7: Form Interaction
$("#nameInput").on("input", function () {
    const nameVal = $(this).val();
    $("#displayName").text(nameVal || "—");
});

$("#emailInput").on("input", function () {
    const emailVal = $(this).val();
    $("#displayEmail").text(emailVal || "—");
});


// Task 8: Basic Animation
$("#basicAnimBtn").click(function () {
    $("#animateBox").animate({
        left: "+=100px",
        width: "150px",
        height: "150px"
    }, 1000); // 1 second
});

// Task 9: Sequential Animations
$("#sequentialAnimBtn").click(function () {
    const box = $("#animateBox");

    // Reset to starting point first (optional)
    box.css({ left: "0", top: "0", width: "100px", height: "100px" });

    // Sequence of animations
    box.animate({ left: "200px" }, 800)   // Move right
        .animate({ top: "150px" }, 800)    // Move down
        .animate({ width: "50px", height: "50px" }, 600) // Shrink
        .animate({ left: "0", top: "0", width: "100px", height: "100px" }, 800); // Return
});

// Task 10: Combined Animation
$("#combinedAnimBtn").click(function () {
    $("#animateBox").animate({
        left: "150px",
        top: "100px",
        opacity: 0.5,
        width: "200px",
        height: "200px"
    }, 1200, function () {
        $(this).animate({
            left: "0",
            top: "0",
            opacity: 1,
            width: "100px",
            height: "100px"
        }, 1000);
    });
});


// --- Part 5: Mini Project — Bouncing Ball with Boundaries ---
$("#startBounceBtn").click(function () {
    const ball = $("#ball");
    const container = $("#ball-container");

    const containerWidth = container.width();
    const containerHeight = container.height();
    const ballWidth = ball.width();
    const ballHeight = ball.height();

    let dirX = 2;
    let dirY = 3

    function moveBall() {
        const pos = ball.position();
        let newLeft = pos.left + dirX;
        let newTop = pos.top + dirY;

        if (newLeft <= 0 || newLeft + ballWidth >= containerWidth) {
            dirX *= -1;
        }

        if (newTop <= 0 || newTop + ballHeight >= containerHeight) {
            dirY *= -1;
        }

        ball.css({ left: newLeft + "px", top: newTop + "px" });

        requestAnimationFrame(moveBall);
    }

    moveBall();
});
