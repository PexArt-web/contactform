import { useState } from "react"
import contactImage  from './images/F62a6iMWMAAOsJE.jpeg'
import Star from "./Star"
const Contact = () => {
    const [contact, setContact]  = useState({
        firstName: " Pelumi",
        lastName: "Adeayo",
        phone: "+2347033962306",
        email: "pexart74@gmail.com",
        isFavorite: false
    })
     let starIcon = contact.isFavorite ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i>
     const toggelFavorite = () => {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
     }
    return ( 
        <main>
        <article className="card p-2">
            <div>
            <img src={contactImage} className="card--image" />
               <Star icon ={starIcon} click = {toggelFavorite}/>
                <h2 className="card--name">
                    {contact.firstName}{" "}{contact.lastName}
                </h2>
                <p className="card--contact fw-bold">{contact.phone}</p>
                <p className="card--contact fw-bold">{contact.email}</p>
            </div>
            
        </article>
    </main>
)
}
 
export default Contact;