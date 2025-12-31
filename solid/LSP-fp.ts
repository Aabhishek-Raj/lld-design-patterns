// LSP violation 
type Divider = (a: number, b: number) => number

const divide: Divider = (a, b) => a / b

const badDivide: Divider = (a, b) => {
  if (b === 0) throw new Error("boom")
  return a / b
}
// Caller expects:
const calc = (div: Divider) => div(10, 2)
// But substitution may crash program unexpectedly.


//Option 1: FP LSP (Safe Behavior)
type SafeDivider = (a: number, b: number) => number | null

const safeDivide: SafeDivider = (a, b) =>
  b === 0 ? null : a / b

// Option 2: Explicit error channel (best)
type Result<T> = { ok: true; value: T } | { ok: false; error: string }

type DividerE = (a: number, b: number) => Result<number>

const divideE: DividerE = (a, b) =>
  b === 0
    ? { ok: false, error: "Divide by zero" }
    : { ok: true, value: a / b }
