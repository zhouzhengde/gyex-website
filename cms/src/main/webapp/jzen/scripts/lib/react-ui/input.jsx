/*
 * Copyright (c) 2015. Bond(China), java freestyle app
 */

define(['jquery', 'react', 'bootstrap'], function ($, React, bootstrap) {

    var Input = React.createClass({

        propTypes: {
            id: React.PropTypes.string,
            label: React.PropTypes.string,
            name: React.PropTypes.string.isRequired,
            value: React.PropTypes.string,
            tips: React.PropTypes.string,
            type: React.PropTypes.string
        },

        getInitialState: function () {
            return {
                value: this.props.value,
                defaultValue: this.props.tips
            }
        },

        componentDidMount: function () {
            if (this.isMounted()) {
                if (!this.state.value || this.state.value == '') {
                    $('[name=' + this.props.name + ']').addClass("default");
                    this.setState({
                        value: this.state.defaultValue
                    });
                }
            }
        },

        onchange: function (event) {
            this.setState({
                value: event.target.value
            });
            this.props.onchange.apply(this, arguments);
        },

        onfocus: function (event) {
            if (this.isMounted()) {
                if (this.state.defaultValue == event.target.value) {
                    $(event.target).removeClass("default");
                    this.setState({
                        value: ""
                    });
                }
            }
        },

        onblur: function (event) {
            if (this.isMounted()) {
                if (!event.target.value) {
                    $(event.target).addClass("default");
                    this.setState({
                        value: this.state.defaultValue
                    });
                }
            }
        },

        render: function () {

            return (
                <div className="input">
                    <span className="input-lbl">
                        <label >{this.props.label}</label>
                    </span>
                    <span className="input-area">
                        <input type={this.props.type}
                               name={this.props.name}
                               id={this.props.id}
                               defaultValue={this.state.value}
                               value={this.state.value}
                               onChange={this.onchange.bind(this)}
                               onFocus={this.onfocus.bind(this)}
                               onBlur={this.onblur.bind(this)}/>
                    </span>
                </div>
            )
        }
    });
    return Input;
});