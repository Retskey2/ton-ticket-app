import { FC, useState } from 'react';

export const CopyPath: FC = () => {
  const [copySuccess, setCopySuccess] = useState<string>('Copy this link');

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      setCopySuccess('Copied!');
      setTimeout(() => {
        setCopySuccess('Copy this link');
      }, 3000);
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };
  return <div onClick={copyToClipBoard}>{copySuccess}</div>;
};
