import Thumbnail from "../components/Thumbnail";
import { ThumbnailInfo } from "../components/ThumbnailInfo";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
const Testpage = () => {
    return (
        <>            
            <ImageSlider slides={SliderData}/>
        </>
    );
}

export default Testpage;