import { Provider } from 'react-redux'

const ReduxProvider = ({ children, reduxStore }: { children: JSX.Element; reduxStore: any }) => (
  <Provider store={reduxStore}>{children}</Provider>
)

export default ReduxProvider
