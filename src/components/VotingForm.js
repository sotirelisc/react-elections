import React from 'react';

class VotingForm extends React.Component {
  state = {
    candidates: [{
      id: 0,
      fullName: 'Test Test',
      checked: false
    }, {
      id: 1,
      fullName: 'Test1 Test1',
      checked: false
    }]
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(name);
    this.setState({
      [name]: value
    });
  }

  showCandidates() {
    return this.state.candidates.map(candidate =>
      <div className="inline field" key={candidate.id}>
        <div className="ui checkbox">
          <label>{candidate.fullName}</label>
          <input
            name={candidate.fullName}
            type="checkbox"
            checked={candidate.checked}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="ui form">
        {this.showCandidates()}
      </div>
    );
  }
}

export default VotingForm;

