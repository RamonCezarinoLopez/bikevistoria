import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function SolicitationForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Solicitação de vistoria:</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Preencha o formulário para que a solicitação de vistoria seja validada por um de nossos atendentes.
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Informações Pessoais</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Descreva as informações do titular da bicicleta.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Primeiro nome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='João'
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Sobrenome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Da Silva'
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='joaodasilva@email.com.br'
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                País
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  disabled
                >
                  <option selected>Brasil</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Endereço
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Rua Augusta, 197 - Consolação'
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Cidade
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='São Paulo'
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Estado
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='São Paulo'
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                CEP
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='09000-910'
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Dados da Bicicleta</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Descreva as informações da bicicleta.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Marca
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option selected disabled>Selecione uma marca</option>
                    <option value="BMC">BMC</option>
                    <option value="Orbea">Orbea</option>
                    <option value="Merida">Merida</option>
                    <option value="Ridley">Ridley</option>
                    <option value="Cube">Cube</option>
                    <option value="Lapierre">Lapierre</option>
                    <option value="Pivot">Pivot</option>
                    <option value="Focus">Focus</option>
                    <option value="Yeti Cycles">Yeti Cycles</option>
                    <option value="Felt">Felt</option>
                    <option value="Devinci">Devinci</option>
                    <option value="Rocky Mountain">Rocky Mountain</option>
                    <option value="Surly">Surly</option>
                    <option value="Kona">Kona</option>
                    <option value="Bianchi">Bianchi</option>
                    <option value="Wilier Triestina">Wilier Triestina</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Marin">Marin</option>
                    <option value="GT Bicycles">GT Bicycles</option>
                    <option value="Ghost Bikes">Ghost Bikes</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Modelo
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Modelo EX123'
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Tamanho do Quadro
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option selected disabled>Selecione o tamanho do quadro</option>
                    <option value="XS">XS (Extra Pequeno)</option>
                    <option value="S">S (Pequeno)</option>
                    <option value="M">M (Médio)</option>
                    <option value="L">L (Grande)</option>
                    <option value="XL">XL (Extra Grande)</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Número de Série
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='ROADBIKE123456'
                />
              </div>
            </div>
            
            <div className="sm:col-span-1">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Tipo de Bicicleta
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option selected disabled>Selecione o tipo de bicicleta</option>
                    <option value="Mountain Bike">Mountain Bike</option>
                    <option value="Speed Bike">Speed Bike</option>
                    <option value="Urbana">Urbana</option>
                    <option value="Híbrida">Híbrida</option>
                    <option value="Elétrica">Elétrica</option>
                    <option value="Dobrável">Dobrável</option>
                    <option value="Passeio">Passeio</option>
                    <option value="Cicloturismo">Cicloturismo</option>
                    <option value="Estrada (Road Bike)">Estrada (Road Bike)</option>
                    <option value="Triatlo">Triatlo</option>
                    <option value="BMX">BMX</option>
                    <option value="Downhill">Downhill</option>
                    <option value="Carga">Carga</option>
                    <option value="Trilha">Trilha</option>
                    <option value="Gravel">Gravel</option>
                    <option value="Fat Bike">Bike</option>
                    <option value="Cyclocross">Cyclocross</option>
                    <option value="Duatlo">Duatlo</option>
                    <option value="Pista (Track Bike)">Pista (Track Bike)</option>
                    <option value="Freestyle">Freestyle</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Cor
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Amarelo'
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Presença de acessórios extras
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder='Se houver, informe aqui se a bicicleta possui quaisquer acessórios extras, como farol, retrovisor, bagageiro, suporte de garrafa de água, etc.'
                />
              </div>
            </div>
        
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Foto da sua bicicleta
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Selecione uma foto</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">do seu computador ou arraste e solte</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF até 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notificações</h2>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Emails de alerta </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">Deseja receber atualizações sobre solicitação da vistoria?</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Sim
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Não
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Limpar formulário
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar solicitação
        </button>
      </div>
    </form>
  )
}