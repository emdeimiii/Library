import ReadersItem from "./readersItem"
import type { IReader } from "../../types/reader.types"
import { getAllReaders } from "../../store/reader-slice";
import { useSelector } from "react-redux";

interface ReadersListProps {
    readers: IReader[];
}

const ReaderList = () => {
    const readers: IReader[] = useSelector(getAllReaders)
    
    if (readers.length === 0) {
        return <p>Нет читателей</p>;
    }
    return (
        <div className="reader-list">
            {readers.map((reader: IReader) => (
                <ReadersItem key={reader.id} reader={reader} />
            ))}
            {/* <ReadersItem />*/}
        </div>
    )
}
export default ReaderList