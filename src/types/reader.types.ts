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
