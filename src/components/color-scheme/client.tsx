'use client'

import { set as setCookie } from 'es-cookie'
import type { ChangeEventHandler } from 'react'
import { useCallback, useState } from 'react'
import styles from './client.module.css'
import { cookieOptions, COLOR_SCHEME_COOKIE } from './constants'

export type ColorScheme = 'light' | 'dark' | 'system'

type ColorSchemePickerProps = {
  defaultColorScheme: ColorScheme
}

export function ColorSchemePickerClient({
  defaultColorScheme,
}: ColorSchemePickerProps) {
  const [colorScheme, setColorScheme] = useState(defaultColorScheme)

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const newColorScheme = event.target.value as ColorScheme
      console.log(newColorScheme)
      setColorScheme(newColorScheme)
      setCookie(COLOR_SCHEME_COOKIE, newColorScheme, cookieOptions)
    },
    [],
  )

  return (
    <div className="color-scheme-picker">
      <label>
        <input
          type="checkbox"
          value="light"
          checked={colorScheme === 'light'}
          onChange={handleChange}
          className={styles['input']}
        />
        L
      </label>
      <label>
        <input
          type="checkbox"
          value="dark"
          checked={colorScheme === 'dark'}
          onChange={handleChange}
          className={styles['input']}
        />
        D
      </label>
      <label>
        <input
          type="checkbox"
          value="system"
          checked={colorScheme === 'system'}
          onChange={handleChange}
          className={styles['input']}
        />
        S
      </label>
    </div>
  )
}
