import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { encode } from "../tools/encode";

const baseUrl = 'http://localhost:8000/api/'

export const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
}

const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState({
    status: 'idle',
    message: '',
    links: {},
    meta: {}
})

export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async ({statusFilter, colorsFilter}, {rejectWithValue, fulfillWithValue}) => {
        const statusFilterParam = statusFilter ? `&status=${statusFilter}` : ''
        const colorsFilterParam = colorsFilter ? `&color=${colorsFilter}` : ''
        const url = baseUrl + 'todos?pageSize=5' + statusFilterParam + colorsFilterParam
        console.log('url: ', url)
        const response = await fetch(url, {headers})
        const data = await response.json()
        if (!response.ok) {
            return rejectWithValue(data)
        }
        return fulfillWithValue(data)
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getTodos.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.status = 'idle'
                state.links = action.payload.data.links
                state.meta = action.payload.data.meta
                todosAdapter.setAll(state, action.payload.data)
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.status = 'failed'
                state.message = 'Todos Not Found!'
            })
    }
})

export default todosSlice.reducer

export const {
    selectAll: selectAllTodos,
    selectById: selectTodoById,
    selectIds: selectTodoIds,
    selectEntities: selectTodoEntities
} = todosAdapter.getSelectors(state => state.todos)