import { Link } from "react-router-dom"
import ImageGallery from "react-image-gallery";

export default function Gallery(){
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
      ];

    return(
        <div>
            <h1>Gallery Page</h1>
            <ImageGallery items={images}/>
            <Link to={"/"}><button>Back</button></Link>
        </div>
    )
}