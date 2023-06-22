import { useState } from 'react';
import './App.css'

function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const sendMessage = (e) => {
		e.preventDefault();
		console.log(`Este es el mensaje enviado por ${name}-${email}: ${message}`)
	}

  return (
			<div id="wrapper">
					<section id="contact">
						<div className="inner">
							<section>
									<div className="fields">
										<div className="field half">
											<label>Name</label>
											<input value={name}  onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" />
										</div>
										<div className="field half">
											<label>Email</label>
											<input value={email}  onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" />
										</div>
										<div className="field">
											<label>Message</label>
											<textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" rows="6"></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><input type="submit"onClick={sendMessage} value="Send Message" className="primary"/></li>
										<li><input type="reset" value="Clear" /></li>
									</ul>
							</section>
							<section className="split">
								<section>
									<div className="contact-method">
										<span className="icon solid alt fa-envelope"></span>
										<h3>Email</h3>
										<a href="#">information@untitled.tld</a>
									</div>
								</section>
								<section>
									<div className="contact-method">
										<span className="icon solid alt fa-phone"></span>
										<h3>Phone</h3>
										<span>(000) 000-0000 x12387</span>
									</div>
								</section>
								<section>
									<div className="contact-method">
										<span className="icon solid alt fa-home"></span>
										<h3>Address</h3>
										<span>1234 Somewhere Road #5432<br />
										Nashville, TN 00000<br />
										United States of America</span>
									</div>
								</section>
							</section>
						</div>
					</section>
			</div>
  )
}

export default App
