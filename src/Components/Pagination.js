import React from 'react'

const Pagination = ({ postsPerPage, totalPosts , change }) => {
    const PageNumber = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        PageNumber.push(i)
    }
    return (
        <div style={{width:"100%"}}>
            <ul className="pagination" style={{width:"70%" ,marginLeft:"13%" ,backgroundColor:'black',listStyleType:'none',textAlign:"center" ,padding:"15px",borderRadius:"10px"}}>
                {
                    PageNumber.map((num) => (

                        <li style={{color:"wheat",display:"inline",padding:"10px 10px"}} key={num} className="page-item">
                            <a style={{textDecoration:"none",fontSize:"20px",color:"white",display:"block",display:"inline"}} onClick={()=>change(num)} href="#" className="page-link">{num}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination
