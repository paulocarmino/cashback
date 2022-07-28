import axios from "axios"
import { parseISO } from "date-fns"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

import { toast } from "react-toastify"
import { mutate } from "swr"
import Button from "../Button"
import Input from "../Input"
import Select from "../Select"
import SlideoverBase from "../SlideoverBase"
import formatDate from "@/utils/formatDate"

type Inputs = {
  status: string
  cashbackType: string
  productIdentifier: string
  cashbackValue: number
  startDate: string
  endDate: string
}

const SlideoverPrograms = ({ open, handleSlideover, program }: any) => {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<Inputs>();

  const handleTitle = () => program ? 'Editando programa' : 'Adicionar programa'

  const handleSubmitProgram = (values: Inputs) => {
    if (program) {
      updateProgram(values)
      return
    }

    createProgram(values)
  }

  const createProgram = async (programValues: Inputs) => {
    try {
      await axios.post(`/api/programs/create`, {
        ...programValues,
        value: Number(programValues.cashbackValue),
        startDate: new Date(parseISO(programValues.startDate)).toISOString(),
        endDate: new Date(parseISO(programValues.endDate)).toISOString()
      })

      mutate('/api/programs')
      toast.success("Programa adicionado!");

      reset()
      handleSlideover(false)
    } catch (error) {
      reset()
      toast.error("Erro ao adicionar programa.");
      console.error(error)
    }
  }

  const updateProgram = async (programValues: any) => {
    try {
      await axios.post(`/api/programs/${program.id}/update`, {
        ...programValues,
        value: Number(programValues.cashbackValue),
        startDate: new Date(parseISO(programValues.startDate)).toISOString(),
        endDate: new Date(parseISO(programValues.endDate)).toISOString()
      })

      mutate('/api/programs')
      toast.success("Programa atualizado!");

      reset()
      handleSlideover(false)
    } catch (error) {
      reset()
      toast.error("Erro ao atualizar programa.");
      console.error(error)
    }
  }

  const deleteProgram = async () => {
    try {
      await axios.delete(`/api/programs/${program.id}/remove`)

      mutate('/api/programs')
      toast.success("Programa deletado!");

      reset()
      handleSlideover(false)
    } catch (error) {
      reset()
      toast.error("Erro ao deletar programa.");
      console.error(error)
    }
  }

  useEffect(() => {
    if (program) {
      setValue('productIdentifier', program.productIdentifier)
      setValue('cashbackValue', program.value)
      setValue('cashbackType', program.type)
      setValue('status', program.status)
      setValue('startDate', formatDate(program.startDate, 'yyyy-MM-dd'))
      setValue('endDate', formatDate(program.endDate, 'yyyy-MM-dd'))
    }

    return function clenup() {
      reset()
    }
  }, [program])

  useEffect(() => {
    console.log('errors', errors)
  }, [errors])


  return (
    <SlideoverBase open={open} handleSlideover={handleSlideover} title={handleTitle()}>

      <form onSubmit={handleSubmit(handleSubmitProgram)}>
        <Input label="Identificador do produto" type="text"
          isError={errors.productIdentifier}
          {...register("productIdentifier", { required: true })} />

        <Input label="Valor do cashback" type="text"
          isError={errors.cashbackValue}
          {...register("cashbackValue", { required: true })} />

        <Select label="Tipo do cashback"
          isError={errors.cashbackType}
          {...register("cashbackType", { required: true })}>
          <option value='VALUE'>Valor</option>
          <option value='PERCENT'>Porcentagem</option>
        </Select>

        <Select label="Status"
          isError={errors.status}
          {...register("status", { required: true })}>
          <option value='ENABLED'>Ativo</option>
          <option value='DISABLED'>Desabilitado</option>
        </Select>

        <Input label="Data de início" type="date"
          isError={errors.startDate}
          {...register("startDate", { required: true })} />

        <Input label="Data de fim" type="date"
          isError={errors.startDate}
          {...register("endDate", { required: true })} />

        <div className="pt-5">
          <div className="flex">
            {program && <Button variant="delete" onClick={() => deleteProgram()}>Deletar</Button>}

            <div className="flex justify-end w-full">
              <Button variant="secundary" className="mr-3" onClick={() => handleSlideover(false)}>Cancelar</Button>
              <Button type="submit">Salvar</Button>
            </div>
          </div>
        </div>

      </form>


    </SlideoverBase>
  )
}

export default SlideoverPrograms
