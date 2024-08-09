// const asyncHandler = (requestHandler)=>{
//     return (req, res, next)=>{
//         Promise((resolve,reject)=>{
//             resolve(requestHandler(req,res,next)).catch((error)=>next(err))
//         })
//     }
// }

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
    }
}
export  {asyncHandler}

// const asyncHandler =()=>{}
// const asyncHandler = (fn)=>()=>{}
// const asyncHandler = (fn)=>async()=>{};

//this is the try and catch approach
// const asyncHandler = (fn) = async (req, resp, next) => {
//     try {
//         await fn(req, resp, next)
//     } catch (error) {
//         resp.status(error.code || 500).json({
//             message: error.message || 'Internal Server Error',
//             success: false,
//         })
//     }
// }