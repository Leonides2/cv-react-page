import '../css/Profile.css'

const Profile = ({href, src, alt}:{href: string, src: string, alt: string}) =>{


    return(
        <figure className="fir-image-figure">
        <a className="fir-imageover" rel="noopener" target="_blank" href={href}>
            <img className="fir-author-image fir-clickcircle" src={src} alt={alt}></img>
            <div className="fir-imageover-color"></div>
        </a>

        <figcaption>
            <div className="fig-author-figure-title">David East</div>
            <div className="fig-author-figure-title">Engineer at Google on Firebase.</div>
            <div className="fig-author-figure-title">Jan. 16th, 2017 &#8212; 5m read</div>
        </figcaption>
    </figure>
    )

}

export default Profile