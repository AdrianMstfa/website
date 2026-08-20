// ---------- Telepon (hanya ada di index.html) ----------
const phoneWrapper = document.getElementById('phoneWrapper');
const modalOverlay = document.getElementById('modalOverlay');
const acceptBtn = document.getElementById('acceptBtn');
const rejectBtn = document.getElementById('rejectBtn');

if (phoneWrapper) {
  // Menyala hanya saat kursor di atas telepon (tidak ada elemen kotak lain)
  phoneWrapper.addEventListener('mouseenter', () => {
    phoneWrapper.classList.add('lit');
  });

  phoneWrapper.addEventListener('mouseleave', () => {
    phoneWrapper.classList.remove('lit');
  });

  // Klik telepon membuka modal dialog
  phoneWrapper.addEventListener('click', () => {
    modalOverlay.classList.add('show');
  });
}

if (acceptBtn) {
  acceptBtn.addEventListener('click', () => {
    window.location.href = 'terima.html';
  });
}

if (rejectBtn) {
  rejectBtn.addEventListener('click', () => {
    window.location.href = 'tolak.html';
  });
}

// ---------- Backsound (ada di semua halaman) ----------
const bgm = document.getElementById('bgm');
const muteBtn = document.getElementById('muteBtn');
let isMuted = false;

if (bgm) {
  bgm.volume = 0.5;

  window.addEventListener('load', () => {
    bgm.play().catch(() => {
      // Ditangani oleh fallback interaksi pertama di bawah
    });
  });

  function unlockAudioOnce() {
    if (!isMuted) {
      bgm.play().catch(() => {});
    }
    document.removeEventListener('click', unlockAudioOnce);
    document.removeEventListener('mousemove', unlockAudioOnce);
    document.removeEventListener('touchstart', unlockAudioOnce);
  }
  document.addEventListener('click', unlockAudioOnce);
  document.addEventListener('mousemove', unlockAudioOnce);
  document.addEventListener('touchstart', unlockAudioOnce);
}

if (muteBtn) {
  muteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    isMuted = !isMuted;
    bgm.muted = isMuted;
    muteBtn.textContent = isMuted ? '🔇' : '🔊';
  });
}
