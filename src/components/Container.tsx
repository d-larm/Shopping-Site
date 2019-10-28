import React, { ReactNode, FunctionComponent } from 'react'
import './Container.css'

type Props = {
    children?: ReactNode,
    type?: string,
    large?: boolean
}

const LargeContainer : FunctionComponent<Props> = ( { children, type, large } ) => (
    <div className={`container ${type} ${large && 'large'}`}>{children}</div>
)

export default LargeContainer