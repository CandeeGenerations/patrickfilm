import React from 'react'
import {classNames} from '../../helpers'

const Input = ({
  name,
  label,
  type,
  value,
  onChange,
  onBlur,
  className,
}: {
  name: string
  label?: string
  type?: string
  value: string | number
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  className?: string
}): React.ReactElement => {
  const isMoney = type === 'money'
  const inputProps = {
    name,
    id: name,
    type: !type || isMoney ? 'text' : type,
    onChange,
    onBlur,
    value,
    placeholder: isMoney ? '0.00' : '',
  }

  return (
    <div className={classNames(className)}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div
        className={classNames(
          'mt-1',
          isMoney ? 'relative rounded-md shadow-sm' : '',
        )}
      >
        {isMoney && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
        )}

        <input
          {...inputProps}
          className={classNames(
            'block w-full focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md',
            isMoney ? 'pl-7 pr-12 sm:text-sm' : 'py-3 px-4 shadow-sm',
          )}
        />

        {isMoney && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="price-currency">
              USD
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Input
