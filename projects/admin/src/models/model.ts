export interface ProductBook {
    id: number,
    name: string,
    image: string,
    author: string,
    genre: string,
    publicYear: string,
    quantity: number
}

export interface Staff {
    id: number,
    name: string,
    email: string,
    phone: string,
    gender: string,
    address: string,
    admin: number,

}

export interface Reader {
    id: number,
    name: string,
    email: string,
    phone: string,
    gender: string,
    address: string
}

export interface Request {
    bookData: BookData,
    libraryStaffData: LibraryStaffData,
    readerData: ReaderData,
    readerId: number,
    bookId: number,
    quantity: number,
    staffId: number,
    borrowDate: string,
    returnDate: string,

}
export interface BookData {
    name: string
}
export interface LibraryStaffData {
    name: string,
    id: number
}
export interface ReaderData {
    name: string,
    id: number
}