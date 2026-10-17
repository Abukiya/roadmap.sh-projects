// Mock Reddit dataset.
//
// Reddit killed anonymous access to its JSON feeds, so the app talks to a
// local mock client instead (see mock-reddit-api.js). This file is the
// "backend": a registry of subreddits that exist in the mock world plus
// deterministic post generation, so every reload renders identical data.

const AUTHORS = [
  'pixel_wanderer',
  'async_alex',
  'the_real_dom',
  'state_whisperer',
  'null_pointer_hero',
  'css_wizardry',
  'stack_overflower',
  'terminal_poet',
  'markup_maven',
  'bundle_splitter',
  'late_night_debugger',
  'sea_of_hooks',
  'typed_thoughts',
  'query_params',
  'golden_ratio_dev',
  'runtime_terry',
];

const FLAIRS = [
  'Discussion',
  'Question',
  'Showoff',
  'News',
  'Help',
  'Tutorial',
  'Show & Tell',
];

// FNV-1a: tiny deterministic hash so mock values are stable across reloads.
function hashString(str) {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function makePost(subredditName, title, index) {
  const seed = hashString(`${subredditName}:${title}`);
  const ageSeed = hashString(`${subredditName}:${title}:age`);

  return {
    id: `${subredditName}-${index}`,
    title,
    author: AUTHORS[seed % AUTHORS.length],
    score: 37 + (hashString(`${subredditName}:${title}:score`) % 14200),
    upvoteRatio: 0.72 + ((seed % 28) / 100),
    comments: 2 + (hashString(`${subredditName}:${title}:comments`) % 610),
    createdMinutesAgo: 12 + (ageSeed % 12960), // up to 9 days old
    flair: seed % 4 === 0 ? null : FLAIRS[seed % FLAIRS.length],
    permalink: `https://www.reddit.com/r/${subredditName}/comments/${(
      seed.toString(36) + index.toString(36)
    ).padStart(8, '0')}/`,
  };
}

const REGISTRY = [
  {
    name: 'webdev',
    title: 'Web Development',
    description:
      'A community dedicated to all things web development: front-end, back-end and everything in between.',
    subscribers: 2_410_000,
    activeNow: 3_142,
    posts: [
      'After 6 months of learning, I launched my first client site. Here is what broke on day one.',
      'CSS Grid vs Flexbox in 2026: when do you still reach for floats?',
      'Job hunting as a junior dev: 143 applications, 3 interviews, 1 offer',
      'Stop adding a useEffect for everything. Here are 7 alternatives.',
      'Showoff Saturday: I rebuilt my portfolio with zero dependencies',
      'Why does every tutorial still teach jQuery in the first lesson?',
      'My manager asked me to "make the database faster" with no access to the database',
      'The perfect frontend stack does not exist — but this one ships fast',
    ],
  },
  {
    name: 'reactjs',
    title: 'React',
    description:
      'A community for learning and discussing React.js, hooks, performance and ecosystem libraries.',
    subscribers: 1_020_000,
    activeNow: 1_877,
    posts: [
      'You probably don’t need useEffect: a practical guide with 10 examples',
      'React Compiler hit stable — our bundle got 11% smaller overnight',
      'I traced every unnecessary re-render in our app. The culprit surprised me.',
      'What is the correct way to fetch data in a component in 2026?',
      'Showoff: I open-sourced a headless table with virtualization built in',
      'Rules of Hooks explained with a coffee shop analogy',
      'Server Components finally clicked for me. Here is the mental model.',
      'How do you test custom hooks without losing your mind?',
    ],
  },
  {
    name: 'javascript',
    title: 'JavaScript',
    description:
      'All about JavaScript: the language, the runtime, engines, patterns and the weird parts.',
    subscribers: 3_180_000,
    activeNow: 4_021,
    posts: [
      'I thought I knew closures until I drew this diagram',
      'Temporal Dead Zone: the bug that cost our team an entire afternoon',
      'Promise.all vs allSettled vs race — a visual cheat sheet',
      'Is vanilla JS enough for a small internal tool in 2026? Yes.',
      'The new Set methods just landed and they are quietly excellent',
      'Explain double-entry bookkeeping like I’m a JavaScript developer',
      'Showoff: a 3kb date library with no dependencies and no DST bugs',
      'What is the weirdest bug you have chased through the event loop?',
    ],
  },
  {
    name: 'frontend',
    title: 'Front End',
    description:
      'Design, accessibility, performance and the craft of building interfaces for the web.',
    subscribers: 890_000,
    activeNow: 964,
    posts: [
      'Our Lighthouse score went from 41 to 98 by deleting code, not adding it',
      'Accessible modals: the focus trap checklist we use in code review',
      'Tailwind v4 changes you need to know before upgrading',
      'Container queries changed how I structure layout components',
      'Showoff: I designed a dashboard template that works at 320px',
      'The case against hamburger menus on desktop is stronger than ever',
      'How do you handle design system drift between Figma and code?',
      'Pagination is harder than it looks — here is our 4-month journey',
    ],
  },
  {
    name: 'nextjs',
    title: 'Next.js',
    description:
      'Discussion about the Next.js framework: App Router, RSC, caching, deployment and more.',
    subscribers: 410_000,
    activeNow: 733,
    posts: [
      'Caching in the App Router: a decision tree you can actually follow',
      'I migrated a 200-page site from Pages to App Router. Honest review.',
      'Server Actions are great until you need optimistic UI',
      'Streaming responses cut our time-to-first-byte in half',
      'Showoff: full-stack calendar app, 100 Lighthouse, deployed on a $0 plan',
      'When would you NOT reach for Next.js?',
      'Route groups, parallel routes and intercepting routes in one diagram',
      'How do you organize feature folders in a large Next.js repo?',
    ],
  },
  {
    name: 'typescript',
    title: 'TypeScript',
    description:
      'TypeScript: type gymnastics, compiler internals, adoption strategies and real-world patterns.',
    subscribers: 1_960_000,
    activeNow: 2_045,
    posts: [
      'Generic constraints explained with a recipe book analogy',
      'Our team banned `any` for a month. Here is what happened.',
      'satisfies is the most underrated TypeScript feature',
      'How to type a router without drowning in conditional types',
      'Showoff: a library that infers SQL types straight from your query',
      'Is over-typing slowing your team down? Ours hit a wall.',
      'Discriminated unions made our state machine bugs disappear',
      'from zod to the schema: runtime and compile-time validation in sync',
    ],
  },
  {
    name: 'css',
    title: 'CSS',
    description:
      'A subreddit for cascade lovers: layouts, animations, modern units and debugging weirdness.',
    subscribers: 350_000,
    activeNow: 512,
    posts: [
      'I rebuilt the Windows XP interface with only CSS. No images.',
      ':has() is the parent selector we waited 20 years for',
      'Why is my z-index not working? A visual stack context guide',
      'Scroll-driven animations are finally shipping everywhere',
      'Showoff: pure CSS 3D carousel, 60fps, 40 lines',
      'The cascade layers feature nobody talks about but everybody needs',
      'How do you decide between rem and ch units for typography?',
      'A short love letter to `align-content: center` on flexbox',
    ],
  },
  {
    name: 'programming',
    title: 'Programming',
    description:
      'Computer programming in all its forms: career talk, algorithms, tools and war stories.',
    subscribers: 6_050_000,
    activeNow: 8_402,
    posts: [
      'The best code review comment I ever received was two words long',
      'I deleted 18,000 lines of code this sprint and nothing broke. Here is how.',
      'Reading code is a skill nobody teaches. What resources helped you?',
      'Rubber duck debugging is real: our postmortem says so',
      'Showoff: an open-source CLI that turns git history into a timeline',
      'What was your "aha moment" with algorithms?',
      'We rewrote our monolith in place. No big bang, no regrets.',
      'Why do so many interview questions bear no resemblance to the job?',
    ],
  },
];

const RECORDS = new Map(REGISTRY.map((entry) => [entry.name, entry]));

export function getSubredditRecord(name) {
  return RECORDS.get(name) ?? null;
}

export function getKnownSubredditNames() {
  return REGISTRY.map((entry) => entry.name);
}

export function buildSubredditPosts(record) {
  return record.posts.map((title, index) => makePost(record.name, title, index));
}
