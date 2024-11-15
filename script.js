document.getElementById('inputText').addEventListener('input', function() {
    let inputText = this.value;
    let lowercasedText = inputText.toLowerCase();
    document.getElementById('outputText').value = lowercasedText;
});