import { isString } from "lodash-es";

class ErUIError extends Error {
  constructor(msg: string) {
    super(msg)
    this.name = "ErUIError"
  }
}

function createUIError(scope: string, msg: string) {
  return new ErUIError(`[${scope}]:${msg}`)
}

// scope 是报错位置
export function throwError(scope: string, msg: string) {
  throw createUIError(scope, msg)
}

export function debugWarn(error: Error):void
export function debugWarn(scope: string, msg:string):void

export function debugWarn(scope: string|Error, msg?:string) {
  if (process.env.NODE_ENV !== 'production') {
    const err = isString(scope) ? new ErUIError(`[${scope}]: ${msg}`) : scope
    console.warn(err)
  }
}
