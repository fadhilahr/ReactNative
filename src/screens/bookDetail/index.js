import React, { Component } from 'react';
import { Container, Content, Text, Form, Input, Item, Label, View, Button, Body, ListItem, List, Toast } from 'native-base';
import { RefreshControl } from 'react-native';
import CustomHeader from '../../components/customHeader';
import { findBook, saveBook } from '../../actions/book';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class BookDetailScreen extends Component {

    constructor(props) {
        super(props);

        const { navigation } = this.props;
        this.state = {
            id: navigation.getParam('id'),
            title: null,
            publisher: null,
            price: null,
            stock: null
        }
    }



    componentDidMount() {
        this.reload();
    }

    componentDidUpdate(prevProps, prevState) {
        const { error, bookById } = this.props;

        if (bookById && prevProps.bookById !== bookById) {
            this.setState({
                id: bookById.id,
                title: bookById.title,
                publisher: bookById.publisher,
                price: bookById.price,
                stock: bookById.stock
            });
        } else if (error && prevProps.error !== error) {
            error && Toast.show({
                text: error.message,
                buttonText: "Ok",
                type: "danger"
            })
        }
    }

    update() {
        const data = {
            id: this.state.id,
            title: this.state.title,
            publisher: this.state.publisher,
            price: this.state.price,
            stock: this.state.stock,

        }
        this.props.saveBook(data.id, data);
        this.props.navigation.navigate('BookDetail');
    }

    reload() {
        this.props.findBook(this.state.id);
    }

    cancel() {
        this.props.navigation.navigate('BookDetail');
    }

    render() {
        console.log(this.props.bookById)
        const { bookById, navigation } = this.props;
        var data = bookById || {};
        return (
            <Container>
                <CustomHeader navigation={navigation} title="Detail" disableBackButton="true" />
                <Content padder refreshControl={<RefreshControl refreshing={this.props.loading} onRefresh={() => this.reload} />}>
                    <Form>
                        <Item floatingLabel >
                            <Label>Id</Label>
                            <Input
                                onChangeText={(id) => this.setState({ id })}
                                value={this.state.id ? "" + this.state.id : ''}
                            />
                        </Item>
                        <Item floatingLabel >
                            <Label>Book Title</Label>
                            <Input
                                onChangeText={(title) => this.setState({ title })}
                                value={this.state.title}
                            />
                        </Item>
                        <Item floatingLabel >
                            <Label>Book Publisher</Label>
                            <Input
                                onChangeText={(publisher) => this.setState({ publisher })}
                                value={this.state.publisher}
                            />
                        </Item>
                        <Item floatingLabel >
                            <Label>Price</Label>
                            <Input
                                onChangeText={(price) => this.setState({ price })}
                                value={"" + this.state.price} />
                        </Item>
                        <Item floatingLabel >
                            <Label>Stock</Label>
                            <Input value={"" + this.state.stock} />
                        </Item>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, height: 65 }}>
                            <Button onPress={() => this.update()} style={{ marginTop: 10, borderRadius: 50, width: 100, alignSelf: 'center', justifyContent: 'center', backgroundColor: '', marginRight: 10 }}>
                                <Text>Save</Text>
                            </Button>
                            <Button onPress={() => this.cancel()} style={{ marginTop: 10, borderRadius: 50, width: 100, alignSelf: 'center', justifyContent: 'center', backgroundColor: '' }}>
                                <Text>Cancel</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.findBook.loading,
        bookById: state.findBook.data,
        error: state.findBook.error,
        saveBook: state.saveBook.data
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ findBook, saveBook }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(BookDetailScreen);

