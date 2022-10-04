function Input({ name, type, placeholder, label }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold text-gray-500 mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1"
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
