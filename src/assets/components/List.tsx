import '../css/List.css'

const List = ({}:{}) => {


    return(
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
    )
}

export default List