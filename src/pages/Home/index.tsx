import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="flex h-[100dvh] w-[100dvw] justify-center">
      <div class="flex w-4/5 max-w-[1080px] flex-col space-y-4 py-8">
        <h1 class="text-center text-2xl">yurzhang's frontend boilerplate</h1>
        <div class="flex flex-col items-center space-y-2">
          <button
            class="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => setCount((c) => c + 1)}
          >
            count is {count()}
          </button>
          <p>
            Edit <code>src/pages/Home/index.tsx</code> and save to test HMR.
          </p>
        </div>
      </div>
    </div>
  );
};
