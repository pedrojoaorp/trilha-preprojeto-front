'use client'

import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center bg-blue-50 w-full h-full">
        <div className="w-[480px] h-[640px] bg-white flex flex-col">
          <p className="text-6xl pb-4 font-semibold">PraFazê!</p>
          <TodoList/>
        </div>
      </div>
    </div>
  );
}
