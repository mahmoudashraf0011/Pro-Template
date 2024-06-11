import { CREATE_REVIEW, DELETE_REVIEW_FOR_PRODUCT, GET_ALL_REVIEWS, GET_SPECIFIC_REVIEW, REVIEWS_FOR_PORDUCT, SPECIFIC_REVIEW_FOR_PORDUCT, UPDATE_REVIEW_FOR_PRODUCT } from "../../type";

const initial ={
    createReview:[],
    reviewForProduct:[],
    specifciReviewForProduct:[],
    deleteReviewForProduct:[],
    updateReviewForProduct:[],
    allReviews:[],
    specificReview:[],
    
    loading:false
}

export const ReviewReducer=(state=initial,action)=>{
    switch(action.type){
        case CREATE_REVIEW:
            return{
                    ...state,
                    createReview:action.payload,
                    loading:false
                }
        case REVIEWS_FOR_PORDUCT:
            return{
                    ...state,
                    reviewForProduct:action.payload,
                    loading:false
                }
        case SPECIFIC_REVIEW_FOR_PORDUCT:
            return{
                    ...state,
                    specifciReviewForProduct:action.payload,
                    loading:false
                }
        case DELETE_REVIEW_FOR_PRODUCT:
            return{
                    ...state,
                    deleteReviewForProduct:action.payload,
                    loading:false
                }
        case UPDATE_REVIEW_FOR_PRODUCT:
            return{
                    ...state,
                    updateReviewForProduct:action.payload,
                    loading:false
                }

        case GET_ALL_REVIEWS:
            return{
                    ...state,
                    allReviews:action.payload,
                    loading:false
                }
                
        case GET_SPECIFIC_REVIEW:
            return{
                    ...state,
                    specificReview:action.payload,
                    loading:false
                }
        default:
            return state;
    }
}

