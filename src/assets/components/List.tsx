import '../css/List.css'

const List = ({object, params}:{object: {}, params: string[] }) => {
object= {name: "soy un objeto"}
params= []
    return(
        <div className="table-wrapper">
        <table className="fl-table">
            <tr>
                <th> Nombre </th>
                <th> URL </th>
                <th> Artist </th>
            </tr>
            <tr>
                <td> La camisa negra </td>
                <td> Juanes.com </td>
                <td> Juanes </td>
            </tr>

        </table>
        </div>
    )
}

export default List