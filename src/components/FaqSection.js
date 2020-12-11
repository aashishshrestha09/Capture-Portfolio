import React, {useState} from "react";
import styled from 'styled-components'
import {About} from '../styles'
import Toogle from './Toogle'
import{AnimateSharedLayout} from 'framer-motion'
import {useScroll} from './useScroll'
import {scrollReveal} from '../animation'

const FaqSection = () => {
    const [element, controls] = useScroll();
    return(
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toogle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim.</p>
                    </div>
                </Toogle>
                <Toogle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim.</p>
                    </div>    
                </Toogle>
                <Toogle title="Different Payment Methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim.</p>
                    </div>
                </Toogle>
                <Toogle title="What Products do You Offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim.</p>
                    </div>
                </Toogle>
            </AnimateSharedLayout>
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