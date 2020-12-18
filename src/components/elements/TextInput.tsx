import styled from 'styled-components'

const TextInput = styled.input.attrs(props=>({
  id: props.id,
  name: props.name,
  placeholder: props.placeholder,
  ref: props.ref,
  className: `form-input mt-1 block w-full focus:outline-none focus:ring ${props.className || ''} `
}))``

export default TextInput