// Имитация авторизации
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const authMessage = document.getElementById('auth-message');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;
            
            // Простая имитация проверки учетных данных
            if (username && password) {
                authMessage.textContent = `Успешный вход как ${getRoleName(role)}!`;
                authMessage.className = 'message success';
                
                // Сохраняем информацию о пользователе
                localStorage.setItem('user', JSON.stringify({
                    username: username,
                    role: role,
                    name: getRandomName(role)
                }));
                
                // Перенаправляем на страницу профиля через 1.5 секунды
                setTimeout(() => {
                    window.location.href = 'profile.html';
                }, 1500);
            } else {
                authMessage.textContent = 'Пожалуйста, заполните все поля!';
                authMessage.className = 'message error';
            }
        });
    }
});

// Функция для получения названия роли
function getRoleName(role) {
    const roles = {
        'student': 'Студент',
        'teacher': 'Преподаватель',
        'deanery': 'Сотрудник деканата'
    };
    return roles[role] || 'Пользователь';
}

// Функция для генерации случайного имени пользователя
function getRandomName(role) {
    const names = {
        'student': ['Иванов Иван Иванович', 'Петрова Анна Сергеевна', 'Сидоров Алексей Петрович'],
        'teacher': ['Терехова А.А.', 'Петров П.С.', 'Сидорова О.И.'],
        'deanery': ['Смирнова Е.В.', 'Кузнецов Д.М.', 'Васильева Л.П.']
    };
    
    const roleNames = names[role] || ['Пользователь'];
    return roleNames[Math.floor(Math.random() * roleNames.length)];
}