import { render } from 'preact'
import './index.css'
import { App } from './app.tsx'

const root = document.getElementById('app')

if (!root) {
  throw new Error('App root element was not found')
}

render(<App />, root)
