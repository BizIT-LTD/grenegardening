document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var navWrap = document.querySelector('.nav-wrap');

  if (toggle && navWrap) {
    toggle.addEventListener('click', function () {
      var isOpen = navWrap.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
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
