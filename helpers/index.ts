import dayjs from 'dayjs'
import React from 'react'
import {parseCookies, setCookie as sCookie} from 'nookies'

/** --- COPIED --- **/

export const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(' ')

// eslint-disable-next-line no-unused-vars
export function setPageState<T>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  current: T,
  updates: T,
): T {
  const newState = {...current, ...updates}

  setState(newState)

  return newState
}

export const getCookie = (name) => {
  const cookies = parseCookies()

  if (cookies && cookies[name]) {
    return cookies[name]
  }

  return null
}

export const setCookie = (name, value) => {
  sCookie(null, name, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })
}

export const getDate = (date) => {
  const dayjsDate = dayjs(date)

  return dayjsDate.format('MMMM Do, YYYY')
}

export const clamp = (value: number, min: number, max: number) =>
  value < min ? min : value > max ? max : value

export const getWindowDimensions = (): {height: number; width: number} => {
  if (typeof window !== 'undefined') {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight

    return {
      height,
      width,
    }
  }

  return {
    width: 0,
    height: 0,
  }
}

export function copyToClipboard(toCopy: string) {
  const el = document.createElement(`textarea`)
  el.value = toCopy
  el.setAttribute(`readonly`, ``)
  el.style.position = `absolute`
  el.style.left = `-9999px`
  document.body.appendChild(el)
  el.select()
  document.execCommand(`copy`)
  document.body.removeChild(el)
}
