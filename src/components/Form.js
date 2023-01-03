import { Component } from "react/cjs/react.production.min"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            stance: '',
            name: "",
            obstacle: "",
            tutorial: "",
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
  
    submitTrick = event => {
        event.preventDefault()
        const newTrick = {
            id: Date.now(),
            ...this.state
        }
        this.props.addTrick(newTrick)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            stance: '',
            name: "",
            obstacle: "",
            tutorial: "",
        })
    }

    render() {
        return (
            <form>
                <label>
                    Choose Your Stance:
                    <select name="stance" value={this.state.stance} 
                    onChange={event => this.handleChange(event)}>
                        <option value="regular">Regular</option>
                        <option value="switch">Switch</option>

                    </select>
                </label>
                <input
                    type='text'
                    placeholder="Name of Trick"
                    name="name"
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />
                <label>
                    Choose Your Obstacle:
                    <select name="obstacle" value={this.state.obstacle} 
                    onChange={event => this.handleChange(event)}>
                        <option value='flatground'>Flatground</option>
                        <option value='ledge'>Ledge</option>
                        <option value='rail'>Rail</option>
                        <option value='stairs'>Stairs</option>
                        <option value='pool'>Pool</option>
                    </select>
                </label>
                <input
                    type='text'
                    placeholder="Link to tutorial"
                    name="tutorial"
                    value={this.state.tutorial}
                    onChange={event => this.handleChange(event)}

                />
                <button onClick={event => this.submitTrick(event)}>Send it</button>
            </form>
        )
    }
}

export default Form