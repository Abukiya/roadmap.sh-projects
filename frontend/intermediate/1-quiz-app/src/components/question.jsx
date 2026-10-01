import { useEffect, useState } from "react";
import quiz from "../config/questions.json";
import { useNavigate } from "react-router";

export function Questions() {
  // const [shouldCrash, setShouldCrash] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (Math.random() > 0.5) {
  //       setShouldCrash(true);
  //     }
  //   }, 0);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (shouldCrash) {
  //   throw new Error("stats service crashed");
  // }

  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const { questions } = quiz;
  const q = questions[current];
  const abcd = ["A", "B", "C", "D"];

  function handleselct(index) {
    if (selected != null) return;
    setSelected(index);
    if (index === q.correctAnswer) setScore((s) => s + 1);
  }
  const handleNext = () => {
    setSelected(null);
    if (current + 1 === questions.length) {
      navigate("/result", { state: { score, total: questions.length } });
    } else {
      setCurrent((c) => c + 1);
    }
  };

  return (
    <div
      className="w-full  md:max-w-2xl p bg-white shadow-xl p-8 rounded-lg flex flex-col gap-8"
      key={q.id}
    >
      <div className="flex justify-between">
        <p>
          question {q.id} of {questions.length}
        </p>
        <p>{score}</p>
      </div>
      <hr />
      <div className="grid gap-2">
        <h1 className="p-2">{q.question}</h1>
        {q.options.map((option, index) => {
          let style =
            "border-slate-200 hover:border-indigo-600 hover:bg-indigo-50";
          if (selected !== null) {
            if (index === q.correctAnswer)
              style = "border-green-500 bg-green-50";
            else if (index === selected) style = "border-red-500 bg-red-50";
            else style = "border-slate-200 opacity-50";
          }

          return (
            <button
              key={index}
              onClick={() => {
                handleselct(index);
              }}
              className={`w-full rounded-xl border px-5 py-4 text-left transition cursor-pointer ${style}`}
            >
              {abcd[index]},{option}
            </button>
          );
        })}
      </div>
      <p id="demo"></p>
      {selected !== null && (
        <div className="flex gap-2 ">
          <button
            onClick={() => {
              document.getElementById("demo").innerText =
                `Explanation: ${q.explanation}`;
            }}
            className="mt-6 w-1/2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
          >
            Explanation
          </button>
          <button
            onClick={handleNext}
            className="mt-6 w-1/2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
          >
            {current + 1 === questions.length ? "See Results" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}
