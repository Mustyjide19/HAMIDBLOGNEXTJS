"use client";
import React from 'react';

const Category = ({ cat }: any) => {
  return (
    <div
      onClick={() => {}}
      style={{ backgroundColor: '#af8533' }} // Inline style for custom background color
      className="p-4 rounded-lg shadow-md cursor-pointer"
    >
      {cat.attributes?.Title || 'Default Title'}
    </div>
  );
};

export default Category;
