import React from 'react';
import { endpoint } from '../../helpers/config';
import ReturnButton from '../../components/ReturnButton/ReturnButton'; 
import './ContactForm.css';

class ContactForm extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            name: null,
            email: null,
            message: null,
            messageSent: false
          };
    
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
      }
    
      handleChange( event ) {
          const target = event.target;
          const value = target.value;
          const name = target.name; 
          this.setState( { [ name ]: value } );
      }
   
      registerMessage = () => this.setState( { messageSent: true } );

      handleSubmit( event ){
        console.log( 'A name was submitted: ' + this.state.name );
        const data = { 
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        }; 
        this.registerMessage();
        fetch( `${ endpoint }/contact`, {
            method: 'POST', 
            body: JSON.stringify( data ), 
            headers: new Headers({
              'Content-Type': 'application/json'
            } )
        } ).then( res => res.json( res ) )
        .catch( error => console.error('Error:', error ))
        .then( response => {
          
          console.log('Successfully sent: ', data, ' and received message: ', response );
        } )
        event.preventDefault();
      }

    
      render() {
        const messageForDisplay = this.state.messageSent ? 
        (    <div className={ "confirmationDiv" } >
              <h1>Thanks for your interest!</h1>
              <h3>We'll email you as soon as possible</h3>
            </div>
        )
        : 
        (   
            <div className={ "css-contactFormDiv" } >
                <h2>Send us a message with your email and we'll be in touch!</h2>
                <form className={ "css-actualForm" } onSubmit={ this.handleSubmit }>
                        <label>
                          <div className={ "css-labelDiv" } >Name:</div>
                          <input className={ "css-input" } type="text" name={ "name" } value={ this.state.value } onChange={ this.handleChange } />
                        </label>
                        <br />
                        <label>
                          <div className={ "css-labelDiv" }>Email:</div>
                          <input className={ "css-input" } type="email" required name={ "email" } value={ this.state.value } onChange={ this.handleChange } />
                        </label>
                        <br/>
                        <label>
                          <div className={ "css-labelDiv" }>Message:</div>
                          <textarea className={ "css-input css-messageInput" } type="text" name={ "message" } value={ this.state.value } onChange={ this.handleChange } />
                        </label>
                        <br/>
                    <input className={ "css-inputButton" } type="submit" value="Submit" />
                </form>
            </div>
        );

        return (
          <div>

            <ReturnButton /> 

            { messageForDisplay }

          </div>
        );
      }
    }

export default ContactForm;