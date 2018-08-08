import React, { Component } from 'react';

import FormELement from './FromElement/FormElement';

import './ContactForm.css';

class ContactForm extends Component {
  state = {
    contactForm: {
      name: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'name'
        }
      },
      subject: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'subject'
        }
      },
      mail: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'email',
          placeholder: 'email'
        }
      },
      message: {
        elementType: 'textArea',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'message'
        }
      },
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  changeHandler = () => {

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
      <form  className='contactForm' onSubmit={this.submitHandler}>
        {formElementsArray.map(element => {
          return <FormELement
            key={element.id}
            value={element.config.value}
            elementType={element.config.elementType}
            onChange={this.changeHandler}
            elementConfig={element.config.elementConfig} />
        })}

        <button className='button'>Submit</button>
      </form>
    )
    let formContainer = null;
    if (this.props.show.showContactForm) {
      formContainer = (
        <div>
          <h3>Contact me</h3>
          {form}
        </div>
      )
    }


    return formContainer
  }
}

export default ContactForm;