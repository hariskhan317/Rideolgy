import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'

function WhyChooseRideology(props) {
    const features =[
        {icon:faBicycle, title:'Extensive E-Bike Selection', para:"We offer an extensive fleet of state-of-the-art electric bicycles, carefully curated to cater to different preferences and needs. Whether you're looking for a smooth city ride, an off-road adventure, or a leisurely cruise along scenic routes, we have the perfect e-bike for you."},
        {icon:faBicycle, title:'Quality and Safety', para:'Your safety is our top priority. All our e-bikes undergo rigorous maintenance checks and are equipped with the latest safety features. We partner with reputable brands known for their reliability and performance, ensuring that you have a safe and enjoyable ride every time.'},
        {icon:faBicycle, title:'Easy Booking Process', para:"We offer an extensive fleet of state-of-the-art electric bicycles, carefully curated to cater to different preferences and needs. Whether you're looking for a smooth city ride, an off-road adventure, or a leisurely cruise along scenic routes, we have the perfect e-bike for you."},
        {icon:faBicycle, title:'Expert Guidance', para:"We offer an extensive fleet of state-of-the-art electric bicycles, carefully curated to cater to different preferences and needs. Whether you're looking for a smooth city ride, an off-road adventure, or a leisurely cruise along scenic routes, we have the perfect e-bike for you."}
    ]

    return (
        <div>
        <h1 class="text-center text-orange-500 text-3xl md:text-5xl font-quicksand font-bold">Why Choose Rideology?</h1>
        <div className="mt-20 grid grid-cols-2 gap-24">
            {features.map((feature,index) =>(
                <div key={index} className="text-center">
                    <h1 className="text-orange-500 text-3xl md:text-5xl">
                        <FontAwesomeIcon icon={feature.icon} />
                    </h1>
                    <h1 className="mt-3 text-orange-500 font-quicksand text-xl md:text-2xl font-semibold">{feature.title}</h1>
                    <p className="mt-2 text-black text-sm md:text-base font-roboto font-normal ">{feature.para}</p>
                </div>))}
        </div>
        </div>
    );
}

export default WhyChooseRideology;