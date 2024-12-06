type ButtonProps = {
  //The props must contain event and 'React.MouseEvent<HTMLButtonElement>' will specify the what type of event must be come in props
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
  return <button onClick={event => props.handleClick(event, 1)}>Click</button>
}
