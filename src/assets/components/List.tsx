
import Table from '../../logic/Props/Table'
import '../css/List.css'




const List = ({table}:{table: Table}) => {


    
    return(
        <>
        {table.tables.map(item=>
                <div className="table-wrapper">
                    <h3> {item.title}</h3>
                    <table className="fl-table">

                    </table>
                </div>
                
            )}
            <div className="table-wrapper">
            <table className="fl-table">
                <tr>
                    <th> Name </th>
                    <th> URL </th>
                    <th> Artist </th>
                </tr>
                <tr>
                    <td> some name </td>
                    <td> something </td>
                    <td> some artist </td>
                </tr>

            </table>
            </div>
        </>
    )
}

export default List