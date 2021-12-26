import React from 'react';
import tempimg from '../Assets/images/fhlogo.jpg';
import {Link} from 'react-router-dom'

const ProfileList = (props) => {
    const styles={
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 grey',
        height: '80%',
        }
    return (
        <>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="search-result bg-gray">
                            <h2>Results For "{props.name}"</h2>
                        </div>
                    </div>
                </div>
                    <div class="ad-listing-list mt-20">
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
                                            <a href="single.html" class="font-weight-bold"><i class="fa fa-user-circle"></i> Name: {props.name}</a>
                                            </div><br/>
                                            <div>
                                            <a href="single.html" class="font-weight-bold"><i class="fa fa-pencil"></i> Skills: {props.skills}</a>
                                            </div>
                                            <ul class="list-inline mt-2 mb-3">
                                                <li class="list-inline-item"><a href="category.html"> <i class="fa fa-folder-open-o"></i> Category: {props.category}</a></li>
                                            </ul>
                                            <i class="fa fa-map-marker"></i> <span class="font-weight-bold"> Location: {props.location}</span>

                                            <h2>Description: </h2>
                                            <p class="pr-5">{props.description}</p>
                                            <Link to={`/book/${props.id}`}><button class="btn btn-primary">Book this Freelancer <i class="fa fa-chevron-right"></i></button></Link>

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
                                            <h2>Minimum Price: {props.price} </h2>
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

export default ProfileList
