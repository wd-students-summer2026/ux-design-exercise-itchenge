$(document).ready(function () {
  // content change
  $("#clickBtn").click(function () {
    $("#targetText").text(
      "🚀 You clicked the button! Humans will land on Mars in 2050!",
    );
  });
  $("#hoverBtn").mouseenter(function () {
    $("#targetText").text(
      "🛸 Hover your mouse: The Webb Telescope has discovered a new exoplanet!",
    );
  });
  $("#leaveBtn").mouseleave(function () {
    $("#targetText").text(
      "✨ Mouse has moved out: The secrets of black holes are waiting to be explored...",
    );
  });

  // image swap
  $("#myImage").hover(
    function () {
      var newSrc = $(this).data("new");
      $(this).attr("src", newSrc);
    },
    function () {
      var originalSrc = $(this).data("original");
      $(this).attr("src", originalSrc);
    },
  );

  // animation
  var $target = $("#move-target");
  var $box = $(".animation-box");

  function getMax() {
    return {
      left: $box.width() - $target.outerWidth(),
      top: $box.height() - $target.outerHeight(),
    };
  }

  $("#up").click(function () {
    $target.animate({ top: 0 }, 300);
  });

  $("#down").click(function () {
    $target.animate({ top: getMax().top }, 300);
  });

  $("#left").click(function () {
    $target.animate({ left: 0 }, 300);
  });

  $("#right").click(function () {
    $target.animate({ left: getMax().left }, 300);
  });
  function resetPosition() {
    $target.stop().animate(
      {
        left: 20,
        top: 20,
      },
      300,
    );
  }
  $("#reset").click(function () {
    resetPosition();
  });

  // velocity
  var $ball = $(".ball");
  $("#shake").click(function () {
    $ball.velocity({ left: 50 }, 50);
    $ball.velocity({ left: -50 }, 50);
    $ball.velocity({ left: 20 }, 50);
    $ball.velocity({ left: 0 }, 50);
  });
});
