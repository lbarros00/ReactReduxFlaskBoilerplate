import React, { Component } from "react";
import { connect } from "react-redux";
import { myAction } from "./actions/myAction";

class Test extends Component {
    componentWillMount() {
        this.props.myAction();
    }

    render() {
        return(
            <div>
                <p>{this.props.name.hello}</p>
            </div>
        );
    }
}

function bindAction(dispatch) {
    return {
        myAction: () => dispatch(myAction()),
    }
}
const mapStateToProps = state => ({
    name: state.myReducer.myProperty
});

export default connect(mapStateToProps, bindAction)(Test);