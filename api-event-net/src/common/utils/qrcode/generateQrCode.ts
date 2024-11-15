export default function generateQrCode(eventId: string): string {
  const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=event/${eventId}`;

  return qrcode;
}
