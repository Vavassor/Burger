"use strict";

$(() => {
  $(".devour").click((event) => {
    const button = $(event.currentTarget);
    const id = button.data("id");
    const burgerUpdate = {
      id: parseInt(id),
      devoured: true,
    };

    $.ajax("/api/burger", {
      contentType: "application/json",
      data: JSON.stringify(burgerUpdate),
      method: "PUT",
    }).then(() => {
      location.reload();
    });
  });

  $("#burger-form").submit((event) => {
    event.preventDefault();

    const nameInput = $("#burger-name");
    
    if (nameInput[0].validity.valid) {
      nameInput.removeClass("invalid");
      $("#burger-name-feedback").addClass("display-none");
    } else {
      nameInput.addClass("invalid");
      $("#burger-name-feedback").removeClass("display-none");
      return;
    }

    const burger = {
      "burger_name": nameInput.val().trim(),
    };

    $.ajax("/api/burger", {
      contentType: "application/json",
      data: JSON.stringify(burger),
      method: "POST",
    }).then(() => {
      location.reload();
    });
  });
});