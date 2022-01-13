import React from 'react';

export default function App() {
  return (
    <>
    
<div class="flex items-center justify-center w-screen h-screen bg-gray-800"  >
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="  flex w-full">
            <input
                type="text"
                placeholder="Search~People,Stickers,Polls"/>
                
            <button class="bg-blue-300  hover:bg-red-300 px-4 flex flex-wrap">
                <p class="font-semibold text-base uppercase">Search</p>
            </button>
        </div>
    </div>
</div>
    </>
      );
}