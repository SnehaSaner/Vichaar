async function encryptMessage(publicKeyB, message) {
    await sodium.ready;

    // Get User A's private key from local storage
    const privateKeyA = sodium.from_base64(localStorage.getItem('privateKey'));

    // Convert User B's public key to bytes
    const publicKeyBBytes = sodium.from_base64(publicKeyB);

    // Create a nonce (random number to ensure security)
    const nonce = sodium.randombytes_buf(sodium.crypto_box_NONCEBYTES);

    // Encrypt the message
    const encryptedMessage = sodium.crypto_box_easy(message, nonce, publicKeyBBytes, privateKeyA);

    return {
        nonce: sodium.to_base64(nonce),
        cipherText: sodium.to_base64(encryptedMessage)
    };
}
