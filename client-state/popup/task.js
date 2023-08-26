const modal = document.querySelector('.modal'),
    close = document.querySelector('.modal__close');

getCookie();

function closeModal (close) {
    close.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        setCookie();
    })
}

function setCookie() {
    let updatedCookie = encodeURIComponent('modal') + "=" + encodeURIComponent('closed');
    document.cookie = updatedCookie;
}

function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
      const [name, value] = item.split('=')
      acc[name] = value
      if(acc.hasOwnProperty('modal') == false) {
        const showModal = setTimeout(() => {
            modal.classList.add('modal_active');
        },1000);
      }
    }, {})
  }

closeModal(close);
