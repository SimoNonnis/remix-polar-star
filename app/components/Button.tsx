export default function Button({ children }) {
  return (
    <button className=" border-2 border-orange-500 hover:bg-orange-500 hover:text-orange-100 rounded-md p-2 max-w-xs m-auto transition-colors duration-300">
      {children}
    </button>
  );
}
