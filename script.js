function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const flap = document.querySelector('.flap');
    envelope.classList.add('opened');
    setTimeout(() => {
    flap.style.display = 'none';
    }, 1000);
  }
  
function showPhoto(event) {
    event.stopPropagation();
    const popup = document.getElementById('photoPopup');
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('hidden');
    setTimeout(() => {
    popup.classList.add('show');
    }, 400);
  }
  