import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, Check, CheckCircle2, Copy, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { profile } from "../../data/profile";
import { track } from "../../lib/analytics";
import { mailtoFallback, sendContact, validate, type ContactPayload, type FieldErrors } from "../../lib/contact";
import { BentoCard } from "../ui/BentoCard";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";
import { Button, ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

const empty: ContactPayload = { name: "", email: "", subject: "", message: "", botField: "" };

function Field({
  label,
  error,
  children,
  id,
  hint,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  id: string;
  hint?: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        {hint}
      </div>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500 dark:text-red-400"
          >
            <AlertCircle className="size-3.5" aria-hidden="true" /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border bg-surface-2 px-4 py-3 text-[0.95rem] text-fg placeholder:text-subtle transition-[border-color,box-shadow] " +
  "outline-none focus:border-accent focus:shadow-[0_0_0_4px_var(--accent-soft)]";

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="grid size-8 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg"
      aria-label={copied ? "Email copied" : "Copy email address"}
      title={copied ? "Copied!" : "Copy email"}
    >
      {copied ? <Check className="size-4 text-accent" /> : <Copy className="size-4" />}
    </button>
  );
}

export function Contact() {
  const uid = useId();
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (touched) setErrors(validate(next));
    if (status === "error") setStatus("idle");
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      await sendContact(values);
      setStatus("sent");
      track("contact_submit", { ok: true });
      setValues(empty);
      setTouched(false);
    } catch {
      setStatus("error");
      track("contact_submit", { ok: false });
    }
  };

  const aria = (name: keyof FieldErrors) => ({
    id: `${uid}-${name}`,
    name,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${uid}-${name}-error` : undefined,
    className: `${inputClass} ${errors[name] ? "border-red-500/60" : "border-line"}`,
  });

  const channels = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, extra: <CopyEmail /> },
    { Icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { Icon: MapPin, label: "Location", value: `${profile.location} · ${profile.timezone}` },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title={
          <>
            Let’s build something <span className="text-accent-gradient">reliable.</span>
          </>
        }
        description="Hiring for a full-stack or tech-lead role, or need a hand with a product? Send a note — I usually reply within one business day."
      />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
        <Reveal className="flex flex-col gap-3">
          <BentoCard className="p-6 sm:p-7">
            <ul className="divide-y divide-line">
              {channels.map(({ Icon, label, value, href, extra }) => (
                <li key={label} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[0.7rem] tracking-[0.14em] text-subtle uppercase">{label}</p>
                    {href ? (
                      <a href={href} className="block truncate text-[0.95rem] font-medium hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="truncate text-[0.95rem] font-medium">{value}</p>
                    )}
                  </div>
                  {extra}
                </li>
              ))}
            </ul>
          </BentoCard>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "LinkedIn", sub: "in/mahad-arshad", href: profile.linkedin, Icon: LinkedInIcon },
              { label: "GitHub", sub: `@${profile.githubUser}`, href: profile.github, Icon: GitHubIcon },
            ].map(({ label, sub, href, Icon }) => (
              <BentoCard
                key={label}
                as="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("social_click", { platform: label.toLowerCase(), from: "contact" })}
                className="group flex flex-col gap-6 p-5"
              >
                <div className="flex items-start justify-between">
                  <Icon className="size-6" />
                  <ArrowUpRight className="size-4 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold">{label}</p>
                  <p className="truncate font-mono text-xs text-muted">{sub}</p>
                </div>
              </BentoCard>
            ))}
          </div>

          <BentoCard className="flex items-center gap-3 p-5" interactive={false}>
            <span className="relative flex size-2.5">
              <span className="animate-ping-soft absolute inline-flex size-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
            </span>
            <p className="text-sm text-muted">{profile.availability}</p>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.08}>
          <BentoCard className="relative h-full overflow-hidden p-6 sm:p-8" interactive={false}>
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-accent-soft text-accent">
                    <CheckCircle2 className="size-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold">Message sent — thank you!</h3>
                  <p className="mt-2 max-w-sm text-muted">I’ve received your note and will get back to you at the email you provided.</p>
                  <Button variant="secondary" className="mt-8" onClick={() => setStatus("idle")}>
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                  name="contact"
                  className="space-y-5"
                  aria-describedby={`${uid}-privacy`}
                >
                  {/* Honeypot: hidden from people and assistive tech; bots fill it. */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label>
                      Leave this empty
                      <input name="botField" tabIndex={-1} autoComplete="off" value={values.botField} onChange={onChange} />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Name" id={`${uid}-name`} error={errors.name}>
                      <input {...aria("name")} type="text" autoComplete="name" placeholder="Jane Doe" value={values.name} onChange={onChange} required />
                    </Field>
                    <Field label="Email" id={`${uid}-email`} error={errors.email}>
                      <input {...aria("email")} type="email" autoComplete="email" inputMode="email" placeholder="jane@company.com" value={values.email} onChange={onChange} required />
                    </Field>
                  </div>
                  <Field label="Subject" id={`${uid}-subject`} error={errors.subject}>
                    <input {...aria("subject")} type="text" placeholder="Senior full-stack role at …" value={values.subject} onChange={onChange} required />
                  </Field>
                  <Field
                    label="Message"
                    id={`${uid}-message`}
                    error={errors.message}
                    hint={<span className="font-mono text-[0.7rem] text-subtle tabular-nums">{values.message.length}/5000</span>}
                  >
                    <textarea
                      {...aria("message")}
                      rows={6}
                      placeholder="A few lines about the role or project, timeline and anything else useful."
                      value={values.message}
                      onChange={onChange}
                      required
                      className={`${aria("message").className} resize-y`}
                    />
                  </Field>

                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        role="alert"
                        className="flex flex-col gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="flex items-start gap-2">
                          <AlertCircle className="mt-0.5 size-4 shrink-0 text-red-500" aria-hidden="true" />
                          The message couldn’t be delivered. Your text is still here — you can send it by email instead.
                        </span>
                        <ButtonLink href={mailtoFallback(values, profile.email)} size="sm" variant="secondary" className="shrink-0">
                          <Mail className="size-4" aria-hidden="true" /> Email instead
                        </ButtonLink>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col-reverse gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p id={`${uid}-privacy`} className="text-xs text-subtle">
                      Your details are only used to reply to you.
                    </p>
                    <Button type="submit" size="lg" disabled={status === "sending"} aria-busy={status === "sending"}>
                      {status === "sending" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
                        </>
                      ) : (
                        <>
                          Send message <Send className="size-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </BentoCard>
        </Reveal>
      </div>
    </section>
  );
}
