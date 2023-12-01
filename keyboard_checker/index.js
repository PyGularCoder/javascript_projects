document.addEventListener('keydown', function (event) {
    const pressedKey = event.key;
    const keyElement = document.querySelector(`.key.${getKeyClass(pressedKey)}`);
  
    if (keyElement) {
      keyElement.classList.add('pressed');
    }
  });
  
  document.addEventListener('keyup', function (event) {
    const pressedKey = event.key;
    const keyElement = document.querySelector(`.key.${getKeyClass(pressedKey)}`);
  
    if (keyElement) {
      keyElement.classList.remove('pressed');
    }
  });
  
  function getKeyClass(key) {
    switch (key) {
      case ' ':
        return 'spacebar';
      case 'Enter':
        return 'enter';
      case 'Backspace':
        return 'backspace';
      case 'Tab':
        return 'tab';
      case 'CapsLock':
        return 'caps-lock';
      case 'Shift':
        return 'shift';
        case 'Control':
            return 'left-control';
        case 'Meta':
            return 'left-meta';
        case 'Alt-left':
            return 'left-alt';
        case 'Alt-right':
            return 'left-alt';
      default:
        return key.toLowerCase(); // Convert other keys to lowercase
    }
  }
  
  