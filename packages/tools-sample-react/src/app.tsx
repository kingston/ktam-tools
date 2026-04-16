import { useState } from 'react';

import reactLogo from './assets/react.svg';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 text-center">
      <div className="flex justify-center">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-logo-spin"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl/tight">Vite + React</h1>
      <div className="p-8">
        <button
          className="cursor-pointer rounded-lg border border-transparent bg-neutral-900 px-5 py-2.5 font-medium text-white transition-colors hover:border-indigo-500 focus:outline-4 dark:bg-neutral-100 dark:text-neutral-900"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit{' '}
          <code className="rounded-sm bg-neutral-800 px-1 py-0.5 text-sm text-white dark:bg-neutral-200 dark:text-neutral-900">
            src/App.tsx
          </code>{' '}
          and save to test HMR
        </p>
      </div>
      <p className="text-neutral-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
