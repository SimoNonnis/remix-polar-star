export default function Button({ children }) {
  return (
    <button className="border-2 border-orange-500 bg-orange-500 hover:bg-transparent text-orange-100 hover:text-slate-700 rounded-md p-2 max-w-xs m-auto transition-colors duration-300">
      {children}
    </button>
  );
}
