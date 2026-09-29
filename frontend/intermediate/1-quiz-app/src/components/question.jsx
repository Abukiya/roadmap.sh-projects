export function Questions() {
  return (
    <div className="w-full  md:max-w-2xl p bg-white shadow-xl p-8 rounded-lg flex flex-col gap-8 ">
        <div className="flex justify-between"><p>question 3 of 10</p> <p>score:2</p></div>
        <hr />
        <div className="grid gap-2">
            <h1 className="p-2">What does "typeof null’ return?</h1>
            <div className="bg-neutral-50 p-4 rounded-lg shadow">A. Object</div>
            <div className="bg-neutral-50 p-4 rounded-lg shadow">B. NUll</div>
            <div className="bg-neutral-50 p-4 rounded-lg shadow">C. Undefined</div>
            <div className="bg-neutral-50 p-4 rounded-lg shadow">D. Number</div>
        </div>
    </div>
  );
}
