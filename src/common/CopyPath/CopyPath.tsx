import React, { useRef, useState } from 'react';
import CopySvg from '@assets/icons/copyIcon.svg';

export default function CopyPath() {
  const [copySuccess, setCopySuccess] = useState<string>('Copy this link');

  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(location.href);
      setCopySuccess('Copied!');
      setTimeout(() => {
        setCopySuccess('Copy this link');
      }, 2000);
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };
  return <div onClick={copyToClipBoard}>{copySuccess}</div>;
}
