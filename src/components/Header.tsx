import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
    width: 100vw;
    height: ${heights.header}px;
    padding: 0 ${dimensions.containerPadding}rem;
    background-color: ${colors.brand};
    color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

const HomepageLink = styled(Link)`
    color: ${colors.white};
    font-size: 1.5rem;
    font-weight: 600;
    padding-top: 1.5rem;

    &:hover,
    &:focus {
        text-decoration: none;
    }
`

const DarkToggle = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    position: absolute;
    right: -80px;

    &:before,
    &:after {
        box-sizing: border-box;
    }

    label {
        position: relative;
        display: block;
        width: 45px;
        height: 25px;
        border-radius: 100px;
        background-color: rgb(37, 37, 37);
        overflow: hidden;
        cursor: pointer;

        &:before,
        &:after {
            display: block;
            position: absolute;
            content: '';
            width: 19px;
            height: 19px;
            border-radius: 50%;
            top: 3px;
            left: 3px;
            transition: 0.5s ease;
        }

        &:before {
            background-color: rgb(241, 110, 101);
        }

        &:after {
            background-color: rgb(37, 37, 37);
            left: -58px;
            transform: scale(0.00001);
        }
    }

    input[type='checkbox'] {
        display: none;

        &:checked + label {
            &:before {
                background-color: rgb(1, 219, 198);
                transform: translateX(20px);
            }

            &:after {
                transform: translateX(75px) scale(1);
            }
        }
    }
`

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
    <StyledHeader>
        <HeaderInner>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <DarkToggle>
                        <input
                            type="checkbox"
                            id="toggle"
                            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                        />
                        <label htmlFor="toggle"></label>
                    </DarkToggle>
                )}
            </ThemeToggler>
            <HomepageLink to="/">{title}</HomepageLink>
        </HeaderInner>
    </StyledHeader>
)

export default Header
