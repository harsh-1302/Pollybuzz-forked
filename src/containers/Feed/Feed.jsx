import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { IconSearch, IconPlus, IconUser } from '@tabler/icons';
export default function Feed() {
  return (
    <div>
      <div className="flow-root">
        <label className="relative block float-left">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <IconSearch />
          </span>
          <input className="placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for a poll..." type="search" name="search" />
        </label>
        <a href="#" className="float-right" >
          <IconUser stroke={2} size={36} className="border-black border-2 rounded-full hover:text-sky-500 hover:border-sky-500 hover:bg-white" />
        </a>
        <a
          href="#"
          className="hover:border-sky-500 hover:border-solid hover:bg-white hover:text-sky-500 w-1/5 flex flex-col items-center rounded-md border-2 border-dashed border-gray-300 p-3 float-right"
        >
          <IconPlus />
        </a>
      </div>
      <div className="grid auto-rows-min grid-cols-2 gap-4 mt-10">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
