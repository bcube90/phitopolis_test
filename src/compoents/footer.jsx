import React from 'react';

export default function Footer() {
  return (
    <section id="footer" className='w-100 d-flex justify-content-between p-3 bg-dark bg-gradient shadow-lg'>
      <div className='d-inline-flex align-items-center text-white'>
        <span style={{fontSize: 12}} className="pe-2">Prepared by:</span>
        <span>Bill Bryan Baduya</span>
      </div>

      <div className='d-inline-flex align-items-center text-white'>
        <span style={{fontSize: 12}} className="pe-2">React: </span>
        <span className='pe-3'>18.2.0</span>

        <span style={{fontSize: 12}} className="pe-2">Node: </span>
        <span className='pe-3'>16.17.1</span>

        <span style={{fontSize: 12}} className="pe-2">Git Branch: </span>
        <span>main</span>
      </div>
    </section>
  )
}