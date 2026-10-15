import { Check, LogIn, Trash2 } from 'lucide-react';
function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full sm:max-w-xl mt-20">
          <header className="text-start p-2 text-2xl w-full">
            Task Tracker
          </header>
          <div className="flex gap-2 flex-col">
            <div className="border-2 flex justify-between">
              <input
                type="text"
                className="outline-none w-full p-2"
                placeholder="Start writing and press enter to create a task"
              />
              <button className="p-2 hover:scale-110">
                <LogIn />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <div className="flex gap-2 w-full group">
                  <div className="border-2 size-7 rounded-lg">
                    <div className="justify-center items-center h-full hidden group-hover:flex">
                      <Check/>
                    </div>
                  </div>
                  <div className="self-center w-full">
                    <p>New task is created and added to the list</p>
                  </div>
                </div>
                <button className="hover:scale-110">
                  <Trash2 className="self-center" />
                </button>
              </div>
              <div className="flex justify-between border-b-1 border-gray-300 pb-1">
                <div className="flex gap-2 w-full group">
                  <div className="border-2 size-7 rounded-lg">
                    <div className="flex justify-center items-center h-full hidden group-hover:flex">
                      <Check />
                    </div>
                  </div>
                  <div className="self-center w-full">
                    <p>New task is created and added to the list</p>
                  </div>
                </div>
                <button className="hover:scale-110">
                  <Trash2 className="self-center" />
                </button>
              </div>
              <div className="flex justify-between border-b-1 border-gray-300 pb-1">
                <div className="flex gap-2 w-full group">
                  <div className="border-2 size-7 rounded-lg">
                    <div className="flex justify-center items-center h-full hidden group-hover:flex">
                      <Check />
                    </div>
                  </div>
                  <div className="self-center w-full">
                    <p>New task is created and added to the list</p>
                  </div>
                </div>
                <button className="hover:scale-110">
                  <Trash2 className="self-center" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
