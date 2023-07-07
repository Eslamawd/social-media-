import {useState, useRef} from "react"
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"
import { useDispatch, useSelector } from "react-redux"



import { uploadImage, uploadPost } from "../actions/uploadAction"




import "./PostShare.css"





const PostShare = () => {
    
    const loading = useSelector((state)=> state.postReducer.uploading);
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const { user } = useSelector((state)=>state.authReducer.authData);
    const desc = useRef();
    const dispatch = useDispatch();
    const serverPublic = process.env.REACT_APP_PUPLIC;


    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img);
        }

    };

    const reset = () => {
        setImage(null);
        desc.current.value= ""
    };

    const handleSubmit = (e)=> {
        e.preventDefault();

        const newPost =  {
            userId: user._id,
            desc: desc.current.value,
        };

        if (image) {
            const data = new FormData()
            const filename = Date.now() + image.name;
            data.append("name", filename)
            data.append("file", image)
            newPost.image = filename;
            

            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))

        reset();
    }

    return (
    <div className="PostShare">
            <img src={user.coverPicture? serverPublic + user.profilePicture : serverPublic + "defoult profile.png"} alt="" />
            <div>
                <input
                ref = {desc}
                required
                type="text"
                placeholder="What's happening" />
        
                <div className="PostOptions">
                    <div className="options" style={{color: "rgba(32, 138, 199, 0.747)"}}
                    onClick={()=>imageRef.current.click()}
                    >
                        <UilScenery />
                        photo
                    </div>
                    <div className="options" style={{color: "rgba(93, 199, 32, 0.747)"}}>
                        <UilPlayCircle />
                        video
                    </div>
                    <div className="options" style={{color: "rgba(96, 32, 199, 0.747)"}}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="options" style={{color: "rgba(204, 59, 59, 0.747)"}}>
                        <UilSchedule />
                        Schedule
                    </div>
                            <button className="button ps-button"
                            onClick={handleSubmit}
                            disabled={loading}>
                               {loading? "Uploading..." : "Share"}
                            </button>
                            <div style={{display: "none"}}>
                                <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                            </div>
                </div>
                {image && (
                    <div className="previowImage">
                    <UilTimes onClick={()=>setImage(null)}/>
                    <imge src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
        </div>
    </div>
    );
}

export default PostShare;