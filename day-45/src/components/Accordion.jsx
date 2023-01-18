import { useState } from "react";
import { Link } from "react-router-dom";
import Panel from "./Panel";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <h2>Улаанбаатар, МОНГОЛ УЛС</h2>
            <Panel title="Тухай" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
            Улаанбаатар (ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ улаганбагатур, улаан-баа-тар) нь Монгол Улсын нийслэл бөгөөд Монгол улсын цорын ганц саятан хот юм. 1992 оны шинэ нутаг дэвсгэрийн хуваариар үндсэн 6, дагуул 3, нийт 9 дүүрэгтэй, нутаг дэвсгэрийн хэмжээ 4,704.4 км2 газартай. 2021 оны эцсээр 1,649,172 хүн оршин сууж байна.
            </Panel>
            <Panel title="Этимологи" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
            Улаанбаатар (ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ улаганбагатур, улаан-баа-тар) нь Монгол Улсын нийслэл бөгөөд Монгол улсын цорын ганц саятан хот юм. 1992 оны шинэ нутаг дэвсгэрийн хуваариар үндсэн 6, дагуул 3, нийт 9 дүүрэгтэй, нутаг дэвсгэрийн хэмжээ 4,704.4 км2 газартай. 2021 оны эцсээр 1,649,172 хүн оршин сууж байна.
            </Panel>
            <Link to={"/"}><button>Back</button></Link>
        </div>
    )
}