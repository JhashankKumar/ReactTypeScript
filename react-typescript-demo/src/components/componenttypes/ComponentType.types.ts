export type Name = {
  first: string
  last: string
}
export type PersonProps = {
  name: Name
}

export type AuthUser = {
  name: string
  email: string
}

export type CounterState = {
  count: number
}

export type UpdateAction = {
  type: 'increment' | 'decrement'
  payload: number
}

export type ResetAction = {
  type: 'reset'
}