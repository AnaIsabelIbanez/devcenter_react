import React, {Component} from 'react';
import {compose} from 'redux';
import {withRouter} from 'react-router';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Header from '../../common/Header';
import Login from '../Login';
import Product from '../ProductPage';
import BarcodePage from '../ProductPage/BarcodePage';
import Return from '../ReturnPage';
import ReturnLines from '../ReturnLines';
import Modal from '../../components/Modal';
import {getUser, getModalOptions, getActiveTab} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import reducer from './reducer/rootReducer';
import {hideModal, showError, changeActiveTab} from './actions';
import {getLiteral} from '../../utils/utilities';
import DetailLinePage from '../DetailLinePage';

class App extends Component {

    constructor(props) {
        super(props);
        this.props.changeActiveTab(this.props.location.pathname.substring(1));
    }

    render() {
        const {user, modals, hideModal, activeTab, changeActiveTab} = this.props;
        return (
            <div>
                <Header match={this.props.match} history={this.props.history} changeActiveTab={changeActiveTab} activeTab={activeTab} />
                <div className="main-body">
                    {modals.modals.map((modalOpt, index) => {
                        return (<Modal key={index} hideModal={hideModal} {...modalOpt} />);
                    })}
                    <Switch>
                        {/*{!user && <Route exact path="/product" render={() => (<Redirect to="/"/>)}/>}*/}
                        {/*{!user && <Route exact path="/" component={Login}/>}*/}
                        {/*{user && <Route exact path="/" render={() => (<Redirect to="/product"/>)}/>}*/}
                        {!user && <Route exact path="/" render={() => {changeActiveTab('product'); return (<Redirect to="/product"/>); }}/>}
                        {!user && <Route exact path="/product" component={Product}/>}
                        {!user && <Route exact path="/product/:id" component={Product}/>}
                        {!user && <Route exact path="/return" component={Return}/>}
                        {!user && <Route exact path="/return/:id" component={ReturnLines}/>}
                        {!user && <Route exact path="/line/:id" component={DetailLinePage}/>}
                        {!user && <Route exact path="/barcode/:id" component={BarcodePage}/>}
                    </Switch>
                </div>
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    user: getUser(),
    modals: getModalOptions(),
    activeTab: getActiveTab()
});

const mapDispatchToProps = {
    hideModal,
    showError,
    changeActiveTab
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'global', reducer});

export default withRouter(compose(
    withReducer,
    withConnect
)(App));

