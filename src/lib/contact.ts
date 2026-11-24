export type ContactPayload = { name: string; email: string; subject: string; message: string; botField: string };
export type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(v: ContactPayload): FieldErrors {
  const e: FieldErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Add a short subject (3+ characters).";
  if (v.message.trim().length < 20) e.message = "Tell me a bit more — at least 20 characters.";
  if (v.message.length > 5000) e.message = "Please keep it under 5,000 characters.";
  return e;
}

/**
 * Delivery strategy:
 *  1. VITE_CONTACT_ENDPOINT (e.g. a Formspree URL) if configured — JSON POST.
 *  2. Netlify Forms in production (form is registered in index.html).
 *  3. Otherwise fail loudly so the UI can offer an email fallback —
 *     we never pretend a message was sent.
 */
export async function sendContact(v: ContactPayload): Promise<void> {
  // Honeypot filled → silently accept (bot), send nothing.
  if (v.botField) return;

  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
  const fields = { name: v.name.trim(), email: v.email.trim(), subject: v.subject.trim(), message: v.message.trim() };

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(fields),
    });
    if (!res.ok) throw new Error(`Contact endpoint responded ${res.status}`);
    return;
  }

  if (import.meta.env.PROD) {
    const body = new URLSearchParams({ "form-name": "contact", "bot-field": "", ...fields });
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
    return;
  }

  throw new Error("No contact backend is configured in development.");
}

export function mailtoFallback(v: Pick<ContactPayload, "name" | "subject" | "message">, to: string) {
  const subject = encodeURIComponent(v.subject || "Hello from your portfolio");
  const body = encodeURIComponent(`${v.message}\n\n— ${v.name}`);
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
