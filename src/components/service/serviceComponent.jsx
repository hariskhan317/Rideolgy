import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'

function ServiceComponent(props) {
    const CardData =[
        {icon:faBicycle, title:'Bike Repairs and Maintenance', para:'At Rideology, we understand the importance of a well-maintained bike for optimal performance and safety. Our skilled technicians are well-versed in all aspects of bike repairs and maintenance. From minor adjustments to major overhauls, we have the expertise to handle it all.'},
        {icon:faBicycle, title:'Accessories and Gear', para:'Complete your biking experience with our wide selection of accessories and gear. From helmets and apparel to bike locks, lights, and hydration systems, we carry top-quality products from leading brands.'},
        {icon:faBicycle, title:'Custom Bike Builds', para:'ur experienced team will work closely with you to understand your preferences, riding style, and desired specifications. From selecting the perfect frame to choosing components, colors, and finishes, every detail will be tailored to your exact requirements.'}
    ]
    return (
        <div>
            <h1 class="text-center text-orange-500 text-3xl md:text-5xl font-quicksand font-bold">Our Services</h1>
            <div className="mt-20 grid grid-cols-3 gap-16">
                {CardData.map((data,index) =>(
                    <div key={index} className="text-center">
                        <h1 className="text-orange-500 text-3xl md:text-5xl">
                            <FontAwesomeIcon icon={data.icon} />
                        </h1>
                        <h1 className="mt-3 text-orange-500 font-quicksand text-xl md:text-2xl font-semibold">{data.title}</h1>
                        <p className="mt-2 text-black text-sm md:text-base font-roboto font-normal ">{data.para}</p>
                    </div>))}
            </div>
        </div>
    );
}

export default ServiceComponent;