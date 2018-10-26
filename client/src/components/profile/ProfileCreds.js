import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { exp, edu } = this.props;

    const expItems = exp.map(expa => (
      <li key={expa._id} className="list-group-item">
        <h4>{expa.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{expa.from}</Moment> -
          {expa.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{expa.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position: </strong>
          {expa.title}
        </p>
        <p>
          {expa.location === "" ? null : (
            <span>
              <strong>Location: </strong>
              {expa.location}
            </span>
          )}
        </p>
        <p>
          {" "}
          {expa.description === "" ? null : (
            <span>
              <strong>Description: </strong>
              {expa.description}
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = edu.map(edui => (
      <li key={edui._id} className="list-group-item">
        <h4>{edui.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edui.from}</Moment> -
          {edui.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edui.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree: </strong>
          {edui.degree}
        </p>
        <p>
          <strong>Field Of Study: </strong>
          {edui.fieldofstudy}
        </p>
        <p>
          {edui.description === "" ? null : (
            <span>
              <strong>Description: </strong>
              {edui.description}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Experience Listed</p>
          )}
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">No Education Listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
