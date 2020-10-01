import React, { Component } from "react";

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    toggleVisibility = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <div onClick={this.toggleVisibility}>
                {this.props.data.name}
                {this.props.data.categories.map((subCat, i) => {
                    return (
                        <div key={i}>
                            {subCat.name}
                            {subCat.categories.map((subSubCat, i) => {
                                return (
                                    <div key={i}>
                                        {subSubCat.name}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        );
    }
}
