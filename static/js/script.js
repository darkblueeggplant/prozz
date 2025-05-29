document.addEventListener('DOMContentLoaded', function() {
    const contactToggle = document.getElementById('contactToggle');
    const contactPanel = document.getElementById('contactPanel');
    const closeBtn = document.getElementById('closeContact');
    let contactsOpen = false;

    // Открытие/закрытие панели контактов
    contactToggle.addEventListener('click', function() {
        contactPanel.classList.add('active');
        contactsOpen = true;
    });

    closeBtn.addEventListener('click', function() {
        contactPanel.classList.remove('active');
        contactsOpen = false;
    });

    // Закрытие панели при клике вне её области
    document.addEventListener('click', function(event) {
        if (contactsOpen) {
            if (!contactPanel.contains(event.target) && 
                !contactToggle.contains(event.target)) {
                contactPanel.classList.remove('active');
                contactsOpen = false;
            }
        }
    });

    // Анимация при наведении на контакты
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});