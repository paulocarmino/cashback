import Badge from "../Badge"

const ListItem = ({ program }: any) => {

  return (
    <li key={program.id}>
      <a href="#" className="block hover:bg-gray-50">
        <div className="p-4 sm:px-6">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-sky-600 truncate">{program.productIdentifier}</p>
            <div className="flex shrink-0 ml-2">
              {program.status === 'ENABLED' && <Badge label="Ativo" isEnabled />}
              {program.status === 'DISABLED' && <Badge label="Inativo" isDisabled />}
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

export default ListItem
