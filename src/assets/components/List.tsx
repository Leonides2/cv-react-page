import { useContext } from 'react'
import '../css/List.css'
import SpotifyContext from '../../Provider/SpotifyContext'

const List = ({object}:{object: {}}) => {

    const query = useContext(SpotifyContext)

    return(
        <>
        <h2>{query.q}</h2>
        <div className="table-wrapper">
        <table className="fl-table">
            <thead>
                <th> Name </th>
                <th> URL </th>
                <th> Artist </th>
            </thead>
            <tbody>
                <td> some name </td>
                <td> something </td>
                <td> some artist </td>
            </tbody>
               
        </table>
        </div>
        </>
    )
}

export default List