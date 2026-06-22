import ReadersItem from "./readersItem"


import type { IReader } from "../../types/reader.types"

interface ReadersListProps {
    readers: IReader[];
}

const ReaderList = ({ readers }: ReadersListProps) => {
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