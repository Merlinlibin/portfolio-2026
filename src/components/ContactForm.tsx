import { useState, type FormEvent } from 'react';
import { profile } from '../data/content';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FORMSPREE_CONFIGURED =
  !!profile.formspreeId && !profile.formspreeId.startsWith('YOUR_');
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${profile.formspreeId}`;

interface Fields {
  name: string;
  email: string;
  message: string;
}

const EMPTY: Fields = { name: '', email: '', message: '' };

function validate(fields: Fields): Partial<Fields> {
  const errors: Partial<Fields> = {};
  if (!fields.name.trim()) errors.name = 'Please enter your name.';
  if (!fields.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.message.trim()) {
    errors.message = 'Please enter a message.';
  } else if (fields.message.trim().length < 10) {
    errors.message = 'Your message is a little short.';
  }
  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...fields, [key]: e.target.value };
    setFields(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blur = (key: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(fields));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(found).length > 0) return;

    setStatus('submitting');
    try {
      if (!FORMSPREE_CONFIGURED) {
        // No Formspree ID set yet — simulate so the UI is testable.
        // (Set profile.formspreeId in src/data/content.ts to send real emails.)
        await new Promise((resolve) => setTimeout(resolve, 700));
      } else {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: fields.name,
            email: fields.email,
            message: fields.message,
            _subject: `Portfolio message from ${fields.name}`,
          }),
        });
        if (!res.ok) {
          const data = (await res.json().catch(() => null)) as { errors?: unknown } | null;
          throw new Error(data?.errors ? JSON.stringify(data.errors) : `Request failed: ${res.status}`);
        }
      }
      setStatus('success');
      setFields(EMPTY);
      setTouched({});
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success glass" role="status" aria-live="polite">
        <div className="form-success-check" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3>Message sent!</h3>
        <p>Thanks for reaching out — I'll get back to you soon.</p>
        <button className="btn btn-outline" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={fields.name}
          onChange={update('name')}
          onBlur={blur('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'cf-name-err' : undefined}
        />
        {errors.name && (
          <span className="field-error" id="cf-name-err" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={fields.email}
          onChange={update('email')}
          onBlur={blur('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'cf-email-err' : undefined}
        />
        {errors.email && (
          <span className="field-error" id="cf-email-err" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          placeholder="Tell me about your project or role…"
          value={fields.message}
          onChange={update('message')}
          onBlur={blur('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
        />
        {errors.message && (
          <span className="field-error" id="cf-message-err" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      {status === 'error' && (
        <p className="form-banner-error" role="alert">
          Something went wrong sending your message. Please email me directly instead.
        </p>
      )}

      <button type="submit" className="btn btn-primary form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <span className="spinner" aria-hidden="true" /> Sending…
          </>
        ) : (
          'Send message'
        )}
      </button>
    </form>
  );
}
