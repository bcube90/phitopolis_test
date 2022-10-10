import { AbsoluteActions } from "../contexts/AsboluteContext";

export default class AbsoluteBloc {



  constructor(state, dispatch, tagState, setTagState) {
    this.state = state;
    this.dispatch = dispatch;
    this.tagState = tagState
    this.setTagState = setTagState
  }


  calculateDiff() {
    const cleanTags = this.tagState.value.map(val => parseInt(val.value))
    if(cleanTags.length) {
      const {max, list} = this.maxDifferential(cleanTags)
      this.setTagState({...this.tagState, button: 1})
      this.dispatch({
        type: AbsoluteActions.resultData, 
        payload: {result: max, entities: list}
      })
    }
  }


  clearInput() {
    this.setTagState({...this.tagState, value: [], button: 0})
    this.dispatch({type: AbsoluteActions.clearData})
  }


  onTagChange(e) {
    const value = e.detail.tagify.getCleanValue()
    if(value.length)
      this.setTagState({...this.tagState, value: value})
    else this.dispatch({type: AbsoluteActions.clearData})
  }


  maxDifferential(cleanTags) {
    let result=0, list=[], max=0;

    for (let i = 0; i < cleanTags.length; i++)
    {
      for (let j = i; j < cleanTags.length; j++)
      {
          result = this.getDifferential(cleanTags[i], cleanTags[j], i, j);
          list.push({from: cleanTags[i], to: cleanTags[j], distance: result})
          if(result > max) max = result
          console.log(max)
      }
    }

    list = list.sort(this.sorList)

    return {max: max, list: list};
  }


  sorList(a,b) {
    if ( a.distance < b.distance ) return -1;
    if ( a.distance > b.distance ) return 1;
    return 0;
  }


  getDifferential(val, val2, i, j) {
   return  Math.abs(val - val2) + Math.abs(i - j);
  }
}