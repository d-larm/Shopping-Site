import React, { ReactNode, FunctionComponent } from 'react'
import './Container.css'
import { type } from 'os'

type Props = {
    children?: ReactNode
}

const LargeContainer : FunctionComponent<Props> = ( { children } ) => (
    <div className='container large'>{children}</div>
)

export default LargeContainer