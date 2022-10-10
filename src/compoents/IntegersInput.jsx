import {useCallback, useRef, useState, useContext, useEffect} from 'react';

import Tags from "@yaireo/tagify/dist/react.tagify" 
import "@yaireo/tagify/dist/tagify.css"
import InputHelper from './InputHelper';

import AbsoluteBloc from '../blocs/AbsoluteBloc';
import { AbsoluteContext, InputIntergersState } from '../contexts/AsboluteContext';


export default function IntegersInput() {
  const inputRef = useRef()
  const  {state, disptach} = useContext(AbsoluteContext)
  const aBloc = new AbsoluteBloc(state, disptach, ...useState(InputIntergersState))

  // Pattern to check the entered string from -1000 to 1000
  const settings = { pattern: /^((?:\-1000)|(?:\-[0-9]{1,3}))$|^((?:1000)|(?:[0-9]{1,3}))$/} 

  useEffect(() => {
    // console.log('tagState', aBloc.tagState)
  }, [aBloc.tagState])

  return (
    <div className='row p-3'>
      <div className='col-sm-12 shadow mt-2 p-3 p-md-5 rounded'>
        <h1 className='h1 mb-4'> Frontend with Algorithmic </h1>

        <label htmlFor="text-integers" className="form-label">Enter numbers:</label>

        <div className="input-group mb-1">
          <Tags 
            style={{borderRadius: 5}}
            value={aBloc.tagState.value}
            tagifyRef={inputRef} onChange={(e) => aBloc.onTagChange(e)}
            settings={settings}
          />

          {
            !aBloc.tagState.button ? 
              <button 
                className="btn btn-outline-dark" type="button"
                onClick={() => aBloc.calculateDiff()}
              >
                Show
              </button>
            :
              <button 
                className="btn btn-outline-dark" type="button"
                onClick={() => aBloc.clearInput()}
              >
                Clear
              </button>
          }
        </div>

        <InputHelper text="Separate the numbers with comma or press enter." type="muted" />
      </div>
    </div>
  )
}
