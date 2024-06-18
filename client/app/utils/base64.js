/*
  base64.js
  this helper formulate buffer data to base64 string
  This function is useful for encoding binary data into a base64 string, which can then be used directly in HTML or transmitted over text-based protocols.
 */

export const arrayBufferToBase64 = buffer => {
  let binary = '';
  let bytes = [].slice.call(new Uint8Array(buffer.data.data));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return `data:${buffer.contentType};base64,${window.btoa(binary)}`;
};
