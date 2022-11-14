$(function() {

  // toggle services
  $(".service").on("click", function() {
    $(".service-details").hide();
    $(".service-card").show();
    if ($(".service-details", this).is(":visible")) {
      $(".service-details", this).hide();
      $(".service-card", this).fadeIn("slow");
    } else {
      $(".service-details", this).fadeIn("slow");
      $(".service-card", this).hide();
    }
  });

  // submit form
  $("#contact-section-form").on("submit", function(e) {
    e.preventDefault();
    const fields = $("#contact-section-form").find("input,textarea");

    // validate fields
    isValid = true;
    fields.each(function() {
      if(!$(this).val() || $(this).val() === "") {
        $(this).addClass("is-invalid");
        isValid = false;
      }
    });

    if(isValid) {

      // show success message
      const name = $("#name").val();
      const msg = `Thank you ${name}, your message has been received`;
      let alert = '<ul class="alert alert-success"><li>' + msg +'</li></ul>';
      $('#contact-section-form').prepend(alert);
      console.log(alert);

      // clear fields
      fields.each(function() {
        if($(this).hasClass("is-invalid")) {
          $(this).removeClass("is-invalid");
        }
        $(this).val("");
      });
    }

  });

});