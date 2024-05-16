import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import './Card.css';

const Card = ({ img, name, firstName, lastName, maidenName, dob, email, contactNumber, address, city, state }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
 
    return (
        <div className="card" data-aos="flip-up">
            <div className="card-header">
                <img src={img} alt={`${name}'s image`} className="user-img" />
                <div className="user-info">
                    <h2 className="username">{name}</h2>
                    <p className="email">{email}</p>
                </div>
            </div>
            <div className="card-content">
                <p className="fullname">Full Name: {firstName} {lastName} {maidenName}</p>
                <p className="dob">Date of Birth: {dob}</p>
                
                <p className="contact">Contact: {contactNumber}</p>
                <p className="address">Address: {address} {city} {state}</p>
            </div>
        </div>
    );
}

export default Card;