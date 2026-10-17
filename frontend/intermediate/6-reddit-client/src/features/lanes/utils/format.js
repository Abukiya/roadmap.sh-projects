// Display formatting helpers shared by lanes feature components.

/** 1234 -> "1.2k", 2410000 -> "2.4m" */
export function formatCount(value) {
  if (!Number.isFinite(value) || value < 0) return '0';
  if (value >= 1_000_000) return `${trimDecimal(value / 1_000_000)}m`;
  if (value >= 1_000) return `${trimDecimal(value / 1_000)}k`;
  return String(value);
}

function trimDecimal(value) {
  return value >= 100 ? String(Math.round(value)) : value.toFixed(1).replace(/\.0$/, '');
}

/** minutes -> "12m ago", "5h ago", "3d ago", "2w ago", "4mo ago", "1y ago" */
export function formatTimeAgo(minutes) {
  if (!Number.isFinite(minutes) || minutes < 1) return 'just now';
  if (minutes < 60) return `${Math.floor(minutes)}m ago`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}h ago`;

  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}d ago`;

  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}w ago`;

  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}mo ago`;

  return `${Math.floor(days / 365)}y ago`;
}
