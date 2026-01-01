let CryptoJSUtils = require("crypto-js");

// Get the SALT from the system environment variable
const SALT= process.env.SLAT || "defaultset";


// Encyrption Funcation
export function encrypt(text:string) {

    const cilhertext = CryptoJSUtils.AES.encrypt(text,SALT).tostring(); 
    return cilhertext
}

// Decryption funcation

export function decypt(cilhertext:string)
{ 
    const bytes = CryptoJSUtils.AES.decypt(cilhertext,SALT);
    const originalText = bytes.tostring(CryptoJSUtils.enc.utf8);
    return originalText;

}
