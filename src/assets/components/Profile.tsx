import '../css/Profile.css'
import profileData from '../mock/profileData.json'

const Profile = ({href, src, alt}:{href: string, src: string, alt: string}) =>{


    return(
        <figure className="fir-image-figure">
        <a className="fir-imageover" rel="noopener" target="_blank" href={href}>
            <img className="fir-author-image fir-clickcircle" src={src} alt={alt}></img>
        </a>

        <figcaption>
            <div className="fig-author-figure-title">{profileData.Title}</div>
            <div className="fig-author-figure-title">{profileData.Description}</div>
        </figcaption>
    </figure>
    )

}

export default Profile