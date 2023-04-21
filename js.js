// Получаем кнопку по ID
const button = document.getElementById('show-alert');

// Навешиваем обработчик события на клик по кнопке
button.addEventListener('click', () => {
  // Показываем alert с помощью SweetAlert
  swal({
    title: 'Берите в команду',
//  text: 'Текст alert-а', 
    icon: 'success',
    buttons: {
      confirm: {
        text: 'OK',
        className: 'button'
      }
    },
    // Добавляем картинку в alert
    content: {
      element: 'img',
      attributes: {
        src: 'emoji.png',
        style: 'max-width: 100%'
      }
    }
  });
});