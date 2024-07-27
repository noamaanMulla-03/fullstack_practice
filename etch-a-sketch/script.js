let container = document.querySelector(".container");

const addBlock = (size) => {
	let newBlockSize = container.offsetWidth / size + "px";

	for (let i = 0; i < size * size; i++) {
		let newBlock = document.createElement("div");

		newBlock.style.width = newBlockSize;
		newBlock.style.height = newBlockSize;
		newBlock.style.opacity = 1;

		container.appendChild(newBlock);
	}
};

const gradualDarkening = (block) => {
	let opacity = block.style.opacity;
	opacity = opacity - 0.1;
	block.style.opacity = opacity;
};

const addEventListenerToBlocks = () => {
	let blocks = document.querySelectorAll(".container div");

	blocks.forEach((block) => {
		block.addEventListener("mouseover", () => {
			block.style.backgroundColor = `#${Math.floor(
				Math.random() * 16777215
			).toString(16)}`;

			gradualDarkening(block);
		});
	});
};

let resizeButton = document.querySelector("#get-size");

resizeButton.addEventListener("click", () => {
	let size = prompt("Enter the size of the grid", 16);

	if (size < 2 || size > 128) {
		alert("Size should be between 2 and 126");
		return;
	}

	container.innerHTML = "";
	addBlock(size);
	addEventListenerToBlocks();
});

let resetButton = document.querySelector("#reset-board");

resetButton.addEventListener("click", () => {
	let blocks = document.querySelectorAll(".container div");

	blocks.forEach((block) => {
		block.style.backgroundColor = "rgb(255, 226, 172)";
	});
});

addBlock(16);
addEventListenerToBlocks();
