import * as React from 'react'
import { cn } from '../../lib/utils'

const Input = (
  ({className, ...props }) => {
    return (
      <input
        className={cn(
          'flex h-12 w-full rounded-3xl border border-slate-300 bg-gray-350 py-2 px-3 text-sm placeholder:text-slate-300 focus:outline-none text-slate-900 focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export default Input;