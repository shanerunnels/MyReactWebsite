import React, { Component } from "react";
import img from "./shanesheadshot.jpg";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Shane Runnels</h2>
            <img src={img} alt="Shane's_headshot" className="shaneImg" />;
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              If you'd like to connect with me, please use one of the contact
              methods to the right.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Montserrat'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/> 
                    615 796 9980
                    </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Montserrat'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    shanerunnels@gmail.com
                    </ListItemContent>
              </ListItem>

            </List>
            </div>

            
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
