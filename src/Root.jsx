import { useCallback, useState } from 'react'
import App from './App.jsx'
import CloudProgress from './components/CloudProgress.jsx'
export default function Root() {
  const [generation, setGeneration] = useState(0)
  const refresh = useCallback(() => setGeneration(value => value + 1), [])
  return <><CloudProgress onRefresh={refresh} /><App key={generation} /></>
}
