export default function FormInput(props) {
  return (
    <div className="text-left mb-6">
      <label htmlFor={props.id}>{props.text}</label>
      <input
        {...props}
        className="mt-1 block w-full border-2 border-orange-500 rounded-md bg-gray-100   focus:bg-white "
      />
    </div>
  );
}
