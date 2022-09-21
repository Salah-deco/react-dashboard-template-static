import './widgetLg.css';

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/da_vinci.png" alt="Da Vinci" className="widgetLgImg" />
            <span className="widgetLgName">Da Vinci</span>
          </td>
          <td className="widgetLgDate">18 Sep 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" className="widgetLgButton">Approved</Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="/anna_keller.png" alt="Anna keller" className="widgetLgImg" />
            <span className="widgetLgName">Anna Keller</span>
          </td>
          <td className="widgetLgDate">19 Sep 2022</td>
          <td className="widgetLgAmount">$69.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" className="widgetLgButton">Declined</Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="anna_keller.png" alt="Anna keller" className="widgetLgImg" />
            <span className="widgetLgName">Anna Keller</span>
          </td>
          <td className="widgetLgDate">19 Sep 2022</td>
          <td className="widgetLgAmount">$69.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" className="widgetLgButton">Pending</Button>
          </td>
        </tr>
      </table>
    </div>
  )
}
