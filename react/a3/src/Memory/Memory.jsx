import { useState } from "react";
import axios from "axios";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import leaf from "../assets/leaf.png";

import CalendarComponent from "../Components/CalendarComponent";
import MessageAreaComponent from "../Components/MessageAreaComponent";

import "./Memory.css";

function Memory() {

    const navigate = useNavigate();

    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadMemory = async (date) => {

        console.log("送信日付：" + date);

        setLoading(true);

        try {

            const response = await axios.get(
                "http://localhost:8080/api/records",
                {
                    params: {
                        date: date
                    },
                    withCredentials: true
                }
            );

            console.log(response.data);
            setRecords(response.data);

        } catch (err) {

            console.log("取得失敗", err);
            setRecords([]);

        } finally {

            setLoading(false);

        }

    };

    // ログアウト
    const logout = () => {
        navigate("/");
    };

    return (

        <div className="memory">

            {/* ===== ヘッダー ===== */}
            <header className="header">

                <div className="header-title">

                    <img
                        src={leaf}
                        alt="葉っぱ"
                        className="header-logo"
                    />

                    <span>きょうのいっぽ</span>

                </div>

                <FaSignOutAlt
                    className="logout-icon"
                    onClick={logout}
                />

            </header>

            <h2 className="title">
                日々の記録
            </h2>

            <CalendarComponent
                onDateSelect={loadMemory}
            />

            {loading && (
                <p className="loading">
                    読み込み中...
                </p>
            )}

            <MessageAreaComponent
                records={records}
            />

        </div>

    );

}

export default Memory;