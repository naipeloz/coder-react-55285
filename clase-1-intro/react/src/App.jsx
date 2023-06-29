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
							{message}
							<section>
								<form method="post" action="#">
									<div className="fields">
										<div className="field half">
											<label htmlFor="name">Name</label> 
											<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
										</div>
										<div className="field half">
											<label htmlFor="email">Email</label>
											<input type="text" name="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
										</div>
										<div className="field">
											<label htmlFor="message">Message</label>
											<textarea name="message" id="message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><input onClick={sendMessage} type="submit" value="Send Message" className="primary" id="send"/></li>
										<li><input type="reset" value="Clear" /></li>
									</ul>
								</form>
							</section>
						</div>
					</section>
			</div>
  )
}

export default App
