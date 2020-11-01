import React from 'react'
import {Card,Button} from 'react-bootstrap'


class AboutCard extends React.Component{


render()
{
return (<div>
<Card style={{ width: '15rem' ,"margin-bottom":"5%"}}>
  <Card.Img variant="top" style={{"width":"50%","margin":"auto"}} src={this.props.profileinfo.img} />
  <Card.Body>
    <Card.Title>{this.props.profileinfo.name}</Card.Title>
    <h1>testing</h1>
    <Card.Text>
     {this.props.profileinfo.Role}
    </Card.Text>
    <a href={this.props.profileinfo.linkedin} target="_blank"><Button variant="primary">Linkedin</Button></a>
  </Card.Body>
</Card>
</div>)
}

}

export default AboutCard;