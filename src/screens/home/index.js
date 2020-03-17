import React, { Component } from 'react';
import { Container, Content, Text, Header, Body, Button, Title, Left, Icon, View } from 'native-base';
import CustomHeader from '../../components/customHeader';
import { ImageBackground } from 'react-native';
import { findAllBooks } from '../../actions/book';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class HomeScreen extends Component {
    componentDidMount() {
        this.props.findAllBooks();
    }

    render() {
        console.log(this.props.books);

        return (
            <Container>
                <CustomHeader navigation={this.props.navigation} title="Home" />
                <Content>

                    <ImageBackground
                        source={require("../../assets/enigma-logo.png")}
                        style={{
                            height: 150,
                            width: 350,
                            justifyContent: "center",
                            alignItems: "center"

                        }}>

                    </ImageBackground>


                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        books: state.findAllBooks.data,
        error: state.findAllBooks.error
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ findAllBooks }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(HomeScreen);
