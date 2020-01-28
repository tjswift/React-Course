import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

import './Courses.css';
import Course from '../Course/Course'

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (           
                <div>
                    <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">
                        {
                            this.state.courses.map( course => {
                                return (
                                    <div>
                                        <Link key={course.id}  to={this.props.match.url + '/' + course.title + '/' + course.id}>
                                            <article className="Course">{course.title}</article>
                                        </Link>                             
                                    </div>       
                                );
                            })
                        }         
                    </section>
                    <Route path="/courses/:title/:courseId" component={Course}/> 
                </div>
        );
    }
}

export default Courses;