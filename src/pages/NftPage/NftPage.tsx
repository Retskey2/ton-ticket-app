import QRCode from 'qrcode.react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const NftPage = () => {
  const [visible, setVisible] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  const handlerVisible = () => setVisible(!visible);

  return (
    <div className='relative grid w-screen justify-center text-center'>
      <div className=' flex h-full min-h-screen w-[100vw] max-w-3xl flex-col bg-[#10161F] p-4'>
        <div className='relative m-auto'>
          <div className='mb-2 flex items-center gap-2' onClick={handlerVisible}>
            <h1 className='text-xl font-bold'>{state.metadata.name}</h1>
            <div className='items-center'>
              <svg width='12' height='8' viewBox='0 0 11 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1.19495 0.646258C0.861483 0.400546 0.391968 0.471684 0.146257 0.805149C-0.0994539 1.13861 -0.028315 1.60813 0.30515 1.85384L5.05515 5.35384C5.31972 5.54879 5.68038 5.54879 5.94495 5.35384L10.6949 1.85384C11.0284 1.60813 11.0996 1.13861 10.8538 0.805149C10.6081 0.471684 10.1386 0.400546 9.80515 0.646258L5.50005 3.81844L1.19495 0.646258Z'
                  fill='#8994A3'
                />
              </svg>
            </div>
          </div>
          {visible && (
            <div
              onClick={() => navigate('/')}
              className='absolute flex w-full max-w-[350px] cursor-pointer items-center gap-4 rounded-xl bg-[#2E3847] py-2 px-4'
            >
              <span>Select another collection</span>
              <svg width='12' height='14' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.28033 0.21967C8.98744 -0.0732233 8.51256 -0.0732233 8.21967 0.21967C7.92678 0.512563 7.92678 0.987437 8.21967 1.28033L9.43934 2.5H1.75C1.33579 2.5 1 2.83579 1 3.25C1 3.66421 1.33579 4 1.75 4H9.43934L8.21967 5.21967C7.92678 5.51256 7.92678 5.98744 8.21967 6.28033C8.51256 6.57322 8.98744 6.57322 9.28033 6.28033L11.7803 3.78033C12.0732 3.48744 12.0732 3.01256 11.7803 2.71967L9.28033 0.21967Z'
                  fill='#45AEF5'
                />
                <path
                  d='M2.71967 13.7803C3.01256 14.0732 3.48744 14.0732 3.78033 13.7803C4.07322 13.4874 4.07322 13.0126 3.78033 12.7197L2.56066 11.5H10.25C10.6642 11.5 11 11.1642 11 10.75C11 10.3358 10.6642 10 10.25 10H2.56066L3.78033 8.78033C4.07322 8.48744 4.07322 8.01256 3.78033 7.71967C3.48744 7.42678 3.01256 7.42678 2.71967 7.71967L0.21967 10.2197C-0.0732234 10.5126 -0.0732234 10.9874 0.21967 11.2803L2.71967 13.7803Z'
                  fill='#45AEF5'
                />
              </svg>
            </div>
          )}
        </div>

        <div className='text-center'>
          <div className='text-2xl font-bold leading-[32px]'>QR code for validation</div>
          <p className='mt-2 leading-[24px] text-[#8994A3]'>
            Show this is QR code to visitor <br /> to verify ticket ownership.
          </p>
        </div>
        <div className='mt-8 flex flex-col items-center'>
          <QRCode
            className='rounded-xl'
            size={350}
            value={state.metadata.external_link}
            includeMargin
            imageSettings={{ src: state.metadata.image, excavate: true, height: 70, width: 70 }}
          />
          <div className='mt-5 cursor-pointer text-sm text-[#556170]'>Tap to show on full screen</div>
        </div>
        <button className='m-auto h-14 w-full max-w-[350px] rounded-xl bg-[#1D2633] px-6'>Scan QR code</button>
      </div>
    </div>
  );
};
