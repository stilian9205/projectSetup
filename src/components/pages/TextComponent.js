import React from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TextComponent extends React.Component {

    constructor(props) {
        super(props);
        autoBind(this);
    }


    render() {
        return(
            <div>
              Hello
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
    };
};

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextComponent);
