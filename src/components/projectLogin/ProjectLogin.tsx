import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import './ProjectLogin.css';
import { v4 as uuidV4 } from 'uuid'

export const ProjectLogin = ({onIdSubmit} : {onIdSubmit :( value: string )=> void}) => {
  
  const projectRef: any = useRef();

  const handleSubmit = (e: any)=>{
    // any because w have two event MouseEventHandler<HTMLElement> | FormEventHandler<HTMLFormElement>
      e.preventDefault();
     onIdSubmit(projectRef.current?.value)
 }

 const createNewTodo = () => {
     onIdSubmit(uuidV4())
 }

 return (
     <div className={"login"}>
         <div className={"login__container"}>
             <div className={"login__box"}>
                 <Form onSubmit={handleSubmit}>
                     <div className={"login__header"}>
                         <div className={"login__subtitle"}>
                                 Welcome to
                         </div>
                         <div>
                             TODO REACT Template
                         </div>
                     </div>

                  
                     <Form.Group >
                         
                         <Form.Control 
                             type='text' 
                             ref={projectRef} 
                             placeholder="your project id" 
                             required
                         />
                         
                     </Form.Group>

                     <Button 
                         onClick={handleSubmit} 
                         className="btn btn-primary mr-2 btn-block mt-3"
                     >
                             Next
                     </Button>
                     <Button 
                         onClick={createNewTodo} 
                         variant='secondary' 
                         className="btn-block mt-3"
                     >
                         Create your project
                     </Button>

                 </Form>
             </div>
         </div>
         
        
     </div>
 )
}
