import React, { Component } from 'react';

class Course extends Component {
    render () {
        return (
                <div>
                    {console.log(this.props.params)}
                    <h1>{this.props.match.params.title}</h1>
                    <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
                </div>
        );
    }
}

export default Course;