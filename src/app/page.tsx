"use client"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"

const InputsSchema = z.object({
  areaEdf: z.coerce.number().positive(),
  fatorRisco: z.coerce.number().positive(),
  infraLeve: z.coerce.number().positive(),
  infraMedia: z.coerce.number().positive(),
  infraGrave: z.coerce.number().positive(),
  infraGravissima: z.coerce.number().positive(),
})

type Inputs = z.infer<typeof InputsSchema>

export default function Home() {
  const [multaValue, setMultaValue] = useState<number>()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      infraLeve: 0,
      infraMedia: 0,
      infraGrave: 0,
      infraGravissima: 0,
    }
  })
  const onSubmit: SubmitHandler<Inputs> = ({ areaEdf, fatorRisco, infraLeve, infraMedia, infraGrave, infraGravissima}) => {
    areaEdf = Number(areaEdf)
    fatorRisco = Number(fatorRisco)
    infraLeve = Number(infraLeve)
    infraMedia = Number(infraMedia)
    infraGrave = Number(infraGrave)
    infraGravissima = Number(infraGravissima)
    console.log(areaEdf)

    const vbbm = 32.21

    const multa =
    (
        2.5 * (infraLeve) + 
        3.5 * (infraMedia) + 
        5 * (infraGrave) + 
        7 * (infraGravissima)
    )

    * fatorRisco 
    * areaEdf 
    * vbbm
    
  setMultaValue(multa)    
    
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="bg-white mx-auto px-3 py-1">
      <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">App para Cálculo de Multa de Infração - DAT</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Preencha os campos abaixo para calcular o valor da multa.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="areaEdf" className="block text-sm font-medium leading-6 text-gray-900">
                Área Total Edificada
              </label>
              <div className="mt-2">
                <select
                  {...register("areaEdf", { required: true })}
                  id="areaEdf"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">selecione</option>
                  <option value={4}>até 200m²</option>
                  <option value={8}>{'> 200m² ≤ 500m²'}</option>
                  <option value={12}>{'> 500m² ≤ 750m²'}</option>
                  <option value={16}>{'> 750m² ≤ 1.500m²'}</option>
                  <option value={24}>{'> 1.500m² ≤ 2.500m²'}</option>
                  <option value={30}>{'> 2.500m² ≤ 3.500m²'}</option>
                  <option value={37}>{'> 3.500m² ≤ 5.000m²'}</option>
                  <option value={43}>{'> 5.000m² ≤ 7.000m²'}</option>
                  <option value={50}>{'> 7.000m² ≤ 10.000m²'}</option>
                  <option value={56}>{'> 10.000m² ≤ 20.000m²'}</option>
                  <option value={63}>{'> 20.000m² ≤ 30.000m²'}</option>
                  <option value={69}>{'> 30.000m² ≤ 40.000m²'}</option>
                  <option value={76}>{'> 40.000m² ≤ 50.000m²'}</option>
                  <option value={83}>{'> 50.000m² ≤ 60.000m²'}</option>
                  <option value={89}>{'> 60.000m² ≤ 80.000m²'}</option>
                  <option value={94}>{'> 80.000m² ≤ 100.000m²'}</option>
                  <option value={100}>{'> 100.000m²'}</option>
                </select>
              </div>
                {errors.areaEdf && <span className="text-sm leading-4 text-red-500">Preenchimento obrigatório</span>}
            </div>
            
            <div className="sm:col-span-3">
              <label htmlFor="fatorRisco" className="block text-sm font-medium leading-6 text-gray-900">
              Fator de Risco:
              </label>
              <div className="mt-2">
                <select
                  {...register("fatorRisco", { required: true })}
                  id="fatorRisco"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">selecione</option>
                  <option value={1}>Risco Baixo (até 300 MJ/m²)</option>
                  <option value={1.1}>Risco Médio (Entre 300 e 1.200 MJ/m²)</option>
                  <option value={1.2}>Risco Alto (Acima de 1.200 MJ/m²)</option>
                </select>
              </div>
              {errors.fatorRisco && <span className="text-sm leading-4 text-red-500">Preenchimento obrigatório</span>}
            </div>

          {/* INFRACOES LEVES */}
          <div className="sm:col-span-3">
              <label htmlFor="infraLeve" className="block text-sm font-medium leading-6 text-gray-900">
                Infrações Leves?
              </label>
              <div className="mt-2">
              <input
                type="number"
                min="0"
                {...register("infraLeve")}
                id="infraLeve"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
            </div>

          {/* INFRACOES Meedia */}
          <div className="sm:col-span-3">
              <label htmlFor="infraMedia" className="block text-sm font-medium leading-6 text-gray-900">
                Infrações Médias?
              </label>
              <div className="mt-2">
              <input
                type="number"
                min="0"
                {...register("infraMedia")}
                id="infraMedia"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
            </div>

          {/* INFRACOES Graves */}
          <div className="sm:col-span-3">
              <label htmlFor="infraGrave" className="block text-sm font-medium leading-6 text-gray-900">
                Infrações Graves?
              </label>
              <div className="mt-2">
              <input
                type="number"
                min="0"
                {...register("infraGrave")}
                id="infraGrave"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
            </div>

          {/* INFRACOES Gravíssimas */}
          <div className="sm:col-span-3">
              <label htmlFor="infraGravissima" className="block text-sm font-medium leading-6 text-gray-900">
                Infrações Gravíssimas?
              </label>
              <div className="mt-2">
              <input
                type="number"
                min="0"
                {...register("infraGravissima")}
                id="infraGravissima"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
            </div>

            <div className="sm:col-span-3">
              <p className="flex items-center justify-start gap-2">Valor total da Multa: <span className="font-semibold">{multaValue?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
            </div>

            <button 
              type="submit"
              className="sm:col-span-3 w-2/4 sm:ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Calcular
            </button>

          </div>
        </div>
      </form>
    </main>
  )
}
