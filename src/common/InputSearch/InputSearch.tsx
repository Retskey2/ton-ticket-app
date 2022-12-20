import React, { useState } from 'react';
import styles from './InputSearch.module.scss';

export default function InputSearch() {
  const [inputs, setInputs] = useState([]);

  return (
    <div className='relative h-12'>
      <input placeholder='Search' type='text' className='w-full rounded-xl border-0 bg-[#1D2633] p-4 outline-none' />
    </div>
  );
}
