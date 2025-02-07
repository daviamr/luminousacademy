import { useState } from "react";

export function Whatsapp() {
  const [click, setClick] = useState<boolean>(false);
  console.log(click);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative flex items-center justify-center">
          <div className="bg-red-600 h-3 w-3 absolute rounded-full bottom-10 right-1 z-40 opacity-80"></div>
          <button className="bg-none z-30" onClick={() => { setClick(!click); }}>
            <img src="https://i.imgur.com/EBjXNpK.png" alt="Whatsapp" className="h-14" />
          </button>
          <div className="bg-[#42c552] h-12 w-12 absolute z-0 rounded-full animate-pingCustom"></div>
        </div>
      </div>
    </>
  );
}
