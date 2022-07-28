import Button from "../Button"

const SectionHeader = ({ sectionAction }: any) => {
  return (
    <div className="pb-5 border-b border-gray-200 sm:flex sm:justify-between sm:items-center">
      <div>
        <h2 className="text-lg font-medium leading-6 text-gray-900">Programas cadastrados</h2>
        <p className="mt-1 text-sm text-gray-500">
          Listagem dos programas de cashback cadastrados
        </p>
      </div>

      <div className="mt-3 sm:mt-0 sm:ml-4">
        <Button onClick={() => sectionAction()}>Criar novo programa</Button>
      </div>
    </div>
  )
}

export default SectionHeader
