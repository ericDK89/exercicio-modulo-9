$(document).ready(() => {
  $("form").submit((e) => {
    e.preventDefault();
    const newTask = $("#task-name").val();

    $("ol").append(`<li> <button type="button">${newTask}</button> </li>`);

    $("#task-name").val("");
  });

  $("ol").on("click", "li button", function () {
    $(this).toggleClass("completed");
  });
});
