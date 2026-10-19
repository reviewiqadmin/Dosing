"use client";

import { FormEvent, useState } from "react";
import { enquiryEmails, formConfirmation, formFileNote } from "@/lib/content";

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
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Company: ${company || "Not provided"}`,
      "",
      message,
    ];
    if (allowAttachment) {
      lines.push(
        "",
        fileName
          ? `Reference file to attach: ${fileName}`
          : "Reference file: none",
      );
    }
    const subject = allowAttachment
      ? `Quotation request from ${name}`
      : `Message from ${name}`;
    const href = `mailto:${enquiryEmails.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <div className="form-success" role="status">
        <p>{formConfirmation}</p>
        {allowAttachment && fileName ? <p>{formFileNote}</p> : null}
      </div>
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
