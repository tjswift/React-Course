import React, {Component} from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
    return class (props) => {
        return (
            <Aux>
                <Modal show={}>Something didn't work...</Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    };
};

export default withErrorHandler;
