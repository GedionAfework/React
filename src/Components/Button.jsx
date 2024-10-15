export default function Button({ children, ...props }) {
  return (
    <button
      className="btn bg-neutral-700 py-1 px-3 m-0 rounded-lg text-zinc-400 mt-8 hover:text-stone-700 hover:bg-neutral-400"
      {...props}
    >
      {children}
    </button>
  );
}
