import React from 'react';
import './App.css'
import First from './components/first'
import Second from './components/second';
import Third from './components/third';
import Card from './components/card';
import Repetition from './components/repetition';
import Conditional from './components/conditional';

export default (props) =>
    <div className="App">
        <Card headerContent="Primeiro exercício" footerContent="footer" bodyContext="Exercício um"></Card>
        <Card headerContent="Segundo exercício" footerContent="footer">
            <First></First>
        </Card>

        <Card headerContent="Terceiro exercício" footerContent="footer">
            <Second></Second>
        </Card>

        <Card headerContent="Quarto exercício" footerContent="footer">
            <Repetition></Repetition>
        </Card>

        <Card headerContent="Quinto exercício" footerContent="footer">
            <Conditional number={10}></Conditional>
        </Card>

    </div>

