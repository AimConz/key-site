function generateKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < 12; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('keyOutput').value = key;
}

function copyKey() {
    const keyField = document.getElementById('keyOutput');
    keyField.select();
    document.execCommand('copy');
    alert("Key copied: " + keyField.value);
}