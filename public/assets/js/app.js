"use strict";

$(() => {
  $(".devour").click((event) => {
    const button = $(event.currentTarget);
    const id = button.data("id");
    console.log("Devoured burger ID " + id + ".");
  });
});