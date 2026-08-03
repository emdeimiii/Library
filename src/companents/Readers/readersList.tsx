import ReadersItem from "./readersItem"
import type { IReader } from "../../types/reader.types"
import { getAllReaders, getReaders, selectReadersStatus } from "../../store/reader-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

interface ReadersListProps {
    readers: IReader[];
}

const ReaderList = () => {
      const dispatch = useDispatch();
      const readerss = useSelector(getAllReaders);
  const status = useSelector(selectReadersStatus);

    useEffect(() => {
    if (status === 'idle') {
      dispatch(getReaders()); // 👈 Вызываем thunk
    }
  }, [status, dispatch]);
   if(status === 'loading'){
    return(
        <div>⏳ Загрузка..</div>
    )
  }
  if (status === 'failed') return <div>❌ Ошибка</div>;


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