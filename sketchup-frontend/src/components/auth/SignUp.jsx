// import React from 'react'
// import { Form } from 'semantic-ui-react'
// import { useState } from 'react'
// import { useHistory } from 'react-router'


// export function SignUp(){
 
//     let history = useHistory()

//     const [user, signUpUser] = useState({
//         username: '',
//         password: '',
//         signup_errors: ''
//     })

//     function handleChange(e){
//         console.log(e)
//         signUpUser({
//             [e.target.name]: e.target.value
//         })
//     }

//     //try => catch 
//     function handleSubmit(e){
//         e.preventDefault()
//         console.log("submitted!")
//     }
//         let response = await fetch('http://localhost:3000/login', {
//           credentials: 'include',
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//               'Accept': 'application/json'
//           },
//           body: JSON.stringify({
//               username: e.target.username.value,
//               password: e.target.password.value
//           })
//       })
//       let { success, id } = await response.json()
//       if(success){
//           history.push(`/users/${id}`)
//           console.log("i am logged in as ", user)
//       }else {
//           console.log("This is an invalid user")
//       }
//     }
       
//     return (
//         <div>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group>
//               <Form.Input
//                 placeholder='Username'
//                 name='username'
//                 // value={username}
//                 onChange={handleChange}
//               />
//               <Form.Input
//                 placeholder='Password'
//                 name='password'
//                 // value={password}
//                 onChange={handleChange}
//               />
//               <Form.Button content='Submit' />
//             </Form.Group>
//           </Form>
//           {/* <strong>onChange:</strong> */}
//           {/* <pre>{JSON.stringify({ username, password }, null, 2)}</pre> */}
//           {/* <strong>onSubmit:</strong> */}
//           {/* <pre>{JSON.stringify({ submittedUsername, submittedPassword }, null, 2)}</pre> */}
//         </div>
//       )
//   }
  
  

// export default SignUp