import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                // {Workout Tracker}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.squarespace-cdn.com/content/v1/5b92d93c25bf025a114b8fcb/1541472652666-Q3NK2X1AER4ZA5BKSQEJ/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/medical+icon.png?format=300w) center / cover'}}>
                        Workout Tracker
                    </CardTitle>
                    <CardText>
                        As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
                    </CardText>
                    <CardActions border>
                        <Button href="https://shanesworkouttracker.herokuapp.com/" colored>Deployed</Button>
                        <Button href="https://github.com/shanerunnels/Workout-Tracker" colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 1) {
            return(
                // FindAPark
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://library.kissclipart.com/20181004/xie/kissclipart-park-icon-png-clipart-computer-icons-park-73c954dc9cc9b550.png) center / cover'}}>
                        FindAPark
                    </CardTitle>
                    <CardText>
                    This application was created to show the user the various state parks around the country. Most people love the outdoors, but only know about a couple of the beautiful state parks in our country. So this app allows the user to explore unknown (to them) parks. The user can then decide if the particular park they are looking at is worth visiting. This application was created using: HTML, CSS, PureCSS, Javascript, jQuery, Umbrella.js, as well as, utilizing the APIs provided by the National Park Services, and Bing Maps. This was a group project and was a great lesson in learning to work together towards a common goal.
                    </CardText>
                    <CardActions border>
                        <Button href="https://shanerunnels.github.io/FindAPark/" colored>Deployed</Button>
                        <Button href="https://github.com/shanerunnels/FindAPark" colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 2) {
            return(
                // Burger
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://image.freepik.com/free-vector/cute-burger-cartoon-icon-illustration-food-icon-concept-isolated-flat-cartoon-style_138676-1437.jpg) center / cover'}}>
                        Burger
                    </CardTitle>
                    <CardText>
                    An app that utilizes heroku, mysql, and handlebars to populate a list of burgers and then let you devour them by the press of a button.
                    </CardText>
                    <CardActions border>
                        <Button href="https://shane-burger.herokuapp.com/" colored>Deployed</Button>
                        <Button href="https://github.com/shanerunnels/Burger" colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 3) {
            return(
                // music app
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>
                        Music App
                    </CardTitle>
                    <CardText>
                    A social media music platform created with Handlebars, jQuery, Bootstrap, Node.js, NPM, Express.js, Sequelize, mySQL, Passport.js, and Cloudinary. 
                    </CardText>
                    <CardActions border>
                        <Button href="https://patientpuppies.herokuapp.com/" colored>Deployed</Button>
                        <Button href="https://github.com/alixwawa/patientpuppies" colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Workout Tracker</Tab>
                    <Tab>FindAPark</Tab>
                    <Tab>Burger</Tab>
                    <Tab>Music App</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;