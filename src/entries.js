import React from 'react';

export default function Entries(props) {
    let tableEntries = [];
    for (let i = 0; i < props.entries.length; i++) {
        tableEntries.push(
            <tr key={i}>
                <td>
                    {props.entries[i]}
                </td>
                <td>
                    <input type="text" />
                </td>
            </tr>
        );
    }
    return (
        <table className={props.tableClass}>
            <tbody>
                {tableEntries}
            </tbody>
        </table>
    );
}