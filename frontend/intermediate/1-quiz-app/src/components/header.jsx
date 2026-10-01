import { Link } from "react-router";
export function Header() {
  return (
    <header className="h-14 p-4">
      <Link className="" to={"/"}><h1 className="p-4 text-2xl font-mono inline">QuizApp</h1></Link>
     
    </header>
  );
}
