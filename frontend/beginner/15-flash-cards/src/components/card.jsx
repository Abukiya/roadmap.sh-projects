export default function Card({ Card, answer }) {
  return (
    <div
      key={Card.id}
      className="text-2xl bg-gray-100 mb-2 rounded-lg flex h-full w-full items-center justify-center"
    >
      <h1 className={`text-center ${answer ? "hidden" : "flex"}`}>
        {Card.question}
      </h1>
      <h1 className={`text-center ${answer ? "flex" : "hidden"}`}>
        {Card.answer}
      </h1>
    </div>
  );
}
