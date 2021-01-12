import * as React from 'react'

function useLocalStorageState(key, initialState = '') {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || initialState,
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

export default useLocalStorageState
