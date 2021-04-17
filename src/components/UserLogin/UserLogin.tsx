import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./UserLogin.css";
interface UserLoginProps {
  id: string | number | null;
  onNameSubmit: any;
}

export const UserLogin = ({ id, onNameSubmit }: UserLoginProps) => {
  const nameRef = useRef<any>();
  const history = useHistory();

  const handleSubmit = (e: any) => {
    //React.MouseEventHandler<HTMLElement> | undefined
    e.preventDefault();

    onNameSubmit(nameRef.current!.value);
    //setName(nameRef.current.value)
    history.push("/todo");
  };

  return (
    <div className={"login"}>
      <div className={"login__container"}>
        <div className={"login__box"}>
          <Form onSubmit={handleSubmit}>
            <div className={"login__header"}>
              <div className={"login__TITLE"}>TODO REACT</div>
              <div className={"login__subtitle"}>
                project id: <br />
                <span className={"login__subtitle__id"}>{id}</span>
              </div>
            </div>

            <Form.Group>
              <Form.Control
                type="text"
                ref={nameRef}
                placeholder="your name"
                required
              />
            </Form.Group>

            <Button
              onClick={handleSubmit}
              className={`btn btn-primary mr-2 btn-block mt-3`}
            >
              Log in
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
