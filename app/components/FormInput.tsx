export default function FormInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.text}</label>
      <input
        {...props}
        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
      />
    </div>
  );
}
