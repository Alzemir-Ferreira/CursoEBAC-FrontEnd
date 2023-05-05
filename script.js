$(document).ready(function () {
  $("#adicionar").click(function (event) {
    event.preventDefault();

    const tarefa = $("#tarefa").val();

    if (tarefa != "") {
      $("#lista-tarefas").append("<li>" + tarefa + "</li>");

      $("#tarefa").val("");
    }
  });

  $(document).on("click", "li", function () {
    $(this).toggleClass("completed");
  });
});
