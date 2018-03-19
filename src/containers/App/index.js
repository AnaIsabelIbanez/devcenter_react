import React, {Component} from 'react';
import {compose} from 'redux';
import {withRouter} from 'react-router';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Button} from 'react-bootstrap';

import Header from '../../common/Header';
import Login from '../Login';
import Product from '../ProductPage';
import Return from '../ReturnPage';
import ReturnLines from '../ReturnLines';
import Modal from '../../components/Modal';
import {getUser, getModalOptions} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import reducer from './reducer/rootReducer';
import {hideModal, showError} from './actions';
import {getLiteral} from '../../utils/utilities';

class App extends Component {

    render() {
        const {user, modals, hideModal} = this.props;
        return (
            <div>
                <Header/>
                <div>
                    {modals.modals.map((modalOpt, index) => {
                        return (<Modal key={index} hideModal={hideModal} {...modalOpt} />);
                    })}
                    <Button
                        onClick={() => this.props.history.push('/product')}
                    >{getLiteral('product.products')}
                    </Button>
                    <Button
                        onClick={() => this.props.history.push('/return')}
                    >{getLiteral('return.returns')}
                    </Button>
                    <Button>
                        {getLiteral('inboundQuality.inboundQuality')}
                    </Button>
                    <Switch>
                        {/*{!user && <Route exact path="/product" render={() => (<Redirect to="/"/>)}/>}*/}
                        {/*{!user && <Route exact path="/" component={Login}/>}*/}
                        {/*{user && <Route exact path="/" render={() => (<Redirect to="/product"/>)}/>}*/}
                        {!user && <Route exact path="/" render={() => (<Redirect to="/product"/>)}/>}
                        {!user && <Route path="/product" component={Product}/>}
                        {!user && <Route exact path="/return" component={Return}/>}
                        {!user && <Route exact path="/return/:id" component={ReturnLines}/>}
                    </Switch>
                </div>
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    user: getUser(),
    modals: getModalOptions()
});

const mapDispatchToProps = {
    hideModal,
    showError
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'global', reducer});

export default withRouter(compose(
    withReducer,
    withConnect
)(App));

