import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="DosInd home">
      <svg viewBox="0 0 32 32" aria-hidden="true" className="logo-mark">
        <path
          d="M5 26 L16 6 L27 26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M11 26 L16 16.5 L21 26" fill="currentColor" />
      </svg>
      <span className="logo-word">DosInd</span>
    </Link>
  );
}
