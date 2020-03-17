import React, { Component } from 'react';
import { Header, Body, Button, Title, Left, Icon } from 'native-base';
import PropTypes from 'prop-types';



class CustomHeader extends Component {


    render() {
        const { navigation } = this.props;
        return (
            <Header>
                <Left>
                    {this.props.disableBackButton ?


                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                        :

                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>


                    }
                </Left>
                <Body>
                    <Title> {this.props.title}</Title>
                </Body>
            </Header>
        );
    }
    static propTypes = {
        disableBackButton: PropTypes.bool,
        title: PropTypes.string,
        navigation: PropTypes.object
    }


}

export default CustomHeader;