"use client";

import { FormEvent, useState } from "react";
import { formConfirmation } from "@/lib/content";

type QuoteFormProps = {
  id: string;
  submitLabel: string;
  allowAttachment?: boolean;
};

export function QuoteForm({
  id,
  submitLabel,
  allowAttachment = false,
}: QuoteFormProps) {
  const [confirmed, setConfirmed] = useState(false);
  const [fileName, setFileName] = useState("");

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
      {allowAttachment ? (
        <div className="field">
          <label htmlFor={`${id}-file`}>Reference file</label>
          <input
            id={`${id}-file`}
            name="reference"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.webp,.gif,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.dwg,.dxf,.ifc,.rvt,.zip,.txt"
            onChange={(event) => {
              const file = event.target.files?.[0];
              setFileName(file ? file.name : "");
            }}
          />
          <p className="file-note">
            {fileName
              ? fileName
              : "Optional. PDF, image, office, or CAD file."}
          </p>
        </div>
      ) : null}
      <button type="submit" className="quote-button submit-button">
        {submitLabel}
      </button>
    </form>
  );
}
