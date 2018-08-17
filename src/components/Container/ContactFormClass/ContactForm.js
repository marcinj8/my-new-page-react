import React, { Component } from 'react';
import axios from 'axios';

import FormELement from './FromElement/FormElement';
import ContactInformationBlock from './ContactInformationBlock/ContactInformationBlock';

import './ContactForm.css';

class ContactForm extends Component {
  state = {
    contactForm: {
      name: {
        elementType: 'input',
        value: '',
        animation: 'left',
        elementConfig: {
          type: 'text',
          placeholder: 'name'
        },
        validation: {
          required: true,
        },
        valid: false,
        used: false
      },
      subject: {
        elementType: 'input',
        value: '',
        animation: 'right',
        elementConfig: {
          type: 'text',
          placeholder: 'subject'
        },
        validation: {
          required: true,
        },
        valid: false,
        used: false
      },
      mail: {
        elementType: 'input',
        value: '',
        animation: 'left',
        elementConfig: {
          type: 'email',
          placeholder: 'email'
        },
        validation: {
          required: true,
        },
        valid: false,
        used: false
      },
      message: {
        elementType: 'textArea',
        value: '',
        animation: 'right',
        elementConfig: {
          type: 'text',
          placeholder: 'message'
        },
        validation: {
          required: true,
        },
        valid: false,
        used: false
      },
    },
    formIsValid: false,
    contactData: {
      mail: {
        type: 'mail',
        title: 'Email address:',
        href: 'mailto:contact@marcinjanerka.com',
        label: 'contact@marcinjanerka.com'
      },
      phone: {
        type: 'phone',
        title: 'Phone',
        href: 'callto:+48730078241',
        label: 'Click to call'
      },
      city: {
        type: 'link',
        title: 'City',
        href: 'https://www.google.pl/maps/@51.0995857,17.0432647,12.5z',
        label: 'Wroclaw'
      },
      linkedin: {
        type: 'link',
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/marcin-janerka-a78448147',
        label: 'Click to visit'
      }
    },
    formSent: false
  }

  submitHandler = (event) => {
    event.preventDefault()
    let currentState = {
      ...this.state.contactForm
    }
    let message = {};
    for(let key in currentState) {
      message[key] = this.state.contactForm[key].value;
    }
    axios.post('https://react-contact.firebaseio.com/message.json', message)
      .then(response => console.log(response))
      .catch(error => alert(error))
    this.setState({ formSent: true })
  }

  validationHandler = (rules, value) => {
    let isValid = true;
    if (!rules) {
      return true
    }
    if (rules.required) {
      isValid = value !== '' && isValid
    }
    return isValid
  }

  changeHandler = (event, id) => {
    const inputs = {
      ...this.state.contactForm
    };
    const input = {
      ...inputs[id]
    };
    input.value = event.target.value;
    input.used = true;
    input.valid = this.validationHandler(input.validation, input.value);
    inputs[id] = input;
    let formIsValid = true;
    for(let key in inputs) {
      formIsValid = inputs[key].valid && formIsValid;
    }
    this.setState({
      contactForm: inputs,
      formIsValid: formIsValid
    });
  }

  render() {
    const formElementsArray = [];
    for (let element in this.state.contactForm) {
      formElementsArray.push({
        id: element,
        config: this.state.contactForm[element]
      })
    }

    let form = (
      <form className='contactForm' onSubmit={this.submitHandler}>
        {formElementsArray.map(element => {
          return <FormELement
            key={element.id}
            animation={element.config.animation}
            value={element.config.value}
            used={element.config.used}
            valid={element.config.valid}
            elementType={element.config.elementType}
            changed={(event) => this.changeHandler(event, element.id)}
            elementConfig={element.config.elementConfig} />
        })}

        <button disabled={!this.state.formIsValid} className='button bottom'>Submit</button>
      </form>
    )
    const contactInformationArray = [];
    for (let element in this.state.contactData) {
      contactInformationArray.push({
        id: element,
        config: this.state.contactData[element]
      })
    }
    let contactInformation = (
      <div className='contactData'>
        {contactInformationArray.map(data =>
          <ContactInformationBlock
            key={data.id}
            title={data.config.title}
            href={data.config.href}
            label={data.config.label} />
        )}
      </div>
    )
    let formContainer = null;
    if (this.props.show.showContactForm) {
      if (this.state.formSent) {
        formContainer = <h4>Thank you for message</h4>
      } else {
        formContainer = (
          <div className='formContainer'>
            <div className='formContainer__box'>
              <h3>Contact me</h3>
              {form}
            </div>
            <div className='formContainer__box'>
              <h4>Additiona information</h4>
              {contactInformation}
            </div>
          </div>
        )
      }

    }


    return formContainer

  }
}

export default ContactForm;