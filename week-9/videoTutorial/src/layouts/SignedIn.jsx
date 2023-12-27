import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1404479261566713856/_MklDkhx_400x400.jpg"/>
                <Dropdown pointing="top left" text="Melisa">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My info" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="sign-out" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
