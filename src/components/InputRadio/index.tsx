const InputRadio = ({ label }: any) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <fieldset className="mt-2">
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">

          <div className="flex items-center">
            <input
              id={'value'}
              name="notification-method"
              type="radio"
              className="w-4 h-4 text-sky-600 border-gray-300 focus:ring-sky-500"
            />
            <label htmlFor={'value'} className="block ml-3 text-sm font-medium text-gray-700">
              Valor
            </label>
          </div>

          <div className="flex items-center">
            <input
              id={'percent'}
              name="notification-method"
              type="radio"
              className="w-4 h-4 text-sky-600 border-gray-300 focus:ring-sky-500"
            />
            <label htmlFor={'percent'} className="block ml-3 text-sm font-medium text-gray-700">
              Porcentagem
            </label>
          </div>

        </div>
      </fieldset>
    </div>
  )
}

export default InputRadio
