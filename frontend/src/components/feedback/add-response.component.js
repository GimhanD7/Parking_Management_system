import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

import { Rating } from 'react-simple-star-rating'
import jsPDF from "jspdf";
import "jspdf-autotable";
import './res.styles.css'
// import { useHistory } from 'react-router';

export default function AddResponse() {

    const [course, setCourse] = useState('');
    const [student, setStudent] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    const [response, setResponse] = useState('');

    const [APIData, setAPIData] = useState([]);
   
    const [id, setID] = useState(null);

    useEffect(() => {
        console.log("Update feedback is" + localStorage.getItem('Feedback'));
        setID(localStorage.getItem('ID'))
        setCourse(localStorage.getItem('Course'));
        setStudent(localStorage.getItem('Student'));
        setRating(localStorage.getItem('Rating'));
        setFeedback(localStorage.getItem('Feedback'));
        setResponse(localStorage.getItem('Response'));
        console.log("Update feedback id" + setID(localStorage.getItem('ID')));

    }, []);

    const addResponse = () => {

        const feedbacks = {
            course: course,
            student: student,
            rating: rating,
            feedback: feedback,
            response: response
        }

        console.log(feedbacks);

        axios.put(`http://localhost:5000/feedback/response/${id}`, feedbacks)
            .then(res => {

                console.log(res);
                if (course.length < 3) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Attention',
                        text: 'Course Name is too short!!',
                        background: '#fff',
                        confirmButtonColor: '#eb4034',
                        confirmButton: true,
                        iconColor: '#60e004',
                        closeOnConfirm: true,

                    })

                } else if (student.length < 3) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Attention',
                        text: 'Student Name is too short!!',
                        background: '#fff',
                        confirmButtonColor: '#eb4034',
                        confirmButton: true,
                        iconColor: '#60e004',
                        closeOnConfirm: false,
                        timer: 2800000
                    })
                } else if (rating <= 0 || rating > 5) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Attention',
                        text: 'Invalid Rating Value!!',
                        background: '#fff',
                        confirmButtonColor: '#eb4034',
                        confirmButton: true,
                        iconColor: '#60e004',
                        closeOnConfirm: false,
                        timer: 2800000
                    })
                }
                else if (feedback.length <= 5) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Attention',
                        text: 'Feedback can not be shorter than 5 characters!!',
                        background: '#fff',
                        confirmButtonColor: '#eb4034',
                        confirmButton: true,
                        iconColor: '#60e004',
                        closeOnConfirm: false,
                        timer: 2800000
                    })
                } else if (response.length <= 5) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Attention',
                        text: 'Response can not be shorter than 5 characters!!',
                        background: '#fff',
                        confirmButtonColor: '#eb4034',
                        confirmButton: true,
                        iconColor: '#60e004',
                        closeOnConfirm: false,
                        timer: 2800000
                    })
                }else {

                    if (res.status === 200) {

                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Response has been added!!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#60e004'
                        })


                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Error in adding!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#e00404'
                        })
                    }
                }
            })

    }

    const exportFeedbacks = () => {
        console.log("Export PDF");
      
        const unit = "pt";
        const size = "A3";
        const orientation = "portrait";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
      
        const title = "Feedback List Report";
      
        // Add the company header
        const companyHeader = "Company Name";
        doc.setFontSize(16);
        doc.text(companyHeader, marginLeft, 40);
      
        // Add the title
        doc.setFontSize(20);
        doc.text(title, marginLeft, 70);
      
        // Add the feedback information
        const feedbackInfo = `Section number: ${course}\n Vehicle Number: ${student}\n Add Time: ${feedback}\n Payment: ${response}`;
        doc.setFontSize(12);
        doc.text(feedbackInfo, marginLeft, 100);
      
        doc.save("Vehicle-Report.pdf");
      };
      
    
      

    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }

    return (
        <div className="flex flex-col px-5 pt-2 ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className='items-center overflow-hidden'>
                        <div className=''>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' >
                                    <div class="">
                                        <p className='text-4xl font-semibold text-black uppercase'>Pay Bill</p>
                                        <div class="">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-black'>Vehicle Add Section</label>
                                            <input
                                                type="text"
                                                required
                                                className="form-control "
                                                value={course}
                                                readOnly
                                                onChange={(e) => setCourse(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-black'>Vehicle Number</label>
                                            <input
                                                type="text"
                                                required
                                                className="form-control"
                                                value={student}
                                                readOnly
                                                onChange={(e) => setStudent(e.target.value)}
                                            />
                                        </div><p />

                                        <div className="form-group">
                                            {/* <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Rate Here</label>

                                                <Rating

                                                    onClick={handleRating}
                                                    ratingValue={rating}
                                                    size={30}
                                                    label
                                                    vertical
                                                    readonly
                                                    transition
                                                    fillColor='orange'
                                                    emptyColor='gray'
                                                // Will remove the inline style if applied
                                                />{rating}


                                            </div> */}
                                            <div class="">
                                                <label className='block  mb-2 text-lg font-medium text-gray-900 dark:text-black' >Vehicle Add Time</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={feedback}
                                                    readOnly
                                                    onChange={(e) => setFeedback(e.target.value)}
                                                />
                                            </div>
                                        </div><p />

                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-black'>Fee</label>
                                            
                                                <select
                                                type="text"
                                                required
                                                className="form-control "
                                                onChange={(e) => setResponse(e.target.value)}
                                                
                                            >
                                                 <option>Select From Here</option>
                                                <option>1H - Rs.50/=</option>
                                                <option>2H - Rs.100/=</option>
                                                <option>3H - Rs.150/=</option>
                                                <option>4H - Rs.200/= </option>
                                                <option>5H - Rs.250/=</option>
                                                <option>5H - 10H - Rs.500/=</option>
                                            </select>
                                            

                                        </div><p />

                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 button button button-success button-large' type="submit" value="Pay" onClick={addResponse} />

                                            
                                        </div>
                                        <div>                                           
                                        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " onClick={() => exportFeedbacks()}>Generate Report</button>




</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}