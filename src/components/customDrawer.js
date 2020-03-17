import React, { Component } from 'react';
import { Body, Container, Content, Icon, Left, ListItem, Text } from 'native-base';
import { ImageBackground } from 'react-native';



const menuItem = [
    {
        icon: 'home',
        label: 'Home',
        target: 'Home'
    },

    {
        icon: 'add-circle',
        label: 'Counter Increment',
        target: 'CounterIncrement'
    },

    {
        icon: 'remove-circle',
        label: 'Counter Decrement',
        target: 'CounterDecrement'
    },
    {
        icon: 'book',
        label: 'Book',
        target: 'Book'
    },


];

class CustomDrawer extends Component {

    closeDrawer = () => {
        this.props.navigation.closeDrawer();
    };

    openDrawer = () => {
        this.props.navigation.openDrawer();
    };

    navigate = (target) => {
        this.props.navigation.navigate(target);
        this.closeDrawer();
    }

    renderListItem(data, index) {
        return (
            <ListItem key={'item' + index} Icon onPress={() => this.navigate(data.target)}>
                <Left>
                    <Icon active name={data.icon} />
                </Left>
                <Body>
                    <Text style={{ left: -100 }}>{data.label}</Text>
                </Body>
            </ListItem>
        )

    }
    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground
                        source={require("../assets/drawer.jpeg")}
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"

                        }}>

                    </ImageBackground>
                    {menuItem.map((item, index) => this.renderListItem(item, index))}
                </Content>
            </Container>
        );
    }

}
export default CustomDrawer;