import React, {useState} from "react";
import styled from 'styled-components'
import {About} from '../styles'
import Toogle from './Toogle'

const FaqSection = () => {
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <Toogle>
                <div className="question">
                    <h4>How Do I Start?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toogle>
            <Toogle>
                <div className="question">
                    <h4>Dailt Schedule</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toogle>
            <Toogle>
                <div className="question">
                    <h4>Different Payment Methods</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toogle>
            <Toogle>
                <div className="question">
                    <h4>What Products do You Offer?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toogle>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }

`

export default FaqSection;