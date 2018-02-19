const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

const regFirstName = /[A-ZА-ЯІ][a-zа-яії]{2,30}$/;
const regLastName = /[A-ZА-ЯІ][a-zа-яії]{2,30}$/;
const regPhone = /[\+]\d{2}[\(]\d{3}[\)]\d{7}$/;

let form = {};
let checkBool = {};
let results;

function validate(evt) {
// Задаем значения по умолчанию
	let checkBool = {
		firstname : false,
		lastname : false,
		tel : false,
	};
// создается объект формы
	form.firstname = firstname.value;
	form.lastname = lastname.value;
	form.tel = tel.value;

	// Для поиска точного соответствия объект RegExp 
	// имеет встроенный метод test, 
	// возвращающий true или false.
	
	if (regFirstName.test(firstname.value)) {
		checkBool.firstname = true;	
	}

	if (regLastName.test(lastname.value)) {
		checkBool.lastname = true;	
	}

	if (regPhone.test(tel.value)) {
		checkBool.tel = true;	
	}

	results = checkBool;
	console.log(results)

  function showResults(results) {
	  let out = '';
	  console.log(results);

	  for (let key in results) {
	    	if (results[key] == true) {
			out += `<li class="success">SUCCESS: ${key} passed validation</li>`;
		    }
		    else {
			out += `<li class="error">ERROR: ${key} failed validation</li>`;
		    }		
	    };
	    resultsList.innerHTML = out;
    }
  showResults(results) 
}
submitBtn.addEventListener("click", validate);
