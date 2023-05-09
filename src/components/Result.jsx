import React from 'react'
import { useState, useEffect } from 'react';
import {GoAlert} from 'react-icons/go'
import {urlFor, client} from '../client';
import './Result.css'
export default function Result(props) {
    const [sdetails1, setSdetails1] = useState([])
    const [sdetails2, setSdetails2] = useState([])
    const [sdetails3, setSdetails3] = useState([])
    const [sdetails4, setSdetails4] = useState([])
    const [sdetails5, setSdetails5] = useState([])
    const hideLink = () => {
        const hide = document.querySelector('.l_main');
        hide.style.position = 'fixed';
      }
    useEffect(() => {
        const query = `*[_type == "main1"]{
          studentImg, studentName,studentNo, studentPass,dob, semester, backlog, email, phno,
          subj1, subj2, subj3, subj4, subj5,
          att1, att2, att3, att4, att5,
          score1, score2, score3, score4, score5 
        }`;
        client.fetch(query) 
        .then((data)=>{ 
        setSdetails1(data)
        console.log(data)
        })
        .catch(console.error); 
      }, []); 
    useEffect(() => {
        const query = `*[_type == "main2"]{
          studentImg, studentName,studentNo, studentPass,dob, semester, backlog, email, phno,
          subj1, subj2, subj3, subj4, subj5,
          att1, att2, att3, att4, att5,
          score1, score2, score3, score4, score5 
        }`;
        client.fetch(query) 
        .then((data)=>{ 
        setSdetails2(data)
        console.log(data)
        })
        .catch(console.error); 
      }, []); 
    useEffect(() => {
        const query = `*[_type == "main3"]{
          studentImg, studentName,studentNo, studentPass,dob, semester, backlog, email, phno,
          subj1, subj2, subj3, subj4, subj5,
          att1, att2, att3, att4, att5,
          score1, score2, score3, score4, score5 
        }`;
        client.fetch(query) 
        .then((data)=>{ 
        setSdetails3(data)
        console.log(data)
        })
        .catch(console.error); 
      }, []); 
    useEffect(() => {
        const query = `*[_type == "main4"]{
          studentImg, studentName,studentNo, studentPass,dob, semester, backlog, email, phno,
          subj1, subj2, subj3, subj4, subj5,
          att1, att2, att3, att4, att5,
          score1, score2, score3, score4, score5 
        }`;
        client.fetch(query) 
        .then((data)=>{ 
        setSdetails4(data)
        console.log(data)
        })
        .catch(console.error); 
      }, []); 
    useEffect(() => {
        const query = `*[_type == "main5"]{
          studentImg, studentName,studentNo, studentPass,dob, semester, backlog, email, phno,
          subj1, subj2, subj3, subj4, subj5,
          att1, att2, att3, att4, att5,
          score1, score2, score3, score4, score5 
        }`;
        client.fetch(query) 
        .then((data)=>{ 
        setSdetails5(data)
        console.log(data)
        })
        .catch(console.error); 
      }, []); 
  return (
    
    <div id='r_main'>
        {sdetails1.map((sdetail1,index)=>
            <div key={index}>
                {props.prop===sdetail1.studentPass && props.prop2===sdetail1.studentNo?   <div><div className="red_login"><a href="#loginn_main" onClick={hideLink}>Re-Login</a></div><div className='r_container'><div className="img">{sdetail1.studentImg && ( <img className='st_img' src={urlFor(sdetail1.studentImg).url()} alt='Pic'/>)}</div><div className="s_details"><div className="s_info">{sdetail1.studentName}<br/>{sdetail1.studentNo}<br/>DOB: {sdetail1.dob}<br/>Email: {sdetail1.email}<br/>Phone No: {sdetail1.phno}<br/>Semester: {sdetail1.semester}<br/>Active Backlog: {sdetail1.backlog}</div>
                 <br/></div>
                <div className="subj"><table>
  <tr>
    <th style={{textAlign: "left"}}>Subject</th>
    <th>Attendance</th>
    <th>Marks</th>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail1.subj1}</td>
    <td>{sdetail1.att1}</td>
    <td>{sdetail1.score1}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail1.subj2}</td>
    <td>{sdetail1.att2}</td>
    <td>{sdetail1.score2}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail1.subj3}</td>
    <td>{sdetail1.att3}</td>
    <td>{sdetail1.score3}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail1.subj4}</td>
    <td>{sdetail1.att4}</td>
    <td>{sdetail1.score4}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail1.subj5}</td>
    <td>{sdetail1.att5}</td>
    <td>{sdetail1.score5}</td>
  </tr>
</table>
</div></div></div>: 
                <div>
                    {sdetails2.map((sdetail2,index)=>
                        <div key={index}>
                            {props.prop===sdetail2.studentPass && props.prop2===sdetail2.studentNo?   <div><div className="red_login"><a href="#loginn_main" onClick={hideLink}>Re-Login</a></div><div className='r_container'><div className="img">{sdetail2.studentImg && ( <img className='st_img' src={urlFor(sdetail2.studentImg).url()} alt='Pic'/>)}</div><div className="s_details"><div className="s_info">{sdetail2.studentName}<br/>{sdetail2.studentNo}<br/>DOB: {sdetail2.dob}<br/>Email: {sdetail2.email}<br/>Phone No: {sdetail2.phno}<br/>Semester: {sdetail2.semester}<br/>Active Backlog: {sdetail2.backlog}</div>
                             <br/></div>
                            <div className="subj"><table>
  <tr>
    <th style={{textAlign: "left"}}>Subject</th>
    <th>Attendance</th>
    <th>Marks</th>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail2.subj1}</td>
    <td>{sdetail2.att1}</td>
    <td>{sdetail2.score1}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail2.subj2}</td>
    <td>{sdetail2.att2}</td>
    <td>{sdetail2.score2}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail2.subj3}</td>
    <td>{sdetail2.att3}</td>
    <td>{sdetail2.score3}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail2.subj4}</td>
    <td>{sdetail2.att4}</td>
    <td>{sdetail2.score4}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail2.subj5}</td>
    <td>{sdetail2.att5}</td>
    <td>{sdetail2.score5}</td>
  </tr>
</table>
</div></div></div>:
                                <div>
                                    {sdetails3.map((sdetail3,index)=>
                                        <div key={index}>
                                            {props.prop===sdetail3.studentPass && props.prop2===sdetail3.studentNo?   <div><div className="red_login"><a href="#loginn_main" onClick={hideLink}>Re-Login</a></div><div className='r_container'><div className="img">{sdetail3.studentImg && ( <img className='st_img' src={urlFor(sdetail3.studentImg).url()} alt='Pic'/>)}</div><div className="s_details"><div className="s_info">{sdetail3.studentName}<br/>{sdetail3.studentNo}<br/>DOB: {sdetail3.dob}<br/>Email: {sdetail3.email}<br/>Phone No: {sdetail3.phno}<br/>Semester: {sdetail3.semester}<br/>Active Backlog: {sdetail3.backlog}</div>
                                             <br/></div>
                                            <div className="subj"><table>
  <tr>
    <th style={{textAlign: "left"}}>Subject</th>
    <th>Attendance</th>
    <th>Marks</th>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail3.subj1}</td>
    <td>{sdetail3.att1}</td>
    <td>{sdetail3.score1}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail3.subj2}</td>
    <td>{sdetail3.att2}</td>
    <td>{sdetail3.score2}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail3.subj3}</td>
    <td>{sdetail3.att3}</td>
    <td>{sdetail3.score3}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail3.subj4}</td>
    <td>{sdetail3.att4}</td>
    <td>{sdetail3.score4}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail3.subj5}</td>
    <td>{sdetail3.att5}</td>
    <td>{sdetail3.score5}</td>
  </tr>
</table>
</div></div></div>: 
                                            <div>
                                                {sdetails4.map((sdetail4,index)=>
                                                    <div key={index}>
                                                        {props.prop===sdetail4.studentPass && props.prop2===sdetail4.studentNo?   <div><div className="red_login"><a href="#loginn_main" onClick={hideLink}>Re-Login</a></div><div className='r_container'><div className="img">{sdetail4.studentImg && ( <img className='st_img' src={urlFor(sdetail4.studentImg).url()} alt='Pic'/>)}</div><div className="s_details"><div className="s_info">{sdetail4.studentName}<br/>{sdetail4.studentNo}<br/>DOB: {sdetail4.dob}<br/>Email: {sdetail4.email}<br/>Phone No: {sdetail4.phno}<br/>Semester: {sdetail4.semester}<br/>Active Backlog: {sdetail4.backlog}</div>
                                                         <br/></div>
                                                        <div className="subj"><table>
  <tr>
    <th style={{textAlign: "left"}}>Subject</th>
    <th>Attendance</th>
    <th>Marks</th>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail4.subj1}</td>
    <td>{sdetail4.att1}</td>
    <td>{sdetail4.score1}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail4.subj2}</td>
    <td>{sdetail4.att2}</td>
    <td>{sdetail4.score2}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail4.subj3}</td>
    <td>{sdetail4.att3}</td>
    <td>{sdetail4.score3}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail4.subj4}</td>
    <td>{sdetail4.att4}</td>
    <td>{sdetail4.score4}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail4.subj5}</td>
    <td>{sdetail4.att5}</td>
    <td>{sdetail4.score5}</td>
  </tr>
</table>
</div></div></div>: 
                                                            <div>
                                                                {sdetails5.map((sdetail5,index)=>
                                                                    <div key={index}>
                                                                        {props.prop===sdetail5.studentPass && props.prop2===sdetail5.studentNo?   <div><div className="red_login"><a href="#loginn_main" onClick={hideLink}>Re-Login</a></div><div className='r_container'><div className="img">{sdetail5.studentImg && ( <img className='st_img' src={urlFor(sdetail5.studentImg).url()} alt='Pic'/>)}</div><div className="s_details"><div className="s_info">{sdetail5.studentName}<br/>{sdetail5.studentNo}<br/>DOB: {sdetail5.dob}<br/>Email: {sdetail5.email}<br/>Phone No: {sdetail5.phno}<br/>Semester: {sdetail5.semester}<br/>Active Backlog: {sdetail5.backlog}</div>
                                                                         <br/></div>
                                                                        <div className="subj"><table>
  <tr>
    <th style={{textAlign: "left"}}>Subject</th>
    <th>Attendance</th>
    <th>Marks</th>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail5.subj1}</td>
    <td>{sdetail5.att1}</td>
    <td>{sdetail5.score1}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail5.subj2}</td>
    <td>{sdetail5.att2}</td>
    <td>{sdetail5.score2}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail5.subj3}</td>
    <td>{sdetail5.att3}</td>
    <td>{sdetail5.score3}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail5.subj4}</td>
    <td>{sdetail5.att4}</td>
    <td>{sdetail5.score4}</td>
  </tr>
  <tr>
    <td style={{textAlign: "left"}}>{sdetail5.subj5}</td>
    <td>{sdetail5.att5}</td>
    <td>{sdetail5.score5}</td>
  </tr>
</table>
</div></div></div>: 
                                                                        <div>
                                                                            <div className="a_icon"><GoAlert/></div>
                                                                            Incorrect Details Entered.
                                                                            <a href="#loginn_main" onClick={hideLink}>Try Again</a>
                                                                        </div>}
                                                                    </div>)}
                                                            </div>}
                                                    </div>)}
                                            </div>}
                                        </div>)}
                                </div>}
                        </div>)}
                </div>}
            </div>)}
    </div>
  )
}
