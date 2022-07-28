//TODO: Tipar o botão de forma mais complexa

const Button = ({ children, onClick }: any) => {
  return (
    <button
      onClick={() => onClick()}
      type="button"
      className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-sky-700 hover:bg-sky-800 rounded-md border border-transparent focus:outline-none shadow-sm"
    >
      {children}
    </button>
  )
}

export default Button
