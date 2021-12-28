import {useState, useEffect} from 'react'
import axios from 'axios';
//import Hero from '../Components/Hero';
import tempimg from '../Assets/images/fhlogo.jpg';
import {Link} from 'react-router-dom'

const Home = () => {
    const [profiles, setProfile] = useState([]);
    
    useEffect(() => {
        getProfiles();
    }, []);

    const getProfiles = async () => {
        const response = await axios.get('https://freelancerhome.herokuapp.com/profile');
        setProfile(response.data);
    }
    const [inputs, setInputs] = useState({});

    const handleSearch = async (e) => {
        e.preventDefault();
        const feedback = await axios.get('https://freelancerhome.herokuapp.com/profile/search', {
             category: inputs.category
        });
        setProfile(feedback.data)
        
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const styles={
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 grey',
        height: '50%',
        width: '50%'
    }
    return (
        <>
            <section className="hero-area bg-1 text-center overly">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="content-block">
                                <h1>Book a job or Advertise</h1>
                                <p>Join the millions who book and advertise their services <br/> everyday in local communities around the world</p>
                            </div>
                            
                            <div className="advance-search">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-12 col-md-12 align-content-center">
                                                    <form onSubmit={handleSearch}>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-4">
                                                                <input type="text" className="form-control my-2 my-lg-1" id="inputtext4" placeholder="What are you looking for" />
                                                            </div>

                                                            <div className="form-group col-md-3">
                                                                <select value={inputs.category || ""} name="category" onChange={handleChange} className="w-100 form-control mt-lg-1 mt-md-2">
                                                                    <option value="">Select Category</option>
                                                                    <option value="web dev">Web dev</option>
                                                                    <option value="ui">Ui Design</option>
                                                                    <option value="blogger">blogger</option>
                                                                    <option value="designer">Designer</option>
                                                                </select>
                                                            </div>

                                                            <div className="form-group col-md-3">
                                                                <select value={inputs.price || ""} name="price" onChange={handleChange} className="w-100 form-control mt-lg-1 mt-md-2">
                                                                    <option value="">Select price</option>
                                                                    <option value="100">100</option>
                                                                    <option value="200">200</option>
                                                                    <option value="300">300</option>
                                                                    <option value="400">400</option>
                                                                </select>
                                                            </div>
                                                            
                                                            <div className="form-group col-md-2 align-self-center">
                                                                <button type="submit" className="btn btn-primary">Search Now</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </section>
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="search-result bg-gray">
                                <h2>Results For "All"</h2>
                            </div>
                        </div>
                    </div>
                    { profiles.map((profile, index) => (
                        <div key={profile.id} class="ad-listing-list mt-20">
                            <div class="row p-lg-3 p-sm-5 p-4">
                                <div class="col-lg-4 align-self-center">
                                    <a href="single.html">
                                        <img src={tempimg} class="img-fluid" alt="" style={styles} />
                                    </a>
                                </div>
                                <div class="col-lg-8">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-10">
                                            <div class="ad-listing-content">
                                                <div>
                                                    <a href="single.html" class="font-weight-bold"><i class="fa fa-user-circle"></i> Name: {profile.company_name}</a>
                                                </div>
                                                <ul class="list-inline mt-2 mb-3">
                                                    <li class="list-inline-item"><a href="category.html"> <i class="fa fa-folder-open-o"></i> Category: {profile.category}</a></li>
                                                </ul>
                                                <i class="fa fa-map-marker"></i> <span class="font-weight-bold"> Location: {profile.location}</span>
                                                <h2><i class="fa fa-pencil"></i> Skills: </h2>
                                                <p class="pr-5">{profile.skills}</p>
                                                <Link to={`/view/${profile.id}`}><button class="btn btn-primary">View Profile <i class="fa fa-chevron-right"></i></button></Link>

                                            </div>
                                        </div>
                                        <div class="col-lg-6 align-self-center">
                                            <div class="product-ratings float-lg-right pb-3">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                </ul><br/><br/>
                                                <h2>Minimum Price: $ {profile.price_range} </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </section>
        </>
    )
}

export default Home;
