function MessageAreaComponent({ records }) {

    if (records.length === 0) {
        return <p>この日の記録はありません。</p>;
    }

    return (

        <div>

            {records.map((record) => (

                <div key={record.id}>

                    <h3>{record.mission}</h3>

                    <p>頑張ったこと：{record.progress}</p>

                    <p>気持ち：{record.feel}</p>

                    <p>発見：{record.found}</p>

                </div>

            ))}

        </div>

    );

}

export default MessageAreaComponent;