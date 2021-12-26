import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'

const Booking = () => {
    const [category, setCategory] = useState('')
    const [c_name, setName] =  useState('')
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }   

    useEffect(()=>{
        getProfileById()
    });

    const getProfileById = async () => {
        const response = await axios.get('https://freelancerhome.herokuapp.com/profile/' + id);
        setName(response.data.company_name)
        setCategory(response.data.category)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await axios.post('https://freelancerhome.herokuapp.com/booking',{
            category: category,
            user_id: id,
            company_name: inputs.company_name,
            description: inputs.description,
            email_phone: inputs.company_email,
            completed: 0,
            start_date: inputs.start_date,
            due_date: inputs.due_date
        });
        alert('Successfully added your Booking')
    }
    return (
        <>
            <section class="ad-post bg-gray py-5">
                <div class="container">
                    <form  onSubmit={handleSubmit}>
                        
                        <fieldset class="border border-gary p-4 mb-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h3>Make Your Booking</h3>
                                    </div>
                                    <div class="col-lg-6">
                                        <h6 class="font-weight-bold pt-4 pb-1">Category:</h6>
                                        <input class="form-control" type="text" value={category} disabled/>

                                        <h6 class="font-weight-bold pt-4 pb-1">Targeted Freelancer:</h6>
                                        <input type="text" class="form-control" value={c_name} disabled/>
                                        <h6 class="font-weight-bold pt-4 pb-1">Description:</h6>
                                        <textarea name="description" value={inputs.description || ""} onChange={handleChange} class="form-control" rows="7" placeholder="Write details about your booking" required></textarea>
                                    </div>
                                </div>
                        </fieldset>

                        <fieldset class="border p-4 my-5 seller-information bg-gray">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h3>Booker's Information</h3>
                                </div>
                                <div class="col-lg-6">
                                    <h6 class="font-weight-bold pt-4 pb-1">Company/Individual's Name:</h6>
                                    <input type="text" name="company_name" value={inputs.company_name || ""} onChange={handleChange} placeholder="Contact name" class="form-control" />
                                    <h6 class="font-weight-bold pt-4 pb-1">Contact Number or Email:</h6>
                                    <input type="text" name="company_email" value={inputs.company_email || ""} onChange={handleChange} placeholder="Contact Number or Email" class="form-control" />
                                </div>
                                <div class="col-lg-6">
                                    <h6 class="font-weight-bold pt-4 pb-1">Start Date:</h6>
                                    <input type="date" name="start_date" value={inputs.start_date || ""} onChange={handleChange} class="form-control" />
                                    <h6 class="font-weight-bold pt-4 pb-1">Due Date:</h6>
                                    <input type="date" name="due_date" value={inputs.due_date || ""} onChange={handleChange} class="form-control" />
                                </div>
                            </div>
                        </fieldset>
                        
                       
                        <button type="submit" class="btn btn-primary">Book Your Freelancer. <i class="fa fa-arrow-right"></i></button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Booking
