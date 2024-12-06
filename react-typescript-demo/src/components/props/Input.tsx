type InputProps = {
  value: string
  //The props must contain event and 'React.ChangeEvent<HTMLInputElement>' will specify the what type of event must be come in props

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

//destructuring the props 
export const Input = ({value,handleChange}:InputProps) => {
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event)
  // }
  return <input type='text' value={value} onChange={handleChange} />
}
