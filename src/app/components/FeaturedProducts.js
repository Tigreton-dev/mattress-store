import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const FeaturedProducts = (props) => {
    return (
        <div className="Featured-card">
            <Card>
                <CardImg top width="100%" src="https://img4882.weyesimg.com/uploads/www.springmattressfactory.com/images/153985301300120.png" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default FeaturedProducts;