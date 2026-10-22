import ThemeSwitcher from "./themeswitcher";
function App() {
  return (
    <>
      <body className="min-h-screen bg-(--color-bg) text-(--color-text) p-8">
        <div className="flex justify-center flex-col items-center h-screen">
          <article className="max-w-sm rounded-(--radius-md) bg-(--color-surface) p-6">
            <ThemeSwitcher />
            <h2 className="text-xl font-bold">Hello, World!</h2>
            <p className="mt-2">
              This is a simple card that changes theme with CSS variables.
            </p>
            <button className="mt-4 rounded-(--radius-md) bg-(--color-accent) px-4 py-2 text-(--color-bg)">
              Primary Button
            </button>
          </article>
        </div>
      </body>
    </>
  );
}

export default App;
