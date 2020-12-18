import styled from 'styled-components'

const SelectElement = styled.select.attrs(props=>({
  id: props.id,
  name: props.name,
  ref: props.ref,
  className: `form-select mt-1 block w-full focus:outline-none ${props.className || ''} `
}))``


export default SelectElement