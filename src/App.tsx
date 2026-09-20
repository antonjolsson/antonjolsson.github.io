import bg from './assets/background-nyc.jpg'
import linkedin_icon from './assets/linkedIn_icon.svg'
import github_icon from './assets/github_icon.svg'
import mail_icon from './assets/mail_icon.svg'
import './index.scss'
import { useState} from "react";

interface ImgLinkProps {
    src: string,
    imgAlt: string,
    onClick: () => void
}

function ImgLink({src, imgAlt, onClick}: ImgLinkProps) {
    const [wasClicked, setWasClicked] = useState(false)

    const onLinkClicked = () => {
        setWasClicked(true)
        setTimeout(() => {
            onClick()}
        , 500)
        setTimeout(() => setWasClicked(false), 2000)
    }
    return <img className={`logo ${wasClicked ? 'growing' : ''}`} src={src} alt={imgAlt}
                onClick={onLinkClicked}/>;
}

function App() {
    return (
        <>
            <img src={bg} id="bg-photo" alt=""/>
            <div id={'logos'}>
                <ImgLink src={github_icon} imgAlt={"github_icon"} onClick={() => {
                             window.location.href = 'https://github.com/antonjolsson/'}}/>
                <img className={'logo'} src={linkedin_icon} alt={'linkedin_icon'}/>
                <img className={'logo'} src={mail_icon} alt={'mail_icon'}/>
            </div>
            <p id={'attribution'}>Photo by <a
                href="https://unsplash.com/@yan_berthemy_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yan
                Berthemy</a> on <a
                href="https://unsplash.com/photos/aerial-photography-of-metropolitan-area-quHB70LB5uI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
        </>
    )
}

export default App
