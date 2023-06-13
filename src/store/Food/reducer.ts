import * as actions from './actionTypes'

const INIT_STATE = {
    food : [],
    singleFoodItem : {},
    loading : true,
      totalCount: 0,
}


const Foods = (state = INIT_STATE, action : any) => {
  switch (action.type) {
    case actions.GET_ALL_FOODS_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case actions.GET_ALL_FOODS:
      return {
        ...state,
        loading: true
      }
    case actions.GET_ALL_FOODS_FAILURE:
      return {
        ...state,
        loading: false
      }
    case actions.GET_FOODS_SUCCESS:
      return {
        ...state,
        singleFoodItem: {},
        loading: false,
      }

    case actions.GET_FOODS_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case actions.CREATE_FOODS_SUCCESS:
      return {
        ...state,
        singleFoodItem : {}
      }
    case actions.EDIT_FOODS:
      state = {
        ...state
      }
      break
    case actions.CREATE_FOODS:
     return {
        ...state
      }
      
    case actions.CREATE_FOODS_FAILURE:
      state = { ...state,
         loading: false }
      break

    case actions.EDIT_FOODS_SUCCESS:
      state = {
        ...state
      }
      break

    }

  return state
}

export default Foods
