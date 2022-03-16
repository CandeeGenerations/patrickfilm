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
}) => {
  const classes =
    'mt-5 text-center items-center px-4 py-3 shadow-lg rounded-md text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
  const whiteClasses = white
    ? 'bg-white border-2 border-transparent hover:bg-slate-200 hover:text-primary-900 font-medium'
    : primary
    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-slate-200'
    : 'border-2 border-primary-300 bg-transparent hover:bg-secondary-100 font-medium'
  const anchorProps = anchor
    ? {rel: 'noopener noreferrer', target: '_blank'}
    : {}

  return href ? (
    <a
      className={classNames(classes, whiteClasses, className)}
      href={href}
      {...anchorProps}
      {...(onClick ? {onClick} : {})}
    >
      {children}
    </a>
  ) : onClick ? (
    <button className={classNames(classes, className)} onClick={onClick}>
      {children}
    </button>
  ) : null
}

export default ButtonLink
