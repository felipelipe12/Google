function appsModal() {
    let modal = document.getElementById('modal');

    if (modal.classList.contains('hide')) {
        modal.classList.remove('hide');
        modal.classList.add('show');
    } else {
        modal.classList.remove('show');
        modal.classList.add('hide');
    }
}