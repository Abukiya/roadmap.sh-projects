const themes = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "sunset", label: "Sunset" },
];

export default function ThemeSwitcher() {
  return (
    <fieldset className="mb-8 flex gap-3">
      <legend className="sr-only">Theme</legend>
      {themes.map(({ id, label }) => (
        <div key={id}>
          <input
            type="radio"
            name="theme"
            id={`theme-${id}`}
            className="peer sr-only"
            defaultChecked={id === "light"}
          />
          <label
            htmlFor={`theme-${id}`}
            className="cursor-pointer rounded-(--radius-md) border border-(--color-text)/30 px-4 py-2
                       peer-checked:border-(--color-accent) peer-checked:font-semibold
                       peer-focus-visible:ring-2 peer-focus-visible:ring-(--color-accent)"
          >
            {label}
          </label>
        </div>
      ))}
    </fieldset>
  );
}