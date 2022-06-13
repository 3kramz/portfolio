import React, { useState } from 'react';
import { send } from '@emailjs/browser';
import { toast } from 'react-toastify';


const ContactMe = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleName = e => setName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleMessage = e => setMessage(e.target.value)

    const handleSubmit = async e => {
        e.preventDefault()
        const data = {
            sender_name: name,
            sender_email: email,
            message
        }
       await  send('service_qe0fiur', 'template_5fcw1aj', data, 'KBYqQdenvKkyfqutB')
            .then((result) => {

                toast.success("message sent successfully")
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                toast.error("message sent faild")
                console.log(error.text);
            });

    }



    return (
        <div >
            <p className='pl-10'>||  Get in touch</p>
            <p className='font-cormor text-[40px] lg:text-[70px] pl-10'>Contact With me</p>

            <form class="card-body lg:w-1/2 w-11/12 mx-auto" onSubmit={handleSubmit}>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" value={name} onChange={handleName} class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" value={email} onChange={handleEmail} class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Message</span>
                    </label>
                    <textarea placeholder="Message" value={message} onChange={handleMessage} class="input input-bordered" required />
                </div>
                <div class="form-control mt-6">
                    <input type="submit" value="Submit" class="btn btn-primary" />
                </div>
            </form>
        </div>

    );
};

export default ContactMe;