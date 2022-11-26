import * as CryptoJS from 'crypto-js';

export class DataEncryption {
  key = 'd8^Tx}hd0!n(2}w1EqEgLpb[GN8R$l';
  constructor() {
  }

  encryptString(line: string): string {
    return CryptoJS.HmacSHA256(line, this.key).toString();
  }
}
