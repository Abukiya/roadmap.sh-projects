// Errors surfaced by the mock Reddit client. The UI maps these to
// user-facing messages inside the lane / add-lane form.
export class SubredditNotFoundError extends Error {
  constructor(name) {
    super(`Sorry, there isn't a subreddit called r/${name}.`);
    this.name = 'SubredditNotFoundError';
    this.subreddit = name;
  }
}

export class MockNetworkError extends Error {
  constructor() {
    super("Couldn't reach Reddit. The mock network hiccuped — try again.");
    this.name = 'MockNetworkError';
  }
}
