"use client";

import { FormEvent, useState } from "react";
import { formConfirmation } from "@/lib/content";

type QuoteFormProps = {
  id: string;
  submitLabel: string;
};

export function QuoteForm({ id, submitLabel }: QuoteFormProps) {
  const [confirmed, setConfirmed] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <p className="form-success" role="status">
        {formConfirmation}
      </p>
    );
  }

  return (
    <form className="quote-form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor={`${id}-name`}>Name</label>
        <input id={`${id}-name`} name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor={`${id}-email`}>Email</label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor={`${id}-phone`}>Phone</label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor={`${id}-company`}>Company</label>
          <input
            id={`${id}-company`}
            name="company"
            type="text"
            autoComplete="organization"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor={`${id}-message`}>Project message</label>
        <textarea id={`${id}-message`} name="message" rows={6} required />
      </div>
      <button type="submit" className="quote-button submit-button">
        {submitLabel}
      </button>
    </form>
  );
}
