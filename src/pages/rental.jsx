import Header from '../components/header/HeaderComponent';
import bgimg from '../assets/images/bg.png';
import HomeRental from '../components/rental/HomeRental'
import Footer from '../components/footer/FooterComponent'
import RentalForm from '../components/rental/RentalForm';

function rental(props) {
    return (
        <div>
            <section className="bg-[#15182f]">
                <div className="h-auto w-full " style={{ backgroundImage: `url(${bgimg})`}}>
                    <Header /> 
                    <HomeRental />
                </div>
            </section>
            {/* Form */}
            <RentalForm />

            {/* footer */}
            <Footer />
        </div>
    );
}

export default rental;