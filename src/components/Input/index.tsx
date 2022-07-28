const Input = ({ label }: any) => {
  return (
    <div className="flex flex-col pb-4">
      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        name={label}
        id={label}
        className="block w-full rounded-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 shadow-sm sm:text-sm"
      />
    </div>
  )
}

export default Input
