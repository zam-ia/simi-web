export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function whatsappUrl(message: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51987088359";
  return `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
