import { closing, complete, forbes, guarantee, hero1, hero2, hero3, hero4, HeroImage, hidden, inc, invest, messageText, msn, privacy, service, yahoo } from "../assets";
import { Banner, Faqs, Footer, Header } from "../components/Home";
import { Button } from 'primereact/button'
import {Link} from 'react-router-dom';
import { Carousel } from 'primereact/carousel';

const LandingPage = ()=> {
    const images = [
        {src: yahoo},
        {src: forbes},
        {src: inc},
        {src: msn},
    ]
    const quickData = [
        {
            img: complete,
            title: "Complete the application",
            text: "Fill out our straightforward form and submit your information."
        },
        {
            img: messageText,
            title: "Consult a loan agent",
            text: "You'll get a call from a loan agent to go over your application."
        },
        {
            img: invest,
            title: "Sign and invest",
            text: "Before providing you your loan, we will email you the necessary paperwork to sign."
        },
    ]
    const chooseData = [
        {
            img: guarantee,
            title: "Low rate Guarantee",
            text: "Oqvest offers the lowest rates in the market, thanks to our commitment to transparency and honesty. We negotiate the most competitive rates on your behalf, so you can save money and achieve your homeownership goals."
        },
        {
            img: service,
            title: "Personalized Service",
            text: "Oqvest takes a personalized approach to mortgage lending, taking the time to understand your unique needs and goals. We offer customized solutions to help you achieve your homeownership dreams."
        },
        {
            img: closing,
            title: "On-time Closing",
            text: "At Oqvest, we understand the importance of closing on time. We have a proven track record of success in the market and are committed to meeting your closing date. With our efficient and effective service, you can count on a timely closing for your mortgage."
        },
        {
            img: hidden,
            title: "No Hidden/Junk Fees",
            text: "Oqvest is committed to transparency and honesty. We never charge hidden or junk fees and always provide clear and accurate breakdowns of all costs and fees, ensuring a fair and straightforward deal every time."
        },
        {
            img: privacy,
            title: "Privacy Pledge",
            text: "Oqvest takes your privacy seriously and pledges to keep your personal information secure and confidential at all times. You can trust that we adhere to strict privacy policies and take every precaution to ensure your data is protected."
        },
    ]
    const template = (image) => {
        return (
            <div className="text-center">
                <img src={image.src} alt="carousel-image" />
            </div>
        );
    }
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    return (<>
        <Banner />
        <Header />
        <div className="grid max-w-full m-0 md:relative hero-section">
            <div className="col-12 md:col-6 hero-text px-4 md:px-8">
                <h1><strong className="st-2">Invest</strong> in <strong className="st-1">Real EState</strong> with ease:</h1>
                <ul className="items">
                    <li><img src={hero1} /> Leverage your rental income to expand your investment portfolio</li>
                    <li><img src={hero2} /> No income or employment verification</li>
                    <li><img src={hero3} /> Borrow up to 85% of home value</li>
                    <li><img src={hero4} /> Close in LLC</li>
                </ul>
                <p>"Our technology offers hassle-free options to help you find the <span style={{color: '#0CBC8B'}}>best rates</span> quickly and easily."</p>
                <Link style={{textDecoration: 'none'}} to="lead">
                    <Button label="Paperless & Quick - Apply Now!" />
                </Link>
            </div>
            <div className="col-6 m-0 px-0 image-div">
                <img className="w-full" src={HeroImage} />
            </div>
        </div>
        <div className="service">
            <div className="quick">
                <h2 className="mb-6">It’s as quick as...</h2>
                <div className="grid-service">
                    {
                        quickData.map((data, i)=> (
                            <div key={i} className="quick-card">
                                <img width={55} height={66} src={data.img} />
                                <h3>{data.title}</h3>
                                <p>{data.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="choose mt-4 mb-8">
                <h2 className="mb-6 mt-8">Why Choose Us???</h2>
                <div className="grid-service">
                    {
                        chooseData.map((data, i)=> (
                            <div key={i} className="quick-card-2">
                                <img width={55} height={66} src={data.img} />
                                <h3>{data.title}</h3>
                                <p>{data.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className="featured">
            <h2 className="mb-6">Featured In</h2>
            <div style={{maxWidth: '100vw'}} className="images">
                <Carousel
                    value={images}
                    itemTemplate={template}
                    responsiveOptions={responsiveOptions}
                    circular={true}
                    autoplayInterval={3000}
                    numVisible={4}
                    numScroll={1}
                    orientation="horizontal"
                    verticalViewPortHeight="100%"
                    showIndicators={false}
                    showNavigators={false}
                />
            </div>
            <div className="flex justify-content-center my-5">
                <Link style={{textDecoration: 'none'}} to="lead">
                    <Button label="Paperless & Quick - Apply Now!" />
                </Link>
            </div>
        </div>
        <div className="faq-section my-6">
            <div className="faqs my-6">
                <h2 className="mb-6">Quetions? Look here</h2>
                <div className="f">
                    <Faqs />
                </div>
            </div>
            <div className="text-center my-8">
                <Link style={{textDecoration: 'none'}} to="lead">
                    <Button label="Paperless & Quick - Apply Now!" />
                </Link>
            </div>
        </div>
        <Footer />
    </>)
}

export default LandingPage;