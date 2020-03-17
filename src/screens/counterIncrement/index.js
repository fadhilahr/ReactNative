import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { increment } from '../../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { styles } from './styles';
import CustomHeader from '../../components/customHeader';

class CounterIncrementScreen extends Component {
    render() {
        console.log(this.props.count);
        return (
            <Container>
                <CustomHeader navigation={this.props.navigation} title="Increment" />
                <Content padder>
                    <Card>
                        <CardItem>
                            <Text>
                                {this.props.count}
                            </Text>
                        </CardItem>
                    </Card>
                    <Button bordered info={styles.button} onPress={() => this.props.increment()}>
                        <Text>Increment</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        count: state.count
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ increment: increment }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CounterIncrementScreen);
