import {useContext, Fragment} from 'react';
import { AbsoluteContext } from '../contexts/AsboluteContext';

export default function ResultAbsolute() {
  const {state} = useContext(AbsoluteContext)

  return (
    <div className='col-sm-12 col-md-6 mb-3'>
      <div className='rounded shadow p-3 fill-space d-flex justify-content-center align-items-center flex-column'> 
        
        {
          state.result !== undefined ?
            <Fragment>
              <div className='result-container mb-2 bg-success bg-gradiant p-3 text-center rounded-circle'
                style={{width: '124px', height: '124px'}}
              >
                <span className='text-white' style={{fontSize: '54px'}}>{state.result}</span>
              </div>

              <div className='row'>
                <div className='col-sm-12'>
                  <h2 className='h1'>Max Result</h2>
                </div>
              </div>
            </Fragment>
          :
            <div className="alert alert-info" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="22" height="22" fill="currentColor" 
                className="bi bi-info-square mt-n2" viewBox="0 0 16 16"
                style={{marginTop: "-4px"}}
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              <span className='ps-2'>No max result to display!</span>
            </div>
        }
          

      </div>
    </div>
  )
}