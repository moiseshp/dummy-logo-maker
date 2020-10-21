import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { LogotypeProvider } from './store/contexts/logotype'
import { SidebarProvider } from './store/contexts/sidebar'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <LogotypeProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </LogotypeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
