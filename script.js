const text = document.getElementById("evaluatedText");
const count = document.getElementById("wordCount");

text.addEventListener('input',()=>{

	const context = text.value.trim();

	if(context ===""){
		count.innerText = 0;
	}
	else{
		const words = context.split(/\s+/);
		count.innerText = words.length;
	}
});