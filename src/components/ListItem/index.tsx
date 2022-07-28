const ListItem = ({ program }: any) => {
  return (
    <li key={program.id}>
      <a href="#" className="block hover:bg-gray-50">
        <div className="p-4 sm:px-6">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-sky-600 truncate">{program.productIdentifier}</p>
            <div className="flex shrink-0 ml-2">
              <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                {program.status}
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

export default ListItem
