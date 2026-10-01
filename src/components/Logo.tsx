import Image from "next/image";

export default function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <>
      <Image
        src="/logo-dark.png"
        alt="xread"
        width={500}
        height={200}
        priority
        className={`${className} dark:hidden`}
      />
      <Image
        src="/logo.png"
        alt="xread"
        width={500}
        height={200}
        priority
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
