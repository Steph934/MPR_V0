import Footer from '../../components/footer'
import Header from '../../components/header'
import './style.css'

const Home = () => {
    return (
        <div>
            <Header />
            Ici le body dynamique en fonction de l'url
            <Footer />
        </div>
    )
}

export default Home