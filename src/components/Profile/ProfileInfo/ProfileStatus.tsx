import React from "react";
import Prealoder from "../../Common/Ptrealoder";

interface Iprops {
    status: string,
    updateStatus: Function,
    isFetching: boolean,




}

interface Istate {
    editMode: boolean,
    status: string,

}



class ProfileStatus extends React.Component <Iprops, Istate> {

    state = {
        editMode: false,
        status: this.props.status,
    };

    activeEditMode() {
        this.setState(
            {editMode: true}
        )
    }

    onStatusChange(e: any) {
        this.setState({status: e.currentTarget.value})
    }

    disableEditMode() {
        this.setState(
            {editMode: false}
        );
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })

        }


    }

    render() {

        if (this.props.status === null) {  // to fix
            return <Prealoder/>
        }

        return (
            <div>

                <div>
                    {this.props.isFetching ? <Prealoder/> : null}
                </div>

                {!this.state.editMode ? <div>
                    <span onDoubleClick={this.activeEditMode.bind(this)}> {this.props.status || "change status"} </span>
                </div> : <div>
                    <input onChange={this.onStatusChange.bind(this)} autoFocus={true}
                           onBlur={this.disableEditMode.bind(this)} value={this.state.status}/>
                </div>
                }

            </div>
        )
    }

}

export default ProfileStatus;
