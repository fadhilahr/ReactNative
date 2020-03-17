import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, View, Spinner, Toast } from 'native-base';
import CustomHeader from '../../components/customHeader.js';
import { RefreshControl } from 'react-native';
import { addBook, findBook } from '../../actions/book';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class bookAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: null,
            publisher: null,
            price: null,
            stock: null
        }
    }

    cancel() {
        this.props.navigation.navigate('BookScreen');
    }

    componentDidMount() {
        if (this.state.id) {
            this.props.findBook(this.state.id)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { book } = this.props;

        if (book && prevProps.book !== book) {
            this.setState(book);
        }

    }

    reload() {
        if (this.state.id) {
            var data = this.props.findBook(this.state.id);
            return data;
        }
    }

    onSubmit() {
        console.log("button berhasil")
        const newData = {
            id: this.state.id,
            title: this.state.title,
            publisher: this.state.publisher,
            price: this.state.price,
            stock: this.state.stock,
        }
        this.props.addBook(newData);
        this.props.navigation.navigate('BookScreen');
    }
    render() {
        const { loading, navigation } = this.props;
        return (
            <Container>
                <CustomHeader disableBackButton="true" navigation={navigation} title="Add Book" />
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
                                value={this.state.price ? "" + this.state.price : ""} />
                        </Item>
                        <Item floatingLabel >
                            <Label>Stock</Label>

                            <Input onChangeText={(stock) => this.setState({ stock })} value={this.state.stock ? "" + this.state.stock : ""} />
                        </Item>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, height: 65 }}>
                            <Button onPress={() => this.onSubmit()} style={{ marginTop: 10, borderRadius: 50, width: 100, alignSelf: 'center', justifyContent: 'center', backgroundColor: '', marginRight: 10 }}>
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

function mapStatetoProps(state) {
    return {
        loading: state.findBook.loading,
        book: state.findBook.data,
        addBook: state.addBook.data,
        error: state.findBook.error



    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addBook, findBook }, dispatch)
}

export default connect(mapStatetoProps, matchDispatchToProps)(bookAdd);
