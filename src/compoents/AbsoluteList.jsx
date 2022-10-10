import {useContext} from "react";
import { AbsoluteContext } from "../contexts/AsboluteContext";
import ListItem from "./ListItem"

export default function AbsoluteList() {
  const {state} = useContext(AbsoluteContext)
  const containerClass = state.entities.length ? '' : "d-flex align-items-center justify-content-center"
  return (
    <div className='col-sm-12 col-md-6'>
      <div className=' rounded shadow fill-space'>
        <div className='w-100 p-3 bg-dark bg-gradient rounded-top'>
          <div className="row">
            <div className="col-4 text-center text-white"> Distance </div>
            <div className="col-4 text-center text-white"> From </div>
            <div className="col-4 text-center text-white"> To </div>
          </div>
        </div>
        
        <div className='row'>
          <div className='col-12'>
            <div className={containerClass}
            style={{height: "calc(100vh - 441px)", overflowX: 'scroll'}}>
              {
                state.entities.length ?
                  <ul className="list-group list-group-flush">
                    {
                      state.entities.map((list, idx) => <ListItem key={idx} item={list} />)
                    }
                  </ul>
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

                    <span className="ps-2">No list to display!</span>
                  </div>
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}