import crypto from "crypto"

export default class AES {

    private static secret_key = crypto.randomBytes(32)

    public static encrypt(text: string): string {

        const iv = crypto.randomBytes(16); 
        const cipher = crypto.createCipheriv('aes-256-cbc', this.secret_key, iv);
        let encrypted = cipher.update(text);

        encrypted = Buffer.concat([encrypted, cipher.final()]);

        return iv.toString('hex') + ':' + encrypted.toString('hex');

      }
      
    public static decrypt(encryptedData: string): string {

        const textParts = encryptedData.split(':');
        const iv = Buffer.from(textParts.shift()!, 'hex');
        const encryptedText = Buffer.from(textParts.join(':'), 'hex');
        const decipher = crypto.createDecipheriv('aes-256-cbc', this.secret_key, iv);

        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);

        return decrypted.toString();

    }

}