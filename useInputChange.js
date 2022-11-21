export const useInputChange = () => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return [input, handleInputChange]
}

//=======Usage========//

export const ControlledComponentWithHooks = () => {
  const [input, handleInputChange] = useInputChange()

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" onChange={handleInputChange} />
      </div>
      <input type="submit" />
    </form>
  )
}
