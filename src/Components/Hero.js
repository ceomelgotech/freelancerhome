import {useState} from 'react';


const Hero = () => {
    const [inputs, setInputs] = useState({});

    const handleSearch = (e) => {
        
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
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
        </>
    )
}

export default Hero
