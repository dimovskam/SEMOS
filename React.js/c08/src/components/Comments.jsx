import React,{useState,useEffect} from "react";
import axios from "axios"; 

export const Comments = () => {
    const [comments,SetComments] = useState([])

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res=>SetComments(res.data))
        .catch(err=>alert(err.message))
    }),[]

    return(
        <div id='comments'>
            <table border={1}>
                <thead>
                    <tr>
                        <th>PostId</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(comm=>{
                        return(
                            <tr key={comm.id}>
                                <td>{comm.postId}</td>
                                <td>{comm.id}</td>
                                <td>{comm.name}</td>
                                <td>{comm.email}</td>
                                <td>{comm.body.substring(0,100)}...<Link to={`/comment/${comm.id}`}>More</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}