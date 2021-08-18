swal({
    title: "Ingrese su Nombre",
    content: "input",
  }).then((value)  => {
    swal('Bienvenido ' + value);
  });