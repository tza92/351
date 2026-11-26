// Reusable desktop keyboard: <apple-keyboard for="textarea-id">.
class AppleKeyboard extends HTMLElement {
  connectedCallback() {
    this.target = document.getElementById(this.getAttribute('for'));
    if (!this.target) return;
    this.abort = new AbortController();
    const options = { signal: this.abort.signal };
    this.shift = false;
    this.capsLock = false;
    this.symbols = false;
    this.emoji = false;
    this.setAttribute('role', 'group');
    this.setAttribute('aria-label', 'On-screen keyboard');
    this.draw();
    this.addEventListener('pointerdown', (event) => {
      if (event.target.closest('button')) event.preventDefault();
    }, options);
    this.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) return;
      this.press(button);
      this.type(button.dataset.key);
    }, options);
    document.addEventListener('keydown', (event) => {
      if (document.activeElement !== this.target || event.isComposing) return;
      const capsLock = event.getModifierState('CapsLock');
      if (capsLock !== this.capsLock) {
        this.capsLock = capsLock;
        this.draw();
      }
      if (event.key === 'Shift' && !this.shift) {
        this.shift = true;
        this.draw();
      }
      const key = event.key === ' ' ? 'Space' : event.key;
      const button = [...this.querySelectorAll('button')].find((item) =>
        item.dataset.key.toLowerCase() === key.toLowerCase()
        || (event.code.startsWith('Key') && item.dataset.key.toLowerCase() === event.code.slice(3).toLowerCase()));
      if (button) this.press(button);
    }, options);
    document.addEventListener('keyup', (event) => {
      if (event.key === 'Shift' && this.shift) {
        this.shift = false;
        this.draw();
      }
    }, options);
    window.addEventListener('blur', () => {
      this.shift = false;
      this.draw();
    }, options);
  }

  disconnectedCallback() {
    this.abort?.abort();
  }

  draw() {
    const rows = this.emoji
      ? [['😀', '😂', '🥰', '😊', '😎', '🥲', '😭', '😴', '🥳', '❤️'], ['👍', '👏', '🙌', '🙏', '💪', '✨', '🔥', '💯', '🎉'], ['Symbols', '🍎', '🥑', '🍕', '☕', '🍽️', '💧', 'Backspace']]
      : this.symbols
      ? ['1234567890'.split(''), ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'], ['Symbols', '.', ',', '?', '!', "'", 'Backspace']]
      : ['qwertyuiop'.split(''), 'asdfghjkl'.split(''), ['Shift', ...'zxcvbnm', 'Backspace']];
    rows.push(['Mode', 'Emoji', 'Space', 'Enter']);
    this.replaceChildren(...rows.map((keys, index) => {
      const row = document.createElement('div');
      row.className = `apple-keyboard-row apple-keyboard-row--${index + 1}`;
      keys.forEach((key) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.key = key;
        const labels = { Shift: 'Shift', Backspace: 'Delete', Emoji: 'Emoji', Symbols: 'ABC', Mode: this.symbols || this.emoji ? 'ABC' : '123', Space: 'space', Enter: 'return' };
        button.textContent = labels[key] || (this.shift || this.capsLock ? key.toUpperCase() : key);
        if (['Shift', 'Backspace', 'Emoji'].includes(key)) button.innerHTML = this.icon(key);
        button.setAttribute('aria-label', { Shift: this.capsLock ? 'Caps Lock' : 'Shift', Backspace: 'Delete', Emoji: this.emoji ? 'Letters' : 'Emoji', Symbols: 'Letters', Mode: this.symbols || this.emoji ? 'Letters' : 'Numbers and punctuation', Space: 'Space', Enter: 'Return' }[key] || button.textContent);
        if (labels[key]) button.classList.add('apple-keyboard-special');
        if (key === 'Space') button.classList.add('apple-keyboard-space');
        if (key === 'Shift') button.setAttribute('aria-pressed', String(this.shift || this.capsLock));
        row.append(button);
      });
      return row;
    }));
    const footer = document.createElement('div');
    footer.className = 'apple-keyboard-footer';
    for (const [key, label] of [['Globe', 'Switch keyboard'], ['Microphone', 'Dictation unavailable in this preview']]) {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.key = key;
      button.setAttribute('aria-label', label);
      button.innerHTML = this.icon(key);
      if (key === 'Microphone') button.disabled = true;
      footer.append(button);
    }
    this.append(footer);
  }

  icon(key) {
    const paths = {
      Shift: `<path d="m12 3 8 9h-5v8H9v-8H4Z" fill="${this.shift || this.capsLock ? 'currentColor' : 'none'}"/>${this.capsLock ? '<path d="M9 23h6"/>' : ''}`,
      Backspace: '<path d="M9 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9L2 12Z"/><path d="m11 9 6 6m0-6-6 6"/>',
      Emoji: '<circle cx="12" cy="12" r="9" fill="currentColor" stroke="none"/><g fill="#414244" stroke="none"><ellipse cx="9" cy="9" rx="1.1" ry="1.6"/><ellipse cx="15" cy="9" rx="1.1" ry="1.6"/><path d="M6.5 13h11a5.6 5.6 0 0 1-11 0Z"/></g>',
      Globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6.5c4 2 10 2 14 0M5 17.5c4-2 10-2 14 0"/>',
      Microphone: '<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5.5 11v1a6.5 6.5 0 0 0 13 0v-1M12 18.5V22m-4 0h8"/>',
    };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[key]}</svg>`;
  }

  press(button) {
    button.classList.add('is-pressed');
    clearTimeout(button.releaseTimer);
    button.releaseTimer = setTimeout(() => button.classList.remove('is-pressed'), 160);
  }

  type(key) {
    if (key === 'Shift') {
      const now = Date.now();
      if (now - (this.lastShiftTap || 0) < 350) {
        this.capsLock = true;
        this.shift = false;
      } else if (this.capsLock) {
        this.capsLock = false;
        this.shift = false;
      } else this.shift = !this.shift;
      this.lastShiftTap = now;
      this.draw();
      return;
    }
    if (key === 'Microphone') return;
    if (key === 'Emoji') {
      this.emoji = !this.emoji;
      this.symbols = false;
      this.draw();
      return;
    }
    if (key === 'Mode' || key === 'Symbols' || key === 'Globe') {
      this.symbols = key === 'Symbols' || this.emoji ? false : !this.symbols;
      this.emoji = false;
      this.draw();
      return;
    }
    const input = this.target;
    input.focus({ preventScroll: true });
    let start = input.selectionStart;
    const end = input.selectionEnd;
    const text = key === 'Space' ? ' ' : key === 'Enter' ? '\n' : key === 'Backspace' ? '' : this.shift || this.capsLock ? key.toUpperCase() : key;
    if (key === 'Backspace' && start === end && start > 0) {
      start -= [...input.value.slice(0, start)].at(-1).length;
    }
    input.setRangeText(text, start, end, 'end');
    input.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: key === 'Backspace' ? 'deleteContentBackward' : 'insertText', data: text || null }));
    if (this.shift) {
      this.shift = false;
      this.draw();
    }
  }
}

customElements.define('apple-keyboard', AppleKeyboard);
