import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'

const SlideoverBase = ({ open, handleSlideover, title, children }: any) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="overflow-hidden fixed inset-0 z-10" onClose={handleSlideover}>
        <div className="overflow-hidden absolute inset-0">
          <Dialog.Overlay className="absolute inset-0 bg-gray-100/60" />

          <div className="flex fixed inset-y-0 right-0 pl-5 max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-200 sm:duration-200"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-200 sm:duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-[460px]">
                <div className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
                  <div className="flex overflow-y-scroll flex-col flex-1 py-6 min-h-0">
                    <div className="px-4 sm:px-6">
                      <div className="flex justify-between items-center">

                        <div>
                          <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
                          <p className="mt-1 max-w-2xl text-sm text-gray-500">Gerencie o programa preenchendo os campos abaixo</p>
                        </div>

                        <div className="flex items-center ml-3">
                          <button
                            type="button"
                            className="flex justify-center text-gray-400 hover:text-gray-500 rounded-md focus:outline-none"
                            onClick={() => handleSlideover(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="w-6 h-6 text-sky-700" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className='mt-6'>
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlideoverBase
