export function Header() {
  return (
    <header className="h-24 flex justify-around">
      <div className=" flex gap-2">
        <div className="size-12 flex items-center h-full">
          <img src="favicon/favicon-96x96.png" alt="Weather App logo" />
        </div>
        <div className="flex items-center">
          <h1>Weather App</h1>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 ">
        <div className="flex gap-2">
          <button className="p-2">C</button>
          <button className="p-2">F</button>
        </div>
      </div>
    </header>
  );
}
