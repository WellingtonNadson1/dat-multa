
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="bg-white mx-auto w-2/3 px-3 py-1">
      <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">App para Cálculo de Multa de Infração - DAT</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Preencha os campos abaixo para calcular o valor da multa.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Área Total Edificada
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>selecione</option>
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
            </div>
            
            <div className="sm:col-span-3">
              <label htmlFor="fator-risco" className="block text-sm font-medium leading-6 text-gray-900">
              Informe qual o Fator de Risco do Empreendimento:
              </label>
              <div className="mt-2">
                <select
                  id="fator-risco"
                  name="fator-risco"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>selecione</option>
                  <option value={1}>Risco Baixo (até 300 MJ/m²)</option>
                  <option value={1.1}>Risco Médio (Entre 300 e 1.200 MJ/m²)</option>
                  <option value={1.2}>Risco Alto (Acima de 1.200 MJ/m²)</option>
                </select>
              </div>
            </div>

          {/* INFRACOES LEVES */}
          <div className="sm:col-span-3">
              <label htmlFor="infra-leve" className="block text-sm font-medium leading-6 text-gray-900">
                Quantas Infrações Leves foram observadas?
              </label>
              <div className="mt-2">
              <input
                type="number"
                min="0"
                name="infra-leve"
                id="infra-leve"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
            </div>

          {/* INFRACOES Meedia */}
          <div className="sm:col-span-3">
              <label htmlFor="infra-media" className="block text-sm font-medium leading-6 text-gray-900">
                Quantas Infrações Médias foram observadas?
              </label>
              <div className="mt-2">
              <input
                type="number"
                min="0"
                name="infra-media"
                id="infra-media"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
            </div>

          {/* INFRACOES Graves */}
          <div className="sm:col-span-3">
              <label htmlFor="infra-grave" className="block text-sm font-medium leading-6 text-gray-900">
                Quantas Infrações Graves foram observadas?
              </label>
              <div className="mt-2">
              <input
                type="number"
                min="0"
                name="infra-grave"
                id="infra-grave"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
            </div>

          {/* INFRACOES Gravíssimas */}
          <div className="sm:col-span-3">
              <label htmlFor="infra-gravissiama" className="block text-sm font-medium leading-6 text-gray-900">
                Quantas Infrações Gravíssimas foram observadas?
              </label>
              <div className="mt-2">
              <input
                type="number"
                min="0"
                name="infra-gravissiama"
                id="infra-gravissiama"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
            </div>

            <div className="sm:col-span-3">
              <p className="flex items-center justify-start gap-2">Valor total da Multa: R$ <span></span></p>
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
