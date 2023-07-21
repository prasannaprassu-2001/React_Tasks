function generateTableRows(table, data) {
    for (const element of data) {
      const row = table.insertRow();
      for (const key in element) {
        const cell = row.insertCell();
        const text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  
  let isVisible = false;
  
  function showData() {
    const table2 = document.getElementById("table2");
    const toggleButton = document.getElementById("less");
  
    if (isVisible) {
      table2.style.display = "none";
      toggleButton.innerText = "Load More ....";
    } else {
      table2.style.display = "block";
      toggleButton.innerText = "Load Less...";
    }
  
    isVisible = !isVisible;
  }
  
  
  
  fetch("data.json")
    .then(response => response.json())
    .then(jsonData => {
      const table1 = document.getElementById("table1");
      const table2 = document.getElementById("table2");
  
      generateTableRows(table1, jsonData.data);
  
      generateTableRows(table2, jsonData.data2);
    })
    .catch(error => console.error("Error loading data:", error));