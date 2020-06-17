import React from 'react';
import {SideBarUserProfile} from './SideBarUserProfile'
import {RecommendFollow} from './RecommendFollow'
import {Footer} from './Footer'

export function SideBar(props){
    return(
        <div>
            <div className="side-bar">
                <SideBarUserProfile />
                <RecommendFollow />
                <Footer />
            </div>
        </div>
    )
}