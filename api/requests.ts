import axios, {AxiosResponse} from "axios";
import type {Nullable, FetchCardDto, ApiResponseType} from './types'

export const fetchCardApi = (): Promise<Nullable<FetchCardDto>> =>
    axios.get<ApiResponseType<FetchCardDto>>(`https://random-data-api.com/api/coffee/random_coffee`)
        .then((res: AxiosResponse) => res.data)
