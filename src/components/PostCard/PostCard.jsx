import React from 'react';

export default function PostCard() {
  return (
    <div className="rounded-lg bg-slate-200 hover:bg-slate-300 shadow-md hover:shadow-lg p-6">
      <div className="font-bold">Poll Heading</div>
      <div className="mb-2">Poll Description</div>
      <div className="font-light italic flex flex-col justify-center items-center">
        Poll Content
      </div>
    </div>
  );
}
