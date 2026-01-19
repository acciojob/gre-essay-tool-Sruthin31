const text = document.getElementById("evaluatedText");
const count = document.getElementById("wordCount");

text.addEventListener('input',()=>{

	count.textContent = text.value.length;
})