import type { IReader } from "../../types/reader.types"
import { Link} from "react-router-dom";

import { mockReaders } from "../../mocks/readers"; 

interface ReaderCardProps {
  reader: IReader;
}
const ReadersItem = ({ reader }: ReaderCardProps) =>{
    return(
        <div className="reader-card">
            <div className="reader-avatar">
              <span className="reader-avatar-emoji">👤</span>
            </div>
            <div className="reader-content">
              <h3 className="reader-name">{reader.fullName}</h3>
              <p className="reader-email">{reader.email}</p>
              <div className="reader-stats">
                <span className="reader-active-books">
                  📚 Активных книг: <strong>{reader.activeBooks}</strong>
                </span>
              </div>
              <Link to={`/readers/${reader.id}`} className="btn btn-primary">
                Профиль
              </Link>
            </div>
          </div>
    )
}
export default ReadersItem