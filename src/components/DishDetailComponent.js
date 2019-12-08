import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    render() {

        const comments = this.props.dish && this.props.dish.comments.map((comment) => {
            return (
                <div>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    <br />
                </div>
            );
        });

        return (
            <div class="container">
                {this.props.dish && (
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle heading>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {comments}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default DishDetail;