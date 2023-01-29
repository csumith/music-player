import React,{useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate';

import { NavLink } from 'react-router-dom';

const Artist = (props) => {

    const [curItem,setCurItem]= useState([])
    const [pCount,setpCount]= useState(0);
    const [off,setOff] = useState(0);

    useEffect(()=>{
        const endoff = off + props.pageCount;
        setpCount(Math.ceil(props.artistInfo.length/props.pageCount)) // for next and previous
        setCurItem(props.artistInfo.slice(off,endoff))


    },[off,props.pageCount,props.artistInfo])

    const handleClick=(event,value)=>{
        const newoff = (event.selected*props.pageCount) % props.artistInfo.length;
        // key 0 = ; 0*6 % 20 ; state = 0 ,setoff(0) =  (0,6)
        // key 1 (2 page event) ; 1*6 % 20 ;state =6 ; setoff(6) = (6,12)
        // key 2 (3 page event) ; 2*6 % 20 ; state =12; setOff(12) ,(12,18)
 
        setOff(newoff)                                        
    }
  return (
    <div className='row'>
        <div className="col-md-12">
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Genres</th>
                            <th>Popularity</th>
                            <th>Followers</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            curItem && curItem.map((item,index)=>{
                                let {id,name,type,genres,popularity,followers}=item;
                                return(
                                    <tr className='text-center' key={index}>
                                        <td>{name}</td>
                                        <td>{type}</td>
                                        <td>{
                                           genres.map((item,index)=>{
                                                   return <span key ={index} className="badge bg-success">{item}</span>
                                           })
                                        }</td>

                                        <td>{popularity}</td>
                                        <td>{followers.total}</td>
                                        <td><NavLink to={`/tracks/${id}`} className="btn btn-warning">Tracks</NavLink></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="6">
                                <ReactPaginate
                                                pageCount={pCount}
                                                className={"pagination"}
                                                pageClassName={"page-item"}
                                                pageLinkClassName={"page-link"}
                                                previousClassName={"page-item"}
                                                previousLinkClassName={"page-link"}
                                                nextClassName = {"page-item"}
                                                nextLinkClassName={"page-link"}
                                                activeClassName  ={"active"}
                                                activeLinkClassName={"active"}
                                                onPageChange={handleClick}
                          
                                   
                                   />
                            </td>
                        </tr>
                      
                    </tfoot>
                </table>
            </div>
        </div>
        
    </div>
  )
}

export default Artist
