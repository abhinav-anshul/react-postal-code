import React from 'react'
import { useEffect, useState } from 'react'

interface Props {
  pincode: string
  showCountry: boolean
  showDistrict: boolean
  showBlock: boolean
  lengthValidation?: string
  errorState?: string
}

function Pin(props: Props) {
  const { pincode, showCountry, showDistrict, showBlock, lengthValidation, errorState } = props
  const [data, setData] = useState<any>([])

  useEffect(() => {
    const controller = new AbortController()
    // const signal = controller.signal
    const getPinData = async () => {
      try {
        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
          .then((response) => response.json())
          .then((data) => {
            setData(data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    if (pincode.length === 6) {
      getPinData()
    }
    return () => {
      controller.abort()
    }
  }, [pincode.length, pincode])

  console.log({ data })

  if (pincode.length === 0) {
    return null
  }

  if (pincode.length != 6) {
    return (
      <>
        {lengthValidation ? (
          <main className='_container'>
            <div className='_validation'>{lengthValidation}</div>
          </main>
        ) : (
          <main className='_container'>
            <div className='_validation'>Error - Enter 6 digits</div>
          </main>
        )}
      </>
    )
  }

  if ((data && data[0] && data[0]?.Status === 'Error') || data[0]?.Status === '404') {
    return (
      <>
        {errorState ? (
          <main className='_container'>
            <div className='_error_state'>{errorState}</div>
          </main>
        ) : (
          <main className='_container'>
            <div className='_error_state'>Error - No Data found</div>
          </main>
        )}
      </>
    )
  }

  console.log({ data })
  return (
    <>
      <main className='_container'>
        {data && data[0] && data[0].Status === 'Success' && (
          <>
            {showDistrict && <div className='_district'>{data[0]?.PostOffice[0].District}</div>}
            {showBlock && <div className='_block'>{data[0]?.PostOffice[0].Block}</div>}
            {showCountry && <div className='_country'>{data[0]?.PostOffice[0].Country}</div>}
          </>
        )}
      </main>
    </>
  )
}

export default Pin
