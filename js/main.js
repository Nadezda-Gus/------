// Основной функционал для работы с данными
document.addEventListener('DOMContentLoaded', function() {
    // Обработка выбора всех студентов
    const selectAll = document.getElementById('select-all');
    const studentCheckboxes = document.querySelectorAll('.student-checkbox');
    
    if (selectAll) {
        selectAll.addEventListener('change', function() {
            studentCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAll.checked;
            });
        });
    }
    
    // Обработка кнопок действий
    const addStudentBtn = document.getElementById('add-student');
    const editStudentBtn = document.getElementById('edit-student');
    const deleteStudentBtn = document.getElementById('delete-student');
    const generateReportBtn = document.getElementById('generate-report');
    const messageArea = document.getElementById('message-area');
    
    if (addStudentBtn) {
        addStudentBtn.addEventListener('click', function() {
            showMessage('Функция добавления студента', 'info');
        });
    }
    
    if (editStudentBtn) {
        editStudentBtn.addEventListener('click', function() {
            const selectedCount = getSelectedStudentsCount();
            if (selectedCount === 1) {
                showMessage('Редактирование данных студента', 'info');
            } else if (selectedCount === 0) {
                showMessage('Выберите студента для редактирования', 'error');
            } else {
                showMessage('Выберите только одного студента для редактирования', 'error');
            }
        });
    }
    
    if (deleteStudentBtn) {
        deleteStudentBtn.addEventListener('click', function() {
            const selectedCount = getSelectedStudentsCount();
            if (selectedCount > 0) {
                if (confirm(`Вы уверены, что хотите удалить ${selectedCount} студента(ов)?`)) {
                    showMessage(`Удалено ${selectedCount} студента(ов)`, 'success');
                }
            } else {
                showMessage('Выберите студента(ов) для удаления', 'error');
            }
        });
    }
    
    if (generateReportBtn) {
        generateReportBtn.addEventListener('click', function() {
            showMessage('Отчет по успеваемости сформирован и готов к экспорту', 'success');
        });
    }
    
    // Функция для получения количества выбранных студентов
    function getSelectedStudentsCount() {
        return document.querySelectorAll('.student-checkbox:checked').length;
    }
    
    // Функция для отображения сообщений
    function showMessage(text, type) {
        if (messageArea) {
            messageArea.textContent = text;
            messageArea.className = `message ${type}`;
            
            // Автоматическое скрытие сообщения через 5 секунд
            setTimeout(() => {
                messageArea.textContent = '';
                messageArea.className = 'message';
            }, 5000);
        }
    }
});