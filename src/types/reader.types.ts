export interface IBookHistory {
bookId: string;
takenAt: Date;
returnedAt?: Date;
    id: string;
 }

export interface IReader {
id: string;
fullName: string;
email: string;
phone: string;
registrationDate: Date;
booksHistory: IBookHistory[];
activeBooks: string[]; // ID книг на руках
}

// interface IReader {
// id: string;
// fullName: string;
// email: string;
// phone: string;

// registrationDate: Date;
// activeBooks: IActiveBook[]; // Книги на руках
// booksHistory: IBookHistory[]; // История
// }
// interface IActiveBook {
// bookId: string;
// title: string;
// author: string;
// issuedDate: Date;
// }
// interface IBookHistory {
// bookId: string;
// issuedDate: Date;
// returnedDate?: Date; // Дата возврата (если есть)
// }

