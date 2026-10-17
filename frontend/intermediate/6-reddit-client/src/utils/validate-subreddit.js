// Reddit subreddit names: 3-21 chars, letters/numbers/underscores.
const SUBREDDIT_NAME_PATTERN = /^[a-z0-9_]{3,21}$/;

/**
 * Normalizes user input into a bare subreddit name:
 * " r/ReactJS " -> "reactjs"
 */
export function normalizeSubredditName(input = '') {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/^\/?r\//, '')
    .replace(/[^a-z0-9_]/g, '');
}

export function isValidSubredditName(name = '') {
  return SUBREDDIT_NAME_PATTERN.test(name);
}

export function getSubredditNameError(input = '') {
  const name = normalizeSubredditName(input);

  if (!name) {
    return 'Enter a subreddit name first.';
  }
  if (!isValidSubredditName(name)) {
    return 'Subreddit names are 3-21 characters: letters, numbers and underscores only.';
  }
  return null;
}
