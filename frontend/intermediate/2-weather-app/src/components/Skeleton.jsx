// components/Skeleton.jsx
export default function Skeleton({ className = "", tone = "default" }) {
  const toneClass =
    tone === "light" ? "bg-white/30" : "bg-gray-200 dark:bg-gray-700";
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse motion-reduce:animate-none rounded-md ${toneClass} ${className}`}
    />
  );
}
