function obtenerDatos() {

  fetch("https://nubecolectiva.com/api/v1/postres").then(response => {
      if (response.ok) {
          return response.json();
      }
  }).then(data => {
      if (data) {
          console.log(data);
          const ar = data;
          let result = `<table class='table table-striped table-bordered table-hover text-center'><thead class=table-dark>
                          <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Imagen</th>
                          </tr>
                          </thead><tbody>`;
          ar.forEach((elem) => {
              result += `<tr>
                    <td class=v-align-middle>${elem.nombre}</td>
                    <td class=v-align-middle>${elem.precio}</td>
                    <td class=v-align-middle>${elem.stock}</td>
                    <td class=v-align-middle><img src=img/${elem.img} class=img-fluid style=max-width:30px></td>
                  </tr>`
          });
          result += `</tbody></table>`;
          document.getElementById("datos").innerHTML = result;
      };
  }).catch(err => console.error(err));

}
