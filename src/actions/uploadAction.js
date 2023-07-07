import * as uploadApi from '../api/UploadRequest'

export const uploadImage = (data)=> async(dispatch)=> {

    dispatch({type: "UPLOAD_START"});
    try {
      const newImage =  await uploadApi.uploadImage(data);
      dispatch({type: "UPLOAD_SACCESS", data: newImage.data});

    } catch (error) {
        console.log(error)
        dispatch({type: "UPLOAD_FAIL"});
    }
}

export const uploadPost = (data)=> async(dispatch)=> {
    dispatch({type: "UPLOAD_START"});

    try {
        const newPost = await uploadApi.uploadPost(data);
        dispatch({type: "UPLOAD_SACCESS", data: newPost.data});
    } catch (error) {
        console.log(error)
        dispatch({type: "UPLOAD_FAIL"});
    }
}