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
});