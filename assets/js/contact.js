'use strict';
// The HTML form remains functional when JavaScript is unavailable.
const form = document.querySelector('#contact-form');
if (form) {
  const button = document.querySelector('#submit-btn');
  const status = document.querySelector('#status');
  let submitting = false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting || !form.reportValidity()) return;
    submitting = true;
    button.disabled = true;
    button.textContent = 'Sending…';
    status.className = 'status';
    status.textContent = '';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error('submission-failed');
      form.reset();
      status.className = 'status success';
      status.textContent = 'Thank you. Your message was submitted.';
    } catch (error) {
      status.className = 'status error';
      status.textContent = error.name === 'AbortError'
        ? 'The request timed out. Your message is still here; please try again.'
        : 'The message could not be submitted. Your message is still here; please try again.';
    } finally {
      clearTimeout(timeout);
      submitting = false;
      button.disabled = false;
      button.textContent = 'Send message';
    }
  });
}
