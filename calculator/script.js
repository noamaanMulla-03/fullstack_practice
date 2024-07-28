let operand1 = "0";
let operand2 = "";
let operator = "";

const evaluateExpression = (oprnd1, oprtr, oprnd2) => {
	let result = 0;
	switch (oprtr) {
		case "+":
			result = parseInt(oprnd1) + parseInt(oprnd2);
			break;
		case "-":
			result = parseInt(oprnd1) - parseInt(oprnd2);
			break;
		case "*":
			result = parseInt(oprnd1) * parseInt(oprnd2);
			break;
		case "/":
			result = parseInt(oprnd1) / parseInt(oprnd2);
			break;
		case "%":
			result = parseInt(oprnd1) % parseInt(oprnd2);
			break;
		default:
			result = parseInt(oprnd1);
	}

	return result.toString();
};

const assignOperand = (operand) => {
	if (!operator) {
		operand1 += operand.innerText;
		operand1 = parseInt(operand1).toString();
	} else {
		operand2 += operand.innerText;
		operand2 = parseInt(operand2).toString();
	}

	display.textContent = operand1 + operator + operand2;
};

const assignOperantor = (op) => {
	// if (operand1 == "") return;

	if (operand1 && operator && operand2) {
		operand1 = evaluateExpression(operand1, operator, operand2);

		operand2 = "";
		operator = op.innerText;

		display.textContent = operand1.toString() + operator.toString();

		return;
	}

	operator = op.innerText;
	display.textContent = operand1 + operator;
};

const clearDisplay = () => {
	display.textContent = "0";
	operand1 = "";
	operand2 = "";
	operator = "";
};

const display = document.querySelector("#display");
const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clearDisplay");
const equals = document.querySelector("#equals");

operands.forEach((operand) => {
	operand.addEventListener("click", () => {
		assignOperand(operand);
	});
});

operators.forEach((op) => {
	op.addEventListener("click", () => {
		assignOperantor(op);
	});
});

equals.addEventListener("click", () => {
	if (operand1 && operator && operand2) {
		operand1 = evaluateExpression(operand1, operator, operand2);
		operand2 = "";
		operator = "";

		display.textContent = operand1.toString();
	}
});

clear.addEventListener("click", () => {
	clearDisplay();
});

// const toggleNegative = document.querySelector("#toggleNegative");

// toggleNegative.addEventListener("click", () => {
// 	if (expression === "0") return;

// 	if (expression[0] === "-") expression = expression.slice(1);
// 	else expression = "-" + expression;

// 	display.innerHTML = expression;
// });
