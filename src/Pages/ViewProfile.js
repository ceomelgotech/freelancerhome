import {useState, useEffect} from 'react';
import ProfileList from '../Components/ProfileList';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewProfile = () => {

    const [profile, setProfile] = useState([]);
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [skills, setSkills] = useState('')
    const [ category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price_range, setPrice] = useState('')

    const { id } = useParams();

    useEffect(() => {
        getProfileById();
    });


    const getProfileById = async () => {
        const response = await axios.get('https://freelancerhome.herokuapp.com/profile/' + id);
        setName(response.data.company_name)
        setLocation(response.data.location)
        setSkills(response.data.skills)
        setCategory(response.data.category)
        setDescription(response.data.description)
        setPrice(response.data.price_range) 
        setProfile(response.data)
    }

    return (
        <>
            <section class="page-title">
                
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            
                            <h3>View {name}'s Profile</h3>
                        </div>
                    </div>
                </div>
                
            </section>
            <ProfileList 
                name={name}
                location={location}
                skills={skills}
                category={category}
                description={description}
                price={price_range}
                id={profile.id}
            />
        </>
    )
}

export default ViewProfile;