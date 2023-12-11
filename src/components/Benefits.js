import React from 'react'
import ben1 from "../assets/images/ben1.png";
import ben2 from "../assets/images/ben2.png";
import ben3 from "../assets/images/ben3.png";
import ben4 from "../assets/images/ben4.png";

import ben_logo1 from "../assets/images/ben_logo1.png";
import ben_logo2 from "../assets/images/ben_logo2.png";
import ben_logo3 from "../assets/images/ben_logo3.png";
import ben_logo4 from "../assets/images/ben_logo4.png";
import ben_logo5 from "../assets/images/ben_logo5.png";


const Benefits = () => {
    return (
        <>
            <div className="container">
                <div className="ben_text text-center py-3">
                    <h1 className='fw-bold'>BENEFITS</h1>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col col-sm-12 col-md-6 col-lg-6 ben_text2">
                            <div className="inside_col">
                                <h3>Create content in <br />minutes,not months</h3>
                                <p>Create original content that actually sounds like <br /> your company wrote it. <br /></p>
                                <p>Writer is the only AI writing platform that can be <br />trained on your own best-performing content <br />and brand guidelines.</p>
                                <p> It's Your own A.I specifically tuned for your team’s <br />unique use cases.</p>
                            </div>

                        </div>

                        <div className="col col-sm-12 col-md-6 col-lg-6 px-5">
                            <img className='ben_img' src={ben1} alt="" />
                        </div>
                    </div>


                    {/* row2 */}
                    <div className="row my-5">

                        <div className="col col-sm-12 col-md-6 col-lg-6 ben_text2">
                            <div className="inside_col">
                                <h3>Build a brand that is <br />consistent - everywhere</h3>
                                <p>Generic ad copy. Outdated messaging on your <br /> website. Poorly-written docs.</p>
                                <p>All of this can kill a buyer’s journey — and your <br />brand. Writer gives you all the tools you need to</p>
                                <p>Build a consistent brand across every customer <br />touchpoint, and do it efficiently.</p>
                            </div>

                        </div>

                        <div className="col col-sm-12 col-md-6 col-lg-6 px-5">
                            <img className='ben_img' src={ben2} alt="" />
                        </div>
                    </div>



                    {/* row3 */}

                    <div className="row my-5">

                        <div className="col col-sm-12 col-md-6 col-lg-6 ben_text2">
                            <div className="inside_col">
                                <h3>Drive revenue, not<br />review cycles</h3>
                                <p>‘Let’s be a media company,’ they say — but <br />without the required headcount or budget.</p>
                                <p>Do it anyway</p>
                                <p>10x the productivity of your best writers, and <br />make it so everyone else in the company can <br />contribute on-brand content, too — without the <br />rewrites.</p>
                            </div>

                        </div>

                        <div className="col col-sm-12 col-md-6 col-lg-6 px-5">
                            <img className='ben_img' src={ben3} alt="" />
                        </div>
                    </div>


                    {/* Row 4 */}
                    <div className="row my-5">

                        <div className="col col-sm-12 col-md-6 col-lg-6 ben_text2 " style={{ paddingRight: '5rem' }}>
                            <div className="inside_col">
                                <h3>Be secure with <br />enterprise features</h3>
                                <p className='inside_col_text'>Your data is analyzed transiently, so what you <br />edit or generate isn’t collected or used by Writer.</p>
                                <p className='inside_col_text'>Writer is the only AI writing platform that both <br />users and infosec teams love.</p>
                                <p className='inside_col_text'> It's Your own A.I specifically tuned for your team’s <br />unique use cases.</p>
                                {/* logos */}

                                <div className="ben_logo_div shadow">
                                    <img className='bg-white' src={ben_logo1} alt="" style={{
                                        height: '2.5rem',
                                        width: '2rem'
                                    }} />
                                    <img className='ben_logo bg-white' src={ben_logo3} alt="" />
                                    <img className='ben_logo bg-white' src={ben_logo2} alt="" />
                                    <img className='ben_logo bg-white' src={ben_logo4} alt="" />
                                    <img className='ben_logo bg-white' src={ben_logo5} alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="col col-sm-12 col-md-6 col-lg-6 px-5" >
                            <img className='ben_img' src={ben4} alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Benefits
