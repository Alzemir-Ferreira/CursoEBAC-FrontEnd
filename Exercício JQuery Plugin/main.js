$(document).ready(function () {
  $("#cpf").mask("000.000.000-00", { reverse: true });
  $("#cep").mask("00000-000");
  $("#telefone").mask("(00) 00000-0000");

  $("#form-cadastro").validate({
    rules: {
      nome_completo: {
        required: true,
        minlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
        maxlength: 15,
        minlength: 14,
      },
      cpf: {
        required: true,
        maxlength: 14,
        minlength: 14,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
        maxlength: 9,
        minlength: 8,
      },
    },
    messages: {
      nome_completo: {
        required: "Por favor, informe seu nome completo",
        minlength: "Seu nome deve conter pelo menos 10 letras",
      },
      email: {
        required: "Por favor, informe seu endereço de e-mail",
      },
      telefone: {
        required: "Por favor, informe seu número de telefone",
      },
      cpf: {
        required: "Por favor, informe seu CPF",
      },
      endereco: {
        required: "Por favor, informe seu endereço completo",
      },
      cep: {
        required: "Por favor, informe seu CEP",
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
