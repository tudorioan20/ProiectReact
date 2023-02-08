import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { DocumentData } from 'firebase/firestore';
import { getPasta } from '../Controllers/PastaController';
import { getPizza } from '../Controllers/PizzaController';
import { getBautura } from '../Controllers/BauturiController';
export const productsAPI = createApi({
    reducerPath: "productsAPI",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getAllPizza:  builder.query<[], void>({
            queryFn: async() => {
                try{
                    let result: [] = [];
                    await getPizza()
                    .then(
                        (data: DocumentData[]) => {
                            result = data as [];
                        }
                    );
                    return { data: result }
                } catch (e){
                    return  { data: [] }
                }
            },
            
        }),
        getAllPasta:  builder.query<[], void>({
            queryFn: async() => {
                try{
                    let result: [] = [];
                    await getPasta()
                    .then(
                        (data: DocumentData[]) => {
                            result = data as [];
                        }
                    );
                    return { data: result }
                } catch (e){
                    return  { data: [] }
                }
            },
            
        }),
        getAllBautura:  builder.query<[], void>({
            queryFn: async() => {
                try{
                    let result: [] = [];
                    await getBautura()
                    .then(
                        (data: DocumentData[]) => {
                            result = data as [];
                        }
                    );
                    return { data: result }
                } catch (e){
                    return  { data: [] }
                }
            },
            
        })
    })
});

export const { useGetAllPizzaQuery,useGetAllPastaQuery,useGetAllBauturaQuery } = productsAPI;