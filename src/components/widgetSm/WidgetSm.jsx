import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="/anna_keller.png" alt="Anna Keller" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/john_doe.png" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">John Doe</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/da_vinci.png" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Da Vinci</span>
              <span className="widgetSmUserTitle">Product Designer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
        </li>
      </ul>
    </div>
  )
}
