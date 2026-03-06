let jsonData = [];
let jsonDataCopy = [];

function render(rows) {
  const table = document.getElementById("jsonTable");

  const thead = `
        <tr>
          <th>ID</th>
          <th>Término</th>
          <th>Definición</th>
        </tr>
      `;
  const tbody = rows
    .map(
      (row) => `
        <tr>
          <td>${row.id}</td>
          <td>${row.term}</td>
          <td>${row.definition}</td>
        </tr>
      `,
    )
    .join("");

  table.innerHTML = `<thead>${thead}</thead><tbody>${tbody}</tbody>`;
}

window.filtrar = (value) => {
  const v = value.toLowerCase();
  render(
    !v
      ? jsonDataCopy
      : jsonData.filter((obj) => JSON.stringify(obj).toLowerCase().includes(v)),
  );
};

window.boot.register("page-ready", () => {
  fetch("assets/json/glosario.json")
    .then((r) => r.json())
    .then((data) => {
      jsonData = data;
      jsonDataCopy = data;
      render(jsonDataCopy);
    });
});
