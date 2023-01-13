import React from 'react'
import ReactDOM from 'react-dom/client'
import { Pin } from 'react-postal-code'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <main>
      <Pin pincode='110011' showBlock showCountry showDistrict />
    </main>
  </React.StrictMode>,
)
