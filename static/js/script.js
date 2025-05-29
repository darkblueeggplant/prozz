document.addEventListener('DOMContentLoaded', function() {
    const createTableBtn = document.getElementById('createTableBtn');
    const tableContainer = document.getElementById('tableContainer');
    
    createTableBtn.addEventListener('click', function() {
        // Создаем таблицу
        const table = document.createElement('table');
        table.className = 'dynamic-table';
        table.setAttribute('border', '1');
        
        // Создаем заголовок таблицы
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        ['Заголовок 1', 'Заголовок 2', 'Заголовок 3'].forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Создаем тело таблицы
        const tbody = document.createElement('tbody');
        
        // Добавляем 2 пустые строки
        for (let i = 0; i < 2; i++) {
            const row = document.createElement('tr');
            
            for (let j = 0; j < 3; j++) {
                const td = document.createElement('td');
                td.textContent = ''; // Пустая ячейка
                row.appendChild(td);
            }
            
            tbody.appendChild(row);
        }
        
        table.appendChild(tbody);
        
        // Очищаем контейнер и добавляем таблицу
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
        
        // Добавляем кнопку для добавления строк
        const addRowBtn = document.createElement('button');
        addRowBtn.textContent = 'Добавить строку';
        addRowBtn.id = 'addRowBtn';
        addRowBtn.style.marginTop = '10px';
        tableContainer.appendChild(addRowBtn);
        
        // Обработчик для добавления строк
        addRowBtn.addEventListener('click', function() {
            const newRow = document.createElement('tr');
            
            for (let j = 0; j < 3; j++) {
                const td = document.createElement('td');
                td.textContent = ''; // Пустая ячейка
                newRow.appendChild(td);
            }
            
            tbody.appendChild(newRow);
        });
    });
});