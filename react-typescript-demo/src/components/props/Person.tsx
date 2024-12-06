import { PersonProps } from '../componenttypes/ComponentType.types'

export const Person = (props: PersonProps) => {
  return (
    <h2>
      {props.name.first} {props.name.last}
    </h2>
  )
}
