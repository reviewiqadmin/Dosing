import Link from "next/link";

type LogoProps = {
  variant?: "default" | "light";
};

export function Logo({ variant = "default" }: LogoProps) {
  const src =
    variant === "light"
      ? "/brand/dosind-logo-light.png"
      : "/brand/dosind-logo.png";

  return (
    <Link href="/" className="logo" aria-label="DosInd home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="logo-image" />
    </Link>
  );
}
