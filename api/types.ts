export type Brand<T, U> = T & { __brand: U };
export type Nullable<Type> = Type | null | undefined;
export type ApiResponseType<DataType> = Nullable<{ data?: Nullable<DataType> }>;
export type CardId = Brand<number, "CardId">;

export type FetchCardDto = {
    id: CardId,
    uid: string;
    blend_name: string;
    origin: string;
    variety: string;
    notes: string;
    intensifier: string;
};