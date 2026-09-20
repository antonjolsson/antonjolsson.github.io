import bg from './assets/background-nyc.jpg'
import linkedin_icon from './assets/linkedIn_icon.svg'
import github_icon from './assets/github_icon.svg'
import mail_icon from './assets/mail_icon.svg'
import './index.scss'
import {useState} from "react";

interface ImgLinkProps {
    src: string,
    imgAlt: string,
    location: string
}

function ImgLink({src, imgAlt, location}: ImgLinkProps) {
    const [wasClicked, setWasClicked] = useState(false)

    const onLinkClicked = () => {
        setWasClicked(true)
        setTimeout(() => setWasClicked(false), 2000)
    }
    return <a href={location}>
        <img className={`logo ${wasClicked ? 'growing' : ''}`} src={src} alt={imgAlt}
             onClick={onLinkClicked}/>
    </a>;
}

function App() {
    return (
        <>
            <img src={bg} id="bg-photo" alt=""/>
            <div id={'logos'}>
                <ImgLink src={github_icon} imgAlt={"github_icon"} location={'https://github.com/antonjolsson/'}/>
                <ImgLink src={linkedin_icon} imgAlt={"linkedin_icon"} location={'https://www.linkedin.com/in/anton-j-olsson/'}/>
                <ImgLink src={mail_icon} imgAlt={"mail_icon"} location={'mailto:ao@antolsson.se'}/>
            </div>
            <p id={'attribution'}>Vectors and icons by <a href="https://dribbble.com/catalinfertu?ref=svgrepo.com" target="_blank">Catalin Fertu</a> in CC Attribution License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a> | Photo by <a
                href="https://unsplash.com/@yan_berthemy_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yan
                Berthemy</a> on <a
                href="https://unsplash.com/photos/aerial-photography-of-metropolitan-area-quHB70LB5uI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
        </>
    )
}

export default App
