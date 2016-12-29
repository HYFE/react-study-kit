import React from 'react'
import Dropdown from 'components/dropdown'

/**
 * 无状态组件
 *
 * @param {any} props
 */
const ShowCity = props => <span> 你选择了：{props.item}</span>

/**
 * 组合组件
 *
 * @export
 * @class App
 * @extends {React.Component}
 */
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectItem: '河南省',
            data: ['河南省', '河北省', '湖南省', '湖北省']
        }
    }

    onSelected = (item) => {
        this.setState({ selectItem: item })
    }

    render() {
        return (
            <div>
                <Dropdown data={this.state.data} onChange={this.onSelected} />
                <ShowCity item={this.state.selectItem} />
            </div>
        )
    }
}
