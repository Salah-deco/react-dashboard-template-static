import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className="logo">
                    Logo
                </span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsNone />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <Language />
                </div>
                <div className='topbarIconContainer'>
                    <Settings />
                </div>
                <div>
                    <img src="/avataaars.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    </div>
  )
}
