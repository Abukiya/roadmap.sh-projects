export function Somestory({setIsaddsheetopen}) {
  return (
    <div className="flex mt-40 items-center flex-col flex-1">
      <div className="flex flex-col gap-4">
        <button className="bg-neutral-200 border border-dashed size-16 rounded-full self-center"onClick={()=>setIsaddsheetopen(true)} >+</button>
        <button className="bg-linear-to-tr from-amber-400 via-pink-500 to-purple-600 rounded-xl p-2" onClick={()=>setIsaddsheetopen(true)}>Add more story</button>
      </div>
    </div>
  );
}
