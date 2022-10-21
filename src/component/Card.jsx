import React from "react";
import { Card } from "reactstrap";
import "../style/Card.css";

class CardNature extends React.Component {
  render() {
    return (
      <div className="col-xl-4 col-md-6 col-12  mx-0 p-1">
        <Card>
          <img className="post" alt="Sample" src={this.props.postData.photo} />
        </Card>
      </div>
    );
  }
}

export default CardNature;
