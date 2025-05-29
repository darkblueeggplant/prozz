document.addEventListener('DOMContentLoaded', function() {
    const showTimeBtn = document.getElementById('showTimeBtn');
    const timeDisplay = document.getElementById('timeDisplay');
    
    showTimeBtn.addEventListener('click', function() {
        // Получаем текущее время
        const now = new Date();
        
        // Форматируем время
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        // Создаем красивый вывод
        const timeString = `
            <div class="time-box">
                <span class="time-hours">${hours}</span>
                <span class="time-separator">:</span>
                <span class="time-minutes">${minutes}</span>
                <span class="time-separator">:</span>
                <span class="time-seconds">${seconds}</span>
            </div>
        `;
        
        // Отображаем время
        timeDisplay.innerHTML = timeString;
        
        // Обновляем время каждую секунду
        const intervalId = setInterval(() => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            document.querySelector('.time-hours').textContent = hours;
            document.querySelector('.time-minutes').textContent = minutes;
            document.querySelector('.time-seconds').textContent = seconds;
        }, 1000);
        
        // Останавливаем обновление при новом нажатии
        showTimeBtn.onclick = function() {
            clearInterval(intervalId);
            timeDisplay.innerHTML = '';
            showTimeBtn.onclick = arguments.callee;
        };
    });
});