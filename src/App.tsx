import bg from './assets/background-nyc.jpg'
import './index.scss'

function App() {
  return (
    <>
      <img src={bg} id="bg-photo" alt=""/>

      <p id={'attribution'}>Photo by <a href="https://unsplash.com/@yan_berthemy_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yan Berthemy</a> on <a href="https://unsplash.com/photos/aerial-photography-of-metropolitan-area-quHB70LB5uI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
    </>
  )
}

export default App
