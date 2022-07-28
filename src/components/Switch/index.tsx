import { Switch as SwitchHeadless } from '@headlessui/react'
import { useState } from 'react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Switch = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="mb-6">
      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
        Status
      </label>

      <SwitchHeadless
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-sky-600' : 'bg-gray-200',
          'mt-2 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </SwitchHeadless>
    </div>
  )
}

export default Switch
