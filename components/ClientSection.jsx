import Image from 'next/image'
import React from 'react'

const ClientSection = () => {
  return (
    <div className="flex container flex-wrap items-center justify-center py-32 px-20 gap-20">
        <Image src="/images/Logo.png" width={200} height={200} alt="Client" />
        <Image src="/images/Logo.png" width={200} height={200} alt="Client" />
        <Image src="/images/Logo.png" width={200} height={200} alt="Client" />
        <Image src="/images/Logo.png" width={200} height={200} alt="Client" />
        <Image src="/images/Logo.png" width={200} height={200} alt="Client" />
        <Image src="/images/Logo.png" width={200} height={200} alt="Client" />
    </div>
  )
}

export default ClientSection