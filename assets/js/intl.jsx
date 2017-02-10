import React from 'react';
import ReactDOM from 'react-dom';

import {IntlProvider, addLocaleData, FormattedMessage} from 'react-intl';
import ja from 'react-intl/locale-data/ja';
import de from 'react-intl/locale-data/de';

import {messages} from './messages';

addLocaleData([...ja, ...de]);

class IntlSample extends React.Component {
    state = {
        locale: 'en',
    }

    render() {
        return(
            <IntlProvider locale={this.state.locale}
                          messages={messages[this.state.locale]}>
                <App onSelectLocale={this.selectLocale.bind(this)} />
            </IntlProvider>
        );
    }

    selectLocale(locale) {
        this.setState({locale: locale});
    }
}

class App extends React.Component {
    static propTypes = {
        onSelectLocale: React.PropTypes.func.isRequired,
    }

    state = {
        number: 1,
    }

    render() {
        return(
            <div>
            <div>
                <select onChange={this.selectLocale.bind(this)}>
                    <option value="en">en</option>
                    <option value="ja">ja</option>
                    <option value="de">de</option>
                </select>
                <select onChange={this.selectNumber.bind(this)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="1000">1000</option>
                    <option value="1000000">1000000</option>
                </select>
            </div>
            <div>
                <FormattedMessage id={"top.greeting"} values={{num: this.state.number}}/>
            </div>
            <div>
                <FormattedMessage id={"top.question"} />
            </div>
            </div>
        );
    }

    selectLocale(event) {
        this.props.onSelectLocale(event.target.value);
    }

    selectNumber(event) {
        this.setState({number: event.target.value});
    }
}
ReactDOM.render(<IntlSample />, document.getElementById('intl'));
