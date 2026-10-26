import { useRef, useState } from "react";
import { Upload } from "lucide-react";

export function AddStory({ onAdd }) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      onAdd({
        id: crypto.randomUUID(),
        image: reader.result, // base64 data URL
        createdAt: Date.now(),
        viewed: false,
      });
    };
    reader.readAsDataURL(file);

    e.target.value = ""; // lets the user pick the same file again
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
      <button
        onClick={() => inputRef.current.click()}
        className="flex flex-col gap-4 p-6 items-center justify-center rounded-2xl w-full bg-zinc-200 text-2xl border-dashed border border-gray-400"
      >
        <Upload />
        <p>Tap to choose an image</p>
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </>
  );
}
