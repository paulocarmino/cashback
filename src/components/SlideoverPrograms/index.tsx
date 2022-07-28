import Button from "../Button"
import Input from "../Input"
import InputRadio from "../InputRadio"
import SlideoverBase from "../SlideoverBase"
import Switch from "../Switch"

const SlideoverPrograms = ({ open, handleSlideover, program }: any) => {
  const handleTitle = () => program ? 'Editando programa' : 'Adicionar programa'

  return (
    <SlideoverBase open={open} handleSlideover={handleSlideover} title={handleTitle()}>

      <div>
        <Switch />

        <InputRadio label="Tipo do cashback" />

        <Input label="Identificador do produto" />

        <Input label="Valor do cashback" />

        <Input label="Data de início" />

        <Input label="Data de fim" />

        <div className="pt-5">
          <div className="flex justify-end">
            <Button>Cancelar</Button>

            <div className="ml-3">
              <Button type="submit">Salvar</Button>
            </div>
          </div>
        </div>

      </div>


    </SlideoverBase>
  )
}

export default SlideoverPrograms
