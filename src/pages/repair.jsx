import React from 'react';
import HomeRepair from '../components/repair/HomeRepair';
import Header from '../components/header/HeaderComponent';
import bgimg from '../assets/images/bg.png';
import Footer from '../components/footer/FooterComponent'
import FormRepair from '../components/repair/FormRepair';
function repair(props) {
    return (
        <div>
            <section className="bg-[#15182f]">
                <div className="h-auto w-full " style={{ backgroundImage: `url(${bgimg})`}}>
                    <Header />
                    <HomeRepair />
                </div>
            </section>
            {/* Form */}
            <FormRepair /> 
            {/* footer */}
            <Footer />
        </div>
    );
}

export default repair;