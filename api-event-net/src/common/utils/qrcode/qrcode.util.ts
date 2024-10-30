import * as QRCode from 'qrcode';

export default async function QRCodeUtil(eventId: string): Promise<string> {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(`event/${eventId}`);
    return qrCodeDataUrl;
  } catch (error) {
    throw new Error('Falha ao gerar QRCode do evento');
  }
}
