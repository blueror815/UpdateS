import React, { Component, PropTypes, } from 'react';
import { View, TouchableHighlight } from 'react-native';
import Collapsible from 'react-native-collapsible';

/**
 * SportunityAccordion Component
 */
class SportunityAccordion extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    underlayColor: PropTypes.string,
    renderHeader: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    children: PropTypes.node
  }

  static defaultProps = {
    underlayColor: 'rgba(0, 0, 0, 0)',
    collapsed: true
  }

  /**
   * [constructor Component constructor, sets init state]
   */
  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.collapsed,
    };
  }

  /**
   * [_toggleCollapsed Toggle collapsed state]
   */
  _toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed,
    });

    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  /**
   * [render Renders the Component]
   */
  render() {
    const { children, renderHeader, underlayColor, ...collapsibleProps } = this.props;
    return (
      <View>
        <TouchableHighlight
          onPress={() => this._toggleCollapsed()}
          underlayColor={underlayColor}
        >
          <View>
            {renderHeader()}
          </View>
        </TouchableHighlight>
        {
          this.state.collapsed ?
          <View>
            {children}
          </View>
          :
          null
        }
        
      </View>
    );
  }
}

export default SportunityAccordion;
