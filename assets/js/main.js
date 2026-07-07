document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var navWrap = document.querySelector('.nav-wrap');

  if (toggle && navWrap) {
    toggle.addEventListener('click', function () {
      var isOpen = navWrap.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var quickWidget = document.querySelector('[data-quick-message]');
  var quickToggle = document.querySelector('[data-quick-message-toggle]');
  var quickPanel = document.querySelector('[data-quick-message-panel]');
  var quickClose = document.querySelector('[data-quick-message-close]');

  function openQuickMessage() {
    if (!quickPanel || !quickToggle) return;
    quickPanel.hidden = false;
    window.requestAnimationFrame(function () {
      quickPanel.classList.add('is-open');
    });
    quickToggle.setAttribute('aria-expanded', 'true');
    var firstField = quickPanel.querySelector('input[name="name"]');
    if (firstField) {
      firstField.focus();
    }
  }

  function closeQuickMessage() {
    if (!quickPanel || !quickToggle || quickPanel.hidden) return;
    quickPanel.classList.remove('is-open');
    quickToggle.setAttribute('aria-expanded', 'false');
    window.setTimeout(function () {
      if (!quickPanel.classList.contains('is-open')) {
        quickPanel.hidden = true;
      }
    }, 180);
  }

  if (quickWidget && quickToggle && quickPanel) {
    quickToggle.addEventListener('click', function () {
      if (quickPanel.hidden) {
        openQuickMessage();
      } else {
        closeQuickMessage();
      }
    });

    if (quickClose) {
      quickClose.addEventListener('click', closeQuickMessage);
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeQuickMessage();
      }
    });

    document.addEventListener('click', function (event) {
      if (!quickPanel.hidden && !quickWidget.contains(event.target)) {
        closeQuickMessage();
      }
    });
  }

  var header = document.querySelector('.site-header');
  function updateHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  var params = new URLSearchParams(window.location.search);
  var status = params.get('status');
  var statusBox = document.querySelector('[data-form-status]');
  if (statusBox && status) {
    if (status === 'success') {
      statusBox.textContent = 'Thank you. Your message has been sent and Grene Gardening will be in touch.';
      statusBox.classList.add('success');
    } else if (status === 'error' || status === 'config' || status === 'dependency') {
      statusBox.textContent = 'Sorry, your message could not be sent. Please call 0448 605 591 or email grenegardening@gmail.com.';
      statusBox.classList.add('error');
    }
  }

  var filterButtons = document.querySelectorAll('[data-filter]');
  var galleryItems = document.querySelectorAll('[data-category]');
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');
      filterButtons.forEach(function (btn) { btn.classList.remove('is-active'); });
      button.classList.add('is-active');
      galleryItems.forEach(function (item) {
        var show = filter === 'all' || item.getAttribute('data-category') === filter;
        item.hidden = !show;
      });
    });
  });
});
