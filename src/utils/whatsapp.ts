/**
 * Gera um link wa.me.
 *
 * @param phone Número com DDI + DDD (ex: "5544991416128")
 * @param message Mensagem de texto a ser enviada
 * @returns URL formatada: https://wa.me/5544991416128?text=...
 */
export function createWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
