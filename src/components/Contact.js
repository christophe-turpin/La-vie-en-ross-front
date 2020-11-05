import React, { useState } from 'react';
import './contact.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import emailjs from 'emailjs-com'

const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [number, setNumber] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		let templateParams = {
		  from_name: `${name}, ${email}`,
		  to_name: 'kenny.phiri84@gmail.com',
		  number: `${number}`,
		  message: `${message}`,
		}
		emailjs.send(
		  'service_jc798al',
		  'template_xkirupe',
		  templateParams,
		  'user_YOSNbWUH9QyZXCPbUkaGH'
		).then(function(response) {
			console.log('SUCCESS!', response.status, response.text);
		 }, 
		 function(error) {
			console.log('FAILED...', error);
		 })
		resetForm()
		alert('Votre message a bien été envoyé')
	  }
	  const resetForm = () => {
		  setName('')
		  setEmail('')
		  setNumber('')
		  setMessage('')
	  }

	return (
		<div className="contact">
		<Form onSubmit = {handleSubmit} id="contact">
			<p className="lead">Pour toute demande, n’hésitez pas à me contacter, je reviendrai vers vous dans les plus brefs délais !</p>
			<FormGroup>
				<Label for="examplePassword">Nom/Prénom</Label>
				<Input 
					type="text" 
					name="text" 
					id="exampleName"
					value={name} 
					onChange= { (e) => setName(e.target.value) }
				/>
			</FormGroup>
			<FormGroup>
				<Label for="exampleEmail">Email</Label>
				<Input 
					type="email" 
					name="email" 
					id="exampleEmail"
					value={email}
					onChange= { (e) => setEmail(e.target.value) }
				/>
			</FormGroup>
			<FormGroup>
				<Label for="exampleNumber">Téléphone</Label>
				<Input 
					type="text" 
					name="text" 
					id="exampleNumber"
					value={number} 
					onChange= { (e) => setNumber(e.target.value)}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="exampleMessage">Message</Label>
				<Input 
					type="textarea" 
					name="text" 
					id="exampleText"
					value={message}
					onChange= { (e) => setMessage(e.target.value) }
				 />
			</FormGroup>
			<FormGroup className="buttonGroup">
				<div className="evenCarousel">
					<button className="contactButton">Envoyer</button>
				</div>
			</FormGroup>
			
		</Form>
		</div>
	);
};

export default Contact;
