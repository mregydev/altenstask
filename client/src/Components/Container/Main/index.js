import React from 'react'

import CarList from '../CarListViewer/'

import Messages from '../../Messages'

import { Translate, GitHub } from '@material-ui/icons';

import { Toolbar, AppBar, Select, MenuItem, Container, Tooltip } from '@material-ui/core';

import styles from './styles.module.css'


export default class MainComp extends React.Component {

    constructor(props) {
        super(props)

        this.props.fetchCars()
    }

    render() {

        return (
            <React.Fragment>
                <AppBar >
                    <Toolbar disableGutters={true} variant='dense' >
                        <a className={styles.githubLnk} href='https://github.com/mregydev/altenstask'><GitHub /></a>
                        <span className={styles.langSelect}>
                            <Select
                            className={styles.select}
                                renderValue={(value, item) => <span className={styles.langItem}> <Translate /><span>{Messages[this.props.lang][value]}</span></span>}
                                autoWidth={true}
                                inputProps={{
                                    classes: {
                                        icon: styles.icon,
                                   
                                    },
                                }}
                                value={this.props.lang}
                                onChange={(event) => this.props.changeLanguage(event.target.value)}
                            >
                                <MenuItem value={'En'}>{Messages[this.props.lang]['En']}</MenuItem>
                                <MenuItem value={'Sw'}>{Messages[this.props.lang]['Sw']}</MenuItem>
                            </Select>

                        </span>

                    </Toolbar>
                </AppBar>
                <Toolbar variant='dense' />

                <Container className={styles.App}>
                    <CarList errorFetch={this.props.errorFetch} isLoading={this.props.isLoading} lang={this.props.lang} data={this.props.cars}></CarList>
                </Container>
            </React.Fragment>
        );
    }
}

