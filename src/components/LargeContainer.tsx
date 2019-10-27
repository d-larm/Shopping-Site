import React, { ReactNode, FunctionComponent } from 'react'
import './Container.css'

type Props = {
    children?: ReactNode
}

const LargeContainer : FunctionComponent<Props> = ( { children } ) => (
    <div className='container large'>{children}</div>
)

export default LargeContainer