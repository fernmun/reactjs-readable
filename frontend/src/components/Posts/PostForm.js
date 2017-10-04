import React, { Component } from 'react'
import { withRouter } from 'react-router'
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

class PostForm extends Component {

  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  getValidationState = () => {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  buildInputField = field => {
    return(
      <FormGroup validationState={this.getValidationState()}>
        <ControlLabel>{field.label}</ControlLabel>
        <FormControl type="text" placeholder={field.label} {...field.input} />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
      </FormGroup>
    )
  }

  buildDropdownField = field => {
    const renderOptionList = field.options.map(option => {
      return (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      )
    })

    return (
      <FormGroup>
        <ControlLabel>{field.label}</ControlLabel>
        <FormControl componentClass="select" {...field.input}>
          {renderOptionList}
        </FormControl>
        <div className="error danger">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </FormGroup>
    )
  }

  onSubmit = values => {
    this.props.action(values)
  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field label="Title" name="title" component={this.buildInputField} onChange={this.handleChange} />
        <Field label="Author" name="author" component={this.buildInputField} onChange={this.handleChange} />
        <Field label="Category" name="category" component={this.buildDropdownField} options={this.props.categories} />
        <Field label="Body" name="body" component={this.buildInputField} onChange={this.handleChange} />
        <Button bsStyle="primary" type="submit" active>Submit</Button>
      </form>
    )
  }
}

export default withRouter(reduxForm({
    form: 'PostForm',
    enableReinitialize: true,
})(PostForm))
