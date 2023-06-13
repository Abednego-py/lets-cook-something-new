import * as actions from './actionTypes'

export const getAllFoods = () => ({
    type : actions.GET_ALL_FOODS
})

export const getFoodDetail = (id: any) => ({
    type : actions.GET_FOODS,
    id,
})

export const getAllFoodSuccess = (food: any) => ({
    type : actions.GET_ALL_FOODS_SUCCESS,
    payload : food
})

export const getAllFoodFailure = (error: any) => ({
    type : actions.GET_ALL_FOODS_FAILURE,
    payload : error
})

export const getFoodDetailSuccess = (food: any) => ({
    type : actions.GET_FOODS_SUCCESS,
    payload : food
})

export const getFoodDetailFailure = (error: any) => ({
    type : actions.GET_FOODS_SUCCESS,
    payload : error
})

export const createFoods = (food: any) => ({
    type : actions.CREATE_FOODS,
    food
})

export const createFoodsSuccess = (payload: any) => ({
    type : actions.CREATE_FOODS_SUCCESS,
    payload
})

export const createFoodsFailure = (payload: any) => ({
    type : actions.CREATE_FOODS_FAILURE,
    payload
})

export const editFoods = (id: any) => ({
    type : actions.EDIT_FOODS,
    id
})

export const editFoodsSuccess = (id: any) => ({
    type : actions.CREATE_FOODS_SUCCESS,
    id
})

export const eidtFoodsFailure = (id: any) => ({
    type : actions.EDIT_FOODS_FAILURE,
    id
})