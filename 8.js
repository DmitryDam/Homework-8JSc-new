const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};
       // Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
const sound = document.querySelector("#slideThree");
console.log (sound);

let callback = (event) => {
	for (let i=0; i<keys.length; i++) {
		if (event.key == keys[i]) {

			if (event.key == buttons[i].innerHTML) {

				buttons[i].classList.add("keyboard__btn--active");
				setTimeout(() => {
			      buttons[i].classList.remove("keyboard__btn--active");
			    }, 500);
			    // Доступ к атрибутам осуществляется при помощи стандартных методов:
       //          elem.hasAttribute(name) – проверяет наличие атрибута
       //          elem.getAttribute(name) – получает значение атрибута
       //          elem.setAttribute(name, value) – устанавливает атрибут
       //          elem.removeAttribute(name) – удаляет атрибут

			    if (sound.checked) {
			    	// debugger
			    	playSound(buttons[i].getAttribute('data-note'));
			    	console.log (event);
			    	console.log (playSound);
			    }
			}
		}
	}
}
console.log (event);
window.addEventListener("keydown", callback);