import React from 'react'
import {classNames} from '../../helpers'

const ButtonLink = ({
  href = null,
  onClick = null,
  children,
  anchor = false,
  className = '',
  white = false,
  primary = false,
  rounded = false,
  large = false,
}) => {
  const anchorProps = anchor
    ? {rel: 'noopener noreferrer', target: '_blank'}
    : {}
  const actualClasses = classNames(
    'mt-5 text-center items-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
    white
      ? 'bg-transparent border-2 border-white text-white hover:bg-slate-200 hover:bg-opacity-30 font-medium'
      : primary
      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-slate-200 text-primary-700'
      : 'border-2 border-primary-300 bg-transparent hover:bg-slate-200 font-medium text-primary-700',
    rounded ? 'rounded-full' : 'rounded-md',
    large ? 'px-8 py-6 text-2xl' : 'px-4 py-3',
    className,
  )

  return href ? (
    <a
      className={actualClasses}
      href={href}
      {...anchorProps}
      {...(onClick ? {onClick} : {})}
    >
      {children}
    </a>
  ) : onClick ? (
    <button className={actualClasses} onClick={onClick}>
      {children}
    </button>
  ) : null
}

export default ButtonLink
