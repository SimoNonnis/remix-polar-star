export default function Modal({ children, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-screen	bg-slate-900/80"
    >
      <dialog
        open
        onClick={(event) => event.stopPropagation()}
        className="h-screen grid place-items-center bg-transparent"
      >
        <div className="w-96	h-96 rounded-lg bg-orange-100 p-8 shadow-inner">
          {children}
        </div>
      </dialog>
    </div>
  );
}
