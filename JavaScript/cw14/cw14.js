const form = document.forms[0];
    form.onsubmit = function (event) {
      event.preventDefault();
      const rows = parseInt(document.querySelector('#rows').value);
      const cols = parseInt(document.querySelector('#cols').value);
      const divider = parseInt(document.querySelector('#divider').value);  
      const table = createTable(rows, cols, divider);
      document.querySelector('.result').innerHTML = table;
    };

    document.querySelector("#reset").onclick = function (event) {
      event.preventDefault();
      document.querySelector('#rows').value = 20;
      document.querySelector('#cols').value = 20;
      document.querySelector('#divider').value = 2;
      document.querySelector('.result').innerHTML = '';  
    }

    function createTable(rows, cols, divider) {
      let html = '<table>';
      let number = 0;
      for (let i = 0; i < rows; i++) {
        html += '<tr>';
        for (let j = 0; j < cols; j++) {
          number++;
          let isRed = isDividedBy(number, divider) ? "class='red'" : '';  
          html += `<td ${isRed}>${number}</td>`;
        }
        html += '</tr>';
      }

      return html + '</table>';
    }

    function isDividedBy(number, divider) {
      return number % divider === 0;  
    }




