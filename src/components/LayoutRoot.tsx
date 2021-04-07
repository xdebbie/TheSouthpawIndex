import * as React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import normalize from '../styles/normalize'
import dark from '../styles/dark'

const StyledLayoutRoot = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

interface LayoutRootProps {
    className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
    <>
        <Global styles={() => css(normalize, dark)} />
        <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
    </>
)

export default LayoutRoot
