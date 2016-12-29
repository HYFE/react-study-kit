import React from 'react'
import Style from 'less/dropdown'

/**
 * Dropdown Component
 *
 * @export
 * @class Dropdown
 * @extends {React.Component}
 */
export default class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectIndex: 0,
            show: false
        }
    }

    toggle = () => {
        this.setState({ show: !this.state.show })
    }

    onClickItem(item, i) {
        this.setState({
            selectIndex: i,
            show: !this.state.show
        })
        this.props.onChange(item, i)
    }

    render() {
        return (
            <div className={Style.wrap + (this.state.show ? ' ' + Style.in : '')}>
                <button type="button" className={Style.btn} onClick={this.toggle}>{this.props.data[this.state.selectIndex]}</button>
                <ul className={Style.menu}>
                    {
                        this.props.data.map((item, i) => (
                            <li className={Style.item} key={item} onClick={this.onClickItem.bind(this, item, i)}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
