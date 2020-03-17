import React, { Component } from 'react';
import { Container, Content, Text, Body, ListItem, Toast, List, Right, Button, Icon, Fab, View, Left } from 'native-base';
import CustomHeader from '../../components/customHeader';
import { findAllBooks, deleteBook, saveBook, addBook } from '../../actions/book';
import { RefreshControl, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class BookScreen extends Component {


    componentDidMount() {
        this.reload();
    }

    componentDidUpdate(prevProps, prevState) {
        const { error, saveBook, deleteBook, addBook } = this.props;
        if ((saveBook && prevProps.saveBook !== saveBook) ||
            (deleteBook && prevProps.deleteBook !== deleteBook) ||
            (addBook && prevProps.addBook !== addBook)) {
            this.reload();
        } else if (error && prevProps.error !== error) {
            Toast.show({
                text: error.message,
                buttonText: "Ok",
                type: "danger"
            })
        }
    }
    reload() {
        this.props.findAllBooks();
    }

    showDetail(id) {
        this.props.navigation.navigate('BookDetail', { id });
    }

    addBook() {
        this.props.navigation.navigate('AddBook')
    }

    delete(data) {
        Alert.alert(
            'Confirmation',
            'Delete member with name \'' + data.title + '\'?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        this.props.deleteBook(data.id);
                        this.reload();
                    }
                }
            ]
        )
    }


    renderListItem(data, index) {
        return (
            <ListItem key={'item-' + index} onPress={() => this.showDetail(data.id)}>
                <Left >
                    <Icon type="FontAwesome5" name='book' style={{ color: '#334BFF' }} ></Icon>
                </Left>
                <Body>
                    <Text style={{ left: -100 }}>{data.title}</Text>
                </Body>
                <Right>
                    <Icon onPress={() => this.delete(data)} type="FontAwesome5" name="trash" style={{ color: '#ff5261' }}></Icon>
                </Right>

            </ListItem>
        )

    }

    render() {
        const { error, loading, navigation } = this.props;
        return (
            <Container>
                <CustomHeader navigation={this.props.navigation} title="book" />
                <Content

                    refreshControl={<RefreshControl refreshing={this.props.loading} onRefresh={() => this.reload()} />}
                >
                    {this.props.books.map((data, index) => this.renderListItem(data, index))}
                </Content>
                <View style={{ flex: 1 }}>
                    <Fab

                        style={{ backgroundColor: '#5067FF' }}
                        direction="up"
                        position="bottomRight"
                        onPress={() => { this.addBook() }}>
                        <Icon name="add" />
                    </Fab>
                </View>

            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        loading: state.findAllBooks.loading,
        books: state.findAllBooks.data,
        error: state.findAllBooks.error,
        saveBook: state.saveBook.data,
        addBook: state.addBook.data,
        deleteBook: state.deleteBook.data
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ findAllBooks, deleteBook }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(BookScreen);
