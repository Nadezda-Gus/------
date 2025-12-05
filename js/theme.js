// Функция для переключения темы
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Обновляем иконку темы
    updateThemeIcon(newTheme);
}

// Функция для обновления иконки темы
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('img');
        if (icon) {
            icon.src = theme === 'dark' 
                ? '../images/theme-icon-light.png' 
                : '../images/theme-icon-dark.png';
            icon.alt = theme === 'dark' ? 'Светлая тема' : 'Темная тема';
        }
    }
}

// Инициализация темы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Настройка кнопки переключения темы
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        updateThemeIcon(savedTheme);
    }
});