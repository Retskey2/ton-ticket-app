import { useEffect, useState } from 'react';
import { useRequestCollection } from '../../../utils/api/hooks';

export const SearchPlug = () => {
  const [error, setError] = useState(false);
  const { isError } = useRequestCollection();

  useEffect(() => {
    if (isError) setError(true);
  }, [isError]);

  return (
    <div className='m-auto flex h-[95%] max-w-sm flex-col items-center justify-center'>
      {!error ? (
        <>
          <svg width='128' height='144' viewBox='0 0 128 144' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              opacity='0.32'
              d='M20 40C20 34.3995 20 31.5992 21.0899 29.4601C22.0487 27.5785 23.5785 26.0487 25.4601 25.0899C27.5992 24 30.3995 24 36 24H92C97.6005 24 100.401 24 102.54 25.0899C104.422 26.0487 105.951 27.5785 106.91 29.4601C108 31.5992 108 34.3995 108 40V102H20V40Z'
              fill='#45AEF5'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M89 35C90.6569 35 92 33.6569 92 32H96.8C103.521 32 106.881 32 109.448 33.3079C111.706 34.4584 113.542 36.2942 114.692 38.5521C116 41.1191 116 44.4794 116 51.2V82.8C116 89.5206 116 92.8809 114.692 95.4479C113.542 97.7058 111.706 99.5416 109.448 100.692C106.881 102 103.521 102 96.8 102H92C92 100.343 90.6569 99 89 99C87.3431 99 86 100.343 86 102H31.2C24.4794 102 21.1191 102 18.5521 100.692C16.2942 99.5416 14.4584 97.7058 13.3079 95.4479C12 92.8809 12 89.5206 12 82.8V51.2C12 44.4794 12 41.1191 13.3079 38.5521C14.4584 36.2942 16.2942 34.4584 18.5521 33.3079C21.1191 32 24.4794 32 31.2 32H86C86 33.6569 87.3431 35 89 35ZM92 42C92 43.6569 90.6569 45 89 45C87.3431 45 86 43.6569 86 42C86 40.3431 87.3431 39 89 39C90.6569 39 92 40.3431 92 42ZM92 52C92 53.6569 90.6569 55 89 55C87.3431 55 86 53.6569 86 52C86 50.3431 87.3431 49 89 49C90.6569 49 92 50.3431 92 52ZM89 65C90.6569 65 92 63.6569 92 62C92 60.3431 90.6569 59 89 59C87.3431 59 86 60.3431 86 62C86 63.6569 87.3431 65 89 65ZM92 72C92 73.6569 90.6569 75 89 75C87.3431 75 86 73.6569 86 72C86 70.3431 87.3431 69 89 69C90.6569 69 92 70.3431 92 72ZM89 85C90.6569 85 92 83.6569 92 82C92 80.3431 90.6569 79 89 79C87.3431 79 86 80.3431 86 82C86 83.6569 87.3431 85 89 85ZM92 92C92 93.6569 90.6569 95 89 95C87.3431 95 86 93.6569 86 92C86 90.3431 87.3431 89 89 89C90.6569 89 92 90.3431 92 92Z'
              fill='#45AEF5'
            />
          </svg>
          <h2 className='text-2xl font-bold leading-8'>Search collection</h2>
          <p className='text-center text-base font-medium leading-6 text-[#8994A3]'>
            Input address required collection for ticket validation.
          </p>
        </>
      ) : (
        <div className='text-base font-medium text-[#556170]'>Your search returned no results</div>
      )}
    </div>
  );
};
