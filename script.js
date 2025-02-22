async function saveKey(key) {
    await fetch('/api/storeKey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key })
    });
}

async function generateKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < 12; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('keyOutput').value = key;

    // Sauvegarde la clé
    await saveKey(key);
}
