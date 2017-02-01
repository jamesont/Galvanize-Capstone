import React, {Component} from 'react'

export default class CreateNewUser extends Component{
  constructor(props){
    super(props)
    // value: React.PropTypes.object.isRequired

  }

    render(){
      return (
        <div>
          <form action="" className="ContactForm">
            <input type="text" placeholder="First name (required)" value={this.props.value.firstName}/>
            <input type="text" placeholder="Last name (required)" value={this.props.value.lastName}/>
            <input type="text" placeholder="Email (required)" value={this.props.value.email}/>
          </form>
        </div>
      )
    }
}
