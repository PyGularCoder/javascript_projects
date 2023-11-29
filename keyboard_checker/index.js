document.addEventListener("DOMContentLoaded", function () {
    const keyboard = document.getElementById("keyboard");
    let pressedKeyElement = null;

    const layout = [
        "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12",
        "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
        "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]",
        "\\", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'",
        "Enter", "ShiftLeft", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/",
        "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight",
        "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown",
    ];

    layout.forEach((key) => {
        const keyElement = document.createElement("div");
        keyElement.classList.add("key");
        if (key.length > 1) {
            keyElement.classList.add("special");
        }
        if (key === " ") {
            keyElement.classList.add("space");
        }
        if (["Enter", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight"].includes(key)) {
            keyElement.classList.add("large");
        }
        if (["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(key)) {
            keyElement.classList.add("bottom-row");
        }
        keyElement.textContent = key;
        keyElement.addEventListener("click", () => onKeyPress(keyElement, key));
        keyboard.appendChild(keyElement);
    });

    document.addEventListener("keydown", function (event) {
        const keyPressed = event.key.toUpperCase();
        const keyElement = getKeyElement(keyPressed);

        if (!keyElement) {
            const keyElementByCode = getKeyElement(event.code);
            if (keyElementByCode) {
                keyElementByCode.textContent = keyPressed;
                keyElementByCode.classList.add("highlight");
                pressedKeyElement = keyElementByCode;
            }
        } else {
            highlightKey(keyElement);
        }
    });

    document.addEventListener("keyup", function () {
        if (pressedKeyElement) {
            unhighlightKey(pressedKeyElement);
            pressedKeyElement = null;
        }
    });

    function getKeyElement(keyValue) {
        return Array.from(keyboard.children).find(
            (keyElement) => keyElement.textContent === keyValue
        );
    }

    function onKeyPress(keyElement, keyValue) {
        if (pressedKeyElement) {
            unhighlightKey(pressedKeyElement);
        }

        highlightKey(keyElement);
        alert(`You pressed the key: ${keyValue}`);
    }

    function highlightKey(keyElement) {
        keyElement.classList.add("highlight");
        pressedKeyElement = keyElement;
    }

    function unhighlightKey(keyElement) {
        keyElement.classList.remove("highlight");
    }
});
