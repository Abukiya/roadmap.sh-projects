export function Buttons({ answer, setanswer, id, setid }) {
  return (
    <div className="bg-gray-100 w-full p-4 rounded-lg text-xl flex justify-between">
      <button
        onClick={() => {
          if (id > 1) {
            setid(id - 1);
          }
        }}
        className="cursor-pointer"
      >
        Previous
      </button>
      <button
        onClick={() => {
          setanswer(!answer);
        }}
        className="cursor-pointer"
      >
        {answer ? "Hide answer" : "Show answer"}
      </button>
      <button
        onClick={() => {
          if (id < 10) setid(id + 1);
        }}
        className="cursor-pointer "
      >
        Next
      </button>
    </div>
  );
}
