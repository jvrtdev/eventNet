export default function generateQrCode(eventId: string): string {
  const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=event/${eventId}`;

  return qrcode;
}
