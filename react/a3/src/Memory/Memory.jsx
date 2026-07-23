import { useState } from "react";
import axios from "axios";

import CalendarComponent from "../Components/CalendarComponent";
import MessageAreaComponent from "../Components/MessageAreaComponent";

function Memory() {

    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const loadMemory = async (date) => {

        setLoading(true);

        try {

            console.log("送信日付：" + date);

            const response = await axios.get(
                "/api/records",
                {
                    params: {
                        date: date
                    }
                }
            );

            console.log(response.data);

            setRecords(response.data);
            setError("");

        } catch (err) {

            console.error(err);

            setError("記録の取得に失敗しました。");
            setRecords([]);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div>

            <h2>日々の記録</h2>

            <CalendarComponent
                onDateSelect={loadMemory}
            />

            {loading && <p>読み込み中...</p>}

            {error && <p>{error}</p>}

            <MessageAreaComponent
                records={records}
            />

        </div>

    );

}

export default Memory;