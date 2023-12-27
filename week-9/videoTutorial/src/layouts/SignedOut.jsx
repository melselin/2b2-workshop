import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
               <Button  onClick={signIn} primary>Sign-in</Button>
               <Button primary style={{marginLeft:'0.5em'}}>Sign-in</Button> 
            </Menu.Item>
            
        </div>
    )
}
