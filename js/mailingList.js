var $form = $("form#email-form"),
  url =
    "https://script.google.com/macros/s/AKfycbzRU5C3oqZqZU2E-oB6i8ht_YwapkfWk0WHgrXoDHRM7cpMnTfsea5GBr0QylSKBBDzVg/exec";

$("input[type$='button']").on("click", function (e) {
  var x = document.forms["email-form"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    e.preventDefault();
    modalError();
  } else {
    modal();
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject(),
    })
      .success
      // do something
      ();
  }
});

