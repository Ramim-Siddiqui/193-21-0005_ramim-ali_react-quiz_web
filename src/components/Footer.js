import React from 'react'
import foot_logo from "./foot_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
{/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


{/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}

const Footer = () => {
    return (
        <>

            <div className="row foot_bg" style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                <div className="col col-sm-6 col-md-2 col-lg-2 foot_bg my-5" style={{ marginLeft: '6rem' }}>
                    <b className='foot_bg'>Product</b>
                    <p className='my-3 foot_bg'>Security</p>
                    <p className='foot_bg'>Writer For Chrome</p>
                    <p className='foot_bg'>Writer for Contentful</p>
                    <p className='foot_bg'>Writer for Figma</p>
                    <p className='foot_bg'>Grammariily Alternative</p>
                    <p className='foot_bg'>Request for demo</p>
                    <p className='foot_bg'>Try for free</p>
                </div>

                <div className="col col-sm-6 col-md-2 col-lg-2 foot_bg my-5">
                    <b className='foot_bg'>Resources</b>
                    <p className='my-3 foot_bg'>Blog</p>
                    <p className='foot_bg'>Guides</p>
                    <p className='foot_bg'>Inclusive language</p>
                    <p className='foot_bg'>Style guide template</p>
                    <p className='foot_bg'>Terminology management</p>
                    <p className='foot_bg'>AI content detector</p>
                    <p className='foot_bg'>Free grammar check</p>
                </div>

                <div className="col col-sm-6 col-md-2 col-lg-2 foot_bg my-5">
                    <b className='foot_bg'>Company</b>
                    <p className='my-3 foot_bg'>Careers</p>
                    <p className='foot_bg'>Partners</p>
                    <p className='foot_bg'>Contact US</p>
                </div>


                <div className="col col-sm-6 col-md-2 col-lg-2 foot_bg my-5">
                    <b className='foot_bg'>Support</b>
                    <p className='my-3 foot_bg'>Help center</p>
                    <p className='foot_bg'>API</p>
                    <p className='foot_bg'>Status</p>
                </div>

                <div className="col col-sm-6 col-md-2 col-lg-2 foot_bg my-5">
                    <img className='foot_bg' src={foot_logo} alt="" />
                </div>

                </div> 

                <div className="row foot_bg" style={{paddingLeft: '7rem', display: 'flex', justifyContent: 'space-between'}} >

                    <div className="col col-sm-6 col-md-3 col-lg-3 foot_bg my-5" >
                        <b className='foot_bg'>&copy; 2023 WRITEALY</b>
                    </div>

                    <div className="col col-sm-6 col-md-3 col-lg-3 foot_bg my-5">
                        <FontAwesomeIcon className='foot_bg mx-3' icon={faLinkedin} /> <FontAwesomeIcon className='foot_bg mx-3' icon={faFacebook} />
                        <FontAwesomeIcon className='foot_bg mx-3' icon={faTwitter} />
                    </div>

                    <div className="col col-sm-6 col-md-3 col-lg-3 foot_bg my-5">
                       <b className='foot_bg'>TERMS | PRIVACY</b>
                    </div>
                </div>
           
           
           </>
            )
}

            export default Footer;
